import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as authStore from "redux/auth";

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/login" />;
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authStore.logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
