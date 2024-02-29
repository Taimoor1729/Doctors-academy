import React from 'react'
import first from '../../images/doctor-giving-presentation-team-interim-doctors_107420-84788.jpg'
import './service.css'

const Service = () => {
    return (
        // <div classNameName="about-us-container">
        //     <div style={{display: 'flex', alignItems: 'center'}}>
        //     <div classNameName="about-us-content">
        //         <h2 style={{color: 'rgba(0,172,122,255)'}}>About Us</h2>
        //         <p>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo eget
        //             felis cursus ullamcorper. Vivamus at eros non purus tristique ultricies.
        //             Suspendisse eu volutpat augue.
        //         </p>
        //     </div>
        //     <div classNameName="about-us-images">
        //         <img src={first} alt="Image 1"  />
        //         {/* <img src="image2.jpg" alt="Image 2" /> */}
        //         {/* Add more images as needed */}
        //     </div>
        //     </div>
        //     <div style={{display: 'flex', alignItems: 'center', marginBottom: '100px'}}>
        //     <div classNameName="about-us-images">
        //         <img src={first} alt="Image 1"  />
        //     </div>
        //     <div classNameName="about-us-content">
        //         <h2 style={{color: 'rgba(0,172,122,255)'}}>About Us</h2>
        //         <p>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo eget
        //             felis cursus ullamcorper. Vivamus at eros non purus tristique ultricies.
        //             Suspendisse eu volutpat augue.
        //         </p>
        //     </div>
        //     </div>
        // </div>



        <div className="feature-container">
        <div className="feature-wrapper">
            <div className="child-wrapepr">
                <div className="left-section wow fadeInLeft" data-wow-delay="0.1s">
                    <div className="left-section-child">
                        <p className="feat-page-name">Features</p>
                        <h1 className="feat-heading">Why Choose Us</h1>
                        <p className="feat-para">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="feat-icon-wrapper">
                            <div className="icon-wrapper">
                                <div className="icon-wrapper-item">
                                    <div className="icon-box" >
                                        <i className="fa fa-user-md feat-icon"></i>
                                    </div>
                                    <div className="content-wrapper">
                                        <p className="content-para">Experience</p>
                                        <h5 className="content-heading">Doctors</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-wrapper">
                                <div className="icon-wrapper-item">
                                    <div className="icon-box" >
                                        <i className="fa fa-check feat-icon"></i>
                                    </div>
                                    <div className="content-wrapper">
                                        <p className="content-para">Quality</p>
                                        <h5 className="content-heading">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-wrapper">
                                <div className="icon-wrapper-item">
                                    <div className="icon-box" >
                                        <i className="fa fa-comment-medical feat-icon"></i>
                                    </div>
                                    <div className="content-wrapper">
                                        <p className="content-para">Positive</p>
                                        <h5 className="content-heading">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-wrapper">
                                <div className="icon-wrapper-item">
                                    <div className="icon-box" >
                                        <i className="fa fa-headphones feat-icon"></i>
                                    </div>
                                    <div className="content-wrapper">
                                        <p className="content-para">24 Hours</p>
                                        <h5 className="content-heading">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-section wow fadeInRight" data-wow-delay="0.5s" >
                    <div className="image-wrapper">
                        <img className="image" src={first}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Service