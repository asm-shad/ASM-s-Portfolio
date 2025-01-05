import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am a MERN Stack developer from, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
