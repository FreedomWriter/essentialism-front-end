import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putUserValues } from "../../../../store/actions/user-values.actions";
import {
  EditValuesCard,
  EditValuesFormCard,
  StyledValueField,
  EditCardCenter,
  EditButton,
  EditCardButton,
  CardsCenter
} from "./EditValuesForm.styles";

const EditValuesForm = ({
  errors,
  touched,
  // isSubmitting,
  // isValidating,
  values,
  className
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
    dispatch(putUserValues(updateObj)).then(() => {
      setValueToEditId(null);
      history.push("/edit-values");
    });
  };

  const handleEditClick = id => {
    setValueToEditId(id);
  };

  return (
    <>
      {" "}
      <CardsCenter editing={valueToEditId}>
        {userValues.map(userValue => {
          return (
            <EditValuesCard editing={valueToEditId}>
              <div>
                <EditButton
                  onClick={() => handleEditClick(userValue.user_value_id)}
                >
                  Edit
                </EditButton>
                <article className={className}>
                  <div className="card-info">
                    <h4>
                      <strong>Value:</strong>
                      <br></br> {userValue.user_value}
                    </h4>
                    {valueToEditId === null && (
                      <>
                        <p>
                          <strong>Description:</strong> <br></br>
                          {userValue.user_value_description ||
                            "Add a description for this value"}
                        </p>
                      </>
                    )}
                  </div>
                </article>
              </div>
            </EditValuesCard>
          );
        })}{" "}
      </CardsCenter>
      {userValues &&
        // eslint-disable-next-line array-callback-return
        userValues.map(userValue => {
          if (userValue.user_value_id === valueToEditId) {
            return (
              <EditCardCenter>
                <EditValuesFormCard>
                  <div>
                    <EditCardButton
                      onClick={() =>
                        handleClick({ prevVals: userValue, nextVals: values })
                      }
                    >
                      Update
                    </EditCardButton>
                    <article className={className}>
                      <div className="card-info">
                        <h4>
                          <strong>Current Value Name:</strong>
                          <br></br> {userValue.user_value}
                          <StyledValueField
                            className="input"
                            component="input"
                            type="text"
                            name="user_value"
                            placeholder="Update this value's name..."
                          />
                        </h4>
                        <strong> Current Description:</strong> <br></br>
                        {userValue.user_value_description ||
                          "Add a description for this value"}
                        <Field
                          className="input"
                          component="input"
                          type="textarea"
                          name="user_value_description"
                          placeholder="Update this values's description..."
                        />
                        {touched.user_value_description &&
                          errors.user_value_description && (
                            <p className="errors">
                              {errors.user_value_description}
                            </p>
                          )}
                      </div>
                    </article>
                  </div>
                </EditValuesFormCard>
              </EditCardCenter>
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
