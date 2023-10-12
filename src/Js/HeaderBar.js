import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Header } from 'antd/es/layout/layout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Routes, Route,Link} from 'react-router-dom';

import Home from "./Home"
import Form from "./Form";
import FormValidationExample from './FormValidationExample';
function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        {/*   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography> */}
          <button >
    <Link to='/Home'>Home</Link>
    </button>
    <button color="inherit">      
    <Link to='/Form'>Login</Link>
    </button>
    <button>
    <Link to='/FormValidationExample'>Form</Link>
    </button>
    
      
    
        </Toolbar>
        </AppBar>
        <Routes>
      <Route path='/form' element={<Form/>}/>
      <Route path='/FormValidationExample' element={<FormValidationExample/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
      
    </Box>

  );
}

export default  HeaderBar