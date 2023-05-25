import {
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
    token: {
      accessToken: user.token.access_token,
      refreshToken: user.token.refresh_token,
      expiresIn: user.token.expires_in,
      expiresAt: user.token.expires_at,
    },
    createdAt: user.created_at,
    confirmedAt: user.confirmed_at,
    updatedAt: user.updated_at,
  };
  try {
    dispatch({ type: USER_GET_START, payload: sanitizedUser });
    dispatch({
      type: USER_GET_SUCCESS,
      payload: {
        user: sanitizedUser,
        error: false,
      },
    });
    dispatch({
      type: SIGNUP_POST_SUCCESS,
    });
    return { user: sanitizedUser, error: false };
  } catch (err) {
    dispatch({
      type: USER_GET_FAILURE,
      payload: {
        error: "Something went wrong, please try again.",
      },
    });
    dispatch({
      type: SIGNUP_POST_FAILURE,
    });
    return { error: err };
  }
};

export default addUserToStore;
