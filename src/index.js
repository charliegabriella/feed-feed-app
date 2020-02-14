import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById("root"));
import { BrowserRouter as Router } from "react-router-dom";
=======
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
>>>>>>> 1af0be46ae8cb0b0e56b97f16be9a0bb316672d5

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
