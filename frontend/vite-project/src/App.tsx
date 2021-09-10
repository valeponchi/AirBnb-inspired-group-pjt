import React, { useEffect, useState } from "react";
import "./styleSheets/App.css";
import { Switch, Route, Redirect, useHistory } from "react-router";
import HomePage from "./pages/HomePage";

import PlacesToStayPage from "./pages/PlacesToStay";
import StaysInAreaPage from "./pages/StaysInAreaPage";

import OneApartmentHost from "./pages/OneApartmentHost";

import HostDashBoardPage from "./pages/HostDashBoardPage";

import LoginPage, { UserCredentials } from './pages/LoginPage'
import HostingPage from './pages/HostingPage'
import Footer from './components/Footer'
import HostAddOne from './pages/HostAddOne'


function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState();


  return (
    <div className="App ">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            userId={userId}
          />
        </Route>
        <Route path="/placestostay">
          <PlacesToStayPage
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            userId={userId}
          />
        </Route>
        <Route path="/hosting">
          <HostingPage />
        </Route>
        <Route path="/addhostproperty"></Route>
        {/* <Route path="/:acc"></Route>  This is causing a bug*/}
        <Route path="/login-host">
          <LoginPage setUserLoggedIn={setUserLoggedIn} setUserId={setUserId} />
        </Route>
        <Route path="/staysin/:search">
          <StaysInAreaPage
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            userId={userId}
          />
        </Route>

        <Route path="/apartment/:id/:apartmentId/:postCode">
          <OneApartmentHost
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            userId={userId}
          />
        </Route>

        <Route path="/dashboard/:id">
          <HostDashBoardPage
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            userId={userId}
          />
        </Route>
        
        
				<Route path="/addhostproperty">
					<HostAddOne
						userLoggedIn={userLoggedIn}
						setUserLoggedIn={setUserLoggedIn}
					/>
				</Route>
        {/* <Route path="/:accomidationname">
          <h1>Hello world</h1>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
