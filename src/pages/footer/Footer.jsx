import React from 'react';
import './footer.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <div>
      <div className='footer-containner'>
        <div className='first-section-footer'>
          <div style={{ width: '70%' }}>
            <h1 className='footer-logo'>Pedistrain</h1>
            <p className='footer-paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo eget
              felis cursus ullamcorper. Vivamus at eros non purus tristique ultricies.
            </p>
          </div>
        </div>
        <div className='second-section-footer'>
          <h2 className='links-heading-ftr'>Quik Links</h2>
          <ul className='list-head'>
          <ScrollLink
          to="homeSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='btn-link'
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="serviceSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className='btn-link'
        >
          Service
        </ScrollLink>
        <ScrollLink
          to="featureSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className='btn-link'
        >
          Feature
        </ScrollLink>
        <ScrollLink
          to="contactUsSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className='btn-link'
        >
          Contact Us
        </ScrollLink>
          </ul>

        </div>
        <div className='third-section-footer'>
          <h2 className='media-heading-ftr'>soical-media links</h2>
          <div className="social-wrapper">
            <a className="social-icons" href=""><i className="fab fa-twitter"></i></a>
            <a className="social-icons" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="social-icons" href=""><i className="fab fa-youtube"></i></a>
            <a className="social-icons" href=""><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className='bar'></div>
    </div>
  )
}

export default Footer