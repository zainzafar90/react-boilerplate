import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { useReloadAuth } from "hooks";
import { publicRoutes, privateRoutes, PrivateRoute } from "routes";

function App() {
  const reloadAuth = useReloadAuth();

  useEffect(() => {
    reloadAuth();
  }, [reloadAuth]);

  return (
    <Switch>
      {/* Redirect to deliveries page from root  */}
      <Redirect exact from="/" to="/home" />

      {/* Routes only accessible to authorized users */}
      {privateRoutes.map(({ component: Comp, ...route }) => (
        <PrivateRoute as={Comp} path={route.path} key={route.path} {...route} />
      ))}

      {/* Routes available to all users */}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}

export default withRouter(connect()(App));
