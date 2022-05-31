
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as sessionActions from "../../store/session";
import "./SignupForm.css";

/**************************************************************************************************************************/

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) {
          if (!(typeof data.errors[0] === "object"))
            return setErrors(data.errors);
          const err = [];
          data.errors.map((error) => err.push(error.message));
          setErrors(err);
        }
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };


  return (
    <div className="signup-container">
      <div id="signup-title">Welcome To SoundWave</div>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-inputs"
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-inputs"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-inputs"
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-inputs"
          placeholder="Confirm Password"
          required
        />
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <ul className="form-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    </div>
  );
}

/**************************************************************************************************************************/

export default SignupForm;
