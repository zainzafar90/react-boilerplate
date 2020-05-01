import React from "react";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return <main>{children}</main>;
};

MainLayout.propTypes = {
  /**
   * Specify the content of route layout
   */
  children: PropTypes.node,
};

export { MainLayout };
