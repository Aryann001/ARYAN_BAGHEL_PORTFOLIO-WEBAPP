import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div>
          <h3>Copyright © 2023. All rights are reserved</h3>
        </div>
        {/*  */}
        <div>
          <div>
            <Link to="www.linkedin.com/in/aryan-baghel">
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
    </div>
  );
};

export default Footer;
