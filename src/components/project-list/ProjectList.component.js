import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow
} from "../../globals/styles";

import {
  CardsCenter,
  EditProjectsCard
} from "../edit-forms/edit-projects/EditProjectsForm.styles";

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

export default styled(ProjectList)`
  /* background: ${setColor.mainLight}; */
  margin: ${setRem(32)} auto;
  max-width: 90%;
  width: 500px;
  /* color: ${setColor.offWhite}; */
  text-align: center;
  margin-top: 5vh;
  font-size: 1.8rem;
  ${props =>
    props.index === props.activeIndex ? "display: block" : "display: none"}

  p {
    font-size: 1.2rem;
    border-bottom: 1px solid ${setColor.offWhite};
  }

  strong {
    text-transform: capitalize;
  }

  span {
    font-size: 1rem;
    margin-bottom: 2%;
    margin-top: 2%;
  }

  .card-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }
    p {
      ${setLetterSpacing()};
    }
  }

  .toggle {
    text-decoration: line-through;
  }

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }

  .btns p {
    margin-top: 5%;
    color: ${setColor.mainColor};
  }
`;
