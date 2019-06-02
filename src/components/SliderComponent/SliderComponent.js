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
            <div className="header-content mx-auto my-auto text-center">
              <h1>{t('Just order right now')}</h1>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                <NavLink style={{ color: '#fff' }} to="/date/">
                  {t('Order now')}
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  })
);
