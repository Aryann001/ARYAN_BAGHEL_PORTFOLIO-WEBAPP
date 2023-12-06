import React from "react";
import "./Contact.css";
import { TbMapSearch } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contacth">
      <div>
        <div className="contactContainerh">
          <div className="cch-1">
            <div className="cch-1-1">
              <p>CONTACT</p>
              <h3>Don't be shy! Hit me up! 👇🏻</h3>
            </div>
          </div>
          {/*  */}
          <div className="cch-2">
            <div className="cch-2-1">
              <div>
                <TbMapSearch />
              </div>
              {/*  */}
              <div>
                <h3>Location</h3>
                <p>Bhopal, India</p>
              </div>
            </div>
            {/*  */}
            <div className="cch-2-2">
              <div>
                <IoMailOutline />
              </div>
              {/*  */}
              <div>
                <h3>Mail</h3>
                <p>aryanbaghel.dev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
