import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { translate } from 'react-i18next';

class CustomSnackbar extends React.Component {
  render() {
    const { isSnackbarOpen, onHandlerClose, snackbarMessage, t } = this.props;
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={isSnackbarOpen}
        onClose={onHandlerClose}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">{t(snackbarMessage)}</span>}
      />
    );
  }
}

CustomSnackbar.propTypes = {
  isSnackbarOpen: PropTypes.bool.isRequired,
  onHandlerClose: PropTypes.func.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default translate('translations')(CustomSnackbar);
