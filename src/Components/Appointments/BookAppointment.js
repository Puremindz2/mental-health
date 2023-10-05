import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookAppointment.css";
import { supabase } from "../../supabaseClient";
import { Link, useHistory } from 'react-router-dom';
import appIcon from "../Images/mentalHealthIcon.png";

function Signup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
    window.location.href = '/home';
  }

  function handleClick2() {
    window.location.href = '/login';
  }

  function handleClick3() {
    window.location.href = '/signup';
  }

  const handleMenuClick = (menuItem) => {
    // Handle menu item click (e.g., navigate to different pages)
    switch (menuItem) {
      case 'profile':
        history.push("/profile");
        break;
      case 'settings':
        // Handle settings click
        history.push("/settings");
        break;
      case 'appointments':
        // Handle chat click
        history.push("/appointments");
        break;
      case 'about':
        // Handle about us click
        history.push("/about");
        break;
      default:
        break;
    }
  };
  return ( 
    <div className="signup-container">
  
  <div class="topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds</span>

      </div>

      <div>
        <h1>Mental Health</h1>
      </div>

      <div class="topbar-right">
      <div className="home-container">
        <span>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </span>
      </div>
    </div>

    {isMenuOpen && (
      <div className="menu-dropdown">
        <ul>
          <li onClick={() => handleMenuClick('profile')}>Profile</li>
          <li onClick={() => handleMenuClick('settings')}>Settings</li>
          <li onClick={() => handleMenuClick('appointments')}>Appointments</li>
          <li onClick={() => handleMenuClick('about')}>About Us</li>
        </ul>
      </div>
    )}
    </div>
    <ToastContainer />
  <form onSubmit={handleSubmit} className="signup-form">
  <table>
    <tr>
      <td class="middle" ><img src={appIcon}/></td>
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
      <label for="reason">Reason:</label><br></br>
      <select name="reason" id="reason">
      <option value="Please choose One">Please choose One:</option>
        <option value="Depression">Depression</option>
        <option value="Anxiety">Anxiety</option>
        <option value="Personality Disorder">Personality Disorder</option>
        <option value="Other">Other</option>
      </select></td>
      <td>
      <label htmlFor="BookDay">Choose Appointment Date</label><br></br>
      <input
        type="date"
        id="bookdate"
        name="bookdate"
        required
      /></td></tr>
      <br></br>
      <tr>

      
      <td class="middle"><button type="submit">{`Book Appointment`}</button></td>
      
      </tr>
      </table>
      
     </form>
    
   </div>
 
 
  );
}

export default Signup;