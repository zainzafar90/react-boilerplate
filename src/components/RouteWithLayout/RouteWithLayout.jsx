import React from "react";
import PropTypes from "prop-types";

const RouteWithLayout = ({ children, ...props }) => {
  const { layout: Layout } = props;

  return <Layout>{children}</Layout>;
};

RouteWithLayout.propTypes = {
  /**
   * Specify the layout that needs to be rendered as input
   */
  layout: PropTypes.elementType.isRequired,

  /**
   * Specify the content of route layout
   */
  children: PropTypes.node,
};

export { RouteWithLayout };
