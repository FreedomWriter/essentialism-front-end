// ALERT: COMMENTED CODE BELOW BECAUSE HAVEN'T TESTED REFACTOR TO
// ADDRESS DISABLE ESLINT ON LINE 185

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { putUserValues } from "../../store/actions/user-values.actions";

const EditValues = ({ values }) => {
  const [valueToEditId, setValueToEditId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const userValues = useSelector((state) => state.userValues.userValues);

  const handleClick = (vals) => {
    const { prevVals, nextVals } = vals;

    const updateObj = {
      user_id: prevVals.user_id,
      user_value_id: nextVals.user_value_id || prevVals.user_value_id,
      user_value: nextVals.user_value || prevVals.user_value,
      user_value_description:
        nextVals.user_value_description || prevVals.user_value_description,
    };
    dispatch(putUserValues(updateObj)).then(() => {
      setValueToEditId(null);
      history.push("/edit-values");
    });
  };

  const handleEditClick = (id) => {
    setValueToEditId(id);
  };

  return (
    <>
      <div editing={valueToEditId}>
        {userValues.map((userValue) => {
          return (
            <div editing={valueToEditId} key={userValue.user_value_id}>
              <div>
                <button
                  onClick={() => handleEditClick(userValue.user_value_id)}
                >
                  Edit
                </button>
                <article>
                  <div>
                    <h4>
                      <strong>Value:</strong>
                      <br></br> {userValue.user_value}
                    </h4>
                    {valueToEditId === null && (
                      <>
                        <p>
                          <strong>Description:</strong> <br></br>
                          {userValue.user_value_description ||
                            "Add a description for this value"}
                        </p>
                      </>
                    )}
                  </div>
                </article>
              </div>
            </div>
          );
        })}{" "}
      </div>
      {userValues &&
        userValues.map(
          (userValue) =>
            userValue?.user_value_id === valueToEditId && (
              <div key={userValue.user_value_id}>
                <div>
                  <div>
                    <button
                      onClick={() =>
                        handleClick({ prevVals: userValue, nextVals: values })
                      }
                    >
                      Update
                    </button>
                    <article>
                      <div>
                        <h4>
                          <strong>Current Value Name:</strong>
                          <br></br> {userValue.user_value}
                          <input
                            type="text"
                            name="user_value"
                            placeholder="Update this value's name..."
                          />
                        </h4>
                        <strong> Current Description:</strong> <br></br>
                        {userValue.user_value_description ||
                          "Add a description for this value"}
                        <input
                          type="textarea"
                          name="user_value_description"
                          placeholder="Update this values's description..."
                        />
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default EditValues;

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { putUserValues } from "../../store/actions/user-values.actions";

// const EditValues = ({ values }) => {
//   const [valueToEditId, setValueToEditId] = useState(null);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const userValues = useSelector((state) => state.userValues.userValues);

//   const handleClick = (vals) => {
//     const { prevVals, nextVals } = vals;

//     const updateObj = {
//       user_id: prevVals.user_id,
//       user_value_id: nextVals.user_value_id || prevVals.user_value_id,
//       user_value: nextVals.user_value || prevVals.user_value,
//       user_value_description:
//         nextVals.user_value_description || prevVals.user_value_description,
//     };
//     dispatch(putUserValues(updateObj)).then(() => {
//       setValueToEditId(null);
//       history.push("/edit-values");
//     });
//   };

//   const handleEditClick = (id) => {
//     setValueToEditId(id);
//   };

//   return (
//     <>
//       <div editing={valueToEditId}>
//         {userValues.map((userValue) => {
//           return (
//             <div editing={valueToEditId} key={userValue.user_value_id}>
//               <div>
//                 <button
//                   onClick={() => handleEditClick(userValue.user_value_id)}
//                 >
//                   Edit
//                 </button>
//                 <article>
//                   <div>
//                     <h4>
//                       <strong>Value:</strong>
//                       <br></br> {userValue.user_value}
//                     </h4>
//                     {valueToEditId === null && (
//                       <>
//                         <p>
//                           <strong>Description:</strong> <br></br>
//                           {userValue.user_value_description ||
//                             "Add a description for this value"}
//                         </p>
//                       </>
//                     )}
//                   </div>
//                 </article>
//               </div>
//             </div>
//           );
//         })}{" "}
//       </div>
//       {userValues &&
//         // eslint-disable-next-line array-callback-return
//         userValues.map((userValue) => {
//           if (userValue.user_value_id === valueToEditId) {
//             return (
//               <div key={userValue.user_value_id}>
//                 <div>
//                   <div>
//                     <button
//                       onClick={() =>
//                         handleClick({ prevVals: userValue, nextVals: values })
//                       }
//                     >
//                       Update
//                     </button>
//                     <article>
//                       <div>
//                         <h4>
//                           <strong>Current Value Name:</strong>
//                           <br></br> {userValue.user_value}
//                           <input
//                             type="text"
//                             name="user_value"
//                             placeholder="Update this value's name..."
//                           />
//                         </h4>
//                         <strong> Current Description:</strong> <br></br>
//                         {userValue.user_value_description ||
//                           "Add a description for this value"}
//                         <input
//                           type="textarea"
//                           name="user_value_description"
//                           placeholder="Update this values's description..."
//                         />
//                       </div>
//                     </article>
//                   </div>
//                 </div>
//               </div>
//             );
//           }
//         })}
//     </>
//   );
// };

// export default EditValues;
