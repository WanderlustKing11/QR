import React from 'react';
import istock_04 from '../../resources/images/istock_04.jpg';

import { Fade } from 'react-awesome-reveal';

const PageBreak1 = () => {
  return (
    // <div className='prlx_wrapper'>
    <div>
      <div
        className='prlx_img'
        style={{
          backgroundImage: `url(${istock_04})`,
          backgroundSize: 'cover',
          // backgroundPositionY: '-20rem',
        }}
      ></div>

      <Fade delay={1000} duration={1000} triggerOnce>
        <div className='message-wrapper'>
          <div className='message'>No project to big or small</div>
        </div>
      </Fade>

    </div>
    // </div>
  );
};

export default PageBreak1;
