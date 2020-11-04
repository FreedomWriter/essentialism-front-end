import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToTempList,
  removeFromTempList,
} from "../../store/actions/user-values.actions";

import { StyledValue, StyledLabel, StyledInput } from "./Value.styles";

const Value = ({ className, info, numOfSelections, setNumofSelections }) => {
  const dispatch = useDispatch();
  const [checkboxState, setCheckboxState] = useState(false);

  function handleChange(e) {
    if (!checkboxState) {
      setNumofSelections(numOfSelections + 1);
      dispatch(addToTempList(e.target.value));
    } else {
      setNumofSelections(numOfSelections - 1);
      dispatch(removeFromTempList(e.target.value));
    }
    setCheckboxState(!checkboxState);
  }

  return (
    <StyledValue>
      <StyledInput
        type="checkbox"
        id={info.value.toLowerCase()}
        name={info.value.toLowerCase()}
        className={className}
        checked={checkboxState}
        onChange={handleChange}
        value={info.value}
      />
      <StyledLabel htmlFor={info.value.toLowerCase()}>
        {info.value.toLowerCase()}
      </StyledLabel>
    </StyledValue>
  );
};
export default Value;
