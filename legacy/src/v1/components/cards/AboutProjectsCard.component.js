import React from "react";
import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  media,
} from "../../ui/globals/styles";

import { CardsCenter } from "./AboutCards.styles";

const AboutProjectCard = ({ className }) => (
  <CardsCenter>
    <article className={className}>
      <div className="img-container" />
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
      <div className="img-container" />
      <div className="card-info">
        <h4>Am I living authentically?</h4>
        <p>When evaluating current projects, consider:</p>
        <div>
          <p>Does this align with your values?</p>
          <p>Do you care about this?</p>
          <p>Are you able to give this the time it deserve?</p>
        </div>
      </div>
    </article>
    <article className={className}>
      <div className="img-container" />
      <div className="card-info">
        <h4>Do I have the time?</h4>
        <p>When evaluating new projects, consider:</p>
        <div>
          <p>Does this align with your values?</p>
          <p>What will you deprioritize?</p>
          <p>When you don&apos;t say no, you say yes by default.</p>
        </div>
      </div>
    </article>
  </CardsCenter>
);

export default styled(AboutProjectCard)`
  background: #eaeaea;
  color: ${setColor.main};
  margin: ${setRem(-200)} 0 ${setRem(-25)};
  min-height: 250px;
  border-radius: 0.5em;

  .card-info {
    padding: ${setRem()};
    h4 {
      font-size: 1.5rem;
      text-transform: capitalize;
      ${setLetterSpacing()};
      margin-bottom: 1rem;
    }
    p {
      line-height: 1;
      font-size: 1.2rem;
      border-bottom: 1px solid ${setColor.main};
    }
    div {
      ${setLetterSpacing()};
      p {
        font-size: 0.9rem;
        border-bottom: none;
      }
    }

    a {
      text-decoration: none;
    }
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
  ${media.tablet`
  margin: 5% auto;
  min-height: 270px;
  height: 150px;
  `};
  ${media.phone`
  margin: 5% auto;
  min-height: 400px;
  height: 150px;

  `};
`;
