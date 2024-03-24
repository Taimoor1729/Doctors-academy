import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Feature from "./pages/feature/Feature";
import ContactUs from "./pages/contact-us/ContactUs";
import Footer from "./pages/footer/Footer";
import { Element } from "react-scroll";
import Service from "./pages/service/Service";
// Import the WOW.js CSS
import "animate.css/animate.css";
import "wowjs/css/libs/animate.css";

// Import the WOW.js library
import WOW from "wowjs";

// Initialize WOW.js
const wow = new WOW.WOW();
wow.init();

function App() {
  return (
    <>
      <Navbar />
      <Element name="homeSection">
        <Dashboard />
      </Element>
      <Element name="serviceSection">
        <Service />
      </Element>
      <Element name="featureSection">
        <Feature />
      </Element>
      <Element name="contactUsSection">
        <ContactUs />
      </Element>

      <Footer />
    </>
  );
}

export default App;
