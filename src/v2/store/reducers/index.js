import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import user from "./user";
import projects from "./projects";
import values from "./values";
import userValues from "./userValues";
import tasks from "./tasks";
import zenQuotes from "./zenQuotes";
import modals from "./modals";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth,
  user,
  projects,
  values,
  userValues,
  zenQuotes,
  tasks,
  modals,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
