import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/actions/tasks.actions";
import { getProjects } from "../../store/actions/projects.actions";
import { useParams } from "react-router-dom";

import { CardsCenter, TasksCard } from "./Tasks.styles";

export default function Tasks({ className }) {
  const { project_id } = useParams();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const filteredProjects = projects.filter((project) => {
    if (Number(project.project.id) === Number(project_id)) {
      return project;
    }
  });
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
