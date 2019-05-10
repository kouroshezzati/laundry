export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE';
export const SNACKBAR_OPEN = 'SNACKBAR_OPEN';

export const closeSnackbar = () => ({
  type: SNACKBAR_CLOSE
});

export const openSnackbar = snackbarMessage => dispatch => {
  setTimeout(() => {
    dispatch(closeSnackbar());
  }, 2000);
  return dispatch({
    type: SNACKBAR_OPEN,
    isSnackbarOpen: true,
    snackbarMessage
  });
};
