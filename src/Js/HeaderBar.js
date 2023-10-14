import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
/*import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';*/
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
/*import { Header } from 'antd/es/layout/layout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';*/
import {Routes, Route,Link} from 'react-router-dom';
import Front from "./Front";
import Home from "./Home";
import Form from "./Form";
import './home.css'
import FormValidationExample from './FormValidationExample';
function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" top='0'>
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
          <ul>
          
    
    <li><Link to='/Home'>Home</Link></li>
    <li><Link to='/Form'>Login</Link></li>
    <li><Link to='/FormValidationExample'>Form</Link></li>
 
    </ul>
    
      
    
        </Toolbar>
        </AppBar>
        <Routes>
      <Route path='/form' element={<Form/>}/>
      <Route path='/FormValidationExample' element={<FormValidationExample/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Front/>}/>
      
    </Routes>
      
    </Box>

  );
}

export default  HeaderBar