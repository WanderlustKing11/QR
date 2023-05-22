import React from 'react';

import {AppBar, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (

    <AppBar>
      <Toolbar>
        <div className='header_logo'>
          <img src="../resources/images/Logo1.png" alt="Quality Refrigeration logo" />
        </div>
        {/* Icon Button requires these attributes */}
        <IconButton aria-label='Menu' color='inherit'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    

  )
}

export default Navbar;