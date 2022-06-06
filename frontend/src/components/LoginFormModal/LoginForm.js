import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as sessionActions from "../../store/session";
import "./LoginForm.css";

/*********************************************************************************************************************************/


export default function LoginFormPage() {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  if (sessionUser) return <Redirect to="/discover" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    if (!errors) history.push("/discover");
  };

  const demoSubmit = (e) => {
    e.preventDefault();
   
    history.push("/discover");
    return dispatch(sessionActions.demoLogin());
  };

  return (
    <div className="login-container">
      <form onSubmit={demoSubmit}>
        <button className="loginFormBtns" id="demoBtn" type="submit">
          Demo Log In
        </button>
      </form>
      <div className="login-or">
        <div className="before-or"></div>
        <div>or</div>
        <div className="after-or"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Email address or username"
            className="login-inputs"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login-inputs"
            required
          />
        </div>
        <button className="loginFormBtns" type="submit">
          Log In
        </button>
      </form>
      <ul className="form2-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    </div>
  );
}


