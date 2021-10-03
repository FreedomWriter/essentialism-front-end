import {
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAILURE,
  REGISTER_POST_START,
  REGISTER_POST_SUCCESS,
  REGISTER_POST_FAILURE,
  LOGOUT,
} from "v2/utils";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_POST_SUCCESS:
      return {
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_POST_FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case REGISTER_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_POST_SUCCESS:
      return {
        ...action.payload,
        isAuthenticated: true,

        isLoading: false,
      };
    case REGISTER_POST_FAILURE:
      return {
        ...state,
        ...action.payload,
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

export default loginReducer;
