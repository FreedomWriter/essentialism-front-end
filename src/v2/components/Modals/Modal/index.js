import React from "react";
import "@reach/dialog/styles.css";
import { Modal as Container, CloseModal } from "./styled";

function Modal(props) {
  const { children, onClose, isOpen, ariaLabel } = props;

  return (
    <Container
      isOpen={isOpen}
      onDismiss={onClose}
      allowPinchZoom
      aria-label={ariaLabel}
    >
      <CloseModal type="button" onClick={onClose}>
        X
      </CloseModal>
      {children}
    </Container>
  );
}

export default Modal;
