import {
  LOGIN_MODAL_OPEN,
  LOGIN_MODAL_CLOSE,
  SIGNUP_MODAL_CLOSE,
  SIGNUP_MODAL_OPEN,
} from "v2/utils";

const initialState = {
  modalLogin: { isVisible: false },
  modalSignup: { isVisible: false },
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_MODAL_OPEN:
      return {
        ...state,
        modalLogin: { isVisible: true },
      };
    case LOGIN_MODAL_CLOSE:
      return {
        ...state,
        modalLogin: { isVisible: false },
      };
    case SIGNUP_MODAL_OPEN:
      return {
        ...state,
        modalSignup: { isVisible: true },
      };
    case SIGNUP_MODAL_CLOSE:
      return {
        ...state,
        modalSignup: { isVisible: false },
      };
    default:
      return state;
  }
};

export default modals;
