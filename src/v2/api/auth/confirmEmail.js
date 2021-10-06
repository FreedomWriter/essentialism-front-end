import { auth } from "v2/utils";

const confirmEmail = ({ token, remember }) => {
  auth
    .confirm(token, remember)
    .then((response) => response)
    .catch((error) => error);
};

export default confirmEmail;
