import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { formattedDate } from '../../utils/components';
import { Link } from '@material-ui/core';
const styles = theme => ({
  root: {
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing.unit * 2
  },
  table: {
    marginBottom: '1em'
  }
});

let ProductOrderComponent = props => {
  const { order, t, classes } = props;
  return (
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{t('Name')}</TableCell>
            <TableCell>{t('Number')}</TableCell>
            <TableCell>{t('Price')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.products.map(product => (
            <TableRow key={product.id}>
              <TableCell className="label-key">{product.name}</TableCell>
              <TableCell>{product.number}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
ProductOrderComponent = withStyles(styles)(
  translate('translations')(ProductOrderComponent)
);

class OrderItem extends Component {
  render() {
    const { t, order, classes } = this.props;
    const tagId = Math.random();
    const date = formattedDate(order.date);
    const payed = order.payed ? (
      t('payed')
    ) : (
      <a href="javascript:;" onClick={e => e.stopPropagation()} to="payment">
        {t('payment')}
      </a>
    );
    const amount = order.amount || '-';
    const transaction = order.transaction || '-';
    return (
      <ExpansionPanel
        style={{
          backgroundColor: '#dddbdb'
        }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${tagId}a-content`}
          id={`panel${tagId}a-content`}
        >
          <Typography component={'span'} className={classes.root}>
            <div className="container">
              <div className="row">
                <div className="d-none d-sm-block col-sm-3 label-key">
                  {t('Date')}
                </div>
                <div className="d-none d-sm-block col-sm-3 label-key">
                  {t('Transaction')}
                </div>
                <div className="d-none d-sm-block col-sm-3 label-key">
                  {t('Payed')}
                </div>
                <div className="d-none d-sm-block col-sm-3 label-key">
                  {t('Amount')}
                </div>
                <div className="d-none d-sm-block col-sm-3">{date}</div>
                <div className="d-none d-sm-block col-sm-3">{transaction}</div>
                <div className="d-none d-sm-block col-sm-3">{payed}</div>
                <div className="d-none d-sm-block col-sm-3">{amount}</div>

                {/* mobile version */}
                <div className="d-block d-sm-none col-6 label-key">
                  {t('Date')}
                </div>
                <div className="d-block d-sm-none col-6">{date}</div>
                <div className="d-block d-sm-none col-6 label-key">
                  {t('Transaction')}
                </div>
                <div className="d-block d-sm-none col-6">{transaction}</div>
                <div className="d-block d-sm-none col-6 label-key">
                  {t('Payed')}
                </div>
                <div className="d-block d-sm-none col-6">{payed}</div>
                <div className="d-block d-sm-none col-6 label-key">
                  {t('Amount')}
                </div>
                <div className="d-block d-sm-none col-6">{amount}</div>
              </div>
            </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ProductOrderComponent order={order} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(translate('translations')(OrderItem));
