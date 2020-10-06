import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CardsCenter, TasksCard } from "./Tasks.styles";

export default function Tasks({ className }) {
  const { project_id } = useParams();
  const projects = useSelector((state) => state.projects.projects);
  const filteredProjects = projects.filter(
    (project) => Number(project.project.id) === Number(project_id) && project
  );
  const project = filteredProjects[0];

  return (
    <section className={className}>
      <h2>
        <strong>Project</strong>: <span>{project.project.project_name}</span>
      </h2>
      <CardsCenter>
        {project.tasks.map((task) => {
          return (
            <TasksCard key={task.id}>
              <div>
                <article className={className}>
                  <div className="card-info">
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
            </TasksCard>
          );
        })}
      </CardsCenter>
    </section>
  );
}
