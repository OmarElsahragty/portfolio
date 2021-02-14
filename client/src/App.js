import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Views";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
