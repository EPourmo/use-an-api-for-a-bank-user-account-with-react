import React from "react";

import { useSelector } from "react-redux";
import { Link, Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isConnected } = useSelector((state) => state.user);
  if (!isConnected) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
