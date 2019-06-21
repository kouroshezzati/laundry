import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './style.css';
import { translate } from 'react-i18next';

class ServicesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <button
          ref={node => {
            this.anchorEl = node;
          }}
          className="menuButton nav-link js-scroll-trigger"
          aria-owns={this.state.open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {t('services')}
        </button>
        <Popper
          open={this.state.open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <NavLink to="/services/laundry_wash_and_fold">
                      <MenuItem>{t('Lundry wash & Fold')}</MenuItem>
                    </NavLink>
                    <NavLink to="/services/dry_clean">
                      <MenuItem>{t('Dry Clean')}</MenuItem>
                    </NavLink>
                    <NavLink to="/services/press">
                      <MenuItem>{t('Press')}</MenuItem>
                    </NavLink>
                    <NavLink to="/services/bedroom">
                      <MenuItem>{t('Bedroom')}</MenuItem>
                    </NavLink>
                    <NavLink to="/services/house_hold">
                      <MenuItem>{t('House Hold')}</MenuItem>
                    </NavLink>
                    <NavLink to="/services/carpets">
                      <MenuItem>{t('Carpets')}</MenuItem>
                    </NavLink>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default withRouter(translate('translations')(ServicesMenu));
