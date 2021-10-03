import {
  auth,
  LOGIN_POST_FAILURE,
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
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
    dispatch({ type: LOGIN_POST_START, payload: sanitizedUser });
    return dispatch({
      type: LOGIN_POST_SUCCESS,
      payload: {
        user: sanitizedUser,
        error: false,
      },
    });
  } catch (err) {
    dispatch({
      type: LOGIN_POST_FAILURE,
      payload: {
        error: "Something went wrong, please try again.",
      },
    });
  }
};

const login = ({ email, password, remember }) => {
  auth
    .login(email, password, remember)
    .then((user) => addUserToStore(JSON.stringify(user)))
    .catch((error) => ({
      error: JSON.stringify(error),
    }));
};

export default login;
