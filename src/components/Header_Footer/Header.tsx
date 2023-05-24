import React, { useState } from 'react';

import {AppBar, Toolbar, IconButton } from '@mui/material';
import { FacebookSharp, PhoneSharp, Instagram, MailOutline, Menu } from '@mui/icons-material';


const Header = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (

    <AppBar>
      <Toolbar>

        <div className='header_st'>
          INDUSTRIAL REFRIGERATION EXPERTS
        </div>

        <div className='header_social'>
          <IconButton 
            className={`icon-button ${hoveredIcon === 'facebook' ? '' : 'hovered'}`}
            href='https://www.facebook.com/QualityRefrigerationQRS/'
            onMouseEnter={() => handleIconHover('facebook')}
            onMouseLeave={handleIconLeave}
            aria-label='Facebook'
          >
            <FacebookSharp />
          </IconButton>
          <IconButton 
            className={`icon-button ${hoveredIcon === 'instagram' ? '' : 'hovered'}`}
            href='https://www.instagram.com/qualityrefrigerationnj/'
            onMouseEnter={() => handleIconHover('instagram')}
            onMouseLeave={handleIconLeave}
            aria-label='Instagram'   
          >
            <Instagram />
          </IconButton>
          <IconButton 
            className={`icon-button ${hoveredIcon === 'email' ? '' : 'hovered'}`}
            href='mailto:office@qualityrefrigerationnj.com'
            onMouseEnter={() => handleIconHover('email')}
            onMouseLeave={handleIconLeave}
            aria-label='Email'   
          >
            <MailOutline />
          </IconButton>
        </div>
        
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
        
      </Toolbar>
      <Toolbar>
        <div className='header_logo'>
          <img src="../resources/images/Logo1.png" alt="Quality Refrigeration logo" />
        </div>
        {/* Icon Button requires these attributes */}
        <IconButton aria-label='Menu' color='inherit'>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
    

  )
}

export default Header;