import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putUserValues } from "../../store/actions/user-values.actions";

import hero from "../../images/hero.JPG";
// import stones from "../../images/stones.jpeg";
import ConfirmedTopValues from "../confirmed-values/Confirmed-Values.component";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer,
  Hero,
  // ,
  // BottomImg
} from "./ChoiceExplanations.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const ChoiceExplanation = ({ errors, touched, isSubmitting, values }) => {
  const userValues = useSelector((state) => state.userValues.userValues);
  // console.log({ userValues });
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();

  const history = useHistory();

  const goToNextCard = () => {
    let index = activeIndex;
    const slidesLength = userValues.length - 1;
    if (index === slidesLength) {
      history.push("/about-projects");
    }
    ++index;
    setActiveIndex(index);
  };

  // have not tested new implementation - below is old one
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
    // wouldn't it be cool to do an api call to a random image generator that pulled based on the users values?
    <Sizer>
      <Hero img={hero}>
        <ConfirmedTopValues />
      </Hero>
      {/* <BottomImg img={stones}> */}
      {userValues &&
        userValues.map((val, index) => {
          console.log({ val });
          return (
            <FormContainer
              key={val.user_value_id}
              index={index}
              active={activeIndex}
            >
              <label htmlFor="name">You selected: {val.user_value}</label>
              <Field
                className="input"
                component="input"
                type="textarea"
                name="user_value_description"
                placeholder={val.user_value_description || "Why?"}
              />
              {touched.user_value_description &&
                errors.user_value_description && (
                  <p className="errors">{errors.user_value_description}</p>
                )}
              <SignUpButtonContainer>
                <ConfirmExplanationButton
                  onClick={() =>
                    handleClick({ prevVals: val, nextVals: values })
                  }
                  disabled={isSubmitting}
                >
                  confirm
                </ConfirmExplanationButton>
              </SignUpButtonContainer>
            </FormContainer>
          );
        })}
      {/* </BottomImg> */}
    </Sizer>
  );
};

export default withFormik({
  mapPropsToValues({ user_value_description, value }) {
    return {
      val: value,
      user_value_description: user_value_description || "",
    };
  },
  validationSchema: Yup.object().shape({
    user_value_description: Yup.string().required("Required"),
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  },
})(ChoiceExplanation);
