import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postProjects } from "../../store/actions/projects.actions";

const ProjectForm = ({ isSubmitting, values }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const userValues = useSelector((state) => state.userValues.userValues);

  const goToNextCard = () => {};
  const handleClick = () => {
    // eslint-disable-next-line array-callback-return
    userValues.map((uv) => {
      if (uv.user_value === values.user_value) {
        return dispatch(
          postProjects({
            user_id: uv.user_id,
            user_value_id: uv.user_value_id,
            project_name: values.project_name,
            project_description: values.project_description,
          })
        );
      }
    });
    if (values.project_name === undefined) {
      alert(`You haven't entered a project`);
    }

    history.push("/home");
  };

  return (
    <section>
      <form>
        <label htmlFor="project_name">What are you working on?</label>
        <input
          type="text"
          id="project_name"
          name="project_name"
          placeholder="Project Name..."
        />
        <input
          type="textarea"
          name="project_description"
          placeholder="Project Description..."
        />
        <input name="user_value" as="select">
          <option value="" label="Aligns with..." />
          {userValues &&
            userValues.map((val) => {
              return (
                <option key={val.user_value_id} value={val.user_value}>
                  {val.user_value}
                </option>
              );
            })}
        </input>
        <div>
          <button type="submit" onClick={handleClick} disabled={isSubmitting}>
            submit
          </button>
          <button type="submit" onClick={goToNextCard} disabled={isSubmitting}>
            add more
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProjectForm;
