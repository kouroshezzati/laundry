import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import {
  PICKUP_DATE,
  DELIVER_DATE,
  PICKUP_TIME,
  DELIVER_TIME
} from './OrderConstants';
import { translate } from 'react-i18next';
import { setDate } from './OrderActions';
import { connect } from 'react-redux';
import './style.css';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Page from '../index';
import pickupImg from '../../assets/images/pickup.png';
import { withRouter } from 'react-router-dom';

export const DateTimeComponent = ({
  labelText,
  onSetDateHandler,
  dateType,
  ...props
}) => {
  return (
    <div className="row">
      <div className="col-md-5 date-label-wrapper">
        <label htmlFor={dateType}>{labelText}</label>
      </div>
      <div className="col-md-7">
        <DatePicker
          {...props}
          id={dateType}
          placeholderText={labelText}
          withPortal
          onChange={date => {
            onSetDateHandler(date, dateType);
          }}
          className="mt-2 mb-2 form-control text-center"
        />
      </div>
    </div>
  );
};

export class DateComponent extends Component {
  setDate = (date, type) => {
    this.props.setDate(date, type);
  };

  render() {
    const {
      pickupDate,
      pickupTime,
      deliverDate,
      deliverTime,
      t,
      location
    } = this.props;
    const minTime = setHours(setMinutes(new Date(), 0), 9);
    const maxTime = setHours(setMinutes(new Date(), 0), 17);
    let _pD = pickupDate ? new Date(pickupDate) : undefined;
    let _pT = pickupTime ? new Date(pickupTime) : minTime;
    let _dD = deliverDate ? new Date(deliverDate) : undefined;
    let _dT = deliverTime ? new Date(deliverTime) : minTime;
    const minDateDeliverTime = new Date(_pD);
    minDateDeliverTime.setDate(minDateDeliverTime.getDate() + 1);
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    return (
      <Page>
        <div className="main-section align-content-center flex-wrap fancy-bg">
          <div className="order-form-wrapper form-wrapper m-2 mx-auto p-2">
            <div className="row">
              <img alt="laundry" className="pickup-img" src={pickupImg} />
            </div>
            <div className="date-picker-wrapper row">
              <div className="col-md-6">
                <DateTimeComponent
                  labelText={t('Pickup date')}
                  dateType={PICKUP_DATE}
                  selected={_pD}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  onSetDateHandler={this.setDate}
                />
              </div>
              <div className="col-md-6">
                <DateTimeComponent
                  labelText={t('Pickup time')}
                  dateType={PICKUP_TIME}
                  selected={_pT}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                  minTime={minTime}
                  maxTime={maxTime}
                  onSetDateHandler={this.setDate}
                />
              </div>
              <div className="col-md-6">
                <DateTimeComponent
                  labelText={t('Deliver date')}
                  dateType={DELIVER_DATE}
                  selected={_dD}
                  minDate={minDateDeliverTime}
                  dateFormat="MMMM d, yyyy"
                  onSetDateHandler={this.setDate}
                />
              </div>
              <div className="col-md-6">
                <DateTimeComponent
                  labelText={t('Deliver time')}
                  dateType={DELIVER_TIME}
                  selected={_dT}
                  setMin
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                  minTime={setHours(setMinutes(new Date(), 0), 9)}
                  maxTime={setHours(setMinutes(new Date(), 0), 17)}
                  onSetDateHandler={this.setDate}
                />
              </div>
              <div className="col-md-6 mb-2">
                <NavLink className="nav-button" to="/">
                  <Button fullWidth color="secondary" variant="contained">
                    {t('Back to home page')}
                  </Button>
                </NavLink>
              </div>
              <div className="col-md-6">
                {!deliverDate && (
                  <Button disabled fullWidth variant="contained">
                    {t('Order')}
                  </Button>
                )}
                {deliverDate && (
                  <NavLink
                    className="nav-button"
                    to={
                      type === 'especial_offer'
                        ? '/order?type=especial_offer'
                        : '/order'
                    }
                  >
                    <Button
                      disabled={!deliverDate}
                      fullWidth
                      color="primary"
                      variant="contained"
                    >
                      {t('Order')}
                    </Button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

DateComponent = connect(
  state => ({ ...state.order }),
  { setDate }
)(DateComponent);

export default withRouter(translate('translations')(DateComponent));
