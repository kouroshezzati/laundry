import { PICKUP_DATE, DELIVER_DATE } from './OrderActions';

export default (state = {}, action) => {
  switch (action.type) {
    case PICKUP_DATE:
      return {
        ...state,
        pickupDate: action.date.toString(),
        deliverDate: undefined
      };
    case DELIVER_DATE:
      return { ...state, deliverDate: action.date.toString() };
    default:
      return state;
  }
};
