import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <AppBar position="sticky" className="appbar">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          CONTACT_BOOK
        </Typography>

        <Box className="nav-links">
          {!isLoggedIn ? (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<LoginIcon />}>
                  Login
                </Button>
              </Link>

              <Link to="/s" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<PersonAddIcon />}>
                  Signup
                </Button>
              </Link>

              <Link to="/Ab" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<InfoIcon />}>
                  Aboutus
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/a" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<AddIcon />}>
                  Add
                </Button>
              </Link>

              <Link to="/v" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<ViewListIcon />}>
                  View
                </Button>
              </Link>

              <Link to="/Birthdays" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<NotificationsIcon />}>
                  Birthday Reminder
                </Button>
              </Link>

              <Link to="/logout" style={{ textDecoration: 'none' }}>
                <Button
                  className="nav-button"
                  variant="contained"
                  color="error"
                  startIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
