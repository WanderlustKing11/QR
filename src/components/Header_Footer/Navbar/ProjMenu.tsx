import * as React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
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

const ProjMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      project: 'Project 1',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      project: 'Project 2',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      project: 'Project 3',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      project: 'Project 4',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      project: 'Project 5',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      project: 'Project 6',
    },
  ];

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
          PROJECTS
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
          <MenuItem onClick={handleClose}>
            {/* Add link to navigate to Projects page */}
            {/* <Link to='/projects'> */}
            <Typography variant='body1' color={pageTheme.palette.primary.main}>All Projects</Typography>
            {/* </Link> */}
          </MenuItem>
          {/* Image Grid */}
          <MenuItem onClick={handleClose}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading='lazy'
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.project}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </div>
  );
};

export default ProjMenu;
