import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Project = ({ projects }) => {
  const reversePj =
    projects &&
    projects.map((item, index, array) => {
      return array[array.length - 1 - index];
    });

  return (
    <div className="project">
      <div>
        <div className="projectContainer">
          <div className="pc-1">
            <h3>PORTFOLIO</h3>
            <h2>Each project is a unique piece of development 🧩</h2>
          </div>
          {/*  */}
          <div className="pc-2">
            {reversePj &&
              reversePj.map((project) => (
                <ProjectCard key={project._id} {...project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
