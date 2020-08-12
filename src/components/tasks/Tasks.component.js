import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/actions/projects.actions";
import { useParams } from "react-router-dom";

import { CardsCenter, TasksCard } from "./Tasks.styles";

export default function Tasks({ className }) {
  const { project_id } = useParams();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  // eslint-disable-next-line array-callback-return
  const filteredProjects = projects.filter((project) => {
    if (Number(project.project.id) === Number(project_id)) {
      return project;
    }
  });
  const project = filteredProjects[0];
  useEffect(() => {
    dispatch(
      getProjects({
        user_id: project.project.user_id,
        user_value_id: project.project.user_value_id,
      })
    );
  }, [dispatch, project.project.user_id, project.project.user_value_id]);
  return (
    <>
      <section>
        <h2>Project: {project.project.project_name}</h2>
        <div className={className}>
          <div>
            <CardsCenter>
              {filteredProjects.map((project) => {
                return project.tasks.map((task) => {
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
                              {task.task_notes ||
                                "Add some notes for this task"}
                            </p>
                          </div>
                        </article>
                      </div>
                    </TasksCard>
                  );
                });
              })}
            </CardsCenter>
          </div>
        </div>
      </section>
    </>
  );
}
