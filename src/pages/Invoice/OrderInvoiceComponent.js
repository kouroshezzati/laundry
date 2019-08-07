import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as orderActions from '../Order/OrderActions';
import ProductList from '../../components/Products/ProductListContainer';
import Page from '../index';
import { UserInfo, DateShow } from './InvoiceComponent';

class OrderInvoiceComponent extends Component {
  componentDidMount() {
    const { match, jwt } = this.props;
    const { orderId } = match.params;
    const {
      resetOrderAndSelectedProducts,
      getPayment,
      payment,
      history,
      resetPayment
    } = this.props;
    resetPayment();
    if (!jwt || payment.metadata.length === 0) {
      history.push('/');
    }
    //redirect to invoice page for failure payment
    if (payment.statue !== 'paied') {
      history.push('/invoice');
      return;
    }
    if (orderId) {
      getPayment(orderId);
      resetOrderAndSelectedProducts();
    }
  }
  render() {
    const { match, payment } = this.props;
    const {
      deliver_date,
      pickup_date,
      price,
      selectedProducts
    } = payment.metadata;
    const { status } = payment;
    console.log(payment);
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
