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
import { formattedDate, multipleCurrency } from '../../utils/components';
const styles = theme => ({
  root: {
    width: '100%',
    '& .container .row div': {
      padding: '0 8px !important'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing.unit * 2
  },
  table: {
    marginBottom: '1em',
    '& td, th': { padding: '4px 10px', minWidth: '80px' }
  }
});

let ProductOrderComponent = props => {
  const { order, t, classes } = props;
  return (
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className="label-key">{t('Name')}</TableCell>
            <TableCell className="label-key">{t('Number')}</TableCell>
            <TableCell className="label-key">{t('Price of unit')}</TableCell>
            <TableCell className="label-key">{t('Price')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.products.map(product => (
            <TableRow key={product.id}>
              <TableCell className="label-key">{product.name}</TableCell>
              <TableCell>{product.number}</TableCell>
              <TableCell>&euro; {product.price}</TableCell>
              <TableCell>
                &euro; {multipleCurrency(product.number, product.price)}
              </TableCell>
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
    const amount = order.amount || '-';
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
                <div className="d-none d-sm-block col-sm-4 label-key">
                  {t('ID')}
                </div>
                <div className="d-none d-sm-block col-sm-4 label-key">
                  {t('Date')}
                </div>
                <div className="d-none d-sm-block col-sm-4 label-key">
                  {t('Amount')}
                </div>
                <div className="d-none d-sm-block col-sm-4">{order.id}</div>
                <div className="d-none d-sm-block col-sm-4">{date}</div>
                <div className="d-none d-sm-block col-sm-4">
                  &euro; {amount}
                </div>

                {/* mobile version */}
                <div className="d-block d-sm-none col-6 label-key">
                  {t('ID')}
                </div>
                <div className="d-block d-sm-none col-6">{order.id}</div>
                <div className="d-block d-sm-none col-6 label-key">
                  {t('Date')}
                </div>
                <div className="d-block d-sm-none col-6">{date}</div>
                <div className="d-block d-sm-none col-6 label-key">
                  {t('Amount')}
                </div>
                <div className="d-block d-sm-none col-6">&euro; {amount}</div>
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
