import React, { Component } from 'react';
import classnames from 'classnames';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
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
import logo from '../../assets/images/logo_65.png';
import './style.css';
import ste from 'scroll-to-element';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import InnerSections from './InnerSections';
import { connect } from 'react-redux';
import { signout } from '../User/UserActions';
import { translate } from 'react-i18next';
import { LogoComponent } from './NavbarComponent';

const styles = theme => ({
  button: {
    fontSize: '.45em'
  }
});

library.add(faHome);

class NavbarLoggedIn extends Component {
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
  handleScroll = e => {
    if (this.props.location.pathname !== '/') {
      return;
    }
    const servicesOffset = document.getElementById('services').offsetTop;
    if (servicesOffset <= window.pageYOffset) {
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
    const { classes, t, location } = this.props;
    return (
      <nav
        className={classnames(
          `navbar navbar-expand-lg navbar-light`,
          this.state.navbarColor || location.pathname !== '/' ? 'colored' : '',
          location.pathname === '/' ? 'fixed-top' : ''
        )}
        id="mainNav"
      >
        <div className="container">
          <LogoComponent
            onScrollToTopHandler={this.scrollToTop}
            location={location}
          />
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
              <InnerSections {...this.props} />
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/contact/">
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
                    className={classes.button}
                    aria-owns={this.state.open ? 'menu-list-grow' : undefined}
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
                <div onClick={e => this.handleSignOut()}>{t('Log out')}</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(
  state => ({ ...state.user }),
  { signout }
)(withStyles(styles)(withRouter(translate('translations')(NavbarLoggedIn))));
