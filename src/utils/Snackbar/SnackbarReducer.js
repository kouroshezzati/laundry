import { SNACKBAR_CLOSE, SNACKBAR_OPEN } from './SnackbarActions';

export default (
  state = { isSnackbarOpen: false, snackbarMessage: '' },
  action
) => {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return {
        ...state,
        isSnackbarOpen: true,
        snackbarMessage: action.snackbarMessage
      };
    case SNACKBAR_CLOSE:
      return { ...state, isSnackbarOpen: false, snackbarMessage: '' };
    default:
      return state;
  }
};
