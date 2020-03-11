import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow
} from "../../globals/styles";

function ProjectToEdit({ className }) {
  let history = useHistory();

  const userProjects = JSON.parse(localStorage.getItem("userProjects"));

  const handleClick = id => {
    history.push(`/edit-projects/${id}`);
  };
  return (
    <section>
      <div className={className}>
        <div className="card-info">
          <h4>current projects</h4>
          <div className="values">
            {userProjects
              ? userProjects.map(val => {
                  return (
                    <div key={val.id} onClick={() => handleClick(val.id)}>
                      <p>
                        {" "}
                        <strong>{val.project}</strong> which aligns with{" "}
                        <strong>{val.value}</strong>
                      </p>
                    </div>
                  );
                })
              : history.push("/home")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default styled(ProjectToEdit)`
  background: ${setColor.mainLight};
  margin: 0 auto;
  max-height: 20vh;
  overflow: scroll;
  width: 100%;
  color: ${setColor.offWhite};
  text-align: center;
  margin-top: -10%;
  font-size: 1.8rem;

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

  .values {
    display: flex;
    justify-content: space-evenly;
    div {
      width: 30%;
    }
    p {
      font-size: 1.2rem;
      border-right: 1px solid ${setColor.offWhite};
      border-left: 1px solid ${setColor.offWhite};
      margin: 0 auto;
      padding: 1%;
    }
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
