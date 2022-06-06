import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import "./LoginForm.css";
import { openLogin, closeLogin } from "../../store/modal";
import LoginForm from "./LoginForm";


/*********************************************************************************************************************************/

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


/*********************************************************************************************************************************/


function LoginFormModal() {
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.modal.loginShow);

  const closeModal = () => dispatch(closeLogin());

  return (
    <>
      <button
        id="signInBtn"
        className="nav-bar-btn"
        onClick={() => dispatch(openLogin())}
      >
        Sign In
      </button>
      <Modal
        isOpen={loginState}
        closeTimeoutMS={500}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Login Modal"
        overlayClassName="OuterModal"
        className="InnerModal"
      >
        <LoginForm />
      </Modal>
    </>
  );
}


/*********************************************************************************************************************************/


export default LoginFormModal;
