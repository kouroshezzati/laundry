import React, { Component } from 'react';
import classnames from 'classnames';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { translate } from 'react-i18next';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { signout } from '../User/UserActions';
import NavbarLoggedIn from './NavbarLoggedIn';
import logo from '../../assets/images/logo_65.png';
import './style.css';
import InnerSections from './InnerSections';
import ste from 'scroll-to-element';

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
    this.state = { mnuShow: false, open: false, navbarColor: false };
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
    const {hash} = this.props.location;
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
    const servicesOffset = document.getElementById('services').offsetTop;
    if (servicesOffset <= window.pageYOffset) {
      this.setState({ navbarColor: true });
    } else {
      this.setState({ navbarColor: false });
    }
  };
  render() {
    const show = this.state.mnuShow ? 'show' : '';
    const { t, location, jwt } = this.props;
    if (jwt) {
      return <NavbarLoggedIn {...this.props} />;
    }
    return (
      <nav
        className={classnames(
          `navbar navbar-expand-lg navbar-light fixed-top`,
          this.state.navbarColor || location.pathname !== '/' ? 'colored' : ''
        )}
        id="mainNav"
      >
        <div className="container">
          {location.pathname !== '/' && (
            <NavLink className="nav-link navbar-brand js-scroll-trigger" to="/">
              <img
                className="main-logo"
                alt="bubbles online lundry"
                src={logo}
              />
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
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/register/">
                  {t('register')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/login/">
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
