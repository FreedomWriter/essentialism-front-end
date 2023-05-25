import { auth } from "v2/utils";

const updateEmail = (email) => {
  const currUser = auth.currentUser();
  currUser
    .update({ email })
    .then((user) => user)
    .catch((error) => error);
};

export default updateEmail;
