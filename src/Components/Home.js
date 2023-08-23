import React, { useState } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
        history.push("/profile")
        break;
      case 'settings':
        // Handle settings click
        history.push("/settings")
        break;
      case 'chat':
        // Handle chat click
        history.push("/chatapp")
        break;
      case 'resources':
        // Handle resources click
        history.push("/resources")
        break;
      case 'about':
        // Handle about us click
        history.push("/about")
        break;
      case 'logout':
        // Handle logout click
        history.push("/logout")
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-container">
      <span>
       
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <h1>Home</h1>
    </span>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li onClick={() => handleMenuClick('profile')}>Profile</li>
            <li onClick={() => handleMenuClick('settings')}>Settings</li>
            <li onClick={() => handleMenuClick('chat')}>Chat</li>
            <li onClick={() => handleMenuClick('resources')}>Resources</li>
            <li onClick={() => handleMenuClick('about')}>About Us</li>
            <li onClick={() => handleMenuClick('logout')}>Log Out</li>
          </ul>
        </div>
      )}
       <div className="chat-button">Chat</div>
    </div>
  );
};

export default Home;
