import { auth } from "v2/utils";

const register = ({ email, password }) => {
  auth
    .signup(email, password)
    .then((response) => console.log("Confirmation email sent", response))
    .catch((error) => console.log("It's an error", error));
};

export default register;
