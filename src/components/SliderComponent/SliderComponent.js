import React from 'react';
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { translate } from 'react-i18next';
import { NavLink } from 'react-router-dom';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

export const SliderComponent = translate('translations')(
  withStyles(styles)(props => {
    const { classes, t } = props;
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="header-content mx-auto text-center">
              <h2>{t('LAUNDRY DRY & CLEAN')}</h2>
              <h2>{t('PICKUP & DROP OF')}</h2>
              <h5>{t('FREE DELIVERY')}</h5>
              <br></br>
              {t('ABOVE 22,00 EURO')}
              <br></br>
              <NavLink style={{ color: '#fff' }} to="/date/">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  {t('ORDER')}
                </Button>
              </NavLink>
              <br></br>
              {t('PRICES INCLUDING VAT')}
            </div>
          </div>
        </div>
      </header>
    );
  })
);
