import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NewPage from "./pages/NewPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/new" exact component={NewPage} />
      </Switch>
    </BrowserRouter>
  );
}
