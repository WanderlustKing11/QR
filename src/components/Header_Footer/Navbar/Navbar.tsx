import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, lightBlue } from '@mui/material/colors';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import NavMenu from './NavMenu';
import ProjMenu from './ProjMenu';
import Logo from '../../../resources/images/qr_logo_sm.png';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

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

const StyledButton = styled(Button)`
  ${({ theme }) => `
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};

  &:hover {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.secondary.main};
  }
  `}
`;

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const pages = ['home', 'about us', 'services', 'projects', 'contact us'];

function Navbar(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <HideOnScroll {...props}>
      <AppBar
        position='fixed'
        className='navbar'
        // sx={{
        //   backgroundColor: 'hsl(0, 0%, 25%)',
        // }}
      >
        {/* Consider Splitting this into 2 components:
    1 section as the intro bar
    1 as the navbar
    All as part of the Header */}

        <Container maxWidth='xl' sx={{ padding: { md: '10px 10%' } }}>
          <Toolbar disableGutters>
            {/* Logo */}
            <img
              src={Logo}
              alt='Quality Refrigeration logo'
              className='logo-img'
            />

            {/* Menu Button */}
            <NavMenu />
            {/* <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',               
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton> */}

            {/* Inside Menu */}
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                top: '8px',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

            {/* Navbar Links */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                '&hover': {
                  backgroundColor: 'primary',
                },
              }}
            >
              {pages.map((page) =>
                page === 'projects' ? (
                  <ProjMenu key={page} />
                ) : (
                  <ThemeProvider theme={pageTheme} key={page}>
                    <StyledButton
                      key={page}
                      onClick={handleCloseNavMenu}
                      variant='outlined'
                      sx={{
                        my: 2,
                        display: 'block',
                        margin: 'auto 1rem',
                        fontSize: '1.3rem',
                      }}
                    >
                      {page}
                    </StyledButton>
                  </ThemeProvider>
                )
              )}
            </Box>

            {/* Potential Tooltip and Settings
          Could use *Image List* Menu, Accordion, or Drawer??? */}
            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
export default Navbar;
