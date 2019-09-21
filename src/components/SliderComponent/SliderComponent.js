import React from 'react';
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { translate } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import coat from './img/coat.jpg';
import fabrics from './img/fabrics.jpg';
import rags from './img/rags.jpg';
import towels from './img/towels.jpg';
import { Slide } from 'react-slideshow-image';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
};
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});
const contentSlider = ({ t, classes }) => (
  <header className="masthead">
    <div
      style={{
        color: 'yellow',
        height: 'fit-content'
      }}
      className="header-content mx-auto text-center"
    >
      <div className="message-wrapper">
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
  </header>
);
class SliderComponent extends React.Component {
  render() {
    const images = [coat, fabrics, rags, towels];
    return (
      <React.Fragment>
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${images[0]})`,
                  backgroundSize: 'cover'
                }}
              >
                {contentSlider(this.props)}
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${images[1]})`,
                  backgroundSize: 'cover'
                }}
              >
                {contentSlider(this.props)}
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${images[2]})`,
                  backgroundSize: 'cover'
                }}
              >
                {contentSlider(this.props)}
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${images[3]})`,
                  backgroundSize: 'cover'
                }}
              >
                {contentSlider(this.props)}
              </div>
            </div>
          </Slide>
        </div>
      </React.Fragment>
    );
  }
}
export default translate('translations')(withStyles(styles)(SliderComponent));
