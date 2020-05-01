import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

MainLayout.propTypes = {
  /**
   * Specify the content of route layout
   */
  children: PropTypes.node,
};

export { MainLayout };
