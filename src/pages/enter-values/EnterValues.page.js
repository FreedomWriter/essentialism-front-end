import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import ValuePrompt from "../../components/value/ValuePrompt.component";

import { getValues } from "../../store/actions/values.actions";

import ChoseValuesBannerWrapper, {
  CheckBoxContainer,
  StyledValueInput,
  StyledValueLabel,
  AboutButton,
  CustomValuesContainter,
} from "./EnterValues.styles";

import { addToTempList } from "../../store/actions/user-values.actions";

function ValuesList() {
  const dispatch = useDispatch();

  const [promptVisibiity, setPromptVisibility] = useState(false);
  const [userValue, setUserValue] = useState("");
  useEffect(() => {
    dispatch(getValues());
  }, [dispatch]);
  const history = useHistory();
  const values = useSelector((state) => state.values.values);

  const usersList = useSelector((state) => state.userValues.tempList);

  function showPrompts() {
    setPromptVisibility(!promptVisibiity);
  }

  function handleUsersValues(e) {
    e.preventDefault();
    userValue !== "" && dispatch(addToTempList(userValue));
    setUserValue("");
  }

  function handleChange(e) {
    setUserValue(e.target.value);
  }

  function handleValuesSubmit() {
    usersList.length >= 3 ? history.push("/reflect") : console.log("TRIM IT!!");
  }

  return (
    <>
      <ChoseValuesBannerWrapper showPrompts={showPrompts} />
      {promptVisibiity && (
        <CheckBoxContainer>
          {values &&
            values.map((val) => {
              return <ValuePrompt key={val.id} info={val} id={val.id} />;
            })}
        </CheckBoxContainer>
      )}
      {/* This should be a component that is imported in to this page view - EnterValueForm
          work towards making sure this is uniform with the other forms on the site */}
      <form onSubmit={handleUsersValues}>
        <StyledValueLabel htmlFor="my-value">Enter Value</StyledValueLabel>
        <StyledValueInput
          type="text"
          value={userValue}
          onChange={handleChange}
          id="my-value"
          name="my-value"
        />
        <AboutButton type="submit">Add Value</AboutButton>
      </form>

      {/* This should be a component that is imported in to this page view - UsersValues,
      this should be reusable in for the "narrow down" view that is needed if the user selects > 3 values */}
      {usersList.length > 0 && (
        <CustomValuesContainter>
          <AboutButton onClick={handleValuesSubmit}>Done</AboutButton>
          <ul>
            {usersList &&
              usersList.map((val) => {
                return <li key={val.value}>{val.value}</li>;
              })}
          </ul>
        </CustomValuesContainter>
      )}
    </>
  );
}

export default ValuesList;
