import React, { Fragment, useState } from "react";
import "./Header.css";
import Image from "../../../assets/AryanLogo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <Fragment>
      <div className="header">
        <div className="headerContainer">
          <div>
            <img src={Image} alt="I" />
            <div>
              <h3>Aryan</h3>
              <p>Web Developer</p>
            </div>
          </div>
          {/*  */}
          <div>
            {window.innerWidth <= Number(1050) ? (
              <FaBarsStaggered
                className="navBar"
                onClick={() => {
                  setActive(!active);
                }}
              />
            ) : (
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? `displayBlock` : `displayNone`
        } navSlider`}
      >
        <div>
          <span>
            <ImCross
              onClick={() => {
                setActive(!active);
              }}
            />
          </span>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setActive(!active);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setActive(!active);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => {
                  setActive(!active);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setActive(!active);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
