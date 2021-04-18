import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getValues } from "../../store/actions/values.actions";

import LoadingSpinner from "../../ui/LoadingSpinner.component";

import EnterValuesForm from "../../components/EnterValues";

import ValuePrompt from "../../components/ValuePrompt";

const ChoseValuesBanner = ({ showPrompts }) => {
  return (
    <div>
      <h5>
        What do you value?
        <br></br>
        <br></br>
        <span>
          take some time to write out what you value. Don&apos;t spend much time
          thinking about it, just write down the things that are important to
          you. Try to limit each entry to one or two words, remember the goal is
          hone in on what&apos;s really essential. What motivates you to get out
          of the bed in the morning? What&apos;s the last thing you think about
          before you go to sleep? If you need some help getting started, here
          are some{" "}
          <span onClick={showPrompts} role="presentation">
            prompts
          </span>
          .
        </span>{" "}
      </h5>
    </div>
  );
};

function ValuesList() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [promptVisibiity, setPromptVisibility] = useState(false);

  const values = useSelector((state) => state.values.values);
  const isLoading = useSelector((state) => state.login.isLoading);
  const usersList = useSelector((state) => state.userValues.tempList);

  useEffect(() => {
    dispatch(getValues());
  }, [dispatch]);

  function showPrompts() {
    setPromptVisibility(!promptVisibiity);
  }

  function handleValuesSubmit() {
    usersList.length >= 3 ? history.push("/reflect") : console.log("TRIM IT!!");
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(usersList);
  return (
    <>
      {/* showPrompts controls whether the user sees pre-populated values they can select with a checkbox  */}
      <ChoseValuesBanner showPrompts={showPrompts} />

      {promptVisibiity && (
        <div>
          {/* is `&&` this an anti pattern? */}
          {values &&
            values.map((val) => {
              return (
                <ValuePrompt key={val.id} info={val} customValue={false} />
              );
            })}
        </div>
      )}
      <EnterValuesForm />
      {/* This should be a component that is imported in to this page view - UsersValues,
      this should be reusable in for the "narrow down" view that is needed if the user selects > 3 values */}
      {usersList.length > 0 && (
        <>
          <div>
            {usersList &&
              usersList.map((val) => {
                return (
                  <ValuePrompt key={val.value} info={val} customValue={true} />
                );
              })}
          </div>

          <button onClick={handleValuesSubmit}>Done</button>
        </>
      )}
    </>
  );
}

export default ValuesList;
