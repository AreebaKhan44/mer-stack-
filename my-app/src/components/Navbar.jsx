import { AppBar, Toolbar,styled } from '@mui/material';
import {NavLink} from 'react-router-dom';
import Card from './Card';
import ProductCard from './ProductCard';

import logo  from "./logo.jpeg";

const Header=styled(AppBar)`
background:#111111;
`
const Tabs=styled('p')`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`

const Navbar = () => {
  return (
    <Header position="static">
        <Toolbar>
        <img src={logo} style={{width:70}}/>
            
            
            <Tabs to="">Home1</Tabs>
            <Tabs to="">Card</Tabs> 
            <Tabs to="">ProductCard</Tabs>    
            <Tabs to="">SignUp</Tabs>           
            <Tabs to="">SignIn</Tabs>
            <Tabs to="">Setting</Tabs>
        </Toolbar>
    </Header>
    

  )
}

export default Navbar
