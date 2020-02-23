import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putProjects } from "../../../store/actions/projects.actions";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer,
  Hero,
  StyledValueField
} from "./EditProjectsForm.styles";
import { SignUpButtonContainer } from "../../sign-up-form/SignUpForm.styles";

const EditProjectsForm = ({
  errors,
  touched,
  isSubmitting,
  // isValidating,
  values
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const userProjects = useSelector(state => state.values.userProjects)

  const { projToEdit } = useParams();

  const userProjects = JSON.parse(localStorage.getItem("userProjects"));

  useEffect(() => {
    const userProjects = JSON.parse(localStorage.getItem("userProjects"));
  }, [userProjects]);

  const handleClick = () => {
    const updatedValues = userProjects.map(val => {
      console.log(values);
      // console.log(id, val.id);
      const projToEdit = JSON.parse(localStorage.getItem("updatingProj"));
      if (val.id === projToEdit.id) {
        return (val = {
          id: val.id,
          project: values.project || val.project,
          notes: values.notes || val.notes,
          value: values.value || val.value
        });
      } else {
        return val;
      }
    });
    localStorage.setItem("userProjects", JSON.stringify(updatedValues));
    dispatch(putProjects(updatedValues));
    history.push("/home");
  };

  return (
    <>
      {userProjects &&
        userProjects.map(val => {
          console.log(`This is val.id: `, val.id);
          if (val.id === parseInt(projToEdit)) {
            localStorage.setItem("updatingProj", JSON.stringify(val));
            return (
              <div key={val.id}>
                <FormContainer className="form">
                  <h4>
                    Remember, adding a new project means an existing one gets
                    less time.
                  </h4>

                  <StyledValueField
                    id="project"
                    className="input"
                    component="input"
                    type="text"
                    name="project"
                    placeholder={`You are working on ${val.project}`}
                  />
                  <StyledValueField
                    id="value"
                    className="input"
                    component="input"
                    type="text"
                    name="value"
                    placeholder={`Which aligns with ${val.value}`}
                  />
                  <Field
                    className="input"
                    component="input"
                    type="textarea"
                    name="notes"
                    placeholder={`These are your notes: ${val.notes}`}
                  />
                  {touched.notes && errors.notes && (
                    <p className="errors">{errors.notes}</p>
                  )}
                  <ConfirmExplanationButton
                    onClick={() => handleClick()}
                    disabled={isSubmitting}
                  >
                    update
                  </ConfirmExplanationButton>
                </FormContainer>
              </div>
            );
          }
        })}
    </>
  );
};

export default withFormik({
  mapPropsToValues({ notes, project, value }) {
    const val = JSON.parse(localStorage.getItem("updatingProj"));
    return {
      project: project,
      notes: notes,
      value: value
    };
  },
  validationSchema: Yup.object().shape({
    notes: Yup.string()
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditProjectsForm);
