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
import { Button } from '@material-ui/core';
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
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.number}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!order.payed && (
        <Button fullWidth variant="contained" color="primary">
          {t('Payment')}
        </Button>
      )}
    </Paper>
  );
};
ProductOrderComponent = withStyles(styles)(
  translate('translations')(ProductOrderComponent)
);

class OrderItem extends Component {
  render() {
    const { t, order, classes } = this.props;
    const id = Math.random();
    return (
      <ExpansionPanel
        style={{
          backgroundColor: '#dddbdb'
        }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${id}a-content`}
          id={`panel${id}a-content`}
        >
          <Typography component={'span'} className={classes.root}>
            <div className="container">
              <div className="row">
                <div className="col-md-2">{t('Order id')}</div>
                <div className="col-md-3">{t('Date')}</div>
                <div className="col-md-2">{t('Transaction')}</div>
                <div className="col-md-2">{t('Payed')}</div>
                <div className="col-md-3">{t('Amount')}</div>
                <div className="col-md-2">{order.id}</div>
                <div className="col-md-3">{formattedDate(order.date)}</div>
                <div className="col-md-2">{order.transaction || '-'}</div>
                <div className="col-md-2">
                  {order.payed ? t('payed') : t("hasn't payed")}
                </div>
                <div className="col-md-3">{order.amount || '-'}</div>
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
