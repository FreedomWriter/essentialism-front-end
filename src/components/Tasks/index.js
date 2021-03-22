import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Tasks() {
  const { project_id } = useParams();
  const projects = useSelector((state) => state.projects.projects);
  const filteredProjects = projects.filter(
    (project) => Number(project.project.id) === Number(project_id) && project
  );
  const project = filteredProjects[0];

  return (
    <section>
      <h2>
        <strong>Project</strong>: <span>{project.project.project_name}</span>
      </h2>
      {project.tasks.map((task) => {
        return (
          <div key={task.id}>
            <article>
              <div>
                <h4>
                  <strong>Task:</strong>
                  <br></br> {task.task_description}
                </h4>
                <p>
                  <strong>Description:</strong> <br></br>
                  {task.task_notes || "Add some notes for this task"}
                </p>
              </div>
            </article>
          </div>
        );
      })}
    </section>
  );
}
