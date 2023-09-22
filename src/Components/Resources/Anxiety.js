import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Anxiety.css';
import appIcon from '../Images/mentalHealthIcon.png'
import uIcon from '../Images/uIcon.png'
import dep1 from '../Images/depimg.jpg'
import dep2 from '../Images/anxiety2.jpg'
import dep3 from '../Images/anxiety3.jpg'

const Topbar=() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  function handleClick() {
    window.location.href = '/home';
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
    <div class="depression">
    <div class="topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div>
        <h1>ANXIETY</h1>
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
        <div class="text-context">
            <div class="wid">
            <br></br>
            <h1>What Is Anxiety?</h1>
            <img src={dep2}/>
            <span>
                <p>
                Generalized anxiety disorder (or GAD) is marked by excessive, exaggerated anxiety and worry about everyday life events for no obvious reason. People with symptoms of generalized anxiety disorder tend to always expect disaster and can't stop worrying about health, money, family, work, or school.
                <br></br><br></br>
Everyone feels anxiety now and then -- and there can be good reasons why. But in people with GAD, the worry is often unrealistic or out of proportion for the situation. Daily life becomes a constant state of worry, fear, and dread. Eventually, anxiety can even dominate a person's thinking so much that they find it hard to do routine things at work or school, socially, and in their relationships. But there are treatments to ease anxiety so it’s not running your life.
                    
                    Most people feel sad or depressed at times. It’s a normal reaction to loss or life's challenges. But when intense sadness -- including feeling helpless, hopeless, and worthless -- lasts for many days to weeks and keeps you from living your life, it may be something more than sadness. You could have clinical depression, a treatable medical condition.
                </p>
            </span>
                
            </div>
            <div class="wid2">
            <br></br><br></br>
            <h1>What Are the Symptoms of GAD?</h1>
            <img src={dep3}/>
            <span>
                <p>
                GAD affects the way a person thinks, and it can lead to physical symptoms. Mental health professionals use a standard set of criteria to diagnose GAD.  Those symptoms can’t be caused by a medical problem or other condition and last at least 6 months.  Those criteria include:
                    <br></br><br></br>
                    <ol>
                        <li>Excessive, ongoing worry and tension.</li>
                        <li>Unrealistic view of problems.</li>
                        <li>Restlessness or a feeling of being "edgy".</li>
                        <li>Trouble concentrating.</li>
                        <li>Tiring easily or being fatigued</li>
                        <li>Increased crankiness or irritability</li>
                        <li>Trouble sleeping.</li>
                        <li>Muscle tension or muscle aches and soreness.</li>
                    </ol>
                </p>
            </span>
            <br></br><br></br> 
            </div>
            <div class="wid3">
            <br></br><br></br><br></br>
            <h1>Is Anxiety Curable?</h1>
                <p>
                Anxiety disorders like GAD can’t always be prevented. But there are some things that you can do to control or lessen symptoms.
                    <br></br><br></br>
                    
                </p>
                
            </div>

            <div class="wid3">
            <br></br><br></br><br></br>
            <h1>Anxiety Treatment And Home Remedies</h1>
                <p>
                If no other medical condition is found, you may be referred to a psychiatrist or psychologist. These are mental health professionals who are trained to diagnose and treat conditions including GAD. Treatment for GAD most often includes a combination of medication and cognitive behavioral therapy. And your daily habits can make a difference.
                    <br></br><br></br>
                    <ol>
                      <li>1. Cognitive behavioral therapy. People being treated for anxiety disorders often take part in this type of therapy, in which you learn to recognize and change thought patterns and behaviors that lead to anxious feelings. This type of therapy helps limit distorted thinking by looking at worries more realistically. You may want to look into joining a support group.</li>
                      <li>2. Medications. These aren’t a cure, but they can help ease symptoms. Your doctor may recommend drugs called benzodiazepines, often used to treat GAD in the short term. These are prescribed less often than in the past because they may be addictive or sedating and can interfere with memory and attention.</li>
                      <li>3. Home remedies. These lifestyle habits also help.
                            <br></br>
                            3.1 Excercise
                            <br></br>
                            3.2 Yoga
                            <br></br>
                            3.3 Healthy Diet
                            <br></br>
                            3.4 Enough Sleep
                            <br></br>
                            3.5 Avoid caddeine
                            <br></br>
                            3.6 Avoid alcohol and drugs
                            <br></br>
                            3.7 Meditation
                            <br></br>
                            3.8 Biofeedback

                      </li>
                      
                    </ol>
                </p>
                
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
  </div>)}
    </div>
    </div>


  );
};

export default Topbar;