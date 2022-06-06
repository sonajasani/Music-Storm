import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import SplashFooter from "./SplashFooter";
import CreatorSplash from "./CreatorSplash";
import TrendingTracks from "./TrendingTracks";
import MobileSplash from "./MobileSplash";
import Search from "./Search";
import Slider from "./Slider";
import SignupForm from "../SignupFormModal/SignupForm";
import LoginForm from "../LoginFormModal/LoginForm";
import SplashNavigation from "./SplashNavigation";
import {openSignup, closeSignup, openLogin, closeLogin} from "../../store/modal";
import "./Splash.css";

/*********************************************************************************************************************************/


Modal.setAppElement(document.getElementById("root"));

/*********************************************************************************************************************************/


export default function Splash({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const signupState = useSelector((state) => state.modal.signupShow);
  const loginState = useSelector((state) => state.modal.loginShow);
  const sessionUser = useSelector((state) => state.session.user);

  const closeModal1 = () => dispatch(closeSignup());
  const closeModal2 = () => dispatch(closeLogin());

  useEffect(() => {
    if (sessionUser) history.push("/discover");
    else history.push("/");
  }, [sessionUser]);

  return (
    <div className="splash-container">
      <div id="top-splash">
        <SplashNavigation isLoaded={isLoaded} />
        <div className="slider-container">
          <Slider />
        </div>
        <div className="splash-search-box-container">
          <Search />
        </div>
        <div className="trend-tracks-container">
          <TrendingTracks />
        </div>
      </div>
      <div id="bottom-splash">
        <MobileSplash />
        <CreatorSplash />
        <div id="thanks-splash">
          <div id="thanks-content">
            <div>Thanks for listening. Now join in.</div>
            <p>
              Save tracks, follow artists and build playlists. All for free.
            </p>
            <>
              <button
                id="splash-signup-btn"
                onClick={() => dispatch(openSignup())}
              >
                Create account
              </button>
              <Modal
                isOpen={signupState}
                closeTimeoutMS={500}
                onRequestClose={closeModal1}
                contentLabel="Signup Modal"
                overlayClassName="OuterModal"
                className="InnerModal"
              >
                <SignupForm />
              </Modal>
            </>
            <div id="splash-login-container">
              <p id="splash-log-txt">Already have an account?</p>
              <>
                <button
                  id="splash-login-btn"
                  onClick={() => dispatch(openLogin())}
                >
                  Sign in
                </button>
                <Modal
                  isOpen={loginState}
                  closeTimeoutMS={500}
                  onRequestClose={closeModal2}
                  contentLabel="Login Modal"
                  overlayClassName="OuterModal"
                  className="InnerModal"
                >
                  <LoginForm />
                </Modal>
              </>
            </div>
          </div>
        </div>
        <SplashFooter />
      </div>
    </div>
  );
}
