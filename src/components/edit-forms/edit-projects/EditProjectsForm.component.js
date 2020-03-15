import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putProjects } from "../../../store/actions/projects.actions";
import {
  EditProjectsCard,
  EditProjectsFormCard,
  StyledValueField,
  EditCardCenter,
  EditButton,
  EditCardButton,
  CardsCenter,
  ButtonContainer
} from "./EditProjectsForm.styles";

const EditProjectsForm = ({
  errors,
  touched,
  // isSubmitting,
  // isValidating,
  values,
  className
}) => {
  const [projectToEditId, setProjectToEditId] = useState(null);
  const dispatch = useDispatch();
  // const history = useHistory();

  const projects = useSelector(state => state.projects.projects);
  console.log(`projects`, projects);

  const handleClick = vals => {
    const { prevVals, nextVals } = vals;

    const updateObj = {
      user_id: prevVals.user_id,
      user_value_id: nextVals.user_value_id || prevVals.user_value_id,
      user_value: nextVals.user_value || prevVals.user_value,
      user_value_description:
        nextVals.user_value_description || prevVals.user_value_description
    };
    dispatch(putProjects(updateObj));
  };

  const handleEditClick = id => {
    setProjectToEditId(id);
  };

  return (
    <>
      {" "}
      <CardsCenter editing={projectToEditId}>
        {projects.map(project => {
          console.log(project.tasks);
          return (
            <EditProjectsCard editing={projectToEditId}>
              <div>
                <EditButton onClick={() => handleEditClick(project.project.id)}>
                  Edit
                </EditButton>
                <article className={className}>
                  <div className="card-info">
                    <h4>
                      <strong>Project:</strong>
                      <br></br> {project.project.project_name}
                    </h4>
                    {projectToEditId === null && (
                      <>
                        <p>
                          <strong>Description:</strong> <br></br>
                          {project.project.project_description ||
                            "Add a description for this project"}
                        </p>
                        <div>
                          <p>
                            <strong>Value:</strong>{" "}
                            {project.project.user_value ||
                              "How does this relate to your values?"}
                          </p>
                          <p>
                            <strong>Tasks:</strong>{" "}
                            {project.tasks.length > 0
                              ? "View Tasks"
                              : "Add a task"}
                          </p>
                          <p>
                            <strong>Resources:</strong>{" "}
                            {project.resources.length > 0
                              ? "View resources"
                              : "Add a resource"}
                          </p>
                          <p>
                            <strong>Contexts:</strong>{" "}
                            {project.contexts.length > 0
                              ? "View contexts"
                              : "Add a context"}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              </div>
            </EditProjectsCard>
          );
        })}{" "}
      </CardsCenter>
      {projects &&
        // eslint-disable-next-line array-callback-return
        projects.map(project => {
          if (project.project.id === projectToEditId) {
            return (
              <EditCardCenter>
                <EditProjectsFormCard>
                  <div>
                    <EditCardButton
                      onClick={() =>
                        handleClick({ prevVals: project, nextVals: values })
                      }
                    >
                      Update
                    </EditCardButton>
                    <article className={className}>
                      <div className="card-info">
                        <h4>
                          <strong>Current Project Name:</strong>
                          <br></br> {project.project.project_name}
                          <StyledValueField
                            className="input"
                            component="input"
                            type="text"
                            name="project_name"
                            placeholder="Update this Project's name..."
                          />
                        </h4>
                        <strong> Current Description:</strong> <br></br>
                        {project.project.project_description ||
                          "Add a description for this project"}
                        <Field
                          className="input"
                          component="input"
                          type="textarea"
                          name="project_description"
                          placeholder="Update this Project's description..."
                        />
                        {touched.project_description &&
                          errors.project_description && (
                            <p className="errors">
                              {errors.project_description}
                            </p>
                          )}
                        <ButtonContainer>
                          <EditCardButton
                            onClick={() =>
                              console.log(`YOU CLICKED EDIT VALUES`)
                            }
                          >
                            Edit Project Value
                          </EditCardButton>

                          <EditCardButton
                            onClick={() =>
                              console.log(`YOU CLICKED EDIT TASKS`)
                            }
                          >
                            Edit Tasks
                          </EditCardButton>

                          <EditCardButton
                            onClick={() =>
                              console.log(`YOU CLICKED EDIT RESOURCES`)
                            }
                          >
                            Edit Resources
                          </EditCardButton>

                          <EditCardButton
                            onClick={() =>
                              console.log(`YOU CLICKED EDIT CONTEXTS`)
                            }
                          >
                            Edit Contexts
                          </EditCardButton>
                        </ButtonContainer>
                      </div>
                    </article>
                  </div>
                </EditProjectsFormCard>
              </EditCardCenter>
            );
          }
        })}
    </>
  );
};

export default withFormik({
  mapPropsToValues({ project_description, project_name }) {
    return {
      project_name: project_name,
      project_description: project_description
    };
  },
  validationSchema: Yup.object().shape({
    project_description: Yup.string()
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditProjectsForm);

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { withFormik, Field } from "formik";
// import * as Yup from "yup";

// import { putProjects } from "../../../store/actions/projects.actions";
// import {
//   FormContainer,
//   EditValueButton,
//   ConfirmUpdateButton,
//   StyledValueField,
//   SignUpButtonContainer,
//   StyledHero
// } from "./EditProjectsForm.styles";

// const EditProjectsForm = ({
//   errors,
//   touched,
//   isSubmitting,
//   // isValidating,
//   values
// }) => {
//   const [projectToEditId, setProjectToEditId] = useState(null);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const projects = useSelector(state => state.projects.projects);
//   console.log(`projects`, projects);

//   const handleClick = vals => {
//     const { prevVals, nextVals } = vals;

//     const updateObj = {
//       user_id: prevVals.user_id,
//       project_name_id: nextVals.user_value_id || prevVals.user_value_id,
//       user_value: nextVals.user_value || prevVals.user_value,
//       user_value_description:
//         nextVals.user_value_description || prevVals.user_value_description
//     };
//     dispatch(putProjects(updateObj));
//   };

//   const handleLinkClick = id => {
//     setProjectToEditId(id);
//   };
//   return (
//     <>
//       <SignUpButtonContainer>
//         {projects.map(project => {
//           // console.log(project);
//           return (
//             // <h1>Hello</h1>
//             <EditValueButton
//               onClick={() => handleLinkClick(project.user_value_id)}
//             >
//               {project.project.project_name}
//             </EditValueButton>
//           );
//         })}
//       </SignUpButtonContainer>
//       {!projectToEditId && <StyledHero />}
//       {projects &&
//         // eslint-disable-next-line array-callback-return
//         projects.map(val => {
//           console.log(val);
// if (project.user_value_id === projectToEditId) {
//   return (
//     <div key={project.user_value_id}>
//       <FormContainer className="form">
//         <h4>You change, your values change, and that's ok.</h4>
//         <StyledValueField
//           className="input"
//           component="input"
//           type="text"
//           name="user_value"
//           placeholder={project.user_value}
//         />
//         <Field
//           className="input"
//           component="input"
//           type="textarea"
//           name="user_value_description"
//           placeholder={project.user_value_description}
//         />
//         {touched.user_value_description &&
//           errors.user_value_description && (
//             <p className="errors">{errors.user_value_description}</p>
//           )}
//         <SignUpButtonContainer>
//           <ConfirmUpdateButton
//             onClick={() =>
//               handleClick({ prevVals: val, nextVals: values })
//             }
//             disabled={isSubmitting}
//           >
//             update
//           </ConfirmUpdateButton>
//         </SignUpButtonContainer>
//       </FormContainer>
//     </div>
//   );
// }
// })}
//     </>
//   );
// };

// export default withFormik({
//   mapPropsToValues({ user_value_description, user_value }) {
//     return {
//       user_value: user_value,
//       user_value_description: user_value_description
//     };
//   },
//   validationSchema: Yup.object().shape({
//     user_value_description: Yup.string()
//   }),
//   handleSubmit(values, { resetForm }) {
//     resetForm();
//   }
// })(EditProjectsForm);
