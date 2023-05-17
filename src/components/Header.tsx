import React from 'react';

import {AppBar, Toolbar, IconButton} from '@mui/material';
import { FacebookSharp, PhoneSharp, Instagram, MailOutline } from '@mui/icons-material/';
import '../../dist/styles.css'

const Header = () => {
  return (

    <AppBar>
      <Toolbar>
        <div className='header_st'>
          INDUSTRIAL REFRIGERATION EXPERTS
        </div>
        <div className='header_social'>
          {/* Icon Button requires these attributes */}
          <IconButton aria-label='Menu' color='inherit'>
            <FacebookSharp />
          </IconButton>
          <IconButton aria-label='Menu' color='inherit'>
            <Instagram />
          </IconButton>
          <IconButton aria-label='Menu' color='inherit'>
            <MailOutline />
          </IconButton>
        </div>
        <div className='header_phone'>
          <IconButton aria-label='Menu' color='inherit'>
            <PhoneSharp />
          </IconButton>
          <a href="tel:+9733720220">(973) 372-0220</a>
        </div>
        
      </Toolbar>
    </AppBar>
    

  )
}

export default Header;