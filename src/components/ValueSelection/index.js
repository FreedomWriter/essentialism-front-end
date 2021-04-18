import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postUserValues } from "../../store/actions/user-values.actions";

import {
  toggleValue,
  removeToggledValue,
} from "../../store/actions/user-values.actions";

function UsersTopValues() {
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

  return (
    <>
      {usersList && usersList.length > 0 && (
        <section>
          <div>
            <div>
              <h4>
                {usersList.length > 3 ? "What's essential?" : "my values"}
              </h4>

              {usersList.map((val) => {
                return (
                  <div
                    role="presentation"
                    key={val.value}
                    onClick={() => handleClick(val)}
                  >
                    {/* Things might look REALLY BAD,
                        replacing unstyled p with this
                        could help  */}
                    {/* <p className={`${val.remove === true && "toggle"}`}></p> */}
                    <p>- {val.value}</p>
                  </div>
                );
              })}
              {usersList.length > 3 ? (
                <span>
                  <p>Cross off all but 3 of these values</p>
                  <button onClick={handleRemove}>remove</button>
                </span>
              ) : (
                <div>
                  <span>
                    <button onClick={() => handleConfirm(userID, usersList)}>
                      confirm
                    </button>
                  </span>
                  {/* <span className="btns">
                    <button onClick={handleEdit}>
                      edit
                    </button>
                  </span> */}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default UsersTopValues;
