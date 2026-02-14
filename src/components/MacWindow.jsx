import React from "react";
import { Rnd } from "react-rnd";
import "./MacWindow.scss";
const MacWindow = ({ children,width="40vw",height="40vh" }) => {
  return (
    <Rnd default={{
      width: width, // 40vw in px
    height: height, // 40vh in px
      x:300,
      y:200

    }}>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>Devesh - zsh</p>
          </div>
         
        </div>
         <div className="main-content">
            {children}
          </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
