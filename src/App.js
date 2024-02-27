// import "./App.css";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Navbar from "./pages/navbar/Navbar";
// import Service from "./pages/service/Service";
// import ContactUs from "./pages/contact-us/ContactUs";
// import Footer from "./pages/footer/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Dashboard />
//       <Service />
//       <ContactUs />
//       <Footer />
//     </>
//   );
// }

// export default App;


// App.js

import React from 'react';
import Navbar from "./pages/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Service from "./pages/service/Service";
import ContactUs from "./pages/contact-us/ContactUs";
import Footer from "./pages/footer/Footer";
import { Element } from 'react-scroll';
import Test from './pages/test/Test';

function App() {
  return (
    <>
      <Navbar />
      <Element name="homeSection">
        <Dashboard />
      </Element>
      <Element name="serviceSection">
      <Test />
      </Element>
      <Element name="featureSection">
      <Service />
      </Element>
      <Element name="contactUsSection">
        <ContactUs />
      </Element>
  
      <Footer />
    </>
  );
}

export default App;
