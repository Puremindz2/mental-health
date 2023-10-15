import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './PersonalityDisorder.css';
import appIcon from '../Images/mentalHealthIcon.png'
import uIcon from '../Images/uIcon.png'
import dep1 from '../Images/depimg.jpg'
import dep2 from '../Images/pd2.jpg'
import dep3 from '../Images/pd3.jpg'
import backIcon from '../Images/BackIcon.png'

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
         window.location.href = "/profile";
        break;
      case 'appointment':
        // Handle chat click
         window.location.href = "/appointment";
        break;
      case 'about':
        // Handle about us click
         window.location.href = "/Aboutus";
        break;
      default:
        break;
    }
  };
  return (
    <div class="depression">
    <div class="topbar-container">
      <div class="topbar-left">
      <img src={backIcon} onClick={handleClick}  style={{cursor:'pointer'}}/>
        <span class="app-name" onClick={handleClick}>Back</span>

      </div>

      <div>
        <h1>PERSONALITY DISORDER</h1>
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
            <h1>What Is Personality Disorder?</h1>
            <img src={dep2}/>
            <span>
                <p>
                A personality is everything that makes you, you. It includes everything about how you think, feel, and act. A personality disorder is when the way that you think, feel, and/or act causes you intense distress, deviates strongly from societal expectations, or causes you to have difficulty functioning normally.
                <br></br><br></br>
A personality disorder is more than just having a bad day once in a while. It is a behavioral pattern that occurs over a long period of time. Symptoms of personality disorders usually start to show in your late teens or early 20s. 
                    
                    Most people feel sad or depressed at times. It’s a normal reaction to loss or life's challenges. But when intense sadness -- including feeling helpless, hopeless, and worthless -- lasts for many days to weeks and keeps you from living your life, it may be something more than sadness. You could have clinical depression, a treatable medical condition.
                </p>
            </span>
                
            </div>
            <div class="wid2">
            <br></br><br></br>
            <h1>Symtoms Of Personality Disorder</h1>
            <img src={dep3}/>
            <span>
                <p>
                According to the DSM-5, a manual doctors use to diagnose mental disorders, you have depression when you have five or more of these symptoms for at least 2 weeks:
                    <br></br><br></br>
                    <ol>
                        <li>Your mood is depressed for most of the day, especially in the morning.</li>
                        <li>You feel tired or have a lack of energy almost every day.</li>
                        <li>You feel worthless or guilty almost every day.</li>
                        <li>You feel hopeless or pessimistic.</li>
                        <li>You have a hard time focusing, remembering details, and making decisions.</li>
                        <li>You can’t sleep, or you sleep too much, almost every day.</li>
                        <li>You have almost no interest or pleasure in many activities nearly every day.</li>
                        <li>You think often about death or suicide (not just a fear of death).</li>
                        <li>You feel restless or slowed down.</li>
                        <li>You’ve lost or gained weight.</li>
                    </ol>
                </p>
            </span>
            <br></br><br></br> 
            </div>
            <div class="wid3">
            <br></br><br></br><br></br>
            <h1>Is Personality Disorder Curable?</h1>
                <p>
                There’s no cure for depression. Your symptoms may go away over time, but the condition won’t. But with care and treatment, you can reach remission and enjoy a long, healthy life.
                    <br></br><br></br>
                    
                </p>
                
            </div>

            <div class="wid3">
            <br></br><br></br><br></br>
            <h1>Personality Disorder Treatment</h1>
                <p>
                If you or someone you know has symptoms of the condition, talk to your doctor. They can evaluate you and offer you treatment or refer you to a mental health professional. The type of treatment your doctor recommends will depend on your symptoms and how severe they are. You may need one or more of the following:
                    <br></br><br></br>
                    <ol>
                      <li>1. Cognitive Behavioral Therapy (CBT). Seeing a therapist, especially one who specializes in CBT, can help people with OCPD learn how to be more flexible, how to have fun and relax, and how to prioritize their relationships over working when appropriate.</li>
                      <li>2. Selective Serotonin Reuptake Inhibitors (SSRIs). Doctors often prescribe these medications for depression, but they may also help people with OCPD when used in conjunction with therapy.</li>
                      <li>3. Relaxation exercises. Many people with OCPD feel a strong sense of urgency and stress. Learning breathing exercises or meditation can help.</li>
                      <li>4. Narcissistic personality disorder (NPD). People with this personality disorder generally have a grand sense of themselves and need a lot of admiration. They are also very sensitive and can't take criticism easily.</li>   
                    </ol>
                </p>
                
            </div>
        </div>
        {isMenuOpen && (
  <div className="menu-dropdown">
    <ul>
      <li onClick={() => handleMenuClick('profile')}>Profile</li>
      <li onClick={() => handleMenuClick('appointment')}>Appointments</li>
      <li onClick={() => handleMenuClick('about')}>About Us</li>
    </ul>
  </div>)}
    </div>
    </div>


  );
};

export default Topbar;