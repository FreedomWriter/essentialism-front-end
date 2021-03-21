import React, { useState } from "react";
import { useDispatch } from "react-redux";

// actions
import {
  addToTempList,
  removeFromTempList,
} from "../../store/actions/user-values.actions";

// ui
import {
  ValueCheckBoxLabel,
  ValueContainer,
  StyledCheckBox,
} from "./ValuePrompt.styles";

function ValuePrompt({ className, info, customValue }) {
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
    <ValueContainer>
      <StyledCheckBox
        type="checkbox"
        id={info.value.toLowerCase()}
        name={info.value.toLowerCase()}
        className={className}
        checked={checkboxState}
        onChange={handleChange}
        value={info.value}
      />
      <ValueCheckBoxLabel htmlFor={info.value.toLowerCase()}>
        {info.value.toLowerCase()}
      </ValueCheckBoxLabel>
    </ValueContainer>
  );
}
export default ValuePrompt;
