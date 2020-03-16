import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

localStorage.setItem("valueOnboardingComplete", JSON.stringify(true));
localStorage.setItem("projectOnboardingComplete", JSON.stringify(true));
localStorage.setItem("explanations-confirmed", JSON.stringify(true));
localStorage.setItem("projects-confirmed", JSON.stringify(true));

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
