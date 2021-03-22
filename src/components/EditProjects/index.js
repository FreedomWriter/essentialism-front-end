// code commented out below because I haven't tested that I've fixed the need to
// disable the eslint rule on line 241

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { putProjects } from "../../store/actions/projects.actions";

import { Link } from "react-router-dom";

const EditProjectsForm = ({ errors, touched, values }) => {
  const [projectToEditId, setProjectToEditId] = useState(null);
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects.projects);

  const handleClick = (vals) => {
    const { prevVals, nextVals } = vals;
    const updateObj = {
      user_id: prevVals.project.user_id,
      user_value_id: prevVals.project.user_value_id,
      user_value: nextVals.user_value || prevVals.project.user_value,
      project_id: prevVals.project.id,
      project_name: nextVals.project_name || prevVals.project.project_name,
      project_description:
        nextVals.project_description || prevVals.project.project_description,
    };
    return dispatch(putProjects(updateObj)).then(() => {
      setProjectToEditId(null);
    });
  };

  const handleEditClick = (id) => {
    setProjectToEditId(id);
  };

  return (
    <>
      {" "}
      <div editing={projectToEditId}>
        {projects.map((project) => {
          return (
            <div key={project.project.id} editing={projectToEditId}>
              <div>
                <button onClick={() => handleEditClick(project.project.id)}>
                  Edit
                </button>
                <article>
                  <div>
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
                            {project.tasks.length > 0 ? (
                              <Link to={`/${project.project.id}/tasks`}>
                                View Tasks
                              </Link>
                            ) : (
                              <Link to="/edit-tasks">Add a task</Link>
                            )}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              </div>
            </div>
          );
        })}{" "}
      </div>
      {projects &&
        projects.map((project) => {
          project.project.id === projectToEditId && (
            <div key={project.project.id}>
              <div>
                <div>
                  <button
                    onClick={() =>
                      handleClick({ prevVals: project, nextVals: values })
                    }
                  >
                    Update
                  </button>
                  <article>
                    <div>
                      <h4>
                        <strong>Current Project Name:</strong>
                        <br></br> {project.project.project_name}
                        <input
                          type="text"
                          name="project_name"
                          placeholder="Update this Project's name..."
                        />
                      </h4>
                      <strong> Current Description:</strong> <br></br>
                      {project.project.project_description ||
                        "Add a description for this project"}
                      <input
                        type="textarea"
                        name="project_description"
                        placeholder="Update this Project's description..."
                      />
                      {touched.project_description &&
                        errors.project_description && (
                          <p className="errors">{errors.project_description}</p>
                        )}
                      <div>
                        <button
                          onClick={() => console.log(`YOU CLICKED EDIT VALUES`)}
                        >
                          Edit Project Value
                        </button>

                        <button
                          onClick={() => console.log(`YOU CLICKED EDIT TASKS`)}
                        >
                          Edit Tasks
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default EditProjectsForm;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { putProjects } from "../../store/actions/projects.actions";

// import { Link } from "react-router-dom";

// const EditProjectsForm = ({
//   errors,
//   touched,
//   values,
// }) => {
//   const [projectToEditId, setProjectToEditId] = useState(null);
//   const dispatch = useDispatch();

//   const projects = useSelector((state) => state.projects.projects);

//   const handleClick = (vals) => {
//     const { prevVals, nextVals } = vals;
//     const updateObj = {
//       user_id: prevVals.project.user_id,
//       user_value_id: prevVals.project.user_value_id,
//       user_value: nextVals.user_value || prevVals.project.user_value,
//       project_id: prevVals.project.id,
//       project_name: nextVals.project_name || prevVals.project.project_name,
//       project_description:
//         nextVals.project_description || prevVals.project.project_description,
//     };
//     return dispatch(putProjects(updateObj)).then(() => {
//       setProjectToEditId(null);
//     });
//   };

//   const handleEditClick = (id) => {
//     setProjectToEditId(id);
//   };

//   return (
//     <>
//       {" "}
//       <div editing={projectToEditId}>
//         {projects.map((project) => {
//           return (
//             <div
//               key={project.project.id}
//               editing={projectToEditId}
//             >
//               <div>
//                 <button onClick={() => handleEditClick(project.project.id)}>
//                   Edit
//                 </button>
//                 <article >
//                   <div >
//                     <h4>
//                       <strong>Project:</strong>
//                       <br></br> {project.project.project_name}
//                     </h4>
//                     {projectToEditId === null && (
//                       <>
//                         <p>
//                           <strong>Description:</strong> <br></br>
//                           {project.project.project_description ||
//                             "Add a description for this project"}
//                         </p>
//                         <div>
//                           <p>
//                             <strong>Value:</strong>{" "}
//                             {project.project.user_value ||
//                               "How does this relate to your values?"}
//                           </p>
//                           <p>
//                             <strong>Tasks:</strong>{" "}
//                             {project.tasks.length > 0 ? (
//                               <Link to={`/${project.project.id}/tasks`}>
//                                 View Tasks
//                               </Link>
//                             ) : (
//                               <Link to="/edit-tasks">Add a task</Link>
//                             )}
//                           </p>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </article>
//               </div>
//             </div>
//           );
//         })}{" "}
//       </div>
//       {projects &&
//         // eslint-disable-next-line array-callback-return
//         projects.map((project) => {
//           if (project.project.id === projectToEditId) {
//             return (
//               <div key={project.project.id}>
//                 <div>
//                   <div>
//                     <button
//                       onClick={() =>
//                         handleClick({ prevVals: project, nextVals: values })
//                       }
//                     >
//                       Update
//                     </button>
//                     <article>
//                       <div >
//                         <h4>
//                           <strong>Current Project Name:</strong>
//                           <br></br> {project.project.project_name}
//                           <input
//                             type="text"
//                             name="project_name"
//                             placeholder="Update this Project's name..."
//                           />
//                         </h4>
//                         <strong> Current Description:</strong> <br></br>
//                         {project.project.project_description ||
//                           "Add a description for this project"}
//                         <inpu
//                           className="input"
//                           component="input"
//                           type="textarea"
//                           name="project_description"
//                           placeholder="Update this Project's description..."
//                         />
//                         {touched.project_description &&
//                           errors.project_description && (
//                             <p className="errors">
//                               {errors.project_description}
//                             </p>
//                           )}
//                         <div>
//                           <button
//                             onClick={() =>
//                               console.log(`YOU CLICKED EDIT VALUES`)
//                             }
//                           >
//                             Edit Project Value
//                           </button>

//                           <button
//                             onClick={() =>
//                               console.log(`YOU CLICKED EDIT TASKS`)
//                             }
//                           >
//                             Edit Tasks
//                           </button>
//                         </div>
//                       </div>
//                     </article>
//                   </div>
//                 </div>
//               </div>
//             );
//           }
//         })}
//     </>
//   );
// };

// export default EditProjectsForm;
