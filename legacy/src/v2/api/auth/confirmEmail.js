import { auth } from "v2/utils";

const confirmEmail = ({ token, remember }) => {
  auth
    .confirm(token, remember)
    .then((response) => {
      if (response) {
        return { error: false };
      }
      return { error: true };
    })
    .catch((err) => ({ error: true, err }));
};

export default confirmEmail;
