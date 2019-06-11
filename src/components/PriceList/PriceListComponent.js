import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {translate} from 'react-i18next';

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  MuiList: {
    root: {
      width: '100%'
    }
  },
  fullWidthMenu: {
    width: '100%'
  },
  productName: { position: 'absolute' },
  productPrice: { position: 'absolute', right: '10px' }
});

class PriceListComponent extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  selectCategory = value => {
    this.props.selectCategory(value);
  };
  render() {
    const { products, classes, t } = this.props;
    if (!products || products.length === 0) return <React.Fragment />;
    return (
      <div className={classes.root}>
        {_.map(products, (categorizedProducts, category) => {
          return (
            <ExpansionPanel key={category}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  {t(String(category).toLowerCase()).toUpperCase()}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List className={classes.fullWidthMenu}>
                  {categorizedProducts.map(_product => (
                    <ListItem button key={_product.id}>
                      <ListItemText>{t(String(_product.name).toLowerCase())}</ListItemText>
                      <ListItemSecondaryAction>
                        {_product.price}
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

PriceListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired
};

export default translate('translations')(withStyles(styles)(PriceListComponent));
