import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import pro_pic from "../../assets/pro_pic.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pro_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm ASM Shad, a MERN Stack Developer skilled in building
              scalable and dynamic web applications using MongoDB, Express.js,
              React.js, and Node.js. I specialize in creating intuitive user
              interfaces, designing robust APIs, and implementing secure
              authentication systems.
            </p>
            <p>
              With a passion for problem-solving and clean code, I focus on
              delivering efficient and user-friendly solutions. Beyond coding, I
              enjoy taking nature photographs. Let’s collaborate to bring
              impactful ideas to life!
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
                <p>React JS</p>
                <hr style={{ width: "70%" }} />
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
                <p>MongoDB</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>03+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Project Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
