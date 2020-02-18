import {
  ZEN_LOAD_START,
  ZEN_LOAD_SUCCESS,
  ZEN_LOAD_FAILURE
} from "../actions/zen.quotes.actions";

const initalState = {
  quote: "",
  isLoading: false
};

const zenReducer = (state = initalState, action) => {
  switch (action.type) {
    case ZEN_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case ZEN_LOAD_SUCCESS:
      console.log(`zenReducer: LOAD_SUCCESS: action.payload: `, action.payload);
      return {
        quote: action.payload,
        isLoading: false
      };
    case ZEN_LOAD_FAILURE:
      console.log(`zenReducer: LOAD_FAILURE: action.payload: `, action.payload);
      return {
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default zenReducer;
