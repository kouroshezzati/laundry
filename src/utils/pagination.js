export const pagination = (name, state, action) => {
  const nameUpperCase = String.prototype.toUpperCase.call(name);
  switch (action.type) {
    case `${nameUpperCase}_REQUEST`:
      return { ...state, isFetching: true };
    case `${nameUpperCase}_SUCCESS`:
      return {
        ...state,
        [`${name}`]: action.response[name],
        isFetching: false,
        page: action.response.page,
        rowsPerPage: action.response.rowsPerPage,
        count: action.response.count,
        pageCount: Math.ceil(
          action.response.count / action.response.rowsPerPage
        )
      };
    case `${nameUpperCase}_FAILED`:
      return {
        ...state,
        isFetching: false,
        [`${name}`]: [],
        error: action.message
      };
    default:
      return state;
  }
};

export const filter = (state, action) => {
  const _key = String.prototype.toUpperCase.call(action.key);
  if (action.type === `SET_FILTER_${_key}`) {
    return { ...state, [action.key]: action.value };
  } else {
    return state;
  }
};
