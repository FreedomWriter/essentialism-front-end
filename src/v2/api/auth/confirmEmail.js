import { auth } from "v2/utils";

const confirmEmail = ({ token, remember }) => {
  auth
    .confirm(token, remember)
    .then((response) => {
      console.log("Confirmation email sent", JSON.stringify({ response }));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default confirmEmail;
