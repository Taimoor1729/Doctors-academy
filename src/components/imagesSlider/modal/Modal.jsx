import React from 'react'
import './modal.css'

const Modal = ({ closeModal, name, paragraph }) => {
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="icon-box">
            <i className={`fas fa-${name.toLowerCase()}`}></i>
          </div>
          <h2>{name}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    );
  }

export default Modal