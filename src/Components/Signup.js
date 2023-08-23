import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { supabase } from "../supabaseClient";

function Signup() {
  const history = useHistory();

 /*/ const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    dob: "",
    useremail: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.from("users").insert([formData]);

      if (error) {
        console.error("Error inserting data:", error);
        toast.error("Account creation failed. Please try again.");
      } else {
        console.log("Data inserted successfully:", data);
        toast.success("Account created successfully!");
        // Redirect to the login page after successful account creation
        history.push("/login");
      }
    } catch (error) {
      console.error("Error connecting to Supabase:", error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };
/*/
  
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [age,setAge] = useState('');
  const [gender,setGender] = useState('');
  const [dob,setDob] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userPassword,setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { session } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
      });

      const { data } = await supabase.auth.getUser();
      const { error } = await supabase.from("users").insert({
        
        user_id: data.user?.id,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age:age,
        dob: dob,
      })

      if (error) {
        console.log(error);
      } else {
        const user_id = data.user.id;
      }
      if (userPassword !== confirmPassword) {
        toast.error('Passwords do not match. Please re-enter your password.');
        return;
      } 

      if (event) {
        console.event("Error inserting data:", event);
        toast.event("Account creation failed. Please try again.");
      } else if (error ){
        console.log("Data inserted successfully:", session);
        toast.success("Account created successfully!");
        // Redirect to the login page after successful account creation
        history.push("/login");
      }
    } catch (event) {
      console.event("Error connecting to Supabase:", event);
      toast.event("Oops! Something went wrong. Please try again.");
    }
  };
  return (
    <div className="signup-container">
      <ToastContainer />
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
        />
        <label htmlFor="age">Age:</label>
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
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
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
    </div>
  );
}

export default Signup;
