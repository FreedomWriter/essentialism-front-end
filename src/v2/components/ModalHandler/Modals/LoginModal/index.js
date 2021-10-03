import { useDispatch } from "react-redux";
import { LoginForm } from "v2";
import { LOGIN_MODAL_CLOSE } from "v2/utils";
import Modal from "../../DefaultModal";

function LoginModal() {
  const dispatch = useDispatch();
  return (
    <Modal onClose={() => dispatch({ type: LOGIN_MODAL_CLOSE })}>
      <LoginForm />
    </Modal>
  );
}

export default LoginModal;
