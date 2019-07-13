import React, { Component } from 'react';
import './style.css';
import ProductList from '../../components/Products/ProductListContainer';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { translate } from 'react-i18next';
import Page from '../index';
import Sticky from 'react-sticky-el';

const ControllerButtons = ({ t, isFormFilled }) => {
  return (
    <div className="container button-controllers-navigator">
      <div className="mt-2 pt-1 row">
        <div className="col-12 col-sm-6 mb-2">
          <NavLink className="nav-button" to="/date">
            <Button fullWidth color="secondary" variant="contained">
              {t('back to Date')}
            </Button>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6">
          {!isFormFilled && (
            <Button disabled fullWidth variant="contained">
              {t('Check out')}
            </Button>
          )}
          {isFormFilled && (
            <NavLink className="nav-button" to="/invoice">
              <Button
                disabled={!isFormFilled}
                fullWidth
                color="primary"
                variant="contained"
              >
                {t('Check out')}
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export class index extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleDescriptionChange = e => {
    this.props.setDescription(e.target.value);
  };

  render() {
    const { t, selectedProducts, description } = this.props;
    let selectedProductNumbers = 0;
    _.map(selectedProducts, value => {
      selectedProductNumbers += value;
    });
    const isFormFilled = selectedProductNumbers > 0;
    return (
      <Page>
        <div
          className="main-section align-content-center flex-wrap fancy-bg"
          id="order"
        >
          <div className="order-form-wrapper form-wrapper m-2 mx-auto p-2">
            <ProductList />
            <div className="form-group m-2" id="order-description">
              <label style={{ fontWeight: 700 }} htmlFor="description">
                {t('Add description')}
              </label>
              <textarea
                defaultValue={description}
                id="description"
                placeholder={t('Description')}
                className="form-control"
                onBlur={this.handleDescriptionChange}
              />
            </div>
            <Sticky scrollElement="window" mode="bottom">
              <ControllerButtons t={t} isFormFilled={isFormFilled} />
            </Sticky>
          </div>
        </div>
      </Page>
    );
  }
}

export default translate('translations')(index);
