import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import HeroBg from "../../../assets/HeroBg.mp4";

const Hero = ({image}) => {
  return (
    <div className="hero">
      <div className="overlay"></div>

      <video src={HeroBg} autoPlay loop id="videoBg" muted />

      <div className="content">
        <div className="heroContainer">
          <div>
            <h1>MERN Stack Web Developer 👋🏻</h1>
            <p>
              Hi, I'm Aryan Baghel. A passionate MERN Stack Developer based in
              Bhopal, India. 📍
            </p>
            <div>
              <div>
                <Link to="https://www.linkedin.com/in/aryan-baghel/">
                  <PiLinkedinLogoBold />
                </Link>
              </div>
              {/*  */}
              <div>
                <Link to="https://github.com/Aryann001">
                  <FiGithub />
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div>
              <img src={image} alt="Aryan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
