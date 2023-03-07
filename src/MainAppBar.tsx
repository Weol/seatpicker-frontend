import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useContext, useState} from 'react';
import UserContext from './UserContext';
import LogOutLoggedInUser from './Adapters/LogOutLoggedInUser';
import Config from './config'
import User from './Models/User';
import {useNavigate} from "react-router-dom";
import discord from "./Media/discord.svg";
import RedirectToDiscordLogin from "./Adapters/RedirectToDiscordLogin";
import {Divider} from "@mui/material";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  const pages = [
    {
      Title: 'Setevalg',
      Path: '/'
    },
    {
      Title: 'Info',
      Path: '/about'
    }
  ]

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);

  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getAvatarUrl = (user: User | null) => {
    return Config.DiscordAvatarBaseUrl + user?.id + "/" + user?.avatar
  }

  const navigateTo = (path: string) => {
    navigate(path)
    handleCloseNavMenu()
  }

  const handleLogout = () => {
    handleCloseUserMenu()
    LogOutLoggedInUser()

    userContext.setUser(null)
  }

  return (
    <AppBar position="static" sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SALTENLAN
          </Typography>
          <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              component="button"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
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
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.Title} onClick={() => navigateTo(page.Path)}>
                  <Typography textAlign="center">{page.Title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none', marginLeft: '16px'},
              flexGrow: 1,
              textAlign: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SALTENLAN
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button
                variant="text"
                component="button"
                key={page.Title}
                onClick={() => navigateTo(page.Path)}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                {page.Title}
              </Button>
            ))}
          </Box>

          <UserContext.Consumer>
            {({user, setUser}) => user && (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                  <Avatar alt={user.nick} src={getAvatarUrl(user)} />
                </IconButton>
                <Menu
                  sx={{mt: '45px'}}
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
                  <MenuItem key='logout' onClick={handleLogout}>
                    <Typography textAlign="center">Logg ut</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) || (
              <Box sx={{ flexGrow: 0 }}>
                <Button sx={{ color: 'text.primary' }} startIcon={<img src={discord} style={{ width: 20 }} />} variant="text" onClick={RedirectToDiscordLogin}>Logg inn</Button>
              </Box>
            )}
          </UserContext.Consumer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;