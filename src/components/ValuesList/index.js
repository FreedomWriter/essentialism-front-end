import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { ValuePrompt } from "components";

import { getValues } from "../../store/actions/values.actions";
import { getUserValues } from "../../store/actions/user-values.actions";

function ValuesList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getValues());
    dispatch(getUserValues());
  }, [dispatch]);

  const history = useHistory();
  const values = useSelector((state) => state.values.values);

  const usersList = useSelector((state) => state.userValues.tempList);

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = values.length - 1;
    if (index === slidesLength) {
      history.push(`/reflect`);
    }
    ++index;
    setActiveIndex(index);
  };

  return (
    <>
      {values &&
        values.map((val, index) => {
          return (
            <ValuePrompt
              key={val.id}
              info={val}
              id={val.id}
              index={index}
              activeIndex={activeIndex}
              goToNextCard={goToNextCard}
              usersList={usersList}
            />
          );
        })}
    </>
  );
}

export default ValuesList;
