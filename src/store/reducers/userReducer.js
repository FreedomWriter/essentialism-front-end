import {
  USER_GET_START,
  USER_GET_SUCCESS,
  USER_GET_FAILURE,
  USER_POST_START,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_PUT_START,
  USER_PUT_SUCCESS,
  USER_PUT_FAILURE,
  USER_DELETE_START,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE
} from "../actions/user.actions";
const localUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: localUser || {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_GET_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_GET_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case USER_GET_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case USER_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_POST_SUCCESS:
      return {
        user: action.payload,
        isLoading: false
      };
    case USER_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case USER_PUT_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_PUT_SUCCESS:
      return {
        ...state,
        user: action.payload[0]
      };
    case USER_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case USER_DELETE_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        user: {},
        isLoading: false
      };
    case USER_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
