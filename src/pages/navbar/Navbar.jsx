// import React from 'react'
// import './navbar.css';

// const Navbar = () => {
//     return (
//         <div className='navbar-containner'>
//             <div className='logo-wrapper'>
//                 <h1 className='logo'>Pediatrics</h1>
//             </div>
//             <div className='link-wrapper'>
//                 <h4 className='navbar-link'>Home</h4>
//                 <h4 className='navbar-link'>service</h4>
//                 <h4 className='navbar-link'>contact-us</h4>
//             </div>
//         </div>
//     )
// }

// export default Navbar



// Navbar.js

import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='navbar-containner'>
      <div className='logo-wrapper'>
        <h1 className='logo'>Pediatrics</h1>
      </div>
      <div className='link-wrapper'>
        <ScrollLink
          to="homeSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='navbar-link'
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="serviceSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className='navbar-link'
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="featureSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className='navbar-link'
        >
          Features
        </ScrollLink>
        <ScrollLink
          to="contactUsSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className='navbar-link'
        >
          Contact Us
        </ScrollLink>
      </div>
      {/* <button onClick={scrollToTop}>Go to Top</button> */}
    </div>
  );
}

export default Navbar;
