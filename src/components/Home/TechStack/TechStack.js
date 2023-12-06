import React from "react";
import "./TechStack.css";

const TechStack = ({ techStack }) => {
  return (
    <div className="techStack">
      <div>
        <div className="techStackContainer">
          <div className="tsc-1">
            <h3>Tech Stack</h3>
          </div>
          {/*  */}
          <div className="tsc-2">
            {techStack && techStack.map((link, i) => (
              <div key={i}>
                <img src={link.url} alt={`Stack`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
