import React from "react";
import "@reach/dialog/styles.css";
import { Container } from "./styled";

function Modal(props) {
  const { children, onClose, isOpen } = props;

  return (
    <Container isOpen={isOpen} onDismiss={onClose} allowPinchZoom>
      <button type="button" onClick={onClose}>
        X
      </button>
      {children}
    </Container>
  );
}

export default Modal;
