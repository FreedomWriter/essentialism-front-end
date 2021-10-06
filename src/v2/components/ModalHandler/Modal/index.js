import React from "react";

function Modal(props) {
  const { children, onClose } = props;
  return (
    <div>
      <button type="button" onClick={() => onClose()}>
        X (close the &quot;modal&quot;)
      </button>
      {children}
    </div>
  );
}

export default Modal;
