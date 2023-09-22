import React, { useState } from 'react';
import './Home.css';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import mentalHealthIcon from "./Images/mentalHealthIcon.png";
import anxiety from "./Images/anxietyicon.png"
import depressionIcon from "./Images/depressionicon.png";
import helpIcon from "./Images/ocdicon.png";
import checkAppointment from "./Images/pdicon.jpg";
import appIcon from './Images/mentalHealthIcon.png' 
import PTSD from "./Images/ptsdicon.PNG"

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleClick() {
    history.push("/depression")
  }

  function handleClick2() {
    window.location.href = '/anxiety';
  }

  function handleClick3() {
    window.location.href = '/ocd';
  }

  function handleClick4() {
    window.location.href = '/PersonalityDisorder';
  }

  function handleClick5() {
    window.location.href = '/ptsd';
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
    <div >
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
    </div>

        <div class="body-content">
        
        <div class="layout-content">

        <div class="wrapper">
            <div class="grid-item">
                <img class="welcome" src={mentalHealthIcon}/>
                <div class="text">
                </div>
            </div>

            <div class="grid-item">
            <img class="addDocIcon" src={anxiety} />
                <div class="heading" onClick={handleClick2}>
                    <p id="mouse-pinter">Anxiety</p>
                <p class="descriptions">Learn and inform yourself all about anxiety.</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={depressionIcon}/>
                <div class="heading" onClick={handleClick}>
                    <p id="mouse-pinter">Depression</p>
                <p class="descriptions">Learn and inform yourself all about depression</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={helpIcon}/>
                <div class="heading"onClick={handleClick3}>
                    <p id="mouse-pinter">OCD</p>
                <p class="descriptions">Learn and inform yourself all about OCD</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={checkAppointment}/>
                <div class="heading" onClick={handleClick4}>
                    <p id="mouse-pinter">Personality Disorder</p>
                <p class="descriptions">Learn and inform yourself all about Personality Disorder</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={PTSD}/>
                <div class="heading" onClick={handleClick5}>
                    <p id="mouse-pinter">PTSD</p>
                <p class="descriptions">Learn and inform yourself all about PTSD</p>
                </div>
            </div>
        
        </div>
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
  );
};

export default Home;
