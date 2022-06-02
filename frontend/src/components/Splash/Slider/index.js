import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import { useSelector, useDispatch } from "react-redux";
import { openLogin, closeLogin } from "../../../store/modal";
import Modal from "react-modal";
import LoginForm from "../../LoginFormModal/LoginForm";

export default function Slider() {
  // const length = SliderData.length;
  const image1 = useRef();
  const image2 = useRef();
  const slidebtn1 = useRef();
  const slidebtn2 = useRef();

  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.modal.loginShow);

  const closeModal = () => dispatch(closeLogin());

  

  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      image1.current.classList.add("slide-add");
      image2.current.classList.add("slide-add");
      // console.log(image1.current.classList, image2.current.classList);
      setTimeout(() => {
        image1.current.classList.remove("slide-add");
        image2.current.classList.remove("slide-add");
        const sliderCopy = slider.slice();
        const slideImg = sliderCopy.shift();
        sliderCopy.push(slideImg);
        setSlider(sliderCopy);
      }, 600);
    }, 4000);

    return () => clearInterval(timer);
  });

  const slideChange = () => {
    // console.log(image1.current.classList);
    image1.current.classList.add("slide-add");
    image2.current.classList.add("slide-add");
    // console.log(image1.current.classList, image2.current.classList);
    setTimeout(() => {
      image1.current.classList.remove("slide-add");
      image2.current.classList.remove("slide-add");
      const sliderCopy = slider.slice();
      // console.log("slider before push ----->", slider);
      // console.log("sliderCopy ----->", sliderCopy);
      const slideImg = sliderCopy.shift();
      // console.log("img1", slideImg);
      sliderCopy.push(slideImg);
      setSlider(sliderCopy);
      // console.log("images after push: ------ >", sliderCopy);
    }, 600);
  };

  //! for left button
  // const slideChange2 = () => {
  //   // console.log(image1.current.classList);
  //   image1.current.classList.add("slide-add2");
  //   image2.current.classList.add("slide-add2");
  //   // console.log(image1.current.classList, image2.current.classList);
  //   setTimeout(() => {
  //     image1.current.classList.remove("slide-add2");
  //     image2.current.classList.remove("slide-add2");
  //     const sliderCopy = slider.slice();
  //     // console.log("slider before push ----->", slider);
  //     // console.log("sliderCopy ----->", sliderCopy);
  //     const slideImg = sliderCopy.pop();
  //     // console.log("img1", slideImg);
  //     sliderCopy.unshift(slideImg);
  //     setSlider(sliderCopy);
  //     // console.log("images after push: ------ >", sliderCopy);
  //   }, 600);
  // };

  // switched to spans to see if that was the issue with a bug where the array would reset
  useEffect(() => {
    const imgs = [
      <span key={0} ref={image1}>
        <img
          className="slider-img"
          src={SliderData[0].image}
          alt=""
        />
        <span>
          <span id="slider1title">Discover more with MusicStorm Go+</span>
          <p id="slider1text">
            MusicStorm Go+ lets you listen offline, ad-free, with over 150
            million tracks — and growing.
          </p>
          <span id="slider1btns">
            <a
              href="https://github.com/sonajasani"
              target="_blank"
              rel="noopener noreferrer"
              id="slider1btn1"
            >
              Github Link
            </a>
            <>
              <button id="slider1btn2" onClick={() => dispatch(openLogin())}>
                Try It Free
              </button>
              <Modal
                isOpen={loginState}
                closeTimeoutMS={500}
                onRequestClose={closeModal}
                contentLabel="Login Modal"
                overlayClassName="OuterModal"
                className="InnerModal"
              >
                <LoginForm />
              </Modal>
            </>
          </span>
        </span>
      </span>,
      <span ref={image2} key={1}>
        <img
          className="slider-img"
          src={SliderData[1].image}
          alt=""
        />
        <span className="slider2container">
          <span id="slider1title">
            What's next in music is first on MusicStorm
          </span>
          <p id="slider1text">
            Upload your first track and begin your journey. MusicStorm gives you
            space to create, find your fans, and connect with other artists.
          </p>
          <span id="slider1btns">
            <a id="slider2btn2" onClick={() => dispatch(openLogin())}>
              Start Uploading Today
            </a>
          </span>
        </span>
      </span>,
    ];
    setSlider(imgs);
  }, []);

  // const transform = `translateX(${slider * -50}%)`;
  // style={{ transform }}

  // useEffect(() => {}, [slideChange]);

  return (
    <div className="splash-slider-container">
      <div className="slide">{slider}</div>
      <button
        ref={slidebtn1}
        className="slidbtns"
        onClick={slideChange}
      ></button>
      <button
        ref={slidebtn2}
        className="slidbtns"
        onClick={slideChange}
      ></button>
    </div>
  );
}
