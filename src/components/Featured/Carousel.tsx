import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import img_1 from '../../resources/images/DJI_0222.jpg';
import img_2 from '../../resources/images/DJI_0270.jpg';
// import img_3 from '../../resources/images/qimg-04.jpeg';
// import img_4 from '../../resources/images/qimg-07.jpeg';
import istock_1 from '../../resources/images/istock_01.jpg';
import istock_2 from '../../resources/images/istock_02.jpg';
import istock_3 from '../../resources/images/istock_03.jpg';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, // !!Set false in development, but true in production!!
    fade: true, 
    speed: 1500,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    // swipe: false,
    // touchMove: false,
    // draggable: false,
  };

  return (
    <div>
      <Slider 
        {...settings}
        className='carousel_wrapper'
      >
        <div>
          <div
            className='carousel_img'
            style={{
              background: `url(${istock_1})`,
              // height: '450px',
              backgroundPositionY: '-10rem',
            }}
          ></div>
        </div>
        <div>
          <div
            className='carousel_img'
            style={{
              background: `url(${istock_2})`,
              // height: '450px',
              backgroundPositionY: '-13rem',
            }}
          ></div>
        </div>
        <div>
          <div
            className='carousel_img'
            style={{
              background: `url(${istock_3})`,
              // height: '450px',
              backgroundPositionY: '-8rem',
            }}
          ></div>
        </div>
        <div>
          <div
            className='carousel_img'
            style={{
              background: `url(${img_2})`,
              // height: '450px',
              backgroundPositionY: '-9rem',
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
