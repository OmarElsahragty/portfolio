import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Theme from "./utilities/Theme";

import "./i18n";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
