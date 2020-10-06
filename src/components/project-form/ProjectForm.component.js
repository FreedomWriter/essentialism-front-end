import React from "react";
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

const ProjectForm = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const userValues = useSelector(state => state.userValues.userValues);

  const goToNextCard = () => {};
  const handleClick = () => {
    // eslint-disable-next-line array-callback-return
    userValues.map(uv => {
      if (uv.user_value === values.user_value) {
        return dispatch(
          postProjects({
            user_id: uv.user_id,
            user_value_id: uv.user_value_id,
            project_name: values.project_name,
            project_description: values.project_description
          })
        );
      }
    });
    if (values.project_name === undefined) {
      alert(`You haven't entered a project`);
    }

    history.push("/home");
  };

  return (
    <Sizer>
      <Hero img={hero}>
        <FormContainer>
          <label htmlFor="project_name">What are you working on?</label>
          <Field
            className="input"
            component="input"
            type="text"
            id="project_name"
            name="project_name"
            placeholder="Project Name..."
          />
          {touched.project_name && errors.project_name && (
            <p className="errors">{errors.project_name}</p>
          )}
          <Field
            className="input"
            component="input"
            type="textarea"
            name="project_description"
            placeholder="Project Description..."
          />
          {touched.project_description && errors.project_description && (
            <p className="errors">{errors.project_description}</p>
          )}
          <Field name="user_value" as="select">
            <option value="" label="Aligns with..." />
            {userValues &&
              userValues.map(val => {
                return (
                  <option key={val.user_value_id} value={val.user_value}>
                    {val.user_value}
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
  );
};

export default withFormik({
  mapPropsToValues({ project_name, user_value, project_description }) {
    return {
      user_value: user_value,
      project_name: project_name,
      project_description: project_description
    };
  },
  validationSchema: Yup.object().shape({
    project: Yup.string().required("Required")
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(ProjectForm);
