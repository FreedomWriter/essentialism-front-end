import { auth } from "v2/utils";

const getUser = () => {
  const user = auth.currentUser();
  if (user) {
    return { user, error: false };
  }
  return { error: "No user available" };
};

export default getUser;
