import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

export const REGISTER_POST_START = "REGISTER_POST_START";
export const REGISTER_POST_SUCCESS = "REGISTER_POST_SUCCESS";
export const REGISTER_POST_FAILURE = "REGISTER_POST_FAILURE";

export const postLogin = value => async dispatch => {
  try {
    dispatch({ type: LOGIN_POST_START, payload: value });
    const user = await axiosWithAuth().post(`/auth/login`, value);
    localStorage.setItem("token", JSON.stringify(user.data.token));
    return dispatch({
      type: LOGIN_POST_SUCCESS,
      payload: { welcome: user.data.message, user: user.data.user.username }
    });
  } catch (err) {
    dispatch({
      type: LOGIN_POST_FAILURE,
      payload: err
    });
  }
};

export const postRegister = value => async dispatch => {
  console.log(value);
  try {
    dispatch({ type: REGISTER_POST_START, value });
    const user = await axiosWithAuth().post(`/auth/register`, value);
    localStorage.setItem("token", JSON.stringify(user.data.token));
    console.log(user);
    const registering = await dispatch({
      type: REGISTER_POST_SUCCESS,
      payload: {
        welcome: user.data.message,
        user: { id: user.data.user.id, username: user.data.user.username }
      }
    });
    return dispatch({
      type: LOGIN_POST_SUCCESS,
      payload: {
        welcome: user.data.message,
        user: { id: user.data.user.id, username: user.data.user.username }
      }
    });
  } catch (err) {
    dispatch({
      type: REGISTER_POST_FAILURE,
      payload: err.message
    });
  }
};
