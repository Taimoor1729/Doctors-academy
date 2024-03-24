import React, { useState, useRef, useEffect } from "react";
import "./imageSlider.css";
import { animateScroll as scroll } from "react-scroll";

const ImagesSlider = ({ imagesUrl }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const scrollToSection = () => {
    scroll.scrollToBottom();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [imageIndex]);

  function showprevImage() {
    const newIndex = imageIndex === 0 ? imagesUrl.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  }

  function showNextImage() {
    const newIndex = imageIndex === imagesUrl.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  }

  return (
    <div className="slider-containner">
      <img
        src={imagesUrl[imageIndex]}
        alt="dashboard-img"
        className="img-slider-img"
      />

      <button
        className="img-slider-btn"
        onClick={showprevImage}
        style={{ right: 0 }}
      >
        &#8680;
      </button>
      <div className="academy-cred">
        <h1 className="dashboard-heading wow fadeOutLeft">Book your Appointment</h1>
        <p className="dashboard-para wow fadeOutRight">
          Dr Junaid Jahangir Abbasi Consultant Pediatrician and Assistant
          Professor of Pediatrics is the founder of this Academy in Pakistan.
          The Academy has provided massive level of disease awareness to the
          Parents of all Children in Pakistan.The Head Office of Academy is
          located in Islamabad.
        </p>
        <button onClick={scrollToSection} className="book-btn wow">
          Book Now
        </button>
      </div>
      <button
        className="img-slider-btn"
        onClick={showNextImage}
        style={{ left: 0 }}
      >
        &#8678;
      </button>
    </div>
  );
};

export default ImagesSlider;
