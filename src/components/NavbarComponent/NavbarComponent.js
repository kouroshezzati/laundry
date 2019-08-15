import React, { Component } from 'react';
import classnames from 'classnames';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { translate } from 'react-i18next';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { signout } from '../User/UserActions';
import logo from '../../assets/images/bubblesonline_main_logo.png';
import './style.css';
import ste from 'scroll-to-element';
import Language from '../Languages/LanguageComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

library.add(faUser);

const styles = theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

export const LogoComponent = props => {
  const { location, onScrollToTopHandler, mobile } = props;
  const logoClassName = mobile ? 'tiny-logo' : 'main-logo';
  return (
    <React.Fragment>
      {location.pathname !== '/' && (
        <NavLink to="/">
          <img
            className={logoClassName}
            alt="bubbles online lundry"
            src={logo}
          />
        </NavLink>
      )}
      {location.pathname === '/' && (
        <a
          onClick={e => onScrollToTopHandler()}
          className="navbar-brand js-scroll-trigger"
          href="#page-top"
        >
          <img
            className={logoClassName}
            style={{marginRight: '10px'}}
            alt="bubbles online lundry"
            src={logo}
          />
        </a>
      )}
    </React.Fragment>
  );
};

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { mnuShow: false, open: false, navbarColor: false };
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
    const { hash } = this.props.location;
    if (hash) {
      ste(hash);
    }
    window.addEventListener('scroll', this.handleScroll);
    Events.scrollEvent.register('begin', () => {
      this.closeMnu();
    });

    Events.scrollEvent.register('end', function() {});
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleShow() {
    this.setState({ mnuShow: !this.state.mnuShow });
  }

  closeMnu() {
    if (this.state.mnuShow) {
      this.setState({ mnuShow: false });
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
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

  handleSignOut = () => {
    this.props.signout();
  };

  handleScroll = e => {
    if (this.props.location.pathname !== '/') {
      return;
    }
    // const servicesOffset = document.getElementById('services').offsetTop;
    if (300 <= window.pageYOffset) {
      this.setState({ navbarColor: true });
    } else {
      this.setState({ navbarColor: false });
    }
  };
  render() {
    const show = this.state.mnuShow ? 'show' : '';
    const { t, location, jwt } = this.props;
    return (
      <nav
        className={classnames(
          `navbar navbar-expand-lg navbar-light`,
          this.state.navbarColor || location.pathname !== '/' ? 'colored' : '',
          location.pathname === '/' ? 'fixed-top' : ''
        )}
        id="mainNav"
      >
        <Language />
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
            {t('Menu')}
          </button>
          <LogoComponent
            mobile
            onScrollToTopHandler={this.scrollToTop}
            location={location}
          />
          <div className="language-mobile-wrapper">
            <Language />
          </div>
          <div
            className={`collapse navbar-collapse ${show}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/contact/">
                  {t('contact')}
                </NavLink>
              </li>
              <li className="nav-item">
                <Dropdown autoOpen>
                  <Dropdown.Toggle
                    btnStyle="link"
                    title={t('READ MORE')}
                    className="button-submenu"
                  />
                  <Dropdown.Menu>
                    {location.pathname !== '/' && (
                      <React.Fragment>
                        <MenuItem eventKey="1">
                          <NavLink
                            className="nav-link js-scroll-trigger"
                            to="/#services"
                          >
                            {t('Services')}
                          </NavLink>
                        </MenuItem>
                        <MenuItem eventKey="2">
                          <NavLink
                            className="nav-link js-scroll-trigger"
                            to="/#about-us"
                          >
                            {t('About us')}
                          </NavLink>
                        </MenuItem>
                        <MenuItem eventKey="3">
                          <NavLink
                            className="nav-link js-scroll-trigger"
                            to="/#special-order"
                          >
                            {t('Special order')}
                          </NavLink>
                        </MenuItem>
                        <MenuItem eventKey="3">
                          <NavLink
                            className="nav-link js-scroll-trigger"
                            to="/#info"
                          >
                            {t('Did you know?')}
                          </NavLink>
                        </MenuItem>
                      </React.Fragment>
                    )}
                    {location.pathname === '/' && (
                      <React.Fragment>
                        <MenuItem>
                          <Link
                            activeClass="active"
                            className="nav-link js-scroll-trigger"
                            to="services"
                            spy={true}
                            smooth="easeInOutQuart"
                            duration={1000}
                          >
                            {t('Services')}
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            activeClass="active"
                            className="nav-link js-scroll-trigger"
                            to="about-us"
                            spy={true}
                            smooth="easeInOutQuart"
                            duration={1000}
                          >
                            {t('About us')}
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            activeClass="active"
                            className="nav-link js-scroll-trigger"
                            to="special-order"
                            spy={true}
                            smooth="easeInOutQuart"
                            duration={1000}
                          >
                            {t('Special order')}
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            activeClass="active"
                            className="nav-link js-scroll-trigger"
                            to="info"
                            spy={true}
                            smooth="easeInOutQuart"
                            duration={1000}
                          >
                            {t('Did you know?')}
                          </Link>
                        </MenuItem>
                      </React.Fragment>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <LogoComponent
                onScrollToTopHandler={this.scrollToTop}
                location={location}
              />
              <li className="nav-item">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  to="/price_list/"
                >
                  {t('price list')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/date/">
                  {t('order now')}
                </NavLink>
              </li>
              {!jwt && (
                <React.Fragment>
                  <li className="just-mobile">
                    <NavLink className="nav-link" to="/login/">
                      {t('LOGIN')}
                    </NavLink>
                  </li>
                  <li className="just-mobile">
                    <NavLink className="nav-link" to="/register/">
                      {t('REGISTER')}
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {jwt && (
                <React.Fragment>
                  <li className="just-mobile">
                    <NavLink className="nav-link" to="/user/change_information">
                      {t('Change information')}
                    </NavLink>
                  </li>
                  <li className="just-mobile">
                    <NavLink className="nav-link" to="/user/my_orders">
                      {t('My orders')}
                    </NavLink>
                  </li>
                  <li className="just-mobile">
                    <div
                      onClick={e => this.handleSignOut()}
                      className="link-style"
                    >
                      {t('Log out')}
                    </div>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
        {!jwt && (
          <div className="auth-link just-desktop">
            <div>
              <NavLink to="/login/">{t('LOGIN')}</NavLink>
            </div>
            <div>
              <NavLink to="/register/">{t('REGISTER')}</NavLink>
            </div>
          </div>
        )}
        {jwt && (
          <Dropdown className="user-menu-dropdown">
            <Dropdown.Toggle
              btnStyle="link"
              className="button-submenu user-button-icon"
              noCaret
            >
              <i className="fa fa-home fa-3x" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="user-submenu">
              <React.Fragment>
                <MenuItem eventKey="1">
                  <NavLink
                    className="submenu-link"
                    to="/user/change_information"
                  >
                    {t('Change information')}
                  </NavLink>
                </MenuItem>
                <MenuItem eventKey="2">
                  <NavLink className="submenu-link" to="/user/my_orders">
                    {t('My orders')}
                  </NavLink>
                </MenuItem>
                <MenuItem eventKey="3">
                  <div
                    onClick={e => this.handleSignOut()}
                    className="submenu-link"
                  >
                    {t('Log out')}
                  </div>
                </MenuItem>
              </React.Fragment>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </nav>
    );
  }
}

export default connect(
  state => ({ ...state.user }),
  { signout }
)(withStyles(styles)(withRouter(translate('translations')(NavBarComponent))));
