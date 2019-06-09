import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

export class InnerSections extends Component {
  render() {
    const { location, t } = this.props;
    if (location.pathname === '/') {
      return (
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
      );
    } else {
      return (
        <React.Fragment>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/#services">
              {t('services')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/#about-us">
              {t('about us')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/#extra-info">
              {t('information')}
            </NavLink>
          </li>
        </React.Fragment>
      );
    }
  }
}

export default InnerSections;
