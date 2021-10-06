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
  USER_VALUES_DELETE_FAILURE,
  TOGGLE_VALUE,
  REMOVE_VALUE,
  ADD_TO_TOP_TEMP_LIST,
  REMOVE_FROM_TOP_TEMP_LIST,
} from "../actions/user-values.actions";

const initialState = {
  userValues: [],
  tempList: [],
};

const userValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_VALUES_LOAD_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_VALUES_LOAD_SUCCESS:
      return {
        ...state,
        userValues: action.payload,
        isLoading: false,
      };
    case USER_VALUES_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case USER_VALUES_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_VALUES_POST_SUCCESS:
      return {
        ...state,
        userValues: [...state.userValues, action.payload],
        isLoading: false,
      };
    case USER_VALUES_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case USER_VALUES_PUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_VALUES_PUT_SUCCESS:
      // const filteredState = state.userValues.map((stateValue) => {
      //   if (stateValue.user_value_id === action.payload.user_value_id) {
      //     return action.payload;
      //   } else {
      //     return stateValue;
      //   }
      // });
      return {
        ...state,
        userValues: state.userValues.map((stateValue) => {
          if (stateValue.user_value_id === action.payload.user_value_id) {
            return action.payload;
          }
          return stateValue;
        }),
      };
    case USER_VALUES_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case USER_VALUES_DELETE_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_VALUES_DELETE_SUCCESS:
      return {
        ...state,
        userValues: action.payload,
      };
    case USER_VALUES_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case REMOVE_VALUE:
      return {
        ...state,
        tempList:
          state.tempList.length > 0 &&
          state.tempList.filter((value) => !value.remove),
      };
    case TOGGLE_VALUE:
      return {
        ...state,

        tempList: state.tempList.map((value) => {
          if (value === action.payload)
            return {
              ...value,
              remove: !value.remove,
            };
          return value;
        }),
      };
    case ADD_TO_TOP_TEMP_LIST:
      return {
        ...state,
        tempList: [...state.tempList, action.payload],
      };
    case REMOVE_FROM_TOP_TEMP_LIST:
      return {
        ...state,
        tempList: state.tempList.filter((val) => val.value !== action.payload),
      };
    default:
      return state;
  }
};

export default userValuesReducer;
