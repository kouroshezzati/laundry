import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import HomeComponent from '../HomeComponent/HomeComponent';
import ContactPage from '../../pages/ContactUs/';
import PriceList from '../../pages/PriceList/';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from '../../store/configStore';
import Register from '../../pages/Register/';
import Login from '../../pages/Login/';
import Order from '../../pages/Order/OrderContainer';
import Invoice from '../../pages/Invoice/InvoiceContainer';
import User from '../../pages/User/UserComponent';
import DateComponent from '../../pages/Order/DateComponent';
import ForgottenPasswordPage from '../../pages/ForgottenPassword/ForgottenPasswordPageComponent';
import ResetPasswordPageComponent from '../../pages/ResetPasswordPage/ResetPasswordPageComponent';
import { PrivateRoute } from '../../utils/components';
import ServicesComponent from '../../pages/Services/ServicesComponent';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../../pages/TermsAndConditions/TermsAndConditions';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route path="/contact/" component={ContactPage} />
              <Route path="/price_list/" component={PriceList} />
              <Route path="/register/" component={Register} />
              <Route path="/login/" component={Login} />
              <Route path="/order/" component={Order} />
              <Route path="/date/" component={DateComponent} />
              <Route path="/invoice/" component={Invoice} />
              <Route path="/privacy-policy/" component={PrivacyPolicy} />
              <Route
                path="/terms-and-conditions/"
                component={TermsAndConditions}
              />
              <PrivateRoute path="/user/" component={User} />
              <Route
                path="/forgotten-password/"
                component={ForgottenPasswordPage}
              />
              <Route
                path="/reset-password/"
                component={ResetPasswordPageComponent}
              />
              <Route path="/services/:name" component={ServicesComponent} />
            </Switch>
          </Router>
        </I18nextProvider>
      </Provider>
    );
  }
}

export default App;
