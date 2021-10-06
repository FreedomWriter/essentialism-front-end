import {
  ZEN_LOAD_START,
  ZEN_LOAD_SUCCESS,
  ZEN_LOAD_FAILURE,
} from "../actions/zen.quotes.actions";

const initalState = {
  quote: "",
  isLoading: false,
};

const zenReducer = (state = initalState, action) => {
  switch (action.type) {
    case ZEN_LOAD_START:
      return {
        ...state,
        isLoading: true,
      };
    case ZEN_LOAD_SUCCESS:
      return {
        quote: action.payload,
        isLoading: false,
      };
    case ZEN_LOAD_FAILURE:
      return {
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default zenReducer;
