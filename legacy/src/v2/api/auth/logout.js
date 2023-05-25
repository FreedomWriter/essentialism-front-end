import { auth } from "v2/utils";

const logout = () => {
  const user = auth.currentUser();
  user
    .logout()
    .then((response) => response)
    .catch((error) => error);
};

export default logout;
