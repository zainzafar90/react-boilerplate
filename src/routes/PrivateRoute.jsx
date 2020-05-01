import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainLayout, RouteWithLayout } from "../components";

const PrivateRoute = ({ as: Component, ...props }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? (
    <RouteWithLayout layout={MainLayout}>
      <Component {...props} />
    </RouteWithLayout>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
