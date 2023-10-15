import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Depression.css';
import appIcon from '../Images/mentalHealthIcon.png'
import uIcon from '../Images/uIcon.png'
import dep1 from '../Images/depimg.jpg'
import dep2 from '../Images/depimg2.jpg'
import dep3 from '../Images/depimg3.jpg'
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
    <div class="topbar-container" style={{borderColor:'green'}}>
      <div class="topbar-left" style={{backgroundColor:'green'}}>
      <img src={backIcon} onClick={handleClick}  style={{cursor:'pointer'}}/>
        <span class="app-name" onClick={handleClick}>Back</span>

      </div>

      <div>
        <h1 style={{color:'green'}}>DEPRESSION</h1>
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
            <h1>What Is Depression?</h1>
            <img src={dep2}/>
            <span>
                <p>
                    Depression, also known as major depressive disorder, is a mood disorder that makes you feel constant sadness or lack of interest in life.
                    <br></br><br></br>
                    Most people feel sad or depressed at times. It’s a normal reaction to loss or life's challenges. But when intense sadness -- including feeling helpless, hopeless, and worthless -- lasts for many days to weeks and keeps you from living your life, it may be something more than sadness. You could have clinical depression, a treatable medical condition.
                </p>
            </span>
                
            </div>
            <div class="wid2">
            <br></br><br></br>
            <h1>Symtoms Of Depression</h1>
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
            <h1>Is Depression Curable?</h1>
                <p>
                There’s no cure for depression. Your symptoms may go away over time, but the condition won’t. But with care and treatment, you can reach remission and enjoy a long, healthy life.
                    <br></br><br></br>
                    
                </p>
                
            </div>

            <div class="wid3">
            <br></br><br></br><br></br>
            <h1>Depression Treatment</h1>
                <p>
                If you or someone you know has symptoms of the condition, talk to your doctor. They can evaluate you and offer you treatment or refer you to a mental health professional. The type of treatment your doctor recommends will depend on your symptoms and how severe they are. You may need one or more of the following:
                    <br></br><br></br>
                    <ol>
                      <li>1. Medication. Antidepressant medications (in combination with therapy) are effective for most people with depression. There are many types of antidepressants. You may have to try several kinds before you find the one that works best for you. You may need a combination of two. Or your doctor may also prescribe another type of medication to help your antidepressant work best, such as a mood stabilizer, antipsychotic, anti-anxiety medication, or stimulant medication.</li>
                      <li>2. Psychotherapy. Talking to a mental health professional on a regular basis about your depression and other issues can help treat the symptoms. Different methods are available, including cognitive behavioral therapy (CBT) and talk therapy.</li>
                      <li>3. Hospital or residential treatment. If your depression is severe enough that you’re having trouble taking care of yourself or may harm yourself or others, you may need psychiatric treatment in a hospital or residential facility.</li>
                      <li>4. Electroconvulsive therapy (ECT). This brain stimulation therapy passes electric currents through your brain to help your neurotransmitters work better. Typically, you wouldn’t use this therapy unless antidepressants aren’t working or you can’t take them for other health reasons.</li>
                      <li>5. Transcranial magnetic stimulation (TMS). Your doctor typically suggests this only after antidepressants haven’t worked. This treatment uses a coil to send magnetic pulses through your brain to help stimulate nerve cells that regulate mood.</li>
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