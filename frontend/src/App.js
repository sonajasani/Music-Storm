import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";

import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import DiscoverPage from "./components/DiscoverPage";
import SplashPage from "./components/SplashPage";
import LoginFormPage from './components/LoginFormPage';


/*************************************************************************************************/

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    dispatch(sessionActions.restoreUser()).then(()=> setIsLoaded(true))
  },[dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route path="/discover">
            <DiscoverPage isLoaded={isLoaded} />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

/*************************************************************************************************/

export default App;