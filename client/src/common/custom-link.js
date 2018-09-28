import React from "react";
import {Route} from "react-router-dom";

export const CustomLink = (props, { to, activeOnlyWhenExact }) => (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      >
    {props.children}
</Route>

  );