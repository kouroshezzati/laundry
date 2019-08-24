import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as orderActions from '../Order/OrderActions';
import ProductList from '../../components/Products/ProductListContainer';
import Page from '../index';
import { UserInfo, DateShow } from './InvoiceComponent';
import { GET_PAYMENT_FAILURE } from '../Order/OrderConstants';
import { Button } from '@material-ui/core';
import { translate } from 'react-i18next';

class OrderInvoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { tryAgain: false };
  }
  componentDidMount() {
    const { match, jwt } = this.props;
    const { orderId } = match.params;
    const {
      resetOrderAndSelectedProducts,
      getPayment,
      history,
      resetPayment,
      id
    } = this.props;
    resetPayment();
    if (!jwt) {
      return history.push('/');
    }

    if (orderId) {
      getPayment(orderId, id).then(data => {
        if (data.type === GET_PAYMENT_FAILURE) {
          this.setState({ tryAgain: true });
          return;
        }
        //redirect to invoice page for failure payment
        if (data.response.status !== 'paid') {
          return history.push('/invoice');
        }
        resetOrderAndSelectedProducts();
      });
    }
  }

  render() {
    const { match, payment, t } = this.props;
    if (!payment) {
      return <React.Fragment />;
    }
    const {
      deliver_date,
      pickup_date,
      price,
      selectedProducts,
      status
    } = payment;
    const { orderId } = match.params;

    return (
      <Page>
        <div className="d-flex align-content-center fancy-bg">
          <div className="invoice-form-wrapper m-2 mx-auto p-2">
            <div className="container">
              {!this.state.tryAgain && (
                <React.Fragment>
                  <DateShow
                    pickupDate={pickup_date}
                    deliverDate={deliver_date}
                  />
                  <ProductList
                    orderInvoice
                    orderStatus={status}
                    orderId={orderId}
                    orderPrice={price}
                    orderSelectedProducts={selectedProducts}
                  />
                  <UserInfo {...this.props} readOnly />
                </React.Fragment>
              )}
              {this.state.tryAgain && (
                <Button
                  style={{ display: 'block', margin: '0 auto' }}
                  color="primary"
                  variant="contained"
                  onClick={e => {
                    window.location.reload();
                  }}
                >
                  {t('try again')}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

OrderInvoiceComponent = connect(
  state => ({
    ...state.products,
    ...state.user,
    ...state.order
  }),
  { ...orderActions }
)(OrderInvoiceComponent);

export default translate('translations')(withRouter(OrderInvoiceComponent));
