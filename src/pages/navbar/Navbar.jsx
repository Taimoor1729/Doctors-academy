import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <div className={`navbar-container${menuOpen ? ' open' : ''}`}>
      <div className='logo-wrapper'>
        <h1 className='logo'>Pediatrics</h1>
      </div>
      <div className={`link-wrapper${menuOpen ? ' open' : ''}`}>
        <ScrollLink
          to="homeSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='navbar-link'
          onClick={scrollToTop}
        >
          Home
        </ScrollLink>
        <div className='nav-bar'></div>
        <ScrollLink
          to="serviceSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className='navbar-link'
          onClick={scrollToTop}
        >
          Services
        </ScrollLink>
        <div className='nav-bar'></div>
        <ScrollLink
          to="featureSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className='navbar-link'
          onClick={scrollToTop}
        >
          Features
        </ScrollLink>
        <div className='nav-bar'></div> 
        <ScrollLink
          to="contactUsSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className='navbar-link'
          onClick={scrollToTop}
        >
          Contact Us
        </ScrollLink>
      </div>
      <div className='mobile-menu' onClick={toggleMenu}>
        <div className={`bars${menuOpen ? ' open' : ''}`}></div>
        <div className={`bars${menuOpen ? ' open' : ''}`}></div>
        <div className={`bars${menuOpen ? ' open' : ''}`}></div>
      </div>
    </div>
  );
}

export default Navbar;
