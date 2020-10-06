import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToTempList,
  removeFromTempList,
} from "../../store/actions/user-values.actions";

import styled from "styled-components";
import {
  // setRem,
  // setLetterSpacing,
  setTransition,
  // setColor,
  setShadow,
  // fadeIn,
} from "../../globals/styles";

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
    <div>
      <input
        type="checkbox"
        id={info.value.toLowerCase()}
        name={info.value.toLowerCase()}
        className={className}
        checked={checkboxState}
        onChange={handleChange}
        value={info.value}
      />
      <label className="checkbox-label" for={info.value.toLowerCase()}>
        {info.value.toLowerCase()}
      </label>
    </div>
  );
};

export default styled(Value)`
  margin: 2%;
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
`;
