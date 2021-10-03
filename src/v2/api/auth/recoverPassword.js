import { auth } from "v2/utils";

const recoverPassword = (email) => {
  auth
    .requestPasswordRecovery(email)
    .then((response) => console.log("Recovery email sent", { response }))
    .catch((error) => console.log("Error sending recovery mail: %o", error));
};

export default recoverPassword;
