import React from "react";
import "./Hero.css";
import pro_img from "../../assets/profile.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={pro_img} alt="" />
      <h1>
        <span>I am ASM Shad,</span> MERN Stack developer specialised in REACT.
      </h1>
      <p>
        I am a MERN Stack developer specialised in frontend from Dhaka
        Bangladesh with 3 year of experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}
