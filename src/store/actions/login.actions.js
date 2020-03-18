import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { getUser } from "../actions/user.actions";

export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

export const REGISTER_POST_START = "REGISTER_POST_START";
export const REGISTER_POST_SUCCESS = "REGISTER_POST_SUCCESS";
export const REGISTER_POST_FAILURE = "REGISTER_POST_FAILURE";

export const LOGOUT = "LOGOUT";

export const postLogin = value => async dispatch => {
  try {
    dispatch({ type: LOGIN_POST_START, payload: value });
    const login = await axiosWithAuth().post(`/auth/login`, value);
    console.log(`login.actions: postLogin: login: `, login);
    const user = await axiosWithAuth().get(`/user/${login.data.user.id}`);
    console.log(`login.actions: postLogin: user: `, user);
    localStorage.setItem("token", JSON.stringify(login.data.token));
    return dispatch({
      type: LOGIN_POST_SUCCESS,
      payload: {
        message: `Welcome, ${user.data.username}`,
        user: {
          id: user.data.id,
          username: user.data.username
        }
      }
    });
  } catch (err) {
    dispatch({
      type: LOGIN_POST_FAILURE,
      payload: {
        message: err.response.data.message,
        error: err.response.data.error
      }
    });
  }
};

export const postRegister = value => async dispatch => {
  try {
    dispatch({ type: REGISTER_POST_START, value });
    const user = await axiosWithAuth().post(`/auth/register`, value);
    localStorage.setItem("token", JSON.stringify(user.data.token));
    return dispatch({
      type: REGISTER_POST_SUCCESS,
      payload: {
        message: user.data.message,
        user: {
          id: user.data.user.id,
          username: user.data.user.username
        }
      }
    });
  } catch (err) {
    dispatch({
      type: REGISTER_POST_FAILURE,
      payload: {
        message: err.response.data.message,
        error: err.response.data.error
      }
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
