import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Welcomepage.css';
import appIcon from "./Images/mentalHealthIcon.png";
import features from "./Images/features.png";
import asmr from "./Images/asmrbg.jpg";

const WelcomePage = () => {
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
    window.location.href = '/AboutUs';
  }

  function handleClick2() {
    window.location.href = '/login';
  }

  function handleClick3() {
    window.location.href = '/signup';
  }

  return (
    <div className="welcome-container-1">

<div class="welcome-topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name1">Pure Minds </span>

      </div>

      <div>
        <h1>Mental Health</h1>
      </div>

      <div class="topbar-right">
        <button class="topbar-btns" onClick={handleClick}>About Us</button>
        <button class="topbar-btns" onClick={handleClick2}>Login</button>
        <button class="topbar-btns" onClick={handleClick3}>Sign Up</button>
    </div>
    </div>
    
        <table class="welome-table-1">
        <tr class="welome-table-headers">
          <th class="column1">FEATURES</th>
          <th class="column2">HELLO & WELCOME</th>
          <th class="column3">ASMR</th>
        </tr>
        <tr class="welome-table-text">
          <td class="column1"><img src={features}/> </td>
          <td class="column2"><img src={appIcon}/></td>
          <td class="column3"><img src={asmr}/></td>
        </tr>
        <tr class="welome-table-text">
          <td class="column1">Comprehensive Mental Health resources<br></br>Connect with Professionals<br></br>Get Help with Chatbot</td>
          <td class="column2">This is a safe space where you can explore, learn on your journey to a better mental health.</td>
          <td class="column3">Listen to ASMR sounds that are proven to help with sleeping.</td>
        </tr>
        </table>
      
    </div>
  );
};

export default WelcomePage;




















