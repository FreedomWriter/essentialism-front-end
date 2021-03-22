import React from "react";
import { useHistory } from "react-router-dom";

function ProjectToEdit() {
  let history = useHistory();

  const userProjects = JSON.parse(localStorage.getItem("userProjects"));

  const handleClick = (id) => {
    history.push(`/edit-projects/${id}`);
  };
  return (
    <section>
      <div>
        <div>
          <h4>current projects</h4>
          <div>
            {userProjects
              ? userProjects.map((val) => {
                  return (
                    <div key={val.id} onClick={() => handleClick(val.id)}>
                      <p>
                        {" "}
                        <strong>{val.project}</strong> which aligns with{" "}
                        <strong>{val.value}</strong>
                      </p>
                    </div>
                  );
                })
              : history.push("/home")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectToEdit;
