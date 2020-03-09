import {
  USER_VALUES_LOAD_START,
  USER_VALUES_LOAD_SUCCESS,
  USER_VALUES_LOAD_FAILURE,
  USER_VALUES_POST_START,
  USER_VALUES_POST_SUCCESS,
  USER_VALUES_POST_FAILURE,
  USER_VALUES_PUT_START,
  USER_VALUES_PUT_SUCCESS,
  USER_VALUES_PUT_FAILURE,
  USER_VALUES_DELETE_START,
  USER_VALUES_DELETE_SUCCESS,
  USER_VALUES_DELETE_FAILURE
} from "../actions/user-values.actions";

const initialState = {
  userValues: [
    {
      id: "",
      value: "",
      value_description: "",
      remove: false
    }
  ]
};

const userValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_VALUES_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_VALUES_LOAD_SUCCESS:
      return {
        ...state,
        userValues: action.payload,
        isLoading: false
      };
    case USER_VALUES_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case USER_VALUES_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_VALUES_POST_SUCCESS:
      return {
        ...state,
        userValues: [...state.values, action.payload],
        isLoading: false
      };
    case USER_VALUES_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case USER_VALUES_PUT_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_VALUES_PUT_SUCCESS:
      return {
        ...state,
        userValues: [...state.values, action.payload]
      };
    case USER_VALUES_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case USER_VALUES_DELETE_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_VALUES_DELETE_SUCCESS:
      return {
        ...state,
        userValues: action.payload
      };
    case USER_VALUES_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userValuesReducer;
