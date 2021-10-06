import { useDispatch, useSelector } from "react-redux";
import { SignupForm, Modal } from "v2";
import { SIGNUP_MODAL_CLOSE } from "v2/utils";

function SignupModal() {
  const dispatch = useDispatch();
  const { modalSignup } = useSelector((state) => state.modals);
  return (
    <Modal
      isOpen={modalSignup.isVisible}
      onClose={() => dispatch({ type: SIGNUP_MODAL_CLOSE })}
    >
      <SignupForm />
    </Modal>
  );
}

export default SignupModal;
