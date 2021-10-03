import {
  TASKS_LOAD_START,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_FAILURE,
  TASKS_POST_START,
  TASKS_POST_SUCCESS,
  TASKS_POST_FAILURE,
  TASKS_PUT_START,
  TASKS_PUT_SUCCESS,
  TASKS_PUT_FAILURE,
  TASKS_DELETE_START,
  TASKS_DELETE_SUCCESS,
  TASKS_DELETE_FAILURE,
} from "v2/utils";

const initialState = {
  tasks: [],
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LOAD_START:
      return {
        ...state,
        isLoading: true,
      };
    case TASKS_LOAD_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
      };
    case TASKS_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case TASKS_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case TASKS_POST_SUCCESS:
      return {
        tasks:
          state.tasks.length > 0
            ? [...state.tasks, action.payload]
            : [action.payload],
        isLoading: false,
      };
    case TASKS_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case TASKS_PUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case TASKS_PUT_SUCCESS:
      // const filtered = state.tasks.map(project => {
      //   if (project.project.id !== action.payload.project.id) {
      //     return project;
      //   } else {
      //     return action.payload;
      //   }
      // });
      return {
        ...state,
        tasks: state.tasks.map((project) => {
          if (project.project.id !== action.payload.project.id) {
            return project;
          }
          return action.payload;
        }),
        isLoading: false,
      };
    case TASKS_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case TASKS_DELETE_START:
      return {
        ...state,
        isLoading: true,
      };
    case TASKS_DELETE_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };
    case TASKS_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default tasksReducer;
