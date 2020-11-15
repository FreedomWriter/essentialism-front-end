import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTempList } from "../../store/actions/user-values.actions";

import {
  EnterValuesFormContainer,
  StyledValueLabel,
  StyledValueInput,
  AboutButton,
} from "./EnterValuesForm.styles";

export default function EnterValuesForm() {
  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState("");
  function handleUsersValues(e) {
    e.preventDefault();
    userValue !== "" && dispatch(addToTempList(userValue));
    setUserValue("");
  }

  function handleChange(e) {
    setUserValue(e.target.value);
  }
  return (
    <EnterValuesFormContainer onSubmit={handleUsersValues}>
      <StyledValueLabel htmlFor="my-value">Enter A Value</StyledValueLabel>
      <StyledValueInput
        type="text"
        value={userValue}
        onChange={handleChange}
        id="my-value"
        name="my-value"
      />
      <AboutButton type="submit">Add Value</AboutButton>
    </EnterValuesFormContainer>
  );
}
