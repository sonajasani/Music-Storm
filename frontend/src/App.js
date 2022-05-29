import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";

import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
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
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/discover">
            <Navigation isLoaded={isLoaded} />
          </Route>
        </Switch>
      )}
    </>
  );
}

/*************************************************************************************************/

export default App;