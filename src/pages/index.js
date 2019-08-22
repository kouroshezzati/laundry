import React from 'react';
import { withRouter } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import './style.css';

export default withRouter(function index(props) {
  const { location } = props;
  if (
    !location.pathname.includes('order') &&
    !location.pathname.includes('invoice')
  ) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
  return (
    <div className="page-container">
      <NavbarComponent />
      {props.children}
      <FooterComponent />
    </div>
  );
});
