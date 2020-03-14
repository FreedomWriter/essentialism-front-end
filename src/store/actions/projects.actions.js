import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const PROJECTS_LOAD_START = "PROJECTS_LOAD_START";
export const PROJECTS_LOAD_SUCCESS = "PROJECTS_LOAD_SUCCESS";
export const PROJECTS_LOAD_FAILURE = "PROJECTS_LOAD_FAILURE";

export const PROJECTS_POST_START = "PROJECTS_POST_START";
export const PROJECTS_POST_SUCCESS = "PROJECTS_POST_SUCCESS";
export const PROJECTS_POST_FAILURE = "PROJECTS_POST_FAILURE";

export const PROJECTS_PUT_START = "PROJECTS_PUT_START";
export const PROJECTS_PUT_SUCCESS = "PROJECTS_PUT_SUCCESS";
export const PROJECTS_PUT_FAILURE = "PROJECTS_PUT_FAILURE";

export const PROJECTS_DELETE_START = "PROJECTS_DELETE_START";
export const PROJECTS_DELETE_SUCCESS = "PROJECTS_DELETE_SUCCESS";
export const PROJECTS_DELETE_FAILURE = "PROJECTS_DELETE_FAILURE";

export const getProjects = projectData => dispatch => {
  dispatch({ type: PROJECTS_LOAD_START });
  axiosWithAuth()
    .get(
      `/user/${projectData.user_id}/values/${projectData.user_value_id}/projects/`
    )
    .then(res => {
      dispatch({
        type: PROJECTS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: PROJECTS_LOAD_FAILURE,
        payload: "error loading projects" + err
      });
    });
};

export const getUserProjects = projectData => dispatch => {
  dispatch({ type: PROJECTS_LOAD_START });
  axiosWithAuth()
    .get(
      `/user/${projectData.user_id}/values/${projectData.user_value_id}/projects/${projectData.id}`
    )
    .then(res => {
      dispatch({
        type: PROJECTS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: PROJECTS_LOAD_FAILURE,
        payload: "error loading projects" + err
      });
    });
};

export const getProjectById = projectData => dispatch => {
  dispatch({ type: PROJECTS_LOAD_START });
  axiosWithAuth()
    .get(
      `/user/${projectData.user_id}/values/${projectData.user_value_id}/projects/${projectData.project_id}`
    )
    .then(res => {
      dispatch({
        type: PROJECTS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: PROJECTS_LOAD_FAILURE,
        payload: "error loading projects" + err
      });
    });
};

export const postProjects = postData => dispatch => {
  const { project_name, project_description } = postData;
  dispatch({
    type: PROJECTS_POST_START,
    payload: {
      project_name,
      project_description
    }
  });
  axiosWithAuth()
    .post(
      `/user/${postData.user_id}/values/${postData.user_value_id}/projects`,
      {
        project_name,
        project_description
      }
    )
    .then(res => {
      dispatch({
        type: PROJECTS_POST_SUCCESS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: PROJECTS_POST_FAILURE,
        payload: "error posting data" + err
      });
    });
};

export const putProjects = values => dispatch => {
  dispatch({ type: PROJECTS_PUT_START, payload: values });
  axiosWithAuth()
    .put(
      `/user/${values.id}/values/${values.value_id}/projects/${values.project_id}`,
      values
    )
    .then(res => {
      dispatch({
        type: PROJECTS_PUT_SUCCESS,
        payload: values
      });
    })

    .catch(err => {
      dispatch({
        type: PROJECTS_PUT_FAILURE,
        payload: "error putting projects data" + err
      });
    });
};

export const deleteProjects = id => dispatch => {
  dispatch({ type: PROJECTS_DELETE_START });
  axiosWithAuth()
    .delete(`/projects/${id}`)
    .then(res => {
      dispatch({
        type: PROJECTS_DELETE_SUCCESS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: PROJECTS_DELETE_FAILURE,
        payload: "error deleting projects data" + err
      });
    });
};
