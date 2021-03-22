import React, { useState } from "react";
import { useDispatch } from "react-redux";

// actions
import {
  addToTempList,
  removeFromTempList,
} from "../../store/actions/user-values.actions";

// ui

function ValuePrompt({ info, customValue }) {
  const dispatch = useDispatch();
  const [checkboxState, setCheckboxState] = useState(
    customValue ? true : false
  );

  function handleChange(e) {
    if (!checkboxState) {
      dispatch(addToTempList(e.target.value));
    } else {
      dispatch(removeFromTempList(e.target.value));
    }
    setCheckboxState(!checkboxState);
  }

  return (
    <div>
      <input
        type="checkbox"
        id={info.value.toLowerCase()}
        name={info.value.toLowerCase()}
        checked={checkboxState}
        onChange={handleChange}
        value={info.value}
      />
      <label htmlFor={info.value.toLowerCase()}>
        {info.value.toLowerCase()}
      </label>
    </div>
  );
}
export default ValuePrompt;
