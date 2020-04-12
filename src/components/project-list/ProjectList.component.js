import React from "react";
import { useSelector } from "react-redux";

import { CardsCenter, EditProjectsCard } from "./ProjectList.styles";

function ProjectList({ className }) {
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
                  return (
                    <EditProjectsCard key={project.project.id}>
                      <div>
                        <article className={className}>
                          <div className="card-info">
                            <h4>
                              <strong>Project:</strong>
                              <br></br> {project.project.project_name}
                            </h4>

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
                            </div>
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
export default ProjectList;
