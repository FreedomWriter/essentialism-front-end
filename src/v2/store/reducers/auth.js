import {
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAILURE,
  SIGNUP_POST_START,
  SIGNUP_POST_SUCCESS,
  SIGNUP_POST_FAILURE,
  LOGOUT,
} from "v2/utils";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_POST_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_POST_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
      };
    case SIGNUP_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default login;
