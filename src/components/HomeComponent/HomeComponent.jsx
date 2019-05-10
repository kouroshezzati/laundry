import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import { FooterComponent } from '../FooterComponent/FooterComponent';
import { AboutUsComponent } from '../AboutUsComponent/AboutUsComponent';
import { ServicesComponent } from '../ServicesComponent/ServicesComponent';
import NavBarComponent from '../NavbarComponent/NavbarComponent';
import { SliderComponent } from '../SliderComponent/SliderComponent';

class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarComponent />
        <SliderComponent />
        <ServicesComponent />
        <AboutUsComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
