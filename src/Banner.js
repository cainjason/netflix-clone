import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.acemetrix.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fblack-banner-vector21.png&f=1&nofb=1&ipt=7b5950bf649a22c6313e728aa198ea9ddfa7b4f12ca3650cf46ac759071fa52c&ipo=images')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">This is a test description</h1>
      </div>

      <div className="banner--fadeBottom">Test</div>
    </header>
  );
}

export default Banner;
