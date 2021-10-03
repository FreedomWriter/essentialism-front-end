import {
  auth,
  USER_GET_START,
  USER_GET_SUCCESS,
  USER_GET_FAILURE,
  SIGNUP_POST_SUCCESS,
  SIGNUP_POST_FAILURE,
} from "v2/utils";

const addUserToStore = (user) => async (dispatch) => {
  const sanitizedUser = {
    fullName: user.user_metadata.full_name,
    id: user.id,
    role: user.role,
    email: user.email,
    createdAt: user.created_at,
    confirmedAt: user.confirmed_at,
    updatedAt: user.updated_at,
  };
  try {
    await dispatch({ type: USER_GET_START, payload: sanitizedUser });
    await dispatch({
      type: USER_GET_SUCCESS,
      payload: {
        user: sanitizedUser,
        error: false,
      },
    });
    await dispatch({
      type: SIGNUP_POST_SUCCESS,
    });
    return { user: sanitizedUser, error: false };
  } catch (err) {
    await dispatch({
      type: USER_GET_FAILURE,
      payload: {
        error: "Something went wrong, please try again.",
      },
    });
  }
  await dispatch({
    type: SIGNUP_POST_FAILURE,
  });
};
const register = ({ email, password }) => {
  auth
    .signup(email, password)
    .then((user) => addUserToStore(user))
    .catch((err) => ({ error: err }));
};

export default register;
