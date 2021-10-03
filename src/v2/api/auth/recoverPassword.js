import { auth } from "v2/utils";

const recoverPassword = (email) => {
  auth
    .requestPasswordRecovery(email)
    .then((response) => response)
    .catch((error) => error);
};

export default recoverPassword;
