import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import { openLogin, closeLogin } from "../../store/modal";
import LoginForm from "./LoginForm";
import "./LoginForm.css";

Modal.setAppElement(document.getElementById("root"));

/************************************************************************************************************/


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

/************************************************************************************************************/

export default LoginFormModal;