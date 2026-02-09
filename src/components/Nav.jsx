import React from "react";
import "./Nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/navbar-icons/apple.svg"  alt=""/>
        </div>
        <div className="nav-item">
          <p>Devesh Zope</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="navbar-icons">
        <div className="right">
            <img src="/navbar-icons/wifi.svg" alt="" />
            <DateTime/>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
