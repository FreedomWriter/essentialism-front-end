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

function ProjectList({ className }) {
  //   let history = useHistory();
  // const userProjects = useSelector(state => state.projects.projects);
  // localStorage.setItem("userProjects", JSON.stringify(userProjects));
  const localUserProjects = JSON.parse(localStorage.getItem("userProjects"));

  return (
    <>
      {localUserProjects && (
        <section>
          <div className={className}>
            <div className="card-info">
              <h4>I do </h4>
              {localUserProjects.map(project => {
                return (
                  <div key={project.id}>
                    <p>
                      {" "}
                      <strong>{project.project}</strong> which aligns with{" "}
                      {project.value ? (
                        <strong>{project.value}</strong>
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
