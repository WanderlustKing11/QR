import React from 'react';
// import img_0222 from '../../resources/images/DJI_0222.jpg';
import ice_img from '../../resources/images/ice_img.jpg';

// import { Fade } from 'react-awesome-reveal';

const PageBreak2 = () => {
  return (
    // <div className='prlx_wrapper'>
    <div>
      <div
        className='prlx_img'
        style={{
          backgroundImage: `url(${ice_img})`,
          // backgroundSize: 'cover',
          // backgroundPositionX: '-10rem',
        }}
      ></div>

      {/* <Fade delay={1000} duration={1000} triggerOnce>
        <div className='message-wrapper'>
          <div className='message'>No project to big or small</div>
        </div>
      </Fade> */}
    </div>
    // </div>
  );
};

export default PageBreak2;
