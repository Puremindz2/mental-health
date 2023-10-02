import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Appointment.css';
import appIcon from "../Images/mentalHealthIcon.png";
import asmr from "../Images/asmrbg.jpg";

const WelcomePage = () => {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [showTitle, setShowTitle] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(false);
    }, 4000);

    const buttonsTimeout = setTimeout(() => {
      setShowButtons(true);
    }, 5000);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(buttonsTimeout);
    };
  }, []);

  function handleClick() {
    window.location.href = '/';
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
    <div className="welcome-container">

<div class="topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div>
        <h1>Pure Minds - Mental Health</h1>
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
      
        <table class="welome-table">
        <tr class="welome-table-headers">
          <th>VIEW APPOINTMENTS</th>
          <th>BOOK APPOINTMENTS</th>
        </tr>
        <tr class="welome-table-text">
          <td class="table-image"><img src={appIcon}/> </td>
          <td class="table-image"><img src={appIcon}/></td>
        </tr>
        <tr class="welome-table-text">
          <td>View Appointments that you have booked.</td>
          <td>Book a new Appointment</td>
        </tr>
        </table>
      
    </div>
  );
};

export default WelcomePage;




















