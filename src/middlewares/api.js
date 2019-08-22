import axios from 'axios';
import { CALL_API } from '../constants';

const callApi = callAPI => {
  const { config } = callAPI;
  return axios({ ...config })
    .then(response => {
      //if action has response handler it wont handle it as other action
      if (callAPI.responseHandler) {
        return Promise.resolve(callAPI.responseHandler(response));
      }

      return Promise.resolve(response.data);
    })
    .catch(err => {
      if (err.response && err.response.data && err.response.data.error) {
        return Promise.reject(err.response.data.error);
      } else if (err.message) {
        return Promise.reject(err.message);
      } else {
        return Promise.reject(err);
      }
    });
};

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (!callAPI) {
    return next(action);
  }
  let { url } = callAPI.config;
  const { types } = callAPI;

  if (typeof url !== 'string') {
    throw new Error('Specify a string endpoint URL');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types');
  }
  if (types.every(type => typeof type !== 'string')) {
    throw new Error('Expected action types to be string');
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(callAPI)
    .then(response => next(actionWith({ response, type: successType })))
    .catch(error =>
      next(actionWith({ type: failureType, error }))
    );
};
