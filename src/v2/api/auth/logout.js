import { auth } from "v2/utils";

const logout = () => {
  const user = auth.currentUser();
  user
    .logout()
    .then((response) => console.log("User logged out"))
    .catch((error) => {
      console.log("Failed to logout user: %o", error);
    });
};

export default logout;
