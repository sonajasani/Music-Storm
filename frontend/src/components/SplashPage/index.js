import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';
import './SplashPage.css';


/*******************************************************************************************************************/


function SplashPage(){

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredential("Demo-lition")
    setPassword("password")
    return dispatch(sessionActions.login({ credential, password }))
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="discover-link">
            <NavLink className="splash-discover" exact to="/discover">Discover</NavLink>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="login-signup">
          <div className="splash-login">
            <NavLink className="s-login" to="/login">Sign in</NavLink>
          </div>
          <div className="splash-signup" >
            <NavLink className="new-account" to="/signup">Create account</NavLink>
          </div>
        </div>
        <div className="splash-demo">
          <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            value={credential}
          />
          <input
            type="hidden"
            value={password}
          />
          <button className="demo-btn" type="submit">Guest User</button>
          </form>
        </div>
      </>
    );
  }

  console.log(sessionLinks)

  return (
    <div className="splash-main">
      <div className="splash-navbar">
        <nav id="splash-nav">
          <div id="splash-logo">
            <img id="splash-logo" alt="" src="data:image/png;base64,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"></img>
            <NavLink id="splash-homeBtn" exact to="/">
              MusicStorm
            </NavLink>
            <div className="splash-github-link">
                <a href="https://github.com/sonajasani" id="splash-github">Github</a>
            </div>
            {sessionLinks}
          </div>
        </nav>
      </div>
      <div className="search-or-upload">
        <div className="splash-search-bar">
          <input id="splash-searchInput" type="search" name="term" placeholder="Search for artists, albums, tracks" required></input>
          <button className="splash-searchbtn">
                <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="or-text">
          <p>or</p>
        </div>
        <NavLink id="splash-uploadbtn" to="/upload">
              Upload your own
        </NavLink>
      </div>
    </div>
  );
}

/*******************************************************************************************************************/

export default SplashPage;
