import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  toggleValue
  //   ,
  //   removeToggledValue,
  //   confirmTopList
} from "../../store/actions/values.actions";

// import ValuesList from "../values-list/ValuesList.component";

import styled from "styled-components";
// import { NarrowDownButton, NarDwnBtnContainer } from "./UsersTopValues.styles";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow
} from "../../globals/styles";

function ConfirmedTopValues({ className }) {
  //   let history = useHistory();

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));
  return (
    <>
      {!confirmed ? (
        userValues && (
          <section>
            <div className={className}>
              <div className="card-info">
                <h4>your values</h4>

                {userValues.map(val => {
                  return (
                    <div key={val.id}>
                      <p className={`${val.remove === true && "toggle"}`}>
                        {" "}
                        - {val.name.toLowerCase()}
                      </p>
                      {val.description && (
                        <p>{val.description.toLowerCase()}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )
      ) : (
        <section>
          <div className={className}>
            <div className="card-info">
              <h4>I value</h4>
              {userValues.map(val => {
                return (
                  <div key={val.id}>
                    <p className={`${val.remove === true && "toggle"}`}>
                      {" "}
                      <strong>{val.name}</strong> because{" "}
                      <strong>{val.description}</strong>
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

const mapPropsToState = state => {
  return {
    usersList: state.values.usersList,
    remove: state.values.usersList.remove
  };
};

export default connect(
  mapPropsToState,
  {}
)(styled(ConfirmedTopValues)`
  background: ${setColor.mainLight};
  margin: ${setRem(32)} auto;
  max-width: 90%;
  width: 500px;
  color: ${setColor.offWhite};
  text-align: center;
  margin-top: 5%;
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
`);
