import React, { Component } from 'react';
import OrderItem from './OrderItem';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import injectSheet from 'react-jss';
import styles from './style';
import {translate} from 'react-i18next';

export class OrderListComponent extends Component {
  componentDidMount() {
    this.props.getMyOrders();
  }
  onPageChange = page => {
    console.log(page)
    this.props.getMyOrders(page.selected);
  };
  render() {
    const { myOrders, classes, pageCount, t, page } = this.props;
    return (
      <div className="my-orders-wrapper">
        {myOrders &&
          _.map(myOrders.orders, (order, id) => {
            if (!id) {
              return <React.Fragment key={id} />;
            }
            return <OrderItem order={{ ...order, id }} key={id} />;
          })}
        <ReactPaginate
          onPageChange={this.onPageChange}
          containerClassName={classes.pagination}
          pageClassName={classes.pageClassName}
          pageLinkClassName={classes.pageLinkClassName}
          breakClassName={classes.breakClassName}
          nextClassName={classes.nextClassName}
          previousClassName={classes.previousClassName}
          nextLabel={t('Next')}
          previousLabel={t('Previous')}
          disabledClassName={classes.disabledClassName}
          activeClassName={classes.activeClassName}
          pageCount={pageCount}
          forcePage={page}
        />
      </div>
    );
  }
}

export default translate('translations')(
  injectSheet(styles)(OrderListComponent)
);
