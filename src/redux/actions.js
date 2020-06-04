import { GET_BREEDS_LOADING, GET_BREEDS_ERROR, GET_BREEDS_SUCCESS } from './actionTypes';
import { request } from './axios';

const getBreedsLoading = () => ({ type: GET_BREEDS_LOADING });
const getBreedsError = (error) => ({ type: GET_BREEDS_ERROR, payload: error });
const getBreedsSuccess = (payload) => ({ type: GET_BREEDS_SUCCESS, payload });

export const getCatsBreeds = (path, params, dispatch) => {
  dispatch(getBreedsLoading());

  return request
    .get(path, { params })
    .then((res) => {
      const { data, headers } = res;

      dispatch(getBreedsSuccess({ data, totalPages: headers['pagination-count'] }));

      return Promise.resolve();
    })
    .catch((error) => {
      dispatch(getBreedsError(error.message));

      return Promise.reject(error.message);
    });
};
