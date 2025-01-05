import React from "react";
import "./Hero.css";
import pro_img from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    <div id="home" className="hero">
      <img src={pro_img} alt="" />
      <h1>
        <span>I am ASM Shad,</span> MERN Stack developer specialised in REACT.
      </h1>
      <p>
        I am a MERN Stack developer specialised in frontend from Dhaka
        Bangladesh with 3 year of experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}
