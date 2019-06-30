import React, { Component } from 'react';
import SidebarComponent from './SidebarComponent';
import './style.css';
import UserInfoComponent from '../../components/User/UserInfo/UserInfoContainer';
import OrderListComponent from '../../components/OrderList/OrderListContainer';
import { connect } from 'react-redux';
import { PrivateRoute } from '../../utils/components';
import {translate} from 'react-i18next';

export class UserComponent extends Component {
  render() {
    const { match, t } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 sidebar-wrapper">
            <SidebarComponent match={match} />
          </div>
          <div className="col-md-10 user-panel-wrapper">
            <PrivateRoute
              path={`${match.url}/change_information/`}
              component={props => (
                <Pager
                  {...props}
                  name={t('Change information')}
                  component={UserInfoComponent}
                />
              )}
              exact={true}
            />
            <PrivateRoute
              path={`${match.url}/my_orders`}
              component={props => (
                <Pager
                  {...props}
                  name={t('My orders')}
                  component={OrderListComponent}
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
  state => ({ ...state.user }),
  {}
)(UserComponent);

export default translate('translations')(UserComponent);

const Pager = props => {
  const { name, component: Component } = props;
  return (
    <div className="m-3">
      <h3 className="mb-3">{name}</h3>
      <Component />
    </div>
  );
};

