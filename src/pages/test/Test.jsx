import React, { useState, useEffect } from 'react';
import './test.css';
import Modal from '../../components/imagesSlider/modal/Modal';
import WOW from 'wowjs';

const services = [
    { id: 1, name: 'Cardiology', paragraph: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', iconContent: '\f21e', delayTime: '0.1s' },
    { id: 2, name: 'Pulmonary', paragraph: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', iconContent: '\f497',  delayTime: '0.3s' },
    { id: 3, name: 'Neurology', paragraph: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', iconContent: '\f5dc',  delayTime: '0.5s' },
    { id: 4, name: 'Orthopedics', paragraph: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', iconContent: '\f193', delayTime: '0.1s' },
    { id: 5, name: 'Dental Surgery', paragraph: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', iconContent: '\f5c9',  delayTime: '0.3s' },
    { id: 6, name: 'Laboratory', paragraph: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', iconContent: '\f493',  delayTime: '0.5s' },
  ];
  

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ name: '', paragraph: '' });

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const openModal = (name, paragraph) => {
    setModalContent({ name, paragraph });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container-xxl">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <p className="service-tag">Services</p>
          <h1 className='service-heading'>Health Care Solutions</h1>
        </div>
        <div className="wrapper-row">
          {services.map((service, index) => (
            <div className="box-container wow fadeInUp" key={service.id} data-wow-delay={service.delayTime}>
              <div className={`box-wrapper ${index == 0 || index == 2 || index == 4 ? 'service-item-change ' : 'service-item'}`}
            style={{ backgroundColor: index === 0 || index === 2 || index === 4 ? '#0463FA' : '#EFF5FF ' }}

              >
                <div className="icon-box">
                <i className={` icon fas fa-${service.name.toLowerCase()}`}></i>
                </div>
                <h4 className="mb-3">{service.name}</h4>
                <p className="mb-4">{service.paragraph}</p>
                <a className="btn" href="" onClick={(e) => { e.preventDefault(); openModal(service.name, service.paragraph); }}>
                  <i className="fa fa-plus icon-plus"></i>Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen ? <Modal closeModal={closeModal} name={modalContent.name} paragraph={modalContent.paragraph} /> : null}
    </div>
  );
}

export default Test;
