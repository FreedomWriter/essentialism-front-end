import React from "react";

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Modal(props) {
  const { children, onClose, isOpen } = props;

  return (
    <Dialog
      style={{ color: "red" }}
      isOpen={isOpen}
      onDismiss={onClose}
      allowPinchZoom
    >
      <button type="button" onClick={onClose}>
        X
      </button>
      {children}
    </Dialog>
  );
}

export default Modal;
