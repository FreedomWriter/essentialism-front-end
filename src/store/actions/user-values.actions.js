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

export const REMOVE_VALUE = "REMOVE_VALUE";
export const TOGGLE_VALUE = "TOGGLE_VALUE";

export const ADD_TO_TOP_TEMP_LIST = "ADD_TO_TOP_TEMP_LIST";

export const getUserValues = userId => dispatch => {
  dispatch({ type: USER_VALUES_LOAD_START });
  return axiosWithAuth()
    .get(`/user/${userId}/values`)
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

export const postUserValues = (id, values) => dispatch => {
  dispatch({ type: USER_VALUES_POST_START, payload: values });
  return axiosWithAuth()
    .post(`/user/${id}/values`, values)
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
      return alert("CREATE ERROR MODAL FOR FAILED POSTING OF VALUES");
    });
};

export const putUserValues = value => dispatch => {
  dispatch({ type: USER_VALUES_PUT_START, payload: value });
  return axiosWithAuth()
    .put(`/user/${value.id}/values`, value)
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
    .delete(`/user/${id}/values`)
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

export const toggleValue = value => dispatch => {
  dispatch({
    type: TOGGLE_VALUE,
    payload: value
  });
};

export const removeToggledValue = value => dispatch => {
  dispatch({
    type: REMOVE_VALUE,
    payload: value
  });
};

export const addToTempList = value => dispatch => {
  dispatch({
    type: ADD_TO_TOP_TEMP_LIST,
    payload: value
  });
};
