import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
} from "../globals/styles";

function ValuesToEdit({ className }) {
  // let history = useHistory();

  // const handleClick = id => {
  //   history.push(`/edit-values/${id}`);
  // };
  return (
    <section>
      <h2>Values To Edit Component</h2>
      {/* <div className={className}>
        <div className="card-info">
          <h4>current values</h4>
          <div className="values">
            {userValues
              ? userValues.map(val => {
                  return (
                    <div key={val.id} onClick={() => handleClick(val.id)}>
                      <p className={`${val.remove === true && "toggle"}`}>
                        {" "}
                        <strong>{val.name}</strong> because{" "}
                        <strong>{val.description}</strong>
                      </p>
                    </div>
                  );
                })
              : history.push("/home")}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default styled(ValuesToEdit)`
  background: ${setColor.light};
  margin: 0 auto;
  max-height: 20vh;
  overflow: scroll;
  width: 100%;
  color: ${setColor.white};
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
      border-right: 1px solid ${setColor.white};
      border-left: 1px solid ${setColor.white};
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
    color: ${setColor.main};
  }
`;
