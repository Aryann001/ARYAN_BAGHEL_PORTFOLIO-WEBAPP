import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  if (loading === false && isAuthenticated === false) {
    return <Navigate to={`/console/login`} />;
  }

  if (loading === false && user.role !== "admin" && isAdmin === true) {
    return <Navigate to={`/console/login`} />;
  }

  return <Fragment>{loading === false && <Outlet />}</Fragment>;
};

export default ProtectedRoute;
