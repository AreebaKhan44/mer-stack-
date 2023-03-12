import {useState } from 'react';
import {addUser} from '../service/api';
import Navbar from './Navbar';

import {FormGroup,FormControl,InputLabel,Input,Typography,styled,Button } from "@mui/material";

const  Container =styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& div{
    margin-top:20px;
}

`
const defaultValue={

    username:'',
    email:'',
    password:'',
}

const SignIn=()=>{
    const [user,setUser]=useState({defaultValue});

    const onValueChange=(e)=>{
       
        setUser({...user,[e.target.name]: e.target.value});
        
    }
    const addUserDetails=()=>{
        addUser(user)

    }
    return(
        <Container>
            <Typography variant="h4">Sign In</Typography>
          
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="password"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Sign In</Button>
            </FormControl>


        </Container>
    )
}

export default SignIn