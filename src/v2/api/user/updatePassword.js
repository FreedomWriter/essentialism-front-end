import { auth } from "v2/utils";

const updatePassword = (password) => {
  const currUser = auth.currentUser();
  currUser
    .update({ password })
    .then((user) => console.log("Updated user %s", user))
    .catch((error) => {
      console.log("Failed to update user: %o", error);
      throw error;
    });
};

export default updatePassword;
