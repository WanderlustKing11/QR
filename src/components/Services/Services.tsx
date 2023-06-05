import React from 'react';
import qimg_01 from '../../resources/images/qimg-01.jpeg';
import qimg_07 from '../../resources/images/qimg-07.jpeg';

import { styled } from '@mui/material/styles';
// import { deepPurple } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';

// const ButtonTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#fafafa',
//     },
//     secondary: {
//       main: '#1976d2',
//     },
//   },
// });

const ColorButton = styled(Button)<ButtonProps>(() => ({
  fontWeight: 700,
  color: '#fafafa',
  borderColor: '#fafafa',
  '&:hover': {
    color: '#1976d2',
    backgroundColor: '#fafafa',
    borderColor: '#fafafa',
  },
}));

const Services = () => {
  return (
    <div>
      <div className='services_wrapper'>
        <div className='feature feature-1'>
          <h2 className='feature_title'>Commercial & Industrial</h2>
          <p className='feature_description'>
            We offer maintanance and services to all chillers, cold storage,
            penthouse refrigeration units, walk-in coolers/freezers, kitchen
            equipment and even ice machines.
          </p>
            <ColorButton 
              className='feature_btn' 
              variant='outlined'
            >
              LEARN MORE
            </ColorButton>
        </div>
        <div
          className='feature feature-2'
          style={{
            backgroundImage: `url(${qimg_01})`,
            backgroundSize: 'cover',
          }}
        ></div>
      </div>

      <div className='services_wrapper'>
        <div
          className='feature feature-3'
          style={{
            backgroundImage: `url(${qimg_07})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='feature feature-4'>
          <div className='feature feature-1'>
            <h2 className='feature_title'>24/7 Emergency Service </h2>
            <p className='feature_description'>
              We are there for you through thick and thin. Our priority is
              top-of-the-line customer satisfaction.
            </p>
            <ColorButton 
              className='feature_btn' 
              variant='outlined'
            >
              MORE
            </ColorButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
