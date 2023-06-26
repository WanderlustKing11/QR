import * as React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, lightBlue } from '@mui/material/colors';

const pageTheme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: lightBlue[900],
    },
  },
  typography: {
    button: {
      fontWeight: '700',
    },
  },
});

const ServicesMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const serviceTopics = ['24/7 Service', 'Installations', 'Mobile trailers Cooler / Freezer', 'Energy Management', 'Thermal Solutions'];

  
  return (
    <div>
      <ThemeProvider theme={pageTheme}>
        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant='text'
          sx={{
            my: 2,
            display: 'block',
            margin: 'auto 1rem',
            fontSize: '1.3rem',
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          SERVICES
        </Button>

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          PaperProps={{
            sx: {
              backgroundColor: 'hsl(0, 0%, 9%)',
            }
          }}
        >
          {serviceTopics.map((item) => (
            <MenuItem key={item} onClick={handleClose}>
              <Typography textAlign='center'>{item}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </ThemeProvider>
    </div>
  );
};

export default ServicesMenu;
