import React from 'react';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import './style.css';

export default function index(props) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  return (
    <div className="page-container">
      <NavbarComponent />
      {props.children}
      <FooterComponent />
    </div>
  );
}
