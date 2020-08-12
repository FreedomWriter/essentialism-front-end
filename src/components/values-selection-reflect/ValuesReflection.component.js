import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import UsersTopValues from "../user-top-values/UsersTopValues.component";
import ValuesBannerWrapper from "./ValuesReflection.styles";
import { Hero } from "./ValuesReflection.styles";
import stones from "../../images/stones.jpeg";

import { getValues } from "../../store/actions/values.actions";

function ValuesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getValues());
  }, [dispatch]);

  const values = useSelector((state) => state.values.values);

  const usersList = useSelector((state) => state.userValues.tempList);

  return (
    <Hero img={stones}>
      {values && <ValuesBannerWrapper usersList={usersList} />}

      <Route path={`/values-selection/values-confirmation`}>
        <UsersTopValues usersList={usersList} />
      </Route>
    </Hero>
  );
}

export default ValuesList;
