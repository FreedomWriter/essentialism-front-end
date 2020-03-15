import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putUserValues } from "../../../../store/actions/user-values.actions";
import {
  FormContainer,
  EditValueButton,
  ConfirmUpdateButton,
  StyledValueField,
  SignUpButtonContainer,
  StyledHero
} from "./EditValuesForm.styles";

const EditValuesForm = ({
  errors,
  touched,
  isSubmitting,
  // isValidating,
  values
}) => {
  const [valueToEditId, setValueToEditId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const userValues = useSelector(state => state.userValues.userValues);

  const handleClick = vals => {
    const { prevVals, nextVals } = vals;

    const updateObj = {
      user_id: prevVals.user_id,
      user_value_id: nextVals.user_value_id || prevVals.user_value_id,
      user_value: nextVals.user_value || prevVals.user_value,
      user_value_description:
        nextVals.user_value_description || prevVals.user_value_description
    };
    dispatch(putUserValues(updateObj));
  };

  const handleLinkClick = id => {
    setValueToEditId(id);
  };
  return (
    <>
      <SignUpButtonContainer>
        {userValues.map(value => {
          return (
            <EditValueButton
              onClick={() => handleLinkClick(value.user_value_id)}
            >
              {value.user_value}
            </EditValueButton>
          );
        })}
      </SignUpButtonContainer>
      {!valueToEditId && <StyledHero />}
      {userValues &&
        // eslint-disable-next-line array-callback-return
        userValues.map(val => {
          console.log(val);
          if (val.user_value_id === valueToEditId) {
            return (
              <div key={val.user_value_id}>
                <FormContainer className="form">
                  <h4>You change, your values change, and that's ok.</h4>
                  <StyledValueField
                    className="input"
                    component="input"
                    type="text"
                    name="user_value"
                    placeholder={val.user_value}
                  />
                  <Field
                    className="input"
                    component="input"
                    type="textarea"
                    name="user_value_description"
                    placeholder={val.user_value_description}
                  />
                  {touched.user_value_description &&
                    errors.user_value_description && (
                      <p className="errors">{errors.user_value_description}</p>
                    )}
                  <SignUpButtonContainer>
                    <ConfirmUpdateButton
                      onClick={() =>
                        handleClick({ prevVals: val, nextVals: values })
                      }
                      disabled={isSubmitting}
                    >
                      update
                    </ConfirmUpdateButton>
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
  mapPropsToValues({ user_value_description, user_value }) {
    return {
      user_value: user_value,
      user_value_description: user_value_description
    };
  },
  validationSchema: Yup.object().shape({
    user_value_description: Yup.string()
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditValuesForm);
