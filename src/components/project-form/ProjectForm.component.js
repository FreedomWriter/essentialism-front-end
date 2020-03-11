import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { postProjects } from "../../store/actions/projects.actions";

import hero from "../../images/hero.JPG";
import stones from "../../images/stones.jpeg";

import {
  FormContainer,
  ConfirmExplanationButton,
  ButtonContainer,
  Sizer,
  Hero,
  BottomImg
} from "./ProjectConfirmation.styles";
// import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const ProjectForm = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  const goToNextCard = () => {
    dispatch(postProjects(values));
  };
  const handleClick = () => {
    dispatch(postProjects(values));
    if (values.project === undefined) {
      alert(`You haven't entered a project`);
    }
    localStorage.setItem("projects-confirmed", JSON.stringify(true));
    localStorage.setItem("projectOnboardingComplete", JSON.stringify(true));

    history.push("/home");
  };

  const projectOnboardingComplete = JSON.parse(
    localStorage.getItem("projectOnboardingComplete")
  );

  {
    return !projectOnboardingComplete ? (
      <Sizer>
        <Hero img={hero}>
          <FormContainer>
            <label htmlFor="project">What are you working on?</label>
            <Field
              className="input"
              component="input"
              type="text"
              id="project"
              name="project"
              placeholder="Tell us what you're working on..."
            />
            {touched.project && errors.project && (
              <p className="errors">{errors.project}</p>
            )}
            <Field
              className="input"
              component="input"
              type="textarea"
              name="notes"
              placeholder="Make some notes..."
            />
            {touched.notes && errors.notes && (
              <p className="errors">{errors.notes}</p>
            )}
            <Field name="value" as="select">
              <option value="" label="Value" />
              {userValues &&
                userValues.map(val => {
                  return (
                    <option key={val.id} value={val.name}>
                      {val.name}
                    </option>
                  );
                })}
            </Field>
            <ButtonContainer>
              <ConfirmExplanationButton
                type="submit"
                onClick={handleClick}
                disabled={isSubmitting}
              >
                submit
              </ConfirmExplanationButton>
              <ConfirmExplanationButton
                type="submit"
                onClick={goToNextCard}
                disabled={isSubmitting}
              >
                add more
              </ConfirmExplanationButton>
            </ButtonContainer>
          </FormContainer>
        </Hero>
        <BottomImg img={stones} />
      </Sizer>
    ) : (
      <Redirect path="/home" />
    );
  }
};

export default withFormik({
  mapPropsToValues({ project, value, notes }) {
    return {
      value: value,
      project: project,
      notes: notes
    };
  },
  validationSchema: Yup.object().shape({
    project: Yup.string().required("Required")
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(ProjectForm);
