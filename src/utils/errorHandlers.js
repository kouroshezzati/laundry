import { MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAILURE } from '../constants';

export const errorHandlers = response => {
  console.log('error response is:', response);
  if (!response.ok) {
    console.log('error response is:', {});
    throw Error(response.statusText);
  }
  return response;
};

export const addMessages = text => {
  if (text.includes('SUCCESS')) {
    return MESSAGE_ADD_SUCCESS;
  } else if (text.includes('FAILURE')) {
    return MESSAGE_ADD_FAILURE;
  }
};

export const emailValidation = email => {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
    email
  );
};
export const isInValid = input => {
  return !input.current.value;
};
