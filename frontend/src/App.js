import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";

import * as sessionActions from "./store/session";
import DiscoverPage from "./components/DiscoverPage";
import SplashPage from "./components/SplashPage";
import ProfilePage from "./components/ProfilePage"
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage"
import SongPage from "./components/SongPage"
import UploadFormPage from "./components/UploadFormPage"


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
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/discover">
            <DiscoverPage isLoaded={isLoaded} />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
          <Route path='/songs/songId}'>
            <SongPage />
          </Route>
          <Route path="/upload">
            <UploadFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

/*************************************************************************************************/

export default App;