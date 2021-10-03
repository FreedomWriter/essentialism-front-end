import React from "react";

function DefaultModal(props) {
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

export default DefaultModal;
