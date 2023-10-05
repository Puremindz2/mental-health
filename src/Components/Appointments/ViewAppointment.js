import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ViewAppointment.css";
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
  //TABLE STYLINGS
  const tbBorder = '1px solid';
  const idWidth = '5%'
  const otherWidth = '20%'
  const otherWidth2 = '10%'
  const otherWidth3 = '25%'
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
  <form onSubmit={handleSubmit} className="vaform">
  <table className="viewApp" style={{border : tbBorder}}>
    <tr>
      <td className="tblHeadingsID" style={{border : tbBorder, width: idWidth}}>ID</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>NAME</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>APPOINTMENT DATE</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth2}}>APPROVAL STATUS</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>DOCTOR</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth3}}>COMMENTS</td>
    </tr>
    <tr>
      <td style={{border : tbBorder,width: idWidth}}>1</td>
      <td style={{border : tbBorder, width: otherWidth}}>Test Example</td>
      <td style={{border : tbBorder,width: otherWidth}}>09/09/2023 09:30</td>
      <td style={{border : tbBorder, width: otherWidth2}}>Approved</td>
      <td style={{border : tbBorder, width: otherWidth}}>DR Sam</td>
      <td style={{border : tbBorder, width: otherWidth3}}>Your appointment is approved</td>
    </tr>
    <tr>
      <td style={{border : tbBorder,width: idWidth}}>36</td>
      <td style={{border : tbBorder, width: otherWidth}}>Test Example 2</td>
      <td style={{border : tbBorder,width: otherWidth}}>09/19/2023 09:30</td>
      <td style={{border : tbBorder, width: otherWidth2}}>Declined</td>
      <td style={{border : tbBorder, width: otherWidth}}>DR Sam</td>
      <td style={{border : tbBorder, width: otherWidth3}}>A family emergency has come up.</td>
    </tr>
      </table>
      
     </form>
    
   </div>
 
 
  );
}

export default Signup;