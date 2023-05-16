import React from 'react';

import {AppBar, Toolbar, IconButton} from '@mui/material';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';

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
            <FacebookSharpIcon />
          </IconButton>
        </div>
        <div className='header_phone'>
        <IconButton aria-label='Menu' color='inherit'>
            <PhoneSharpIcon />
          </IconButton>
          (908) 999-1234
        </div>
        
      </Toolbar>
    </AppBar>
    

  )
}

export default Header;