import React from "react";
import "./home.css";

// 顶部 Logo
import logoBlack from "../../assets/homePage/Logo_Black.png";

// 新闻项图片
import eastArnhem from "../../assets/homePage/east-arnhem.png";
import laynhapuy from "../../assets/homePage/laynhapuy.png";
import ncl from "../../assets/homePage/ncl.png";
import guyula from "../../assets/homePage/guyula.png";
import yolnguRadio from "../../assets/homePage/yolngu-radio.png";

export default function News() {
  return (
    <div className="news-page">
      <header className="header">
        <img src={logoBlack} alt="Logo" className="news-logo" />
      </header>

      <main className="container">
        <h1 className="page-title news-title">News</h1>

        <div className="news-grid">
          <div className="news-card">
            <a href="https://eastarnhem.nt.gov.au/news-and-events" target="_blank" rel="noreferrer">
              <img src={eastArnhem} alt="East Arnhem Regional Council" />
            </a>
            <h3>East Arnhem Regional Council</h3>
            <p>East Arnhem Regional Council services six remote communities in East Arnhem Land.</p>
          </div>

          <div className="news-card">
            <a href="https://www.laynhapuy.com.au" target="_blank" rel="noreferrer">
              <img src={laynhapuy} alt="Laynhapuy Homelands" />
            </a>
            <h3>Laynhapuy Homelands</h3>
            <p>
              Laynhapuy Homelands Aboriginal Corporation (also known as Laynhapuy) is an Aboriginal owned and managed
              community organisation that supports some 30 remote Yolngu homelands across North-East Arnhem Land.
            </p>
          </div>

          <div className="news-card">
            <a href="https://ncl.net.au/our-community/news" target="_blank" rel="noreferrer">
              <img src={ncl} alt="Nhulunbuy Corporation" />
            </a>
            <h3>Nhulunbuy Corporation</h3>
            <p>
              The Nhulunbuy Corporation maintains the municipal services by agreement with Rio Tinto for the township of Nhulunbuy,
              its Industrial Estate and the Gove Airport. Nhulunbuy Corporation is committed to providing opportunities for future business development and growth.
            </p>
          </div>

          <div className="news-card">
            <a href="https://yingiya.net/newsletter.php" target="_blank" rel="noreferrer">
              <img src={guyula} alt="Yingiya Mark Guyula MLA Member for Mulka" />
            </a>
            <h3>Yingiya Mark Guyula MLA Member for Mulka</h3>
            <p>
              Yingiya Mark Guyula was elected to the Northern Territory Parliament in 2016. He is an Independent Member representing the seat of Mulka.
              This electorate covers most of the Yolŋu country of East Arnhem Land and the mining town of Nhulunbuy.
            </p>
          </div>

          <div className="news-card">
            <a href="https://www.ards.com.au/radio-programs" target="_blank" rel="noreferrer">
              <img src={yolnguRadio} alt="Yolngu Radio" />
            </a>
            <h3>Yolngu Radio</h3>
            <p>
              The Yolŋu Radio 88.9FM is one of the key community media sources for Aboriginal people in Arnhem Land. Yolŋu Radio broadcasts throughout all six major NE Arnhem Land communities and 14 remote homelands, as well as Darwin and Palmerston.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}