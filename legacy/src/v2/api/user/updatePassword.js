import { auth } from "v2/utils";

const updatePassword = (password) => {
  const currUser = auth.currentUser();
  currUser
    .update({ password })
    .then((user) => user)
    .catch((error) => error);
};

export default updatePassword;
