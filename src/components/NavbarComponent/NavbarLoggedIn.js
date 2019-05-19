import React, { Component } from 'react';
import classnames from 'classnames';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo_64.png';
import './style.css';

library.add(faHome);

export class NavbarLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { mnuShow: false, open: false, navbarColor: false };
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
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
  handleScroll = e => {
    console.log('the event is', window.pageYOffset);
    const servicesOffset = document.getElementById('services').offsetTop;
    if (servicesOffset < window.pageYOffset) {
      this.setState({ navbarColor: true });
    } else {
      this.setState({ navbarColor: false });
    }
  };

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
  render() {
    const show = this.state.mnuShow ? 'show' : '';
    const { t, location } = this.props;
    return (
      <nav
        className={classnames(
          `navbar navbar-expand-lg navbar-light fixed-top`,
          this.state.navbarColor ? 'colored' : ''
        )}
        id="mainNav"
      >
        <div className="container">
          {location.pathname !== '/' && (
            <React.Fragment>
              <img
                className={classnames(
                  'main-logo',
                  this.state.navbarColor ? '' : 'big-logo'
                )}
                alt="bubbles online lundry"
                src={logo}
              />
              <NavLink
                className="nav-link navbar-brand js-scroll-trigger"
                to="/"
              >
                {t('Bubbles')}
              </NavLink>
            </React.Fragment>
          )}
          {location.pathname === '/' && (
            <a
              onClick={this.scrollToTop.bind(this)}
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
            >
              <img
                className={classnames(
                  'main-logo',
                  this.state.navbarColor ? '' : 'big-logo'
                )}
                alt="bubbles online lundry"
                src={logo}
              />
              {t('Bubbles')}
            </a>
          )}
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
              {location.pathname === '/' && (
                <React.Fragment>
                  <li className="nav-item">
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
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      className="nav-link js-scroll-trigger"
                      to="extra-info"
                      spy={true}
                      smooth="easeInOutQuart"
                      duration={1000}
                    >
                      {t('information')}
                    </Link>
                  </li>
                </React.Fragment>
              )}
              <li className="nav-item">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  to="/contact/"
                >
                  {t('Contact')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  to="/price_list/"
                >
                  {t('price list')}
                </NavLink>
              </li>
              <li className="d-none d-lg-block">
                <div>
                  <Button
                    buttonRef={node => {
                      this.anchorEl = node;
                    }}
                    aria-owns={
                      this.state.open ? 'menu-list-grow' : undefined
                    }
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                  >
                    <FontAwesomeIcon className="navbar-icon" icon="home" />
                  </Button>
                  <Popper
                    open={this.state.open}
                    anchorEl={this.anchorEl}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom'
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList>
                              <NavLink to="/user/change_information">
                                <MenuItem onClick={this.handleClose}>
                                  {t('Change information')}
                                </MenuItem>
                              </NavLink>
                              <NavLink to="/user/my_orders">
                                <MenuItem onClick={this.handleClose}>
                                  {t('My orders')}
                                </MenuItem>
                              </NavLink>
                              <MenuItem onClick={e => this.handleSignOut()}>
                                {t('Logout')}
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </li>
              <li className="nav-item d-lg-none">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  to="/user/change_information"
                >
                  {t('Change information')}
                </NavLink>
              </li>
              <li className="nav-item d-lg-none">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  to="/user/my_orders"
                >
                  {t('My orders')}
                </NavLink>
              </li>
              <li className="nav-item d-lg-none">
                <div href="" onClick={e => this.handleSignOut()}>
                  {t('Log out')}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarLoggedIn;
