import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import UsersTopValues from "../ValueSelection";

import { getValues } from "../../store/actions/values.actions";

const ValuesBanner = ({ usersList }) => {
  const history = useHistory();

  const clickHandler = () => {
    return history.push(`/values-confirmation`);
  };
  return (
    <div>
      <h2>
        {usersList.length > 3 ? "now" : "you"}
        <span>
          {usersList.length > 3
            ? ` take some time to reflect on your values. Which ones
            really mean the most to you? Narrow your selection down to your
            essential three.`
            : ` know what's essential. after you confirm your choices, take some time to reflect on your values and tell us why these are the things that matter to you`}
          {usersList.length > 3 ? (
            <button onClick={clickHandler}>Reflect</button>
          ) : (
            <button onClick={clickHandler}>Reflect</button>
          )}
        </span>
      </h2>
    </div>
  );
};

function ValuesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getValues());
  }, [dispatch]);

  const values = useSelector((state) => state.values.values);

  const usersList = useSelector((state) => state.userValues.tempList);

  return (
    <>
      {values && <ValuesBanner usersList={usersList} />}

      <Route path={`/values-selection/values-confirmation`}>
        <UsersTopValues usersList={usersList} />
      </Route>
    </>
  );
}

export default ValuesList;
