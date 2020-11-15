import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getValues } from "../../store/actions/values.actions";
// import { addToTempList } from "../../store/actions/user-values.actions";

import LoadingSpinner from "../../ui/LoadingSpinner.component";
import ChoseValuesBannerWrapper, {
  CheckBoxContainer,
  SubmitValuesButton,
  CustomValuesContainter,
} from "./EnterValues.styles";

import EnterValuesForm from "../../components/enter-values-form/EnterValuesForm.componet";

import ValuePrompt from "../../components/value-prompt/ValuePrompt.component";

function ValuesList() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [promptVisibiity, setPromptVisibility] = useState(false);

  const values = useSelector((state) => state.values.values);
  const isLoading = useSelector((state) => state.login.isLoading);
  const usersList = useSelector((state) => state.userValues.tempList);

  useEffect(() => {
    dispatch(getValues());
  }, [dispatch]);

  function showPrompts() {
    setPromptVisibility(!promptVisibiity);
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
          {/* is `&&` this an anti pattern? */}
          {values &&
            values.map((val) => {
              return <ValuePrompt key={val.id} info={val} id={val.id} />;
            })}
        </CheckBoxContainer>
      )}
      <EnterValuesForm />
      {/* This should be a component that is imported in to this page view - UsersValues,
      this should be reusable in for the "narrow down" view that is needed if the user selects > 3 values */}
      {usersList.length > 0 && (
        <CustomValuesContainter>
          <SubmitValuesButton onClick={handleValuesSubmit}>
            Done
          </SubmitValuesButton>
          <ul>
            {/* is `&&` this an anti pattern? */}
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
