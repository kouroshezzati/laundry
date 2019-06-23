export const port = process.env.PORT || 3001;
export const originAccess = process.env.REACT_APP_ORIGIN || 'http://localhost';

export const CALL_API = 'CALL API';
export const API_ROOT = `http://bubblesonline.nl/api`;
// export const API_ROOT = `${originAccess}:${port}`;

export const MESSAGE_ADD_SUCCESS = 'MESSAGE_ADD_SUCCESS';
export const MESSAGE_ADD_FAILURE = 'MESSAGE_ADD_FAILURE';
export const MESSAGE_REMOVE_SUCCESS = 'MESSAGE_REMOVE_SUCCESS';
export const MESSAGE_REMOVE_FAILURE = 'MESSAGE_REMOVE_FAILURE';
export const MESSAGE_EDIT_FAILURE = 'MESSAGE_EDIT_FAILURE';
export const MESSAGE_EDIT_SUCCESS = 'MESSAGE_EDIT_SUCCESS';
