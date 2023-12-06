import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { CiShare1 } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../actions/userAction";

const AdminProjectCard = (props) => {
  const { image, title, description, stack, github, projectLink, _id, date } = props;

  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();

    dispatch(deleteProject(_id));
  };

  return (
    <div className="projectCard">
      <div>
        <a href={projectLink}>
          <img src={image && image.url} alt="Im" />
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
          {stack && stack.map((s, i) => <p key={i}>{s}</p>)}
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
        <div className="link">
          <Link to={`/console/project/update/${_id}`}>
            <div>
              <CiEdit />
            </div>
          </Link>
          <Link onClick={deleteHandler}>
            <div>
              <MdOutlineDeleteOutline />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectCard;
