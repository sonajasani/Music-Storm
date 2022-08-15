import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch, Redirect, useLocation } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Discover from "./components/Discover";
import SongPage from "./components/SongPage";
import UploadForm from "./components/UploadForm";
import UserProfile from "./components/UserProfile"
import EditSongForm from "./components/EditSongForm";
import Search from "./components/Search"
import history from './history';
import { getAllSongs } from "./store/songs";

/*********************************************************************************************************************************/


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [color, setColor] = useState('')

  const path = useLocation().pathname

  useEffect(() => {
    path === '/' ? setColor('black') : setColor('#272727')
  }, [path])

  document.body.style.backgroundColor = color

  useEffect(() => {
    dispatch(getAllSongs());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  //const songs = useSelector((state) => state.songsRed.songs);
 

  return (
    // <Router history={history}>

    <div id="container">
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Splash isLoaded={isLoaded} />
          </Route>
          <Route exact path="/discover">
            <Discover isLoaded={isLoaded} />
          </Route>
          <Route exact path="/songs/:songId">
            <SongPage isLoaded={isLoaded} />
          </Route>
          <Route exact path="/upload">
            <Navigation isLoaded={isLoaded} />
            <UploadForm />
          </Route>
          <Route exact path="/profile" >
            <Navigation isLoaded={isLoaded} />
            <UserProfile />
          </Route>
          <Route exact path="/update/:songId" >
            <Navigation isLoaded={isLoaded} />
            <EditSongForm />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
          <Route path="/search">
            <Navigation isLoaded={isLoaded} />
            <Search />
          </Route>
        </Switch>
      )}
    </div>
    // </Router>
  );
}


/*********************************************************************************************************************************/

export default App;
