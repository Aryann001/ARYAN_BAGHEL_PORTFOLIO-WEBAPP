import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { logout } from "../../../actions/userAction";
import Loader from "../../Layout/Loader/Loader";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, isAuthenticated } = useSelector((state) => state.user);

  const logoutHandler = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/console/login");
    }

  }, [isAuthenticated, navigate, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {isAuthenticated && (
            <Fragment>

              <div className="profileContainer">
                <div>
                  <h1>My Profile</h1>
                  <img src={user.avatar.url} alt={user.name} />
                  <Link to="/console/profile/update">Edit Profile</Link>
                </div>
                <div>
                  <div>
                    <h4>Full Name</h4>
                    <p>{user.name}</p>
                  </div>

                  <div>
                    <h4>Email</h4>
                    <p>{user.email}</p>
                  </div>

                  <div>
                    <h4>Joined On</h4>
                    <p>{String(user.createdAt).substr(0, 10)}</p>
                  </div>

                  <div>
                    <Link to="/console/project/update">Update Stack</Link>
                    <Link to="/console/projects">View Projects</Link>
                    <Link to="/console/project/create">Create Project</Link>
                    <Link to="/console/aboutme/update">Update About me</Link>
                    <Link onClick={logoutHandler}>Logout</Link>
                  </div>
                </div>
              </div>

            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
