// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as sessionActions from "../../store/session";
import "./LoginForm.css";

/************************************************************************************************************/

function LoginForm() {
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
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };


  return (
      <div className="login-contianer">
        <div id="login-title">Welcome back!</div>
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

export default LoginForm;