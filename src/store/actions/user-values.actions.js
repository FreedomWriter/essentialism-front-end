import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const USER_VALUES_LOAD_START = "USER_VALUES_LOAD_START";
export const USER_VALUES_LOAD_SUCCESS = "USER_VALUES_LOAD_SUCCESS";
export const USER_VALUES_LOAD_FAILURE = "USER_VALUES_LOAD_FAILURE";

export const USER_VALUES_POST_START = "USER_VALUES_POST_START";
export const USER_VALUES_POST_SUCCESS = "USER_VALUES_POST_SUCCESS";
export const USER_VALUES_POST_FAILURE = "USER_VALUES_POST_FAILURE";

export const USER_VALUES_PUT_START = "USER_VALUES_PUT_START";
export const USER_VALUES_PUT_SUCCESS = "USER_VALUES_PUT_SUCCESS";
export const USER_VALUES_PUT_FAILURE = "USER_VALUES_PUT_FAILURE";

export const USER_VALUES_DELETE_START = "USER_VALUES_DELETE_START";
export const USER_VALUES_DELETE_SUCCESS = "USER_VALUES_DELETE_SUCCESS";
export const USER_VALUES_DELETE_FAILURE = "USER_VALUES_DELETE_FAILURE";

export const getUserValues = () => dispatch => {
  dispatch({ type: USER_VALUES_LOAD_START });
  return axiosWithAuth()
    .get(`/user/${1}/values`)
    .then(res =>
      dispatch({
        type: USER_VALUES_LOAD_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: USER_VALUES_LOAD_FAILURE,
        payload: "error loading values" + err
      });
    });
};

export const postUserValues = value => dispatch => {
  dispatch({ type: USER_VALUES_POST_START, payload: value });
  return axiosWithAuth()
    .post(`/user/values`, value)
    .then(res => {
      dispatch({
        type: USER_VALUES_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: USER_VALUES_POST_FAILURE,
        payload: "error posting data" + err
      });
    });
};

export const putUserValues = value => dispatch => {
  dispatch({ type: USER_VALUES_PUT_START, payload: value });
  return axiosWithAuth()
    .put(`/user/${1}/values`, value)
    .then(res => {
      dispatch({
        type: USER_VALUES_PUT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: USER_VALUES_PUT_FAILURE,
        payload: "error putting values data" + err
      });
    });
};

export const deleteUserValues = id => dispatch => {
  dispatch({ type: USER_VALUES_DELETE_START });
  return axiosWithAuth()
    .delete(`/user/${1}/values`)
    .then(res => {
      dispatch({
        type: USER_VALUES_DELETE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: USER_VALUES_DELETE_FAILURE,
        payload: "error deleting values data" + err
      });
    });
};
