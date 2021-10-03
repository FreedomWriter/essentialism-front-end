import { auth } from "v2/utils";

const recoverAccount = ({ token, remember }) => {
  auth
    .recover(token, remember)
    .then((response) => response)
    .catch((error) => error);
};

export default recoverAccount;
