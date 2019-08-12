import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as orderActions from '../Order/OrderActions';
import ProductList from '../../components/Products/ProductListContainer';
import Page from '../index';
import { UserInfo, DateShow } from './InvoiceComponent';
import { GET_PAYMENT_FAILURE } from '../Order/OrderConstants';

class OrderInvoiceComponent extends Component {
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
    const { match, payment } = this.props;
    if (!payment || !payment.metadata) {
      return <React.Fragment />;
    }
    const {
      deliver_date,
      pickup_date,
      price,
      selectedProducts
    } = payment.metadata;
    const { status } = payment;
    const { orderId } = match.params;

    return (
      <Page>
        <div className="d-flex align-content-center fancy-bg">
          <div className="invoice-form-wrapper m-2 mx-auto p-2">
            <div className="container">
              <DateShow pickupDate={pickup_date} deliverDate={deliver_date} />
              <ProductList
                orderInvoice
                orderStatus={status}
                orderId={orderId}
                orderPrice={price}
                orderSelectedProducts={selectedProducts}
              />
              <UserInfo {...this.props} readOnly />
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

export default withRouter(OrderInvoiceComponent);
