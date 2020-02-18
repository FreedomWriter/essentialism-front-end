import {
  PROJECTS_LOAD_START,
  PROJECTS_LOAD_SUCCESS,
  PROJECTS_LOAD_FAILURE,
  PROJECTS_POST_START,
  PROJECTS_POST_SUCCESS,
  PROJECTS_POST_FAILURE,
  PROJECTS_PUT_START,
  PROJECTS_PUT_SUCCESS,
  PROJECTS_PUT_FAILURE,
  PROJECTS_DELETE_START,
  PROJECTS_DELETE_SUCCESS,
  PROJECTS_DELETE_FAILURE
} from "../actions/projects.actions";

const initialState = {
  project: [
    {
      id: "",
      user_id: "",
      username: "",
      value_id: "",
      value: "",
      project_name: "",
      project_description: "",
      project_complete: false
    }
  ],
  tasks: [
    {
      id: "",
      task_description: "",
      task_notes: "",
      task_complete: false
    }
  ],
  resources: [
    {
      resource_name: "",
      resource_description: ""
    }
  ],
  contexts: [
    {
      context: ""
    }
  ]
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case PROJECTS_LOAD_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        isLoading: false
      };
    case PROJECTS_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case PROJECTS_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case PROJECTS_POST_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        isLoading: false
      };
    case PROJECTS_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case PROJECTS_PUT_START:
      return {
        ...state,
        isLoading: true
      };
    case PROJECTS_PUT_SUCCESS:
      return [
        {
          ...state,
          projects: [...state.projects, action.payload],
          isLoading: false
        }
      ];
    case PROJECTS_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case PROJECTS_DELETE_START:
      return {
        ...state,
        isLoading: true
      };
    case PROJECTS_DELETE_SUCCESS:
      return {
        ...state,
        projects: action.payload
      };
    case PROJECTS_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default projectsReducer;
