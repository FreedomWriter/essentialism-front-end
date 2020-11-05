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
} from "../actions/projects.actions";

// import {
//   TASKS_LOAD_START,
//   TASKS_LOAD_SUCCESS,
//   TASKS_LOAD_FAILURE,
//   TASKS_POST_START,
//   TASKS_POST_SUCCESS,
//   TASKS_POST_FAILURE,
//   TASKS_PUT_START,
//   TASKS_PUT_SUCCESS,
//   TASKS_PUT_FAILURE,
//   TASKS_DELETE_START,
//   TASKS_DELETE_SUCCESS,
//   TASKS_DELETE_FAILURE
// } from "../actions/tasks.actions";

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
      const filtered = state.projects.map((project) => {
        if (project.project.id !== action.payload.project.id) {
          return project;
        } else {
          return action.payload;
        }
      });
      return {
        ...state,
        projects: filtered,
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
    // case TASKS_LOAD_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case TASKS_LOAD_SUCCESS:
    //   return {
    //     ...state,
    //     tasks: action.payload,
    //     isLoading: false
    //   };
    // case TASKS_LOAD_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };
    // case TASKS_POST_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case TASKS_POST_SUCCESS:
    //   return {
    //     ...state
    //     tasks:
    //       state.tasks.length > 0
    //         ? [...state.tasks, action.payload]
    //         : [action.payload],
    //     isLoading: false
    //   };
    // case TASKS_POST_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };
    // case TASKS_PUT_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case TASKS_PUT_SUCCESS:
    // const filteredTasks = state.projects.protasks.map(project => {
    //   if (project.project.id !== action.payload.project.id) {
    //     return project;
    //   } else {
    // return action.payload;
    //   }
    // });
    // return {
    //   ...state,
    //   tasks: filtered,
    //   isLoading: false
    // };
    // case TASKS_PUT_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };

    // case TASKS_DELETE_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case TASKS_DELETE_SUCCESS:
    //   return {
    //     ...state,
    //     tasks: action.payload
    //   };
    // case TASKS_DELETE_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };

    default:
      return state;
  }
};

export default projectsReducer;
