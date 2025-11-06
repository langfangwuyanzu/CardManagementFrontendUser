import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bg1 from "../../assets/homepage/bg-01.jpg";
import bg2 from "../../assets/homepage/bg-02.jpg";
import bg3 from "../../assets/homepage/bg-03.jpg";
import logo from "../../assets/homepage/logo.png";
import trainingIcon from "../../assets/homepage/Training.png";
import regionIcon from "../../assets/homepage/The Miwatj Region.png";
import newsIcon from "../../assets/homepage/News.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1 */}
      <section className="slide" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="header">
          <div className="system-name">
            CARD<br />MANAGEMENT<br />SYSTEM
          </div>
          <img className="logo" src={logo} alt="DilakCouncil Logo" />
        </div>

        <div className="content-container">
          <h1>Working with Yolŋu Card</h1>
          <div className="line"></div>
          <p>
            The Working with Yolŋu card recognises cultural training undertaken by ‘Balanda’, non-Yolŋu people,
            to prepare you for working in the East Arnhem region. Having cultural competency training can help
            how you relate with Yolŋu in personal and professional settings.
          </p>
          <div className="button-group">
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="register-btn" onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>

        <footer>
          <div className="footer-links">
            <a href="/training" className="footer-link">
              <img src={trainingIcon} alt="Training Icon" className="footer-icon" /> Training
            </a>
            <span className="separator">|</span>
            <a href="/miwatj" className="footer-link">
              <img src={regionIcon} alt="Region Icon" className="footer-icon" /> The Miwatj Region
            </a>
            <span className="separator">|</span>
            <a href="/news" className="footer-link">
              <img src={newsIcon} alt="News Icon" className="footer-icon" /> News
            </a>
          </div>
          <p className="copyright">
            © Copyright 2025 | DilakCouncil | All Rights Reserved
          </p>
        </footer>
      </section>

      {/* Section 2 */}
      <section className="slide" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="header">
          <div className="system-name">
            CARD<br />MANAGEMENT<br />SYSTEM
          </div>
          <img className="logo" src={logo} alt="DilakCouncil Logo" />
        </div>

        <div className="content-container">
          <h1>The Cultural Competency Framework</h1>
          <div className="line"></div>
          <p>
            The Working with Yolŋu card model is structured upon a framework that builds from informing perspectives
            and behaviours of individuals to organisational change. It is expressed below as progressing from knowing,
            to being, to doing, to embedding/sharing change:
            <br />• Cultural awareness (knowing)
            <br />• Cultural sensitivity (being)
            <br />• Cultural competence (doing)
            <br />• Cultural proficiency (embedding as organisational practice)
          </p>
          <div className="button-group">
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="register-btn" onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>

        <footer>
          <div className="footer-links">
            <a href="/training.html" className="footer-link" target="_blank" rel="noopener noreferrer">
              <img src="/homepage/training.png" alt="Training Icon" className="footer-icon" /> Training
            </a>
            <span className="separator">|</span>
            <a href="/miwatj.html" className="footer-link" target="_blank" rel="noopener noreferrer">
              <img src="/homepage/miwatj-region.png" alt="Region Icon" className="footer-icon" /> The Miwatj Region
            </a>
            <span className="separator">|</span>
            <a href="/news.html" className="footer-link" target="_blank" rel="noopener noreferrer">
              <img src="/homepage/news.png" alt="News Icon" className="footer-icon" /> News
            </a>
          </div>
          <p className="copyright">© Copyright 2025 | DilakCouncil | All Rights Reserved</p>
        </footer>
      </section>

      {/* Section 3 */}
      <section className="slide" style={{ backgroundImage: `url(${bg3})` }}>
        <div className="header">
          <div className="system-name">
            CARD<br />MANAGEMENT<br />SYSTEM
          </div>
          <img className="logo" src={logo} alt="DilakCouncil Logo" />
        </div>

        <div className="content-container">
          <h1>4 Levels of the Working with Yolŋu Card</h1>
          <div className="line"></div>
          <p>
            The Working with Yolŋu card has 4 levels of competency based on the Cultural Competency Framework. The four levels are:
            <br />• Level 1 - Culturally Aware - awareness training of Aboriginal and Torres Strait Islanders cultural beliefs and knowledge systems, acknowledging the ongoing impacts of colonisation, and encouraging understanding of diverse cultural views.
            <br />• Level 2 - Yolnu Informed - introduces Yolnu culture and worldview, provides key an understanding of the East Arnhem region, and practical skills for effective engagement with Yolnu people and communities.
            <br />• Level 3 - Conversing in Yolnu Matha - recognises basic conversational Yolnu Matha language training, demonstrating a commitment to building relationships with Yolnu and fosters a deeper respect for Yolnu culture and identity.
            <br />• Level 4 - Leading with Yolnu - this level is aimed at managerial staff to implement practical management skills and systems that establish and maintain cultural safety for Yolnu staff, or Yolnu clients of their services.
          </p>
          <div className="button-group">
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="register-btn" onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>

       <footer className="hp-footer">
         <div className="footer-links">
           <Link to="/training" className="footer-link">
             <img src={trainingIcon} alt="Training Icon" className="footer-icon" /> Training
           </Link>

           <span className="separator">|</span>

           <Link to="/miwatj" className="footer-link">
             <img src={regionIcon} alt="Region Icon" className="footer-icon" /> The Miwatj Region
           </Link>

           <span className="separator">|</span>

           <Link to="/news" className="footer-link">
             <img src={newsIcon} alt="News Icon" className="footer-icon" /> News
           </Link>
         </div>

         <p className="copyright">
           © 2025 DilakCouncil | All Rights Reserved
         </p>
       </footer>
      </section>
    </div>
  );
}