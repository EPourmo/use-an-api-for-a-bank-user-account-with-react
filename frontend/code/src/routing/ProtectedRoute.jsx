import React from "react";

import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isConnected } = useSelector((state) => state.user);
  if (!isConnected) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <Link to="/login">Login</Link> to gain access
        </span>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
