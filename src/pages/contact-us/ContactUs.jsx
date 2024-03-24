import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your emailjs service ID, template ID, and user ID
        const serviceID = 'service_hcm2yva';
        const templateID = 'template_5s9cdpj';
        const userID = 'LMvemClysHEpOlzi8';

        // Send email
        emailjs.send(serviceID, templateID, {
            from_name: name,
            reply_to: email,
            message: description
        }, userID)
            .then((response) => {
                console.log('Email sent successfully:', response);
                // Clear form fields after successful submission
                setName('');
                setEmail('');
                setDescription('');
            }, (error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (

        <div className="container-contact">
            <div className="wrapper-container">
                <div className="wrapper">
                    <div className="wrapper-child wow fadeInDown" data-wow-delay="0.3s">
                        <p className="page-name">Appointment</p>
                        <h1 className="contact-heading">Make An Appointment To Visit Our Doctor</h1>
                        <p className="contact-para">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="number-wrapper">
                            <div className="number-box" style={{ width: "55px", height: "55px" }}>
                                <i className="fa fa-phone-alt icon-contact"></i>
                            </div>
                            <div className="number-child-wrapper">
                                <p className="number-heading">Call Us Now</p>
                                <h5 className="number">+012 345 6789</h5>
                            </div>
                        </div>
                        <div className="mail-container">
                            <div className="mail-box" style={{ width: "55px", height: "55px" }}>
                                <i className="fa fa-envelope-open icon-contact"></i>
                            </div>
                            <div className="number-child-wrapper">
                                <p className="number-heading">Mail Us Now</p>
                                <h5 className="number">info@example.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-wrapper  wow fadeInUp" data-wow-delay="0.3s">
                        <h1 className='form-heading'>Book Now</h1>
                        <div className="form-wrapper-child">
                        <form onSubmit={handleSubmit}>
            <div className="form-section">
                <div className="input-wrapper">
                    <input
                        type="text"
                        className="name-input form-control"
                        placeholder="Your Name"
                        style={{ height: '55px' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="email"
                        className="name-input form-control"
                        placeholder="Your Email"
                        style={{ height: '55px' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="description-wrapper">
                    <textarea
                        className="description-field form-control"
                        rows="5"
                        placeholder="Describe your problem"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="description-wrapper">
                    <button className="submit-btn" type="submit">Book Appointment</button>
                </div>
            </div>
        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;

