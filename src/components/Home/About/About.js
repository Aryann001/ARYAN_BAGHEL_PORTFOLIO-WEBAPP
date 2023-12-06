import React from "react";
import "./About.css";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import aboutBg from "../../../assets/aboutBg.jpg"
import MERN from "../../../assets/MERN.png"

const About = ({aboutMe}) => {
  return (
    <div className="about">
      <div>
        <div className="aboutContainer">
          <div className="ac-1">
            <div>
                <img src={aboutBg} alt="About" />
                    <LiaLaptopCodeSolid />
                <div>
                    <img src={MERN} alt="MERN" />
                </div>
            </div>
          </div>
          {/*  */}
          <div className="ac-2">
            <div>
              <h3>ABOUT ME</h3>
              {/*  */}
              <h2>
                {aboutMe && aboutMe.heading}
              </h2>
              {/*  */}
              <p>
                {aboutMe && aboutMe.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
