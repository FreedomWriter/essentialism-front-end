import React from "react";
import { useSelector } from "react-redux";

import { CardsCenter, EditValuesCard } from "./Confirmed-Values.styles";

function ConfirmedTopValues({ className }) {
  const userValues = useSelector(state => state.userValues.userValues);

  return (
    <>
      <CardsCenter>
        {userValues.map(userValue => {
          // console.log(userValue.tasks);
          return (
            <EditValuesCard>
              <div>
                <article className={className}>
                  <div className="card-info">
                    <h4>
                      <strong>Value:</strong>
                      <br></br> {userValue.user_value}
                    </h4>

                    <>
                      <p>
                        <strong>Description:</strong> <br></br>
                        {userValue.user_value_description ||
                          "Add a description for this userValue"}
                      </p>
                    </>
                  </div>
                </article>
              </div>
            </EditValuesCard>
          );
        })}{" "}
      </CardsCenter>
    </>
  );
}

export default ConfirmedTopValues;
