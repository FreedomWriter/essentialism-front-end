import { auth } from "v2/utils";

const login = ({ email, password, remember }) => {
  auth
    .login(email, password, remember)
    .then((response) => console.log(JSON.stringify(response)))
    .catch((error) => console.log(JSON.stringify(error)));
};

export default login;
