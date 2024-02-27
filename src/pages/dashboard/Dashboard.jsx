import React from 'react';
import first from  '../../images/Desktop.jpg'
import second from '../../images/Desktop - 2.jpg';
import third from '../../images/Desktop - 3.jpg';
import ImagesSlider from '../../components/imagesSlider';


const IMAGES = [first, second, third]

const dashboard = () => {
  return (
    <div className='containner'>
        <ImagesSlider imagesUrl ={IMAGES} />
    </div>
  )
}

export default dashboard;