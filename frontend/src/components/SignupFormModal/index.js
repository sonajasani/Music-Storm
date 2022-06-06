// frontend/src/components/LoginFormModal/index.js
import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import SignupForm from "./SignupForm";
import { openSignup, closeSignup } from "../../store/modal";
import "./SignupForm.css";

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


function SignupFormModal() {
  const dispatch = useDispatch();

  const signupState = useSelector((state) => state.modal.signupShow);

  const closeModal = () => dispatch(closeSignup());

  return (
    <>
      <button
        id="createAccBtn"
        className="nav-bar-btn"
        onClick={() => dispatch(openSignup())}
      >
        Create Account
      </button>
      <Modal
        isOpen={signupState}
        closeTimeoutMS={500}
        onRequestClose={closeModal}
        contentLabel="Signup Modal"
        overlayClassName="OuterModal"
        className="InnerModal"
      >
        <SignupForm />
      </Modal>
    </>
  );
}


/*********************************************************************************************************************************/


export default SignupFormModal;
