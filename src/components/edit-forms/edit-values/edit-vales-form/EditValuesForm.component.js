import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putValues } from "../../../../store/actions/values.actions";

import {
  FormContainer,
  ConfirmExplanationButton,
  StyledValueField,
  SignUpButtonContainer
} from "./EditValuesForm.styles";

const EditValuesForm = ({
  errors,
  touched,
  isSubmitting,
  // isValidating,
  values
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { valToEdit } = useParams();

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  const handleClick = id => {
    const updatedValues = userValues.map(val => {
      if (val.id === id) {
        return (val = {
          id: val.id,
          name: values.name || val.name,
          description: values.description || val.description
        });
      } else {
        return val;
      }
    });
    // localStorage.setItem("userValues", JSON.stringify(updatedValues));
    dispatch(putValues(updatedValues));
    history.push("/edit-values");
  };
  return (
    <>
      {userValues &&
        userValues.map(val => {
          if (val.id === parseInt(valToEdit)) {
            return (
              <div key={val.id}>
                <FormContainer className="form">
                  <h4>You change, your values change, and that's ok.</h4>
                  <StyledValueField
                    className="input"
                    component="input"
                    type="text"
                    name="name"
                    placeholder={val.user_value_name}
                  />
                  <Field
                    className="input"
                    component="input"
                    type="textarea"
                    name="description"
                    placeholder={val.user_value_description}
                  />
                  {touched.description && errors.description && (
                    <p className="errors">{errors.description}</p>
                  )}
                  <SignUpButtonContainer>
                    <ConfirmExplanationButton
                      onClick={() => handleClick(val.id)}
                      disabled={isSubmitting}
                    >
                      update
                    </ConfirmExplanationButton>
                  </SignUpButtonContainer>
                </FormContainer>
              </div>
            );
          }
        })}
    </>
  );
};

export default withFormik({
  mapPropsToValues({ description, name }) {
    return {
      name: name,
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string()
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditValuesForm);
