import { useDispatch } from "react-redux";
import { SignupForm } from "v2";
import { SIGNUP_MODAL_CLOSE } from "v2/utils";
import Modal from "../../DefaultModal";

function SignupModal() {
  const dispatch = useDispatch();
  return (
    <Modal onClose={() => dispatch({ type: SIGNUP_MODAL_CLOSE })}>
      <SignupForm />
    </Modal>
  );
}

export default SignupModal;
