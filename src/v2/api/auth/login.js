import { auth } from "v2/utils";

import { addUserToStore } from "v2/api";

const login = ({ email, password, remember }) =>
  auth
    .login(email, password, remember)
    .then((user) => {
      if (user) {
        addUserToStore(user);
        return { user, error: false };
      }
      return { user: false, error: "Something went wrong, please try again." };
    })
    .catch((error) => ({ error }));

export default login;
