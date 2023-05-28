import React from 'react';
import istock_04 from '../../resources/images/istock_04.jpg';

// import Backdrop from '@mui/material/Backdrop';

const PageBreak1 = () => {
  return (
    // <div className='prlx_wrapper'>
      <div
        className='prlx_img'
        style={{
          backgroundImage: `url(${istock_04})`,
          backgroundSize: 'cover',
          height: '400px',
          backgroundPositionY: '-20rem',
        }}
      >
        Parallax
      </div>
    // </div>
  );
};

export default PageBreak1;
