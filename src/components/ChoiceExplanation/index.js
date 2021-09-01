import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { putUserValues } from "../../store/actions/user-values.actions";

import ConfirmedTopValues from "../UserValues";
import { FakeContainer } from "ui";

const ChoiceExplanation = ({ isSubmitting }) => {
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
  const handleClick = (value) => {
    console.log(value);
    const {
      user_id,
      user_value_id,
      user_value,
      user_value_description,
    } = value;

    const payload = {
      user_id,
      user_value_id,
      user_value,
      user_value_description,
    };
    dispatch(putUserValues(payload));

    return goToNextCard();
  };

  return (
    <FakeContainer>
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
                  onClick={() => handleClick(val)}
                  disabled={isSubmitting}
                >
                  confirm
                </button>
              </div>
            </div>
          );
        })}
    </FakeContainer>
  );
};

export default ChoiceExplanation;
