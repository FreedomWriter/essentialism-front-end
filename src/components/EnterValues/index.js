import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTempList } from "../../store/actions/user-values.actions";

export default function EnterValuesForm() {
  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState("");

  function handleUsersValues(e) {
    e.preventDefault();
    userValue !== "" && dispatch(addToTempList(userValue));
    setUserValue("");
  }

  function handleChange(e) {
    setUserValue(e.target.value);
  }
  return (
    <form onSubmit={handleUsersValues}>
      <label htmlFor="my-value">Enter A Value</label>
      <input
        type="text"
        value={userValue}
        onChange={handleChange}
        id="my-value"
        name="my-value"
      />
      <button type="submit">Add Value</button>
    </form>
  );
}
