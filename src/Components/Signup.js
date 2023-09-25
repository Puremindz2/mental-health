import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { supabase } from "../supabaseClient";
import { Link, useHistory } from 'react-router-dom';
import appIcon from "./Images/mentalHealthIcon.png";

function Signup() {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userPassword !== confirmPassword) {
      toast.error('Passwords do not match. Please re-enter your password.');
      return;
    }

    try {
      const { data } = await supabase.auth.getUser();
      const { user, session} = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
        options: { 
          data: {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            dob: dob,
            //uuid: user.id,
          },
        },
      });
      

      const { error } = await supabase.from("users").insert({
        firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            dob: dob,
           // uuid: data.user.id,
      });

      if (!error) {
        console.log('Signup error:', error);
        toast.error('Account creation failed. Please try again.');
      } else {
        console.log('User signed up:', user);
        toast.success('Account created successfully!');
        //const uuid = user.id;
        // Redirect to the login page after successful account creation
        history.push('/login');
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error);
      toast.error('Oops! Something went wrong. Please try again.');
    }
  };
  function handleClick() {
    window.location.href = '/';
  }

  function handleClick2() {
    window.location.href = '/login';
  }

  function handleClick3() {
    window.location.href = '/signup';
  }
  return ( 
    <div className="signup-container">
  
     <div class="welcome-topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name">Pure Minds - Mental Health</span>

      </div>

      <div>
        <h1>Pure Minds - Mental Health</h1>
      </div>

      <div class="topbar-right">
        <button class="topbar-btns" onClick={handleClick}>About</button>
        <button class="topbar-btns" onClick={handleClick2}>Login</button>
        <button class="topbar-btns" onClick={handleClick3}>Sign Up</button>
    </div>
    </div>
    <ToastContainer />
  <form onSubmit={handleSubmit} className="signup-form">
  <table>
    <tr>
      <td><img src={appIcon}/></td>
      <td>MENTAL HEALTH - SIGN UP</td>
    </tr>

    <tr>
  <td> <label htmlFor="firstName" id="firstNameLabel">First Name:</label><br></br>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={firstName}
      onChange={(e)=> setFirstName(e.target.value ?? '')}
      required
    /></td>
    <td><label htmlFor="lastName" id="lastNameLabel">Last Name:</label><br></br>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={lastName}
      onChange={(e)=> setLastName(e.target.value ?? '')}
      required
    /></td>
    </tr>

    <tr>
    <td><label htmlFor="age">Age:</label><br></br>
    
    <input
      type="number"
      id="age"
      name="age"
      value={age}
      onChange={(e)=> setAge(e.target.value ?? '')} 
      required
    /></td>

    <td> <label htmlFor="gender">Gender:</label><br></br>
   <input
      type="text"
      id="gender" 
      name="gender"
      value={gender}
      onChange={(e)=> setGender(e.target.value ?? '')}
      required
      /></td>  
    </tr>

    <tr>
       <td><label htmlFor="dob">Date of Birth:</label><br></br>
      <input
        type="date"
        id="dob"
        name="dob"
        value={dob}
        onChange={(e)=> setDob(e.target.value ?? '')}
        required
      /></td>
      <td><label htmlFor="useremail">Email:</label><br></br>
      <input
        type="useremail"
        id="useremail"
        name="useremail"
        value={userEmail}
        onChange={(e)=> setUserEmail(e.target.value ?? '')}
        required
      /></td>
      </tr>

      <tr>
        <td>
      <label htmlFor="password">Password:</label><br></br>
      <input
        type="password"
        id="password"
        name="password"
        value={userPassword}
        onChange={(e)=> setUserPassword(e.target.value ?? '')}
        required
      /></td>
      <td>
      <label htmlFor="confirmPassword">Confirm Password:</label><br></br>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e)=> setConfirmPassword(e.target.value ?? '')}
        required
      /></td></tr>
      <br></br>
      <tr>

      
      <td><button type="submit">{`Sign Up`}</button></td>
      
      <td><p>Do you  have an account? <Link to="/login"> Log in</Link></p></td>
      </tr>
      </table>
      
     </form>
    
   </div>
 
 
  );
}

export default Signup;