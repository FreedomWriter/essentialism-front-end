import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getValues } from "../../store/actions/values.actions";
import { addToTempList } from "../../store/actions/user-values.actions";

import ChoseValuesBannerWrapper, {
  CheckBoxContainer,
  StyledValueInput,
  StyledValueLabel,
  AboutButton,
  CustomValuesContainter,
} from "./EnterValues.styles";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

import ValuePrompt from "../../components/value/ValuePrompt.component";

function ValuesList() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [promptVisibiity, setPromptVisibility] = useState(false);
  const [userValue, setUserValue] = useState("");

  const values = useSelector((state) => state.values.values);
  const isLoading = useSelector((state) => state.login.isLoading);
  const usersList = useSelector((state) => state.userValues.tempList);

  useEffect(() => {
    dispatch(getValues());
  }, [dispatch]);

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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* showPrompts controls whether the user sees pre-populated values they can select with a checkbox  */}
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
