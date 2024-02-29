// import React from 'react';
// import './contact.css';
// import map from '../../images/map1.png';
// import third from '../../images/view-anatomic-heart-model-educational-purpose-with-stethoscope_23-2149894530.jpg';

// const ContactUs = () => {
//   return (
//     <div className='contact-containner'>
//         <div className='image-container'>
//             <div className='image-overlay'></div>
//             <img src={third} alt='default' />
//         </div>
//         <div className='center'>
//           <div className='form-wrapper'>
//           <div className='parent-fields'>
//           <input type="text" placeholder='name' className='parent-input'/>
//           <input type="text" placeholder='email' className='parent-input'/>
//           </div>
//           <input type="text" placeholder='enter the message'  className='parent-input' style={{width: '50%'}}/>
//           <button className='btn-style'>submit</button>
//           </div>
//         </div>
//         <div className='map'>
//             <img src={map} alt='map' />
//         </div>
//     </div>
//   )
// }

// export default ContactUs;



import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
// import map from '../../images/map1.png';
// import third from '../../images/view-anatomic-heart-model-educational-purpose-with-stethoscope_23-2149894530.jpg';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_hcm2yva', 'template_5s9cdpj', {
      to_name: name,
      to_email: email,
      message: message,
    }, 'LMvemClysHEpOlzi8')
    .then((response) => {
      console.log('Email sent successfully:', response);
    }, (error) => {
      console.error('Error sending email:', error);
    });

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    // <div className='contact-containner'>
    //   <div className='image-container'>
    //     <div className='image-overlay'></div>
    //     <img src={third} alt='default' />
    //   </div>
    //   <div className='center'>
    //     {/* <div className='form-wrapper'> */}
    //       <form onSubmit={sendEmail} className='form-wrapper'>
    //         <div className='parent-fields'>
    //           <input type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='parent-input'/>
    //           <input type="text" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='parent-input'/>
    //         </div>
    //         <input type="text" name="message" placeholder='Enter the message' value={message} onChange={(e) => setMessage(e.target.value)} className='parent-input' style={{ width: '50%' }}/>
    //         <button type="submit" className='btn-style'>Submit</button>
    //       </form>
    //     {/* </div> */}
    //   </div>
    //   <div className='map'>
    //     <img src={map} alt='map' />
    //   </div>
    // </div>

    <div className="container-contact">
        <div className="wrapper-container">
            <div className="wrapper">
                <div className="wrapper-child wow fadeInDown" data-wow-delay="0.3s">
                    <p className="page-name">Appointment</p>
                    <h1 className="contact-heading">Make An Appointment To Visit Our Doctor</h1>
                    <p className="contact-para">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="number-wrapper">
                        <div className="number-box" style={{width: "55px", height: "55px"}}>
                            <i className="fa fa-phone-alt icon-contact"></i>
                        </div>
                        <div className="number-child-wrapper">
                            <p className="number-heading">Call Us Now</p>
                            <h5 className="number">+012 345 6789</h5>
                        </div>
                    </div>
                    <div className="mail-container">
                        <div className="mail-box" style={{width: "55px", height: "55px"}}>
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
                        <form>
                            <div className="form-section">
                                <div className="input-wrapper">
                                    <input type="text" className="name-input form-control" placeholder="Your Name" style={{height: '55px'}} />
                                </div>
                                {/* <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: '55px'}} />
                                </div> */}
                                <div className="input-wrapper">
                                    <input type="text" className="name-input form-control" placeholder="Your Email" style={{height: '55px'}} />
                                </div>
                                {/* <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height: '55px'}}>
                                        <option selected>Choose Doctor</option>
                                        <option value="1">Doctor 1</option>
                                        <option value="2">Doctor 2</option>
                                        <option value="3">Doctor 3</option>
                                    </select>
                                </div> */}
                                 {/* <div className="input-wrapper">
                                    <input type="text" className="name-input form-control" placeholder="Your Mobile" style={{height: '55px'}} />
                                </div> */}
                                {/* <div className="col-12 col-sm-6">
                                    <div className="date" id="date" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control border-0 datetimepicker-input"
                                            placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{height: '55px'}} />
                                    </div>
                                </div> */}
                                {/* <div className="col-12 col-sm-6">
                                    <div className="time" id="time" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control border-0 datetimepicker-input"
                                            placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={{height: '55px'}} />
                                    </div>
                                </div> */}
                                <div className="description-wrapper">
                                    <textarea className="description-field form-control" rows="5" placeholder="Describe your problem"></textarea>
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

