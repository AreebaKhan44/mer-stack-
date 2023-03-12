import React from 'react'
import Style2 from '../components/Style2.css';
import Navbar from './Navbar';

const SignUp = () => {
  return (
    <div>
  <form />
    <label for="fname">User Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Contact</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    <label for="lname">Email</label>
    <input type="text" id="lname" name="email" placeholder="Your email "/>
    <label for="lname">Password</label>
    <input type="text" id="lname" name="password" placeholder="password "/>

    
    
  
    <input type="submit" value="Sign Up" style={{width:200}}/>
  <form />
</div>

  )
}

export default SignUp
