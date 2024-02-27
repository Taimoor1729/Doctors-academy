import React, { useState, useRef } from "react";
import "./imageSlider.css";
import { animateScroll as scroll } from 'react-scroll';

const ImagesSlider = ({ imagesUrl }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const contactUsRef = useRef(null);

  const scrollToSection = () => {
    scroll.scrollToBottom();
  };

  function showprevImage() {
    const newIndex = imageIndex === 0 ? imagesUrl.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  }

  function showNextImage() {
    console.log("btn is clicked");
    const newIndex = imageIndex === imagesUrl.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  }

//  setInterval(() => {
//   showNextImage ()
//  }, 5000) 


  return (
    <div className="slider-containner">
      <img src={imagesUrl[imageIndex]} alt="dashboard-img" className="img-slider-img" />
      <button
        className="img-slider-btn"
        onClick={showprevImage}
        style={{ right: 0 }}
      >
        &#8680;
      </button>
      <div className="academy-cred">
        <h1>Book your Appointment</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo eget
              felis cursus ullamcorper. Vivamus at eros non purus tristique ultricies.
        </p>
        <button onClick={scrollToSection} className="book-btn">Book Now</button>
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
