import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "v2/store";
import { ModalHandler } from "v2";
import App from "./App";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ModalHandler />
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);
