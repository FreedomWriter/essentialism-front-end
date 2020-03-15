import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ProjectList from "../../components/project-list/ProjectList.component";

import {
  CardsCenter,
  EditProjectsCard
} from "../../components/edit-forms/edit-projects/EditProjectsForm.styles";

function HomePage({ className }) {
  const userValues = useSelector(state => state.userValues.userValues);
  const projects = useSelector(state => state.projects.projects);

  return (
    <>
      {userValues && (
        <section>
          <div className={className}>
            <div>
              <CardsCenter>
                {projects.map(project => {
                  console.log(project.tasks);
                  return (
                    <EditProjectsCard>
                      <div>
                        {/* <EditButton
                        onClick={() => handleEditClick(project.project.id)}
                      >
                        Edit
                      </EditButton> */}
                        <article className={className}>
                          <div className="card-info">
                            <h4>
                              <strong>Project:</strong>
                              <br></br> {project.project.project_name}
                            </h4>
                            {/* {projectToEditId === null && (
                            <> */}
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
                            {/* </>
                          )} */}
                          </div>
                        </article>
                      </div>
                    </EditProjectsCard>
                  );
                })}
              </CardsCenter>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default HomePage;
