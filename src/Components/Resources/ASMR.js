import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './ASMR.css';
import appIcon from '../Images/mentalHealthIcon.png';
import useSound from 'use-sound'
import abg1 from '../Images/rainbg.jpg';
import abg2 from '../Images/summerbg.jpg';
import abg3 from '../Images/junglebg.jpg';

import summerdayaudio from '../Sounds/franklin-park-stream-mid-day-spring-sunny-19728.mp3';
import jungleaudio2 from '../Sounds/nature-soundstropicaljunglebirds-108380.mp3';
import rainaudio from '../Sounds/relaxing-rain-8228.mp3';

const Topbar=() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  const [audio] = useState(new Audio(rainaudio));
  const [audio2] = useState(new Audio(summerdayaudio));
  const [audio3] = useState(new Audio(jungleaudio2));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const playAudio = () => {
    audio.play();
  };

  const playAudio2 = () => {
    audio2.play();
  };

  const playAudio3 = () => {
    audio3.play();
  };

  function handleClick() {
    window.location.href = '/home';
  }

  var images = [abg1,abg2,abg3];
/*
  function switchImage(){
    //x = (x === images.length - 3) ? 0 : x + 1;
    //var bodybg = document.getElementById("bgimage");
    //bodybg.src = images[1]
  }

  function startTimer() {
    //setInterval(switchImage, 3000);
  }*/




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

  const BoopButton = () => {
    const [play] = useSound(rainaudio);


  }
  /*function playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }*/

  return (
    <div class="asmr-class">
    <div class="asmr-topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div>
        <h1>ASMR - Autonomous Sensory Meridian Response</h1>
      </div>

      <div class="topbar-right">
      <div className="home-container">
        <span>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="asmr-menu-line"></div>
            <div className="asmr-menu-line"></div>
            <div className="asmr-menu-line"></div>
          </div>
        </span>
      </div>
    </div>
    </div>

    <div class="asmr-body-content">
        <div class="text-context">
        <table class="welome-table">
        <tr class="welome-table-headers">
          <th>ASMR RAIN</th>
          <th>ASMR SUMMER DAY</th>
          <th>ASMR JUNGLE</th>
        </tr>
        <tr class="welome-table-text">
          <td class="table-image"><img src={abg1} onClick={() => playAudio()}/> </td>
          <td class="table-image"><img src={abg2} onClick={() => playAudio2()}/></td>
          <td class="table-image"><img src={abg3} onClick={() => playAudio3()}/></td>
        </tr>
        
        </table>
        </div>
        {isMenuOpen && (
  <div className="menu-dropdown">
    <ul>
      <li onClick={() => handleMenuClick('profile')}>Profile</li>
      <li onClick={() => handleMenuClick('settings')}>Settings</li>
      <li onClick={() => handleMenuClick('appointments')}>Appointments</li>
      <li onClick={() => handleMenuClick('about')}>About Us</li>
    </ul>
  </div>)}
    </div>
    </div>
  

        );
};
export default Topbar;