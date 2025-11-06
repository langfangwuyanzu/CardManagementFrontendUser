import React from "react";
import "./home.css";

// 顶部 Logo
import logoBlack from "../../assets/homePage/Logo_Black.png";

// 社区图片
import Galiwinku from "../../assets/homePage/Galiwinku.png";
import Gunyangara from "../../assets/homePage/Gunyangara.png";
import Nhulunbuy from "../../assets/homePage/Nhulunbuy.png";
import Yirrkala from "../../assets/homePage/Yirrkala.png";
import Gapuwiyak from "../../assets/homePage/Gapuwiyak.png";
import Milingimbi from "../../assets/homePage/Milingimbi.png";
import Ramingining from "../../assets/homePage/Ramingining.png";

export default function Miwatj() {
  return (
    <div className="region-body">
      <div className="region-container">
        <img src={logoBlack} alt="Logo" className="top-logo" />

        <h1 className="section-title">The Miwatj Region</h1>

        <div className="region-intro">
          <h3>The East Arnhem Land</h3>
          <p>
            East Arnhem Land, the Miwatj region, is a beautiful and diverse area of nearly 100,000km2 of land. It is one of Australia's strongholds of traditional Aboriginal culture of the Yolŋu people who have deep connections to the land and sea through ancient ceremonies and song cycles.<br /><br />
            The region features rugged coastlines, remote islands, lush rainforests, and savannah woodlands, offering a spectacular setting for activities like fishing, camping, and cultural exploration. Access to East Arnhem Land requires permits, and visitors should be aware of safety precautions, such as avoiding saltwater crocodiles and staying on designated paths.<br /><br />
            Around 12,240 people live in the Miwatj region. Around 3225 of these people are non-Yolŋu, Balanda people. Key consists of many homelands and the major communities of Nhulunbuy, Yirrkala, Milingimbi, Ramingining, Galiwin’ku, Gapuwiyak and Gunyangara.
          </p>
        </div>

        <h2 className="subsection-title">Community Information and Maps</h2>

        <div className="community-grid">
          {/* Left column */}
          <div className="community-entry">
            <div className="community-text">
              <strong>Galiwin’ku</strong>
              <p>Galiwin’ku is located on the southern end of Elcho Island in North East Arnhem land west of Nhulunbuy.</p>
            </div>
            <a href="https://bushtel.nt.gov.au/profile/492" target="_blank" rel="noreferrer">
              <img src={Galiwinku} alt="Galiwin’ku" />
            </a>
          </div>

          <div className="community-entry">
            <div className="community-text">
              <strong>Gunyangara</strong>
              <p>Gunyangara is located on Gunyangara Island in Melville Bay. The small island is joined to the mainland by a causeway at Drimmie Peninsula west of Nhulunbuy.</p>
            </div>
            <a href="https://bushtel.nt.gov.au/profile/514 " target="_blank" rel="noreferrer">
              <img src={Gunyangara} alt="Gunyangara" />
            </a>
          </div>

          <div className="community-entry">
            <div className="community-text">
              <strong>Nhulunbuy</strong>
              <p>Nhulunbuy is located about 1000 kms from Darwin, or 700 kilometres to Katherine by road. Nhulunbuy was established in the 1960s as a private mining town residing on Aboriginal Land.</p>
            </div>
            <a href="https://bushtel.nt.gov.au/profile/16222" target="_blank" rel="noreferrer">
              <img src={Nhulunbuy} alt="Nhulunbuy" />
            </a>
          </div>

          <div className="community-entry">
            <div className="community-text">
              <strong>Yirrkala</strong>
              <p>Yirrkala is a coastal community in the East Arnhem region of the Northern Territory and is about 18kms south-east of Nhulunbuy.</p>
            </div>
            <a href="https://bushtel.nt.gov.au/profile/576 " target="_blank" rel="noreferrer">
              <img src={Yirrkala} alt="Yirrkala" />
            </a>
          </div>

          {/* Right column */}
          <div className="community-entry">
            <div className="community-text">
              <strong>Gapuwiyak</strong>
              <p>Gapuwiyak is located adjacent to Lake Evella and the upper reaches of the Buckingham River in North East Arnhem Land.</p>
            </div>
            <a href="https://bushtel.nt.gov.au/profile/500" target="_blank" rel="noreferrer">
              <img src={Gapuwiyak} alt="Gapuwiyak" />
            </a>
          </div>

          <div className="community-entry">
            <div className="community-text">
              <strong>Milingimbi</strong>
              <p>Milingimbi Island forms part of the Crocodile Island Group off the north coast of Central Arnhem Land in the Arafura Sea west of Nhulunbuy.</p>
            </div>
            <a href="https://bushtel.nt.gov.au/profile/531" target="_blank" rel="noreferrer">
              <img src={Milingimbi} alt="Milingimbi" />
            </a>
          </div>

          <div className="community-entry">
            <div className="community-text">
              <strong>Ramingining</strong>
              <p>Ramingining is located on the edge of the heritage listed Arafura Wetlands in Central Arnhem Land west of Nhulunbuy.</p>
            </div>
            <a href="https://bushtel.nt.gov.au/profile/550" target="_blank" rel="noreferrer">
              <img src={Ramingining} alt="Ramingining" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}