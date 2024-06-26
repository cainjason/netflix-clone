import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftelevision.mxdwn.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fnetflix-banner.jpg&f=1&nofb=1&ipt=3f75ea8d91aa99e3f4f22637e901f24b42cc5c74a17270e06b07398c2edfd02c&ipo=images')`,
        backgroundPosition: "center center",
      }}
    ></header>
  );
}

export default Banner;
