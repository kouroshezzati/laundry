import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={null} />
      </Switch>
    );
  }
}

Routes = withRouter(
  connect(
    state => ({
      routes: state.warehouses.routes
    }),
    {}
  )(Routes)
);

export default Routes;
