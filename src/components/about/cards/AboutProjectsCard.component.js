import React from "react";
import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder
} from "../../../globals/styles";

import { CardsCenter } from "./AboutProjectsCards.styles";

import img from "../../../images/stones.jpeg";

const AboutProjectCard = ({ className }) => {
  return (
    <CardsCenter>
      <article className={className}>
        <div className="img-container">
          {/* <img src={img} alt="single AboutProjectCard" /> */}
        </div>
        <div className="card-info">
          <h4>What am I doing?</h4>
          <p>When taking on personal projects, consider:</p>
          <div>
            <p>What are you inspired by?</p>
            <p>What are you good at?</p>
            <p>How can you meet a need in the world?</p>
          </div>
        </div>
      </article>
      <article className={className}>
        <div className="img-container">
          {/* <img src={img} alt="single AboutProjectCard" /> */}
        </div>
        <div className="card-info">
          <h4>Am I living authentically?</h4>
          <p>When evaluating current projects, consider:</p>
          <div>
            <p>Do they align with your values?</p>
            <p>Do you care about what them?</p>
            <p>Are you able to give them the time they deserve?</p>
          </div>
        </div>
      </article>
      <article className={className}>
        <div className="img-container">
          {/* <img src={img} alt="single AboutProjectCard" /> */}
        </div>
        <div className="card-info">
          <h4>Do I have the time?</h4>
          <p>When evaluating new projects, consider:</p>
          <div>
            <p>Does it align with your values?</p>
            <p>What will you deprioritize?</p>
            <p>When you don't say no, you say yes by default.</p>
          </div>
        </div>
      </article>
    </CardsCenter>
  );
};

export default styled(AboutProjectCard)`
  background: #eaeaea;
  color: ${setColor.mainColor};
  margin: ${setRem(32)} 0;
  .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover img {
      opacity: 0.5;
    }
    .other-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(21)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }
    &:hover .other-info {
      opacity: 1;
    }
  }
  .card-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
      margin-bottom: 1rem;
    }
    p {
      line-height: 1;
      border-bottom: 1px solid ${setColor.mainColor};
    }
    div {
      ${setLetterSpacing()};
      p {
        font-size: 1rem;
        border-bottom: none;
      }
    }
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
`;
