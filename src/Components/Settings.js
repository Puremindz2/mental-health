import React, { useState } from 'react';
import './Settings.css';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLocationToggle = () => {
    setLocationEnabled(!locationEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-option">
        <span>Notifications</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={handleNotificationsToggle}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
      <div className="settings-option">
        <span>Location</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={locationEnabled}
            onChange={handleLocationToggle}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
      <div className="settings-option">
        <span>Dark Mode</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={darkModeEnabled}
            onChange={handleDarkModeToggle}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );

 
};

export default SettingsPage;
