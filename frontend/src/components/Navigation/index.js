// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import SearchBar from '../SearchBar';
import "./Navigation.css";
import logo from "./logo.png";

/*********************************************************************************************************************************/


function Navigation({ isLoaded }) {

  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="navBtnContainer">
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div className="navbar">
      <div id="nav-content">
        <nav id="nav">
          <div id="logo">
            <img id="imgLogo" src={logo} />
            <NavLink id="homeBtn" exact to="/discover">
              MusicStorm
            </NavLink>
            <NavLink id="nav-home" exact to="/discover">
              Home
            </NavLink>
            <a
              id="nav-github"
              href="https://github.com/sonajasani"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <div className="nav-search-container">
              <div className='searchbar-ctn'>
                <SearchBar />
              </div>
            </div>
            <a
              id="nav-linkedIn"
              href="https://www.linkedin.com/in/sona-jasani-3b3540194/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <NavLink id="nav-upload" exact to="/upload">
              Upload
            </NavLink>
            <NavLink id="nav-profile" exact to="/profile">
              {sessionUser?.username}
            </NavLink>
          </div>
          {isLoaded && sessionLinks}
        </nav>
      </div>
    </div>
  );
}


/*********************************************************************************************************************************/


export default Navigation;
