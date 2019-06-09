import React, { Component } from 'react';
import SidebarComponent from './SidebarComponent';
import './style.css';
import UserInfoComponent from '../../components/User/UserInfo/UserInfoContainer';
import { connect } from 'react-redux';
import { PrivateRoute } from '../../utils/components';

export class UserComponent extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="float-left">
            <SidebarComponent match={match} />
          </div>
          <div className="container-wrapper">
            <PrivateRoute
              path={`${match.url}/change_information/`}
              component={props => (
                <Pager
                  {...props}
                  name="Change information"
                  component={UserInfoComponent}
                />
              )}
              exact={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

UserComponent = connect(
  state => ({...state.user}),
  {}
)(UserComponent);

export default UserComponent;

const Pager = props => {
  const { name, component: Component } = props;
  return (
    <div className="m-3">
      <h3 className="mb-3">{name}</h3>
      <Component />
    </div>
  );
};
