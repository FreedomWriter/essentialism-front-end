import { auth } from "v2/utils";

const recoverAccount = ({ token, remember }) => {
  auth
    .recover(token, remember)
    .then((response) =>
      console.log("Logged in as %s", JSON.stringify({ response }))
    )
    .catch((error) => console.log("Failed to verify recover token: %o", error));
};

export default recoverAccount;
