import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';


/*******************************************************************************************************************/


function Navigation({ isLoaded }){

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredential("Demo-lition")
    setPassword("password")
    return dispatch(sessionActions.login({ credential, password }))
}

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          value={credential}
        />
        <input
          type="hidden"
          value={password}
        />
        <button type="submit">Demo</button>
        </form>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

/*******************************************************************************************************************/

export default Navigation;
