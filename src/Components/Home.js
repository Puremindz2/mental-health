import React, { useState } from 'react';
import './Home.css';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import mentalHealthIcon from "./Images/mentalHealthIcon.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div>
      <div className="topbar-container">
        <div className="topbar-left">
          <img className="appIcon" src={mentalHealthIcon} />
          {/*<span className="app-name">Pure Minds Mental Health</span>*/}
        </div>l
        <span className="app-name">Pure Minds Mental Health</span>
        {/* You can add more topbar content here if needed */}
      </div>

      
      <div className="home-container">
        <span>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </span>

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
