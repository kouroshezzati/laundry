import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as orderActions from '../Order/OrderActions';
import ProductList from '../../components/Products/ProductListContainer';
import Page from '../index';
import { UserInfo, DateShow } from './InvoiceComponent';

class OrderInvoiceComponent extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { orderId } = match.params;
    const {
      resetOrderAndSelectedProducts,
      paidOrder,
      // pickupDate,
      // deliverDate,
      // history
    } = this.props;
    // if (!deliverDate || !pickupDate) {
    //   history.push('/');
    // }
    if (orderId) {
      paidOrder(orderId);
      resetOrderAndSelectedProducts();
    }
  }
  render() {
    const { paidDeliverDate, paidPickupDate, match } = this.props;
    const { orderId } = match.params;

    return (
      <Page>
        <div className="d-flex align-content-center fancy-bg">
          <div className="invoice-form-wrapper m-2 mx-auto p-2">
            <div className="container">
              <DateShow
                pickupDate={paidPickupDate[orderId]}
                deliverDate={paidDeliverDate[orderId]}
              />
              <ProductList orderInvoice orderId={orderId} />
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
