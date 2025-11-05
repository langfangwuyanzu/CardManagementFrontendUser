// src/views/UserChat.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Paper,
  CircularProgress,
  Alert,
  IconButton
} from "@mui/material";
import { Send as SendIcon, ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import api, { ApiError } from "../../../../utils/api";

export default function UserChat({ token, userId }) {
  const [content, setContent] = useState("");
  const [threads, setThreads] = useState([]);
  const [activeThread, setActiveThread] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // 加载用户的问题列表
  const loadThreads = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        `/messages/users/${userId}/unsent?page=0&size=20`,
        { token }
      );
      console.log('Loaded threads:', res);
      setThreads(res.content || []);
    } catch (e) {
      console.error('Load threads error:', e);
      if (e instanceof ApiError) {
        setError("Failed to load questions: " + e.message);
      } else {
        setError("Failed to load questions");
      }
    } finally {
      setLoading(false);
    }
  };

  // 加载特定线程的消息
  const loadThreadMessages = async (threadId) => {
    try {
      setLoading(true);
      const res = await api.get(`/messages/threads/${threadId}`, { token });
      setMessages(res || []);
    } catch (e) {
      console.error('Load messages error:', e);
      if (e instanceof ApiError) {
        setError("Failed to load messages: " + e.message);
      } else {
        setError("Failed to load messages");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && token) {
      loadThreads();
    }
  }, [userId, token]);

  useEffect(() => {
    if (activeThread) {
      loadThreadMessages(activeThread.id);
    }
  }, [activeThread]);

  // 提交新问题 - 使用你之前成功的格式
  const submitQuestion = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setSending(true);
      setError("");
      
      console.log('Submitting question:', content);
      
      // 使用你之前成功的格式
      const requestData = {
        authorUserId: userId, // 保持原样，不parseInt
        content: content.trim(),
        type: "TEXT", // 使用TEXT而不是QUESTION
        sendToAdmin: false, // 先不发送给管理员
      };

      console.log('Request data:', requestData);
      
      const response = await api.post(
        "/messages/questions",
        requestData,
        { token }
      );
      
      console.log('Question created successfully:', response);
      setContent("");
      await loadThreads();
      
    } catch (e) {
      console.error('Submit question error:', e);
      if (e instanceof ApiError) {
        setError(`Failed to submit question (${e.code}): ${e.message}`);
      } else {
        setError("Failed to submit question");
      }
    } finally {
      setSending(false);
    }
  };

  // 发送回复
  const sendReply = async () => {
    if (!content.trim() || !activeThread) return;

    try {
      setSending(true);
      setError("");
      
      const requestData = {
        authorUserId: userId,
        content: content.trim(),
        type: "TEXT"
      };

      await api.post(
        `/messages/${activeThread.id}/replies`,
        requestData,
        { token }
      );
      
      setContent("");
      await loadThreadMessages(activeThread.id);
    } catch (e) {
      console.error('Send reply error:', e);
      if (e instanceof ApiError) {
        setError("Failed to send reply: " + e.message);
      } else {
        setError("Failed to send reply");
      }
    } finally {
      setSending(false);
    }
  };

  // 发送给管理员
  const sendToAdmin = async () => {
    try {
      setSending(true);
      setError("");
      
      await api.put(`/messages/users/${userId}/sent-to-admin?value=true`, {}, { token });
      setError("Questions sent to admin successfully! Admin will reply soon.");
      await loadThreads();
    } catch (e) {
      console.error('Send to admin error:', e);
      if (e instanceof ApiError) {
        setError("Failed to send to admin: " + e.message);
      } else {
        setError("Failed to send to admin");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '600px', gap: 2, p: 2 }}>
      {/* 左侧 - 问题列表和提问功能 */}
      <Paper sx={{ width: 350, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6" gutterBottom>
            Ask Question
          </Typography>
          <form onSubmit={submitQuestion}>
            <TextField
              size="small"
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your question..."
              disabled={sending}
              sx={{ mb: 1 }}
              multiline
              rows={3}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!content.trim() || sending}
              startIcon={sending ? <CircularProgress size={16} /> : <SendIcon />}
            >
              {sending ? 'Sending...' : 'Ask Question'}
            </Button>
          </form>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 1 }}
            onClick={sendToAdmin}
            disabled={sending || threads.length === 0}
            startIcon={sending ? <CircularProgress size={16} /> : null}
          >
            {sending ? 'Sending...' : 'REACH ADMIN ONLINE'}
          </Button>
        </Box>

        <Typography variant="subtitle1" sx={{ p: 2, pb: 1, fontWeight: 'bold' }}>
          Your Questions ({threads.length})
        </Typography>

        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {loading && !threads.length ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <CircularProgress size={24} />
            </Box>
          ) : (
            <List>
              {threads.map((thread) => (
                <ListItem key={thread.id} disablePadding>
                  <ListItemButton
                    selected={activeThread?.id === thread.id}
                    onClick={() => setActiveThread(thread)}
                  >
                    <ListItemText
                      primary={
                        <Typography noWrap>
                          {thread.content?.length > 50 
                            ? thread.content.substring(0, 50) + '...' 
                            : thread.content || 'No content'
                          }
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary">
                          {thread.createdAt ? new Date(thread.createdAt).toLocaleDateString() : 'Unknown date'}
                          {thread.sentToAdmin && ' • Sent to Admin'}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              {threads.length === 0 && !loading && (
                <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
                  No questions yet. Ask a question above!
                </Typography>
              )}
            </List>
          )}
        </Box>
      </Paper>

      {/* 右侧 - 聊天界面 */}
      <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {activeThread ? (
          <>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={() => setActiveThread(null)} size="small">
                <ArrowBackIcon />
              </IconButton>
              <Box>
                <Typography variant="h6">
                  Question #{activeThread.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activeThread.sentToAdmin ? 'Sent to Admin' : 'Not sent to admin yet'}
                </Typography>
              </Box>
            </Box>

            {/* 消息列表 */}
            <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {messages.map((message) => (
                    <Box
                      key={message.id}
                      sx={{
                        alignSelf: message.authorRole === 'USER' ? 'flex-end' : 'flex-start',
                        maxWidth: '70%',
                        bgcolor: message.authorRole === 'USER' ? 'primary.main' : 'grey.100',
                        color: message.authorRole === 'USER' ? 'white' : 'text.primary',
                        borderRadius: 2,
                        p: 1.5,
                        wordBreak: 'break-word'
                      }}
                    >
                      <Typography variant="body2">{message.content}</Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          opacity: 0.8,
                          color: message.authorRole === 'USER' ? 'white' : 'text.secondary'
                        }}
                      >
                        {new Date(message.createdAt).toLocaleString()}
                      </Typography>
                    </Box>
                  ))}
                  {messages.length === 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                      No messages in this conversation yet
                    </Typography>
                  )}
                </Box>
              )}
            </Box>

            {/* 输入框 */}
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
              <form onSubmit={(e) => { e.preventDefault(); sendReply(); }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    size="small"
                    fullWidth
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Type your reply..."
                    disabled={sending}
                    multiline
                    maxRows={3}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!content.trim() || sending}
                    startIcon={sending ? <CircularProgress size={16} /> : <SendIcon />}
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </Box>
          </>
        ) : (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            flexDirection: 'column',
            gap: 2
          }}>
            <Typography variant="h6" color="text.secondary">
              Select a conversation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Choose a question from the list to view and continue the conversation
            </Typography>
          </Box>
        )}
      </Paper>

      {/* 错误提示 */}
      {error && (
        <Alert 
          severity={error.includes('successfully') ? "success" : "error"}
          sx={{ position: 'fixed', bottom: 16, right: 16, minWidth: 300 }}
          onClose={() => setError('')}
        >
          {error}
        </Alert>
      )}
    </Box>
  );
}