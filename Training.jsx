import React from "react";
import "./home.css";

// 顶部 Logo
import logoBlack from "../../assets/homePage/Logo_Black.png";

// Provider 图
import ards from "../../assets/homePage/ards.png";
import cdu from "../../assets/homePage/cdu.png";
import ccc from "../../assets/homePage/ccc.png";
import mura from "../../assets/homePage/mura.png";
import whywarriors from "../../assets/homePage/whywarriors.png";

export default function Training() {
  return (
    <div className="training-page">
      <div className="container">
        <header className="training-header">
          <img src={logoBlack} alt="Yothu Yindi Logo" className="logo" />
          <h1 className="section-title">Training Providers</h1>
        </header>

        <div className="provider-card">
          <a href="https://www.ards.com.au/cultural-competency-training" target="_blank" rel="noreferrer">
            <img src={ards} alt="ARDS Logo" className="provider-logo" />
          </a>
          <div className="provider-content">
            <h3>ARDS</h3>
            <p>
              ARDS Aboriginal Corporation’s Cultural Competency Training is developed to meet the high demand for accessible and practical training for organisations and individuals working in East Arnhem Land.
              <br />
              Drawing on 50 years' of cross-cultural engagement experience with Yolnu communities, we offer a range of training formats to suit different organisational and personal learning needs:
              <ul>
                <li>Tailored workshops for organisations (including access to eLearn modules)</li>
                <li>8-week online course (including access to eLearn modules)</li>
                <li>10 eLearn modules</li>
                <li>Online Plain English classes (1- or 2-class packages available)</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="provider-card">
          <a href="https://www.cdu.edu.au/study/indigenous-knowledges" target="_blank" rel="noreferrer">
            <img src={cdu} alt="Charles Darwin University Logo" className="provider-logo" />
          </a>
          <div className="provider-content">
            <h3>Charles Darwin University</h3>
            <p>
              Charles Darwin University (CDU) is an institution known for its focus on Indigenous issues. Gain your understanding of both traditional and contemporary Indigenous studies at Charles Darwin University.
              CDU Indigenous studies lecturers will present you with truth-telling, invaluable experiences and Indigenous epistemics across politics, education, language, health and fine arts.
            </p>
          </div>
        </div>

        <div className="provider-card">
          <a href="https://www.cccnt.com.au/training-solutions/" target="_blank" rel="noreferrer">
            <img src={ccc} alt="Cross Cultural Consultants Logo" className="provider-logo" />
          </a>
          <div className="provider-content">
            <h3>Cross Cultural Consultants</h3>
            <p>
              Cross Cultural Consultants (CCC) is an Aboriginal owned and managed business operating throughout the Norther Territory, nationally and internationally. Over the past 33 years we have established a first-class reputation as deliverers of highly effective training solutions and cross cultural consultancy services.
            </p>
          </div>
        </div>

        <div className="provider-card">
          <a href="https://storage.googleapis.com/msgsndr/Rx3aFFgp13nb1h0FpvOf/media/6805a131768a583a50739ab5.pdf" target="_blank" rel="noreferrer">
            <img src={mura} alt="Mura Training Logo" className="provider-logo" />
          </a>
          <div className="provider-content">
            <h3>Mura Training and Business Solutions</h3>
            <p>
              The Mura Cultural Awareness &amp; Capability Workshop is designed to educate, empower and inspire non-Indigenous employees to better understand and engage with First Nations peoples - in the workplace and beyond.
            </p>
          </div>
        </div>

        <div className="provider-card">
          <a href="https://learn.whywarriors.com.au" target="_blank" rel="noreferrer">
            <img src={whywarriors} alt="Why Warriors Logo" className="provider-logo" />
          </a>
          <div className="provider-content">
            <h3>Why Warriors</h3>
            <p>
              Why Warriors provide access to cross-cultural competency, awareness, knowledge, and skills that cannot be found anywhere else. Produced in partnership with Yolngu Elders of Arnhem Land. Discover exciting things and beliefs about different cultures and the traditional Aboriginal culture of Australia.
              Lear exciting new cross-cultural knowledge and skills from people who practice it every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}