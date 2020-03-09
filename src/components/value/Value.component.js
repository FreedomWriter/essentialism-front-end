import React from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  fadeIn
} from "../../globals/styles";

import { ValueButton, ValueButtonContainer } from "./Value.styles";
import { addToTempList } from "../../store/actions/user-values.actions";

const Value = ({ className, info, id, goToNextCard, usersList }) => {
  const dispatch = useDispatch();
  const handleYes = val => {
    console.log(`yes`);
    dispatch(addToTempList(val));
    goToNextCard();
  };

  const handleNo = () => {
    console.log(`no`);

    goToNextCard();
  };

  return (
    <section className={className}>
      <article>
        <div className="card-info">
          <h4>do you value</h4>
          <p>{info.value.toLowerCase()}?</p>
        </div>
        <ValueButtonContainer className="btn-div">
          <ValueButton onClick={handleNo}>no</ValueButton>
          <ValueButton onClick={() => handleYes(info)}>yes</ValueButton>
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
