import React from 'react';
import img_0222 from '../../resources/images/DJI_0222.jpg';
import istock_img09 from '../../resources/images/istock_09.jpg';

// import { Fade } from 'react-awesome-reveal';

const PageBreak2 = () => {
  return (
    // <div className='prlx_wrapper'>
    <div>
      <div
        className='prlx_img'
        style={{
          backgroundImage: `url(${istock_img09})`,
          backgroundSize: 'cover',
          backgroundPositionX: '-10rem',
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
