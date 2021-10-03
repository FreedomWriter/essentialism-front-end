import { auth } from "v2/utils";

const updateEmail = (email) => {
  const currUser = auth.currentUser();
  currUser
    .update({ email })
    .then((user) => console.log("Updated user %s", user))
    .catch((error) => {
      console.log("Failed to update user: %o", error);
      throw error;
    });
};

export default updateEmail;
