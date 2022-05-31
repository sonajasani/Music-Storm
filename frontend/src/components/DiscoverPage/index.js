import React, {useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProfileButton from '../Navigation/ProfileButton';
import  { getAllSongs } from "../../store/songs";
import './DiscoverPage.css';
import logo from "../Navigation/logo.png";

/*******************************************************************************************************************/


function DiscoverPage({ isLoaded }){

  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const songs = useSelector((state) => state.song.songs);


  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]); 


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  }

  return (
    <div className="discoverpage-container">
      <div className="navbar">
        <nav id="nav">
          <div id="logo">
            <img id="logo" alt="" src={logo}></img>
            <NavLink id="homeBtn" exact to="/discover">
              MusicStorm
            </NavLink>
            <NavLink className="home" exact to="/discover">Home</NavLink>
          </div>
          <div className="github-link">
            <a href="https://github.com/sonajasani" id="github">Github</a>
          </div>
          <div className="search-bar">
            <input id="searchInput" type="search" name="term" placeholder="Search..." required></input>
            <button className="searchbtn">
                  <i className="fas fa-search"></i>
            </button>
          </div>
          <NavLink id="uploadbtn" to="/upload" >
                Upload
          </NavLink>
          <NavLink id="navProfile" to="/profile">
                {sessionUser?.username}
          </NavLink>
          {isLoaded && sessionLinks}
        </nav>
      </div>
      <div className="main-content-container">
        <h1 id="discover-title">Top Songs On MusicStorm</h1>
        <div className="songs">
            {songs?.songs.map((song) => {
              return (
                <div
                  className="song-container"
                  onClick={() => {
                    history.push(`/songs/${song.id}`);
                  }}
                  key={song.id}
                >
                  <p className="song-title">{song.title}</p>
                  <img className="song-img" alt="" src={song.imageFile}></img>
                  <audio className="song-audio"
                    controls
                    controlsList="nodownload"
                    src={song.audioFile}
                  ></audio>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}


/*******************************************************************************************************************/

export default DiscoverPage;
