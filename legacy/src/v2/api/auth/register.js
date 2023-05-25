import { auth } from "v2/utils";

const register = ({ email, password }) =>
  auth
    .signup(email, password)
    .then(() => ({
      error: false,
    }))
    .catch((err) => ({ error: err.message }));
export default register;
