import { useSelector } from "react-redux";

import { LoginModal, SignupModal } from "./Modals";

function ModalHandler() {
  const { modalLogin, modalSignup } = useSelector((state) => state.modals);

  return (
    <>
      {modalLogin.isVisible && <LoginModal />}
      {modalSignup.isVisible && <SignupModal />}
    </>
  );
}

export default ModalHandler;
