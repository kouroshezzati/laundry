import React, { Component } from 'react';
import './style.css';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { translate } from 'react-i18next';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { signout } from '../User/UserActions';
import NavbarLoggedIn from './NavbarLoggedIn';
import logo from '../../assets/images/logo_64.png';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { mnuShow: false, open: false };
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      this.closeMnu();
    });

    Events.scrollEvent.register('end', function() {});
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
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
  render() {
    const show = this.state.mnuShow ? 'show' : '';
    const { t, location, jwt } = this.props;
    if (jwt) {
      return <NavbarLoggedIn {...this.props} />;
    }
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${
          this.props.navBarShrink
        }`}
        id="mainNav"
      >
        <div className="container">
          {location.pathname !== '/' && (
            <NavLink
              className="nav-link navbar-brand js-scroll-trigger"
              to="/"
            >
              <img
                className="main-logo"
                alt="bubbles online lundry"
                src={logo}
              />
              {t('Bubbles')}
            </NavLink>
          )}
          {location.pathname === '/' && (
            <a
              onClick={this.scrollToTop.bind(this)}
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
            >
              <img
                className="main-logo"
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
                      to="about-us"
                      spy={true}
                      smooth="easeInOutQuart"
                      duration={1000}
                    >
                      {t('About us')}
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
              <li className="nav-item">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  to="/register/"
                >
                  {t('register')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  to="/login/"
                >
                  {t('login')}
                </NavLink>
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
)(withStyles(styles)(withRouter(translate('translations')(NavBarComponent))));
