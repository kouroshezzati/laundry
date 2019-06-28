import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import FooterComponent from '../FooterComponent/FooterComponent';
import AboutUsComponent from '../AboutUsComponent/AboutUsComponent';
import ServicesComponent from '../ServicesComponent/ServicesComponent';
import NavBarComponent from '../NavbarComponent/NavbarComponent';
import { SliderComponent } from '../SliderComponent/SliderComponent';
import ExtraInfoComponent from '../ExtraInfo/ExtraInfoComponent';
import StepsComponent from '../Steps/StepsComponent';
import BusinessComponent from '../Business/BusinessComponent';
import InfoComponent from '../InfoComponent/InfoComponent';

class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarComponent />
        <SliderComponent />
        <ServicesComponent />
        <AboutUsComponent />
        <BusinessComponent />
        <ExtraInfoComponent />
        <StepsComponent />
        <InfoComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
