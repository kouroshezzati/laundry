import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import {connect} from 'react-redux';
let CustomRoute = props => {
  const { component: Component, jwt, ...rest } = props;
  return (
    <Route
      {...rest}
      render={_props =>
        jwt ? <Component {..._props} /> : <Redirect to="/login" />
      }
    />
  );
};
export const PrivateRoute = connect(
  state => ({ ...state.user }),
  {}
)(CustomRoute);


