import { useDispatch, useSelector } from "react-redux";
import { LoginForm, Modal } from "v2";
import { LOGIN_MODAL_CLOSE } from "v2/utils";

function LoginModal() {
  const dispatch = useDispatch();
  const { modalLogin } = useSelector((state) => state.modals);
  return (
    <Modal
      isOpen={modalLogin.isVisible}
      onClose={() => dispatch({ type: LOGIN_MODAL_CLOSE })}
      ariaLabel="Login Form"
    >
      <LoginForm />
    </Modal>
  );
}

export default LoginModal;
