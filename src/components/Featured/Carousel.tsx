import React from 'react';

import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img_1 from '../../resources/images/DJI_0222.jpg';
import img_2 from '../../resources/images/DJI_0270.jpg';
import img_3 from '../../resources/images/qimg-04.jpeg';
import img_4 from '../../resources/images/qimg-07.jpeg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Container
        className='carousel_wrapper'
        sx={{
          height: '450px',
          // height: { xs:`${window.innerHeight}`, md: '450px', xl: '450px' },
          width: '100%',
        }}
      >
        <Slider {...settings}>
          <div>
            <div
              className='carousel_img'
              style={{
                background: `url(${img_1})`,
                height: '450px',
              }}
            ></div>
          </div>
          <div>
          <div
              className='carousel_img'
              style={{
                background: `url(${img_2})`,
                height: '450px',
              }}
            ></div>
          </div>
          <div>
          <div
              className='carousel_img'
              style={{
                background: `url(${img_3})`,
                height: '450px',
              }}
            ></div>
          </div>
          <div>
          <div
              className='carousel_img'
              style={{
                background: `url(${img_4})`,
                height: '450px',
              }}
            ></div>
          </div>
        </Slider>
      </Container>
    </div>
  )
}

export default Carousel;