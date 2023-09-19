import React, { useState } from 'react';
import './Home.css';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import mentalHealthIcon from "./Images/mentalHealthIcon.png";
import contactDoc from "./Images/contactDoc.png";
import depressionIcon from "./Images/depressionicon.png";
import helpIcon from "./Images/help.png";
import checkAppointment from "./Images/viewApp.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleClick() {
    history.push("/depression")
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
      <div className="topbar-container">
        <div className="topbar-left">
          <img className="appIcon" src={mentalHealthIcon} />
        </div>
        <span >Pure Minds Mental Health</span>
      </div>
      <div className="home-container">
        <span>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </span>
        <div class="body-content">
        <br></br>
        <div class="layout-content">

        <div class="wrapper">
            <div class="grid-item">
                <img class="welcome" src={mentalHealthIcon}/>
                <div class="text">
                </div>
            </div>

            <div class="grid-item">
            <img class="addDocIcon" src={contactDoc} />
                <div class="heading" >
                    <p id="mouse-pinter">Contact a Doctor</p>
                <p class="descriptions">This is where a user is able to contact a doctor.</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={depressionIcon}/>
                <div class="heading" onClick={handleClick}>
                    <p id="mouse-pinter">Depression</p>
                <p class="descriptions">This is where a user is contact doctors that specialise with depression</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={helpIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">Help</p>
                <p class="descriptions">This is where a user can urgently seek help from available doctors</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={checkAppointment}/>
                <div class="heading">
                    <p id="mouse-pinter">Appointments</p>
                <p class="descriptions">This is where a user can view his/her appointments</p>
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
    </div>
  );
};

export default Home;
