import React, { useEffect, useState } from 'react'
import './styleSheets/App.css'
import { Switch, Route, Redirect, useHistory } from 'react-router'
import HomePage from './pages/HomePage'

import PlacesToStayPage from "./pages/PlacesToStayPage";
import StaysInAreaPage from "./pages/StaysInAreaPage";
import HostDashBoardPage from "./pages/HostDashBoardPage";

import LoginPage, { UserCredentials } from './pages/LoginPage'

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
        {/* <Route path="/:acc"></Route>  This is causing a bug*/} 
        <Route path="/login-host">
          <LoginPage />
        </Route>
        <Route path="/staysin/:search">
          <StaysInAreaPage />
        </Route>
        <Route path="/dashboard">
         <HostDashBoardPage/>
        </Route>
        {/* <Route path="/:accomidationname">
          <h1>Hello world</h1>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App
