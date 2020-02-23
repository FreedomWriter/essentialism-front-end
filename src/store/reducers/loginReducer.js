import {
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAILURE,
  REGISTER_POST_START,
  REGISTER_POST_SUCCESS,
  REGISTER_POST_FAILURE
} from "../actions/login.actions";

const initialState = {
  message: "",
  user: {
    id: null,
    username: ""
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_POST_SUCCESS:
      localStorage.setItem("userFromLogin", JSON.stringify(action.payload));
      return {
        state: action.payload,

        isLoading: false
      };
    case LOGIN_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case REGISTER_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_POST_SUCCESS:
      return {
        state: action.payload,

        isLoading: false
      };
    case REGISTER_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default loginReducer;