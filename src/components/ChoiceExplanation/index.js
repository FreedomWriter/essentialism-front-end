import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { putUserValues } from "../../store/actions/user-values.actions";

import ConfirmedTopValues from "../UsersValues";

const ChoiceExplanation = ({ isSubmitting, values }) => {
  const userValues = useSelector((state) => state.userValues.userValues);
  // console.log({ userValues });
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();

  const history = useHistory();

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = userValues.length - 1;
    if (index === slidesLength) {
      history.push("/about-projects");
    }
    ++index;
    setActiveIndex(index);
  };

  //have not tested new implementation - below is old one
  const handleClick = (vals) => {
    const { prevVals, nextVals } = vals;

    const updateObj = {
      user_id: prevVals.user_id,
      user_value_id: nextVals.user_value_id || prevVals.user_value_id,
      user_value: nextVals.user_value || prevVals.user_value,
      user_value_description:
        nextVals.user_value_description || prevVals.user_value_description,
    };
    dispatch(putUserValues(updateObj));

    return goToNextCard();
  };

  return (
    <div>
      <ConfirmedTopValues />

      {userValues &&
        userValues.map((val, index) => {
          return (
            <div key={val.user_value_id} index={index} active={activeIndex}>
              <label htmlFor="user_value_description">
                You selected: {val.user_value}
              </label>
              <input
                type="textarea"
                name="user_value_description"
                placeholder={val.user_value_description || "Why?"}
              />

              <div>
                <button
                  onClick={() =>
                    handleClick({ prevVals: val, nextVals: values })
                  }
                  disabled={isSubmitting}
                >
                  confirm
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ChoiceExplanation;
