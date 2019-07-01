import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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

export const formattedDate = date => {
  let current_datetime = new Date(date);
  let formatted_date =
    current_datetime.getFullYear() +
    '/' +
    (current_datetime.getMonth() + 1) +
    '/' +
    current_datetime.getDate() +
    ' ' +
    current_datetime.getHours() +
    ':' +
    current_datetime.getMinutes() +
    ':' +
    current_datetime.getSeconds();
  return formatted_date;
};
