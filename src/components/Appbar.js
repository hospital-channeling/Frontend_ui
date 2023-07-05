import {Typography} from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function Appbar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
            <Link className='navbar-brand' to="/">
              <h2>Hospital Management System</h2>
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          <Link className='navbar-brand' to="/home">
            <HomeIcon/>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
