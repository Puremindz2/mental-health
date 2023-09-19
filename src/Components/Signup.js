import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { supabase } from "../supabaseClient";
import { Link, useHistory } from 'react-router-dom';

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
      const { user, session, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
        options: { 
          data: {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            dob: dob,
            userId: user.id,
          },
        },
      });
      

      if (error) {
        console.error('Signup error:', error);
        toast.error('Account creation failed. Please try again.');
      } else {
        console.log('User signed up:', user);
        toast.success('Account created successfully!');
        const userId = user.id;
        // Redirect to the login page after successful account creation
        history.push('/login');
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error);
      toast.error('Oops! Something went wrong. Please try again.');
    }
  };
    
  return ( 
    <div className="signup-container">
     <ToastContainer />
     <div className="signup">
  <form onSubmit={handleSubmit}>
  
  <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={firstName}
      onChange={(e)=> setFirstName(e.target.value ?? '')}
      required
    />
    <label htmlFor="lastName">Last Name:</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={lastName}
      onChange={(e)=> setLastName(e.target.value ?? '')}
      required
    /><label htmlFor="age">Age:</label>
    <input
      type="number"
      id="age"
      name="age"
      value={age}
      onChange={(e)=> setAge(e.target.value ?? '')} 
      required
    />
   <label htmlFor="gender">Gender:</label>
   <input
      type="text"
      id="gender" 
      name="gender"
      value={gender}
      onChange={(e)=> setGender(e.target.value ?? '')}
      required
      />
    
       <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={dob}
        onChange={(e)=> setDob(e.target.value ?? '')}
        required
      />
      <label htmlFor="useremail">Email:</label>
      <input
        type="useremail"
        id="useremail"
        name="useremail"
        value={userEmail}
        onChange={(e)=> setUserEmail(e.target.value ?? '')}
        required
      />
      
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={userPassword}
        onChange={(e)=> setUserPassword(e.target.value ?? '')}
        required
      /><label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e)=> setConfirmPassword(e.target.value ?? '')}
        required
      />
      <button type="submit">Sign Up</button>
   
     </form>
    
    <p>Do you  have an account? <Link to="/login"> Log in</Link></p>
    </div>
   </div>
 
 
  );
}

export default Signup;