import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Value from "../value/Value.component";

import { getValues } from "../../store/actions/values.actions";
import { getUserValues } from "../../store/actions/user-values.actions";

import { CheckBoxContainer } from "./ValuesList.styles";

function ValuesList() {
  const dispatch = useDispatch();

  const [numOfSelections, setNumofSelections] = useState(0);
  useEffect(() => {
    dispatch(getValues());
    dispatch(getUserValues());
  }, [dispatch]);
  console.log({ numOfSelections });
  // const history = useHistory();
  const values = useSelector((state) => state.values.values);

  const usersList = useSelector((state) => state.userValues.tempList);

  return (
    <CheckBoxContainer>
      {values &&
        values.map((val, index) => {
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
  );
}

export default ValuesList;
