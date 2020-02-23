import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";
import valuesReducer from "./valuesReducer";
import userValuesReducer from "./usersValuesReducer";
import zenReducer from "./zenReducer";

const persistConfig = {
  key: "root",
  storage
  // ,
  // whitelist: [
  //   "loginReducer",
  //   "userReducer",
  //   "projectsReducer",
  //   "valuesReducer",
  //   "userValuesReducer",
  //   "zenReducer"
  // ]
};

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  projects: projectsReducer,
  values: valuesReducer,
  userValues: userValuesReducer,
  zen: zenReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;