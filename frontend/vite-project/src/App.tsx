import React, { useState } from "react";
import "./styleSheets/App.css";
import { Switch, Route, Redirect } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import PlacesToStayPage from "./pages/PlacesToStayPage";
import StaysInAreaPage from "./pages/StaysInAreaPage";
import HostDashBoardPage from "./pages/HostDashBoardPage";

function App() {
  return (
    <div className="App ">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/placestostay">
          <PlacesToStayPage />
        </Route>
        <Route path="/hosting">

        </Route>
        <Route path="/addhostproperty">

        </Route>
        <Route path="/login-host">
          <LoginPage />
        </Route>
        <Route path="/staysin/:search">
          <StaysInAreaPage />
        </Route>
        <Route path="/dashboard">
          <HostDashBoardPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
