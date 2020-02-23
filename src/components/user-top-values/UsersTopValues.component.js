import React from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";

import {
  toggleValue,
  removeToggledValue,
  confirmTopList
} from "../../store/actions/values.actions";

import ValuesList from "../values-list/ValuesList.component";

import { NarrowDownButton, NarDwnBtnContainer } from "./UsersTopValues.styles";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow
} from "../../globals/styles";

function UsersTopValues({
  usersList,
  className,
  narrowDown,
  toggleValue,
  removeToggledValue,
  endOfList,
  confirmTopList,
  setEndOfList
}) {
  const history = useHistory();
  const handleClick = id => {
    toggleValue(id);
  };
  const handleConfirm = usersList => {
    //the put/post action belongs here
    if (usersList.length === 0) {
      // setEndOfList(false);
      return <ValuesList />;
    }
    confirmTopList(usersList);
    history.push("/choice-expl");
  };

  const handleEdit = () => {
    console.log(`UsersTopValues.js: handleEdit: usersList: `, usersList);
  };

  if (endOfList === true && usersList.length === 0) {
    return <ValuesList />;
  }

  const valueOnboardingComplete = JSON.parse(
    localStorage.getItem("valueOnboardingComplete")
  );

  {
    return !valueOnboardingComplete ? (
      <>
        {usersList && usersList.length > 0 && (
          <section>
            <div className={className}>
              <div className="card-info">
                <h4>
                  {narrowDown === false && usersList.length > 3
                    ? "What's essential?"
                    : "my values"}
                </h4>

                {usersList.map(val => {
                  return (
                    <div key={val.id} onClick={() => handleClick(val.id)}>
                      <p className={`${val.remove === true && "toggle"}`}>
                        {" "}
                        - {val.name.toLowerCase()}
                      </p>
                    </div>
                  );
                })}
                {narrowDown === false && usersList.length > 3 ? (
                  <span className="btns">
                    <p>Cross off all but 3 of these values</p>
                    <NarrowDownButton onClick={removeToggledValue}>
                      remove
                    </NarrowDownButton>
                  </span>
                ) : (
                  endOfList === true && (
                    <NarDwnBtnContainer>
                      <span className="btns">
                        <NarrowDownButton
                          onClick={() => handleConfirm(usersList)}
                        >
                          confirm
                        </NarrowDownButton>
                      </span>
                      <span className="btns">
                        <NarrowDownButton onClick={handleEdit}>
                          edit
                        </NarrowDownButton>
                      </span>
                    </NarDwnBtnContainer>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      </>
    ) : (
      <Redirect path="/choice-expl" />
    );
  }
}

const mapPropsToState = state => {
  return {
    usersList: state.values.usersList,
    remove: state.values.usersList.remove
  };
};

export default connect(null, {
  toggleValue,
  removeToggledValue,
  confirmTopList
})(styled(UsersTopValues)`
  background: ${setColor.mainLight};
  margin: 10% auto;
  max-width: 90%;
  width: 500px;
  color: ${setColor.offWhite};
  text-align: center;
  font-size: 1.8rem;
  ${props =>
    props.index === props.activeIndex ? "display: flex" : "display: none"}

  p {
    font-size: 1.2rem;
  }

  span {
    font-size: 1rem;
    margin-bottom: 2%;
    margin-top: 2%;
  }

  .card-info {
    width: 100%;
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
