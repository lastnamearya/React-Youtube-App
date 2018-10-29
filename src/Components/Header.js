import React from "react";
import logo from "../logo.svg";
import youtube from "../Images/youtube.png";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={youtube} className="Youtube-log" alt="Youtube" />
      </div>
      <div className="header-bar">
        <h2 className="header-title">React Movie App</h2>
      </div>
    </React.Fragment>
  );
};

export default Header;
