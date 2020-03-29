import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const TASKS_LOAD_START = "TASKS_LOAD_START";
export const TASKS_LOAD_SUCCESS = "TASKS_LOAD_SUCCESS";
export const TASKS_LOAD_FAILURE = "TASKS_LOAD_FAILURE";

export const TASKS_POST_START = "TASKS_POST_START";
export const TASKS_POST_SUCCESS = "TASKS_POST_SUCCESS";
export const TASKS_POST_FAILURE = "TASKS_POST_FAILURE";

export const TASKS_PUT_START = "TASKS_PUT_START";
export const TASKS_PUT_SUCCESS = "TASKS_PUT_SUCCESS";
export const TASKS_PUT_FAILURE = "TASKS_PUT_FAILURE";

export const TASKS_DELETE_START = "TASKS_DELETE_START";
export const TASKS_DELETE_SUCCESS = "TASKS_DELETE_SUCCESS";
export const TASKS_DELETE_FAILURE = "TASKS_DELETE_FAILURE";

export const getTasks = taskData => dispatch => {
  dispatch({ type: TASKS_LOAD_START, payload: taskData });
  axiosWithAuth()
    .get(
      `/user/${taskData.user_id}/values/${taskData.user_value_id}/projects/${taskData.project_id}/tasks`
    )
    .then(res => {
      dispatch({
        type: TASKS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: TASKS_LOAD_FAILURE,
        payload: "error loading tasks" + err.message
      });
    });
};

export const getTaskById = taskData => dispatch => {
  dispatch({ type: TASKS_LOAD_START });
  axiosWithAuth()
    .get(
      `/user/${taskData.user_id}/values/${taskData.user_value_id}/projects/${taskData.project_id}/tasks/${taskData.task_id}`
    )
    .then(res => {
      dispatch({
        type: TASKS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: TASKS_LOAD_FAILURE,
        payload: "error loading tasks" + err.message
      });
    });
};

export const postTask = taskData => dispatch => {
  const { task_name, task_description } = taskData;
  dispatch({
    type: TASKS_POST_START,
    payload: {
      task_name,
      task_description
    }
  });
  axiosWithAuth()
    .post(
      `/user/${taskData.user_id}/values/${taskData.user_value_id}/projects/${taskData.project_id}`,
      {
        task_name,
        task_description
      }
    )
    .then(res => {
      dispatch({
        type: TASKS_POST_SUCCESS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: TASKS_POST_FAILURE,
        payload: "error posting data" + err
      });
    });
};

export const putTask = values => dispatch => {
  const { task_name, task_description } = values;
  dispatch({ type: TASKS_PUT_START, payload: values });
  return axiosWithAuth()
    .put(
      `/user/${values.user_id}/values/${values.value_id}/projects/${values.project_id}/tasks/${values.task_id}`,
      { task_name, task_description }
    )
    .then(res => {
      dispatch({
        type: TASKS_PUT_SUCCESS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: TASKS_PUT_FAILURE,
        payload: "error putting projects data" + err
      });
    });
};

export const deleteTask = taskData => dispatch => {
  dispatch({ type: TASKS_DELETE_START });
  axiosWithAuth()
    .delete(
      `/user/${taskData.user_id}/values/${taskData.value_id}/projects/${taskData.project_id}/tasks/${taskData.task_id}`
    )
    .then(res => {
      dispatch({
        type: TASKS_DELETE_SUCCESS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: TASKS_DELETE_FAILURE,
        payload: "error deleting projects data" + err
      });
    });
};
