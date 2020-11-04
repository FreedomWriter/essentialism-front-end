import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Value from "../value/Value.component";

import { getValues } from "../../store/actions/values.actions";

import ChoseValuesBannerWrapper, {
  CheckBoxContainer,
  StyledValueInput,
  StyledValueLabel,
} from "./ValuesList.styles";

function ValuesList() {
  const dispatch = useDispatch();

  const [numOfSelections, setNumofSelections] = useState(0);
  const [promptVisibiity, setPromptVisibility] = useState(false);
  useEffect(() => {
    dispatch(getValues());
  }, [dispatch]);
  console.log({ numOfSelections });
  // const history = useHistory();
  const values = useSelector((state) => state.values.values);

  const usersList = useSelector((state) => state.userValues.tempList);

  function showPrompts() {
    setPromptVisibility(!promptVisibiity);
  }

  return (
    <>
      <ChoseValuesBannerWrapper showPrompts={showPrompts} />
      {promptVisibiity && (
        <CheckBoxContainer>
          {values &&
            values.map((val) => {
              return (
                <Value
                  key={val.id}
                  info={val}
                  id={val.id}
                  usersList={usersList}
                  numOfSelections={numOfSelections}
                  setNumofSelections={setNumofSelections}
                />
              );
            })}
        </CheckBoxContainer>
      )}
      <StyledValueLabel>Enter Value</StyledValueLabel>
      <StyledValueInput type="text" />
    </>
  );
}

export default ValuesList;
