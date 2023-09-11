import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Welcomepage.css';

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

  return (
    <div className="welcome-container">
      <div className="content-container">
        <div className={`welcome-content ${showTitle ? 'appear' : 'disappear'}`}>
          <h1 className="welcome-title">Welcome</h1>
        </div>
        <div className={`welcome-links-container ${showButtons ? 'move-up' : ''}`}>
          {showButtons && (
            <>
              <Link to="/login" className="welcome-link">Log In</Link>
              <Link to="/signup" className="welcome-link">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;




















