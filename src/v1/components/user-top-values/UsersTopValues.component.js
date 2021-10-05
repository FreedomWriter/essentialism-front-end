import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import {
  postUserValues,
  toggleValue,
  removeToggledValue,
} from "../../store/actions/user-values.actions";

import { NarrowDownButton, NarDwnBtnContainer } from "./UsersTopValues.styles";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
} from "../../ui/globals/styles";

function UsersTopValues({ className }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const usersList = useSelector((state) => state.userValues.tempList);
  const userID = useSelector((state) => state.login.user.id);

  const handleClick = (id) => {
    dispatch(toggleValue(id));
  };

  const handleConfirm = async (userID, usersList) => {
    await usersList.forEach((userValue) => {
      dispatch(postUserValues(userID, userValue));
    });
    return history.push("/choice-expl");
  };

  // const handleEdit = () => {
  //   console.log(`UserTopValues: handleEdit: `);
  // };

  const handleRemove = () => {
    // console.log("REMOVE IT!!!!");
    dispatch(removeToggledValue());
  };
  console.log(usersList);
  return (
    <>
      {usersList && usersList.length > 0 && (
        <section>
          <div className={className}>
            <div className="card-info">
              <h4>
                {usersList.length > 3 ? "What's essential?" : "my values"}
              </h4>

              {usersList.map((val) => (
                /* eslint-disable jsx-a11y/click-events-have-key-events */
                /* jsx-a11y/no-interactive-element-interactions */
                /* eslint-disable jsx-a11y/no-static-element-interactions */
                <div key={val.value} onClick={() => handleClick(val)}>
                  <p className={`${val.remove === true && "toggle"}`}>
                    {" "}
                    - {val.value}
                  </p>
                </div>
              ))}
              {usersList.length > 3 ? (
                <span className="btns">
                  <p>Cross off all but 3 of these values</p>
                  <NarrowDownButton onClick={handleRemove}>
                    remove
                  </NarrowDownButton>
                </span>
              ) : (
                <NarDwnBtnContainer>
                  <span className="btns">
                    <NarrowDownButton
                      onClick={() => handleConfirm(userID, usersList)}
                    >
                      confirm
                    </NarrowDownButton>
                  </span>
                  {/* <span className="btns">
                    <NarrowDownButton onClick={handleEdit}>
                      edit
                    </NarrowDownButton>
                  </span> */}
                </NarDwnBtnContainer>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default styled(UsersTopValues)`
  background: ${setColor.mainLight};
  margin: 10% auto;
  max-width: 90%;
  width: 500px;
  color: ${setColor.offWhite};
  text-align: center;
  font-size: 1.8rem;
  border-radius: 0.5em;

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
`;
