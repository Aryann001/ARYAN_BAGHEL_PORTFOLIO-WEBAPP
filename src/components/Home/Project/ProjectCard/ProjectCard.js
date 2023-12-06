import React from "react";
import "./ProjectCard.css";
import { FiGithub } from "react-icons/fi";
import { CiShare1 } from "react-icons/ci";

const ProjectCard = (props) => {
  const { image, title, description, stack, github, projectLink, date } = props;

  return (
    <div className="projectCard">
      <div>
        <a href={projectLink}>
          <img src={image.url} alt="Im" />
        </a>
      </div>
      {/*  */}
      <div>
        <h3>
          {title}
          <span>{` (${date})`}</span>
        </h3>
        <p>{description}</p>
        <div className="tech">
          {stack.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </div>
        <div className="link">
          <a href={github}>
            <div>
              <p>Code</p> <FiGithub />
            </div>
          </a>
          <a href={projectLink}>
            <div>
              <p>Live Demo</p> <CiShare1 />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
