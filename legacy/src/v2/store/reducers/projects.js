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
  PROJECTS_DELETE_FAILURE,
} from "v2/utils";

const initialState = {
  projects: [
    {
      project: {},
      tasks: [],
      resources: [],
      contexts: [],
    },
  ],
};
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_LOAD_START:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECTS_LOAD_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
      };
    case PROJECTS_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case PROJECTS_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECTS_POST_SUCCESS:
      return {
        projects:
          state.projects.length > 0
            ? [...state.projects, action.payload]
            : [action.payload],
        isLoading: false,
      };
    case PROJECTS_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case PROJECTS_PUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECTS_PUT_SUCCESS:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.project.id !== action.payload.project.id) {
            return project;
          }
          return action.payload;
        }),
        isLoading: false,
      };
    case PROJECTS_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case PROJECTS_DELETE_START:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECTS_DELETE_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };
    case PROJECTS_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default projectsReducer;
