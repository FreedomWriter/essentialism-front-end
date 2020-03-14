import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putProjects } from "../../../store/actions/projects.actions";

import {
  FormContainer,
  ConfirmExplanationButton,
  StyledValueField
} from "./EditProjectsForm.styles";

const EditProjectsForm = ({
  errors,
  touched,
  isSubmitting,
  // isValidating,
  values
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { projToEdit } = useParams();

  const userProjects = useSelector(state => state.projects.projects);

  const handleClick = () => {
    // const updatedValues = userProjects.map(val => {
    //   if (val.id === projToEdit.id) {
    //     return (val = {
    //       id: val.id,
    //       project: values.project || val.project,
    //       notes: values.notes || val.notes,
    //       value: values.value || val.value
    //     });
    //   } else {
    //     return val;
    //   }
    // });
    // dispatch(putProjects(updatedValues));
    history.push("/home");
  };

  return (
    <>
      hello from editProjectsForm
      {userProjects &&
        // eslint-disable-next-line array-callback-return
        userProjects.map(val => {
          if (val.id === parseInt(projToEdit)) {
            // localStorage.setItem("updatingProj", JSON.stringify(val));
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
    // const val = JSON.parse(localStorage.getItem("updatingProj"));
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
