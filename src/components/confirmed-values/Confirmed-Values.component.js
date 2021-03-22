import React from "react";
import { useSelector } from "react-redux";

function ConfirmedTopValues({ className }) {
  const userValues = useSelector((state) => state.userValues.userValues);

  return (
    // <>
    <>
      {userValues.map((userValue) => {
        return (
          <div key={userValue.user_value_id}>
            <article className={className}>
              <div className="card-info">
                <h4>
                  <strong>Value: </strong>
                  {userValue.user_value}
                </h4>
                <p>
                  <strong>Description:</strong> <br></br>
                  <br></br>
                  {userValue.user_value_description ||
                    "Add a description for this value..."}
                </p>
              </div>
            </article>
          </div>
        );
      })}{" "}
    </>
  );
}

export default ConfirmedTopValues;
