import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const VALUES_LOAD_START = "VALUES_LOAD_START";
export const VALUES_LOAD_SUCCESS = "VALUES_LOAD_SUCCESS";
export const VALUES_LOAD_FAILURE = "VALUES_LOAD_FAILURE";

export const VALUES_POST_START = "VALUES_POST_START";
export const VALUES_POST_SUCCESS = "VALUES_POST_SUCCESS";
export const VALUES_POST_FAILURE = "VALUES_POST_FAILURE";

export const VALUES_PUT_START = "VALUES_PUT_START";
export const VALUES_PUT_SUCCESS = "VALUES_PUT_SUCCESS";
export const VALUES_PUT_FAILURE = "VALUES_PUT_FAILURE";

export const VALUES_DELETE_START = "VALUES_DELETE_START";
export const VALUES_DELETE_SUCCESS = "VALUES_DELETE_SUCCESS";
export const VALUES_DELETE_FAILURE = "VALUES_DELETE_FAILURE";

// export const ADD_TO_TOP_LIST = "ADD_TO_TOP_LIST";
// export const ADD_TO_TOP_TEMP_LIST = "ADD_TO_TOP_TEMP_LIST";
// export const REMOVE_VALUE = "REMOVE_VALUE";
// export const TOGGLE_VALUE = "TOGGLE_VALUE";
export const ADD_VALUE_DESCRIPTION = "ADD_VALUE_DESCRIPTION";

export const getValues = () => (dispatch) => {
  dispatch({ type: VALUES_LOAD_START });
  return axiosWithAuth()
    .get(`/values`)
    .then((res) => {
      dispatch({
        type: VALUES_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: VALUES_LOAD_FAILURE,
        payload: "error loading values" + err.message,
      });
    });
};

export const postValues = (value) => (dispatch) => {
  dispatch({ type: VALUES_POST_START, payload: value });
};

export const putValues = (value) => (dispatch) => {
  dispatch({ type: VALUES_PUT_START, payload: value });
  return axiosWithAuth()
    .post(`/values`, value)
    .then((res) => {
      dispatch({
        type: VALUES_PUT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: VALUES_PUT_FAILURE,
        payload: "error putting values data" + err,
      });
    });
};

export const deleteValues = (id) => (dispatch) => {
  dispatch({ type: VALUES_DELETE_START });
  return axiosWithAuth()
    .delete(`/values/${id}`)
    .then((res) => {
      dispatch({
        type: VALUES_DELETE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: VALUES_DELETE_FAILURE,
        payload: "error deleting values data" + err,
      });
    });
};
// export const confirmTopTempList = value => dispatch => {
//   dispatch({
//     type: ADD_TO_TOP_TEMP_LIST,
//     payload: value
//   });
// };

// export const confirmTopList = value => dispatch => {
//   dispatch({
//     type: ADD_TO_TOP_LIST,
//     payload: value
//   });
// };

// export const toggleValue = value => dispatch => {
//   dispatch({
//     type: TOGGLE_VALUE,
//     payload: value
//   });
// };

// export const removeToggledValue = value => dispatch => {
//   dispatch({
//     type: REMOVE_VALUE,
//     payload: value
//   });
// };

export const addValueDescription = (id, value) => (dispatch) => {
  return dispatch({
    type: ADD_VALUE_DESCRIPTION,
    payload: { id: id, description: value },
  });
};
