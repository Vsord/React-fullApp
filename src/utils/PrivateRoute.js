import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  let authPermission = JSON.parse(localStorage.getItem("isAuthorized"));
  return authPermission ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
