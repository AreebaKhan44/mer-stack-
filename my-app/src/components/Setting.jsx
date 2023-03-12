import {useState } from 'react';
import Navbar from './Navbar';
import {addUser} from '../service/api';
import Ellipse7  from "./Ellipse7.png";

import {FormGroup,FormControl,InputLabel,Input,Typography,styled,Button } from "@mui/material";

const  Container =styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& div{
    margin-top:20px;
}

`
const defaultValue={
    country:'',
    currency:'',
    language:'',
    notification:'',
}

const Setting=()=>{
    const [user,setUser]=useState({defaultValue});

    const onValueChange=(e)=>{
       
        setUser({...user,[e.target.name]: e.target.value});
        
    }
    const addUserDetails=()=>{
        setUser(user)

    }
    return(
        <Container>          
            <img src={Ellipse7} style={{width:70}}/>
            <Typography variant="h4">Setting</Typography>
            <FormControl>
                <InputLabel>Account Setting</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            
            <FormControl>
                <InputLabel>AddressBook</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Country</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Currency</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="text"/>
            </FormControl>
            <FormControl>
                <InputLabel>Language</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="text"/>
                <option value="australia">English</option>
                <option value="australia">Urdu</option>
            </FormControl>
            <FormControl>
                <InputLabel>Notifiation Setting</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="text"/>
            </FormControl>
            <FormControl>
                <InputLabel>Privacy policy</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="text"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Log out</Button>
            </FormControl>


        </Container>
    )
}

export default Setting