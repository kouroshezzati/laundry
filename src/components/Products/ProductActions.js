export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const setProductNumber = (id, operator) => ({
  id,
  type: operator
});