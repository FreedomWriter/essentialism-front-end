import React from "react";
import { connect, useDispatch } from "react-redux";

import { confirmTopTempList } from "../../../store/actions/values.actions";

import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  fadeIn
} from "../../../globals/styles";

import { ValueButton, ValueButtonContainer } from "./Value.styles";

const Value = ({ className, info, id, goToNextCard }) => {
  const values = JSON.parse(localStorage.getItem("values"));

  const dispatch = useDispatch();
  const handleYes = () => {
    values.map(val => {
      // console.log(`Val: id: `, val, id);
      return val.id === id && dispatch(confirmTopTempList(val));
    });
    goToNextCard();
  };

  const handleNo = () => {
    values.map(val => {
      return val.id === id;
    });

    goToNextCard();
  };

  return (
    <section className={className}>
      <article>
        <div className="card-info">
          <h4>do you value</h4>
          <p>{info}?</p>
        </div>
        <ValueButtonContainer className="btn-div">
          <ValueButton onClick={handleNo}>no</ValueButton>
          <ValueButton onClick={handleYes}>yes</ValueButton>
        </ValueButtonContainer>
      </article>
    </section>
  );
};

export default styled(Value)`
  background: ${setColor.mainLight};
  margin-top: -5%;
  max-width: 60%;
  width: 500px;
  height: 22.5vh;
  min-height: 290px;
  font-size: 1.8rem;
  color: ${setColor.offWhite};
  text-align: center;
  ${props =>
    props.index === props.activeIndex ? "display: block" : "display: none"}
  ${props => props.endOfList && "display: none"} 
  p {
    ${fadeIn("100%", "-10%", "0")}
  }

  .card-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }
    p {
      ${setLetterSpacing()};
      font-size: 1.2rem;
      margin: 0 auto;
    }
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }

  article {
    width: 100%;
    height: 22.5vh;
    max-height: 33vh;
    min-height: 290px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
`;
