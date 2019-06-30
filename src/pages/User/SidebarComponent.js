import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { mnuShow: false, open: false };
    this.closeMnu = this.closeMnu.bind(this);
  }

  toggleShow() {
    this.setState({ mnuShow: !this.state.mnuShow });
  }

  closeMnu() {
    if (this.state.mnuShow) {
      this.setState({ mnuShow: false });
    }
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const show = this.state.mnuShow ? 'show' : '';
    const { t, match } = this.props;
    return (
      <React.Fragment>
        <nav
          className={`side-nav-bar d-md-none navbar navbar-expand-lg navbar-light fixed-top ${
            this.props.navBarShrink
          }`}
        >
          <div className="container">
            <button
              onClick={this.toggleShow.bind(this)}
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div
              className={`collapse navbar-collapse ${show}`}
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link js-scroll-trigger"
                    to={`${match.url}/change_information`}
                  >
                    {t('Change information')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link js-scroll-trigger"
                    to={`${match.url}/my_orders`}
                  >
                    {t('My orders')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link js-scroll-trigger"
                    to="/"
                  >
                    {t('Home')}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="main-section navbar-nav sidebar d-none d-md-block">
          <NavLink
            exact
            className=""
            name="Change information"
            to={`${match.url}/change_information`}
          >
            <li className="sidebar-item">{t('Change information')}</li>
          </NavLink>
          <NavLink exact className="" to={`${match.url}/my_orders`}>
            <li className="sidebar-item">{t('My orders')}</li>
          </NavLink>
          <NavLink exact className="" to="/">
            <li className="sidebar-item">{t('Home')}</li>
          </NavLink>
        </ul>
      </React.Fragment>
    );
  }
}

export default translate('translations')(SidebarComponent);
