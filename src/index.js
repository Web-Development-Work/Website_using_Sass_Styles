import React from 'react';
import {hydrate, render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import "./styles/App.scss";

if (document.getElementById("root").hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}


serviceWorker.unregister();
