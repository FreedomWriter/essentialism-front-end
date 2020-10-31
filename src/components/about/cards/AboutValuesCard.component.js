import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  media,
} from "../../../globals/styles";

import { CardsCenter } from "./AboutCards.styles";

const AboutValuesCard = ({ className }) => {
  return (
    <CardsCenter>
      <article className={className}>
        <div className="img-container">
          {/* <img src={img} alt="single AboutValuesCard" /> */}
        </div>
        <div className="card-info">
          <h4>What is a value?</h4>
          <p>A textbook definition:</p>
          <div>
            <a
              href={`https://www.google.com/search?q=define+value&rlz=1C5CHFA_enUS847US847&oq=define+value&aqs=chrome..69i57j0l6j69i65.3285j1j7&sourceid=chrome&ie=UTF-8`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                val·ue
                <br />
                /ˈvalyo͞o/
              </p>
            </a>
            <p>
              a person's principles or standards of behavior; one's judgment of
              what is important in life.
            </p>
            <p>
              the regard that something is held to deserve; the importance,
              worth, or usefulness of something.
            </p>
            {/* <p>How can you meet a need in the world?</p> */}
          </div>
        </div>
      </article>
      <article className={className}>
        <div className="img-container">
          {/* <img src={img} alt="single AboutValuesCard" /> */}
        </div>
        <div className="card-info">
          <h4>Why declare values?</h4>
          <p>Think of it like having a map:</p>
          <div>
            <a
              href={`https://www.google.com/search?rlz=1C5CHFA_enUS847US847&sxsrf=ACYBGNS9QdAidZuUrmnzOqXAwjz-7a9yYg%3A1578869800232&ei=KKQbXrvYDYGltQbd7KWQBA&q=define+intentional&oq=define+intentional&gs_l=psy-ab.3..0l10.292459.294814..295290...0.2..0.305.1638.6j1j3j1......0....1..gws-wiz.......0i71j0i67j0i67i70i249j0i70i249j0i10.NCB9X0YTOr4&ved=0ahUKEwi7jNuslP_mAhWBUs0KHV12CUIQ4dUDCAs&uact=5`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                in·ten·tion·al
                <br />
                /inˈten(t)SH(ə)n(ə)l/
              </p>
            </a>
            <p>
              You wouldn't get in your car, make arbitrary turns based only in
              response to what other drivers do and expect to arrive at your
              destination.
            </p>
            <p>
              You must approach life intentionally if you ever hope to meet your
              definition of success.
            </p>
          </div>
        </div>
      </article>
      <article className={className}>
        <div className="img-container">
          {/* <img src={img} alt="single AboutValuesCard" /> */}
        </div>
        <div className="card-info">
          <h4>What's the next step?</h4>
          <p>The one right in front of you:</p>
          <div>
            <Link to="/values-selection">
              <p>
                es·sen·tial·ism
                <br />
                /əˈsen(t)SHəˌlizəm/
              </p>
            </Link>
            <p>
              Next we will present you with a list a values. Remember the goal
              is to do less, but better, you can only choose 3.
            </p>
            <p>
              {" "}
              You will also be given the opportunity to add custom values. The
              goal is to wind up with a compass that point to your true north.
            </p>
          </div>
        </div>
      </article>
    </CardsCenter>
  );
};

export default styled(AboutValuesCard)`
  background: #eaeaea;
  color: ${setColor.mainColor};
  margin: ${setRem(-200)} 0 ${setRem(-25)};
  min-height: 250px;
  height: 270px;

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
  }
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
      border-bottom: 1px solid ${setColor.mainColor};
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
