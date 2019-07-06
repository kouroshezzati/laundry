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
export const ADD = 'ADD';
export const SUB = 'SUB';
export const MUL = 'MUL';

export const multipleCurrency = (number, time) => {
  if (typeof number !== 'string') {
    number = String(number);
  }
  const numbers = number.split('.');
  if (numbers.length === 1) {
    numbers.push('00');
  }
  if (numbers[1].length === 2) {
    return (number * time).toFixed(2);
  }
  return String(number * time);
};

export const calc = (operator, a, b) => {
  if (!a || a === 0 || a === '0') {
    a = '0.00';
  }
  if (!b || b === 0 || b === '0') {
    b = '0.00';
  }

  const aNumbers = a.split('.');
  const bNumbers = b.split('.');
  let left, right;
  if (operator === ADD) {
    left = +aNumbers[0] + +bNumbers[0];
    right = +aNumbers[1] + +bNumbers[1];
    if (right >= 100) {
      left++;
      right = String(right / 100).split('.')[1] || 0;
      right = String(right);
      right = right.length === 1 ? right + '0' : right;
    }
  } else if (operator === SUB) {
    left = +aNumbers[0] - +bNumbers[0];
    right = +aNumbers[1] - +bNumbers[1];
    if (right < 0) {
      if (left === 0) {
        left = '-0';
      } else {
        left -= 1;
      }
      right *= -1;
    }
  }
  if (right === 0) {
    right += '0';
  }
  return `${left}.${right}`;
};
