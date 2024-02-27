import React from 'react'
import './test.css'
// import '~@fortawesome/fontawesome-free/css/all.css';


const Test = () => {
  return (
    <div className="container-xxl">
        <div className="container">
            <div className="text-center" data-wow-delay="0.1s" >
                <p className="service-tag">Services</p>
                <h1 className='service-heading'>Health Care Solutions</h1>
            </div>
            <div className="wrapper-row">
                <div className="box-container " data-wow-delay="0.1s">
                    <div className="box-wrapper service-item">
                        <div className="icon-box" >
                            <i className="fa fa-heartbeat icon"></i>
                        </div>
                        <h4 className="mb-3">Cardiology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus icon-plus"></i>Read More</a>
                    </div>
                </div>
                <div className="box-container " data-wow-delay="0.3s">
                    <div className="box-wrapper service-item">
                        <div className="icon-box" >
                            <i className="fa fa-x-ray icon"></i>
                        </div>
                        <h4 className="mb-3">Pulmonary</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus icon-plus"></i>Read More</a>
                    </div>
                </div>
                <div className="box-container " data-wow-delay="0.5s">
                    <div className="box-wrapper service-item">
                        <div className="icon-box" style={{width: '65px', height: '65px'}}>
                            <i className="fa fa-brain icon"></i>
                        </div>
                        <h4 className="mb-3">Neurology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus icon-plus"></i>Read More</a>
                    </div>
                </div>
                <div className="box-container " data-wow-delay="0.1s">
                    <div className="box-wrapper service-item">
                        <div className="icon-box" style={{width: '65px', height: '65px'}}>
                            <i className="fa fa-wheelchair icon"></i>
                        </div>
                        <h4 className="mb-3">Orthopedics</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus icon-plus"></i>Read More</a>
                    </div>
                </div>
                <div className="box-container " data-wow-delay="0.3s">
                    <div className="box-wrapper service-item">
                        <div className="icon-box" style={{width: '65px', height: '65px'}}>
                            <i className="fa fa-tooth icon"></i>
                        </div>
                        <h4 className="mb-3">Dental Surgery</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus icon-plus"></i>Read More</a>
                    </div>
                </div>
                <div className="box-container " data-wow-delay="0.5s">
                    <div className="box-wrapper service-item">
                        <div className="icon-box" style={{width: '65px', height: '65px'}}>
                            <i className="fa fa-vials icon"></i>
                        </div>
                        <h4 className="mb-3">Laboratory</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus icon-plus"></i>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Test;