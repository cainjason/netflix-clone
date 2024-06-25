import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cultjer.com%2Fimg%2Fug_photo%2F2016_09%2F76248820160921034356.jpg&f=1&nofb=1&ipt=c7c27b1b1e0d28ff5e9afed66b470c54290ec7a977ceb05d39169a53cd50b703&ipo=images"
          alt=""
          height={200}
        />
        <img
          className="nav__avatar"
          src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg"
          alt=""
          height={100}
        />
      </div>

      <h1>This is the nav</h1>
    </div>
  );
}

export default Nav;
