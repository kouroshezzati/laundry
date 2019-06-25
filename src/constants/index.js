export const port = process.env.PORT || 3000;
export const API_ROOT =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${port}/api`
    : 'https://www.bubblesonline.nl/api';

export const CALL_API = 'CALL API';

export const MESSAGE_ADD_SUCCESS = 'MESSAGE_ADD_SUCCESS';
export const MESSAGE_ADD_FAILURE = 'MESSAGE_ADD_FAILURE';
export const MESSAGE_REMOVE_SUCCESS = 'MESSAGE_REMOVE_SUCCESS';
export const MESSAGE_REMOVE_FAILURE = 'MESSAGE_REMOVE_FAILURE';
export const MESSAGE_EDIT_FAILURE = 'MESSAGE_EDIT_FAILURE';
export const MESSAGE_EDIT_SUCCESS = 'MESSAGE_EDIT_SUCCESS';
