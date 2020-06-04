import { GET_BREEDS_LOADING, GET_BREEDS_SUCCESS, GET_BREEDS_ERROR } from 'redux/actionTypes';
import { transformToList, transformToHash } from 'redux/utils/transforms';

const initialState = {
  hash: {},
  list: [],
  loading: false,
  totalPages: null,
  error: false,
};

const reducerState = {
  [GET_BREEDS_LOADING]: (state) => ({
    ...state,
    loading: true,
    totalPages: null,
  }),

  [GET_BREEDS_SUCCESS]: (state, payload) => ({
    ...state,
    hash: transformToHash(payload.data),
    list: transformToList(payload.data),
    loading: false,
    totalPages: payload.totalPages,
  }),

  [GET_BREEDS_ERROR]: (state, payload) => ({
    ...state,
    error: payload,
    hash: {},
    list: [],
    loading: false,
    totalPages: null,
  }),
};

const reducer = (state = initialState, action) => {
  const newState = reducerState[action.type];

  if (!newState) {
    return state;
  }

  return newState(state, action.payload);
};

export default reducer;
