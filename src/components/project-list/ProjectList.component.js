import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { getUserProjects } from "../../store/actions/projects.actions";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow
} from "../../globals/styles";

function ProjectList({ className }) {
  //   let history = useHistory();
  // const dispatch = useDispatch();
  const userValues = useSelector(state => state.userValues.userValues);
  const user_projects = useSelector(state => state.projects.projects);
  console.log(`user_projects`, user_projects);
  /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ YOU WERE HERE /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
  // useEffect(() => {
  //   // dispatch(getUserProjects(value.project_id))
  //   userValues.forEach(userValue => console.log(userValue));
  // }, []);

  return (
    <>
      {userValues && (
        <section>
          <div className={className}>
            <div className="card-info">
              <h4>I'm Working on </h4>
              {user_projects.map(projectObject => {
                console.log(projectObject);
                // dispatch(getUserprojectObjects(projectObject));
                return (
                  <div key={projectObject.id}>
                    <p>
                      {" "}
                      <strong>{projectObject.project.project_name}</strong>{" "}
                      which aligns with{" "}
                      {projectObject.project.user_value_id ? (
                        <strong>{projectObject.project.user_value}</strong>
                      ) : (
                        <strong>nothing I value</strong>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default styled(ProjectList)`
  background: ${setColor.mainLight};
  margin: ${setRem(32)} auto;
  max-width: 90%;
  width: 500px;
  color: ${setColor.offWhite};
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
