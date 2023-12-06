import React, { useEffect } from "react";
import "./ViewProjects.css";
import { Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import AdminProjectCard from "./AdminProjectCard";
import { clearErrors } from "../../../actions/userAction";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ViewProjects = () => {
  const { user, error, isProjectDeleted } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isProjectDeleted) {
      navigate(`/console/projects`);
      toast.success(`Project Deleted Successfully`);
      dispatch({ type: "DELETE_PROJECT_RESET" });
    }
  }, [dispatch, navigate, error, isProjectDeleted]);

  return (
    <div className="viewProjects">
      <Heading>Projects</Heading>
      <div>
        {user.projects.length !== 0 &&
          user.projects.map((project) => (
            <AdminProjectCard key={project._id} {...project} />
          ))}
      </div>
    </div>
  );
};

export default ViewProjects;
