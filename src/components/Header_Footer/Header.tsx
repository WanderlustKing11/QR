import React, { useState } from 'react';

import { IconButton } from '@mui/material';
import {  PhoneSharp, Menu } from '@mui/icons-material';
import SocialMediaIcons from './SocialMediaIcons';


const Header = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (

    <div className='header'>

        <div className='header_st'>
          INDUSTRIAL REFRIGERATION EXPERTS
        </div>

        <SocialMediaIcons />
        
        <div className='header_phone'>
          <IconButton 
            className={`icon-button ${hoveredIcon === 'phone' ? '' : 'hovered'}`}
            href='tel:+9733720220'
            onMouseEnter={() => handleIconHover('phone')}
            onMouseLeave={handleIconLeave}
            aria-label='Phone' 
          >
            <PhoneSharp />
            (973) 372-0220                      
          </IconButton>
        </div>
        


        <div className='header_logo'>
          <img src="../resources/images/Logo1.png" alt="Quality Refrigeration logo" />
        </div>
        {/* Icon Button requires these attributes */}
        <IconButton aria-label='Menu' color='inherit'>
          <Menu />
        </IconButton>
      </div>
    

  )
}

export default Header;