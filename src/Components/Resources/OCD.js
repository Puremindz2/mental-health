import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './OCD.css';
import appIcon from '../Images/mentalHealthIcon.png'
import uIcon from '../Images/uIcon.png'
import dep1 from '../Images/depimg.jpg'
import dep2 from '../Images/ocd2.jpg'
import dep3 from '../Images/ocd3.jpg'

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
        <h1>OCD - Obsessive-Compulsive Disorder</h1>
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
            <h1>What Is OCD?</h1>
            <img src={dep2}/>
            <span>
                <p>
                Obsessive-compulsive disorder (OCD) is a mental illness that causes repeated unwanted thoughts or sensations (obsessions). It also can give you an urge to do something over and over again (compulsions). Some people have both obsessions and compulsions.
                <br></br><br></br>
OCD isn’t about habits like biting your nails or thinking negative thoughts. An obsessive thought might be that certain numbers or colors are “good” or “bad.” A compulsive habit might be to wash your hands seven times after touching something that could be dirty. Although you may not want to think or do these things, you feel like you can't stop.
                    
                    Most people feel sad or depressed at times. It’s a normal reaction to loss or life's challenges. But when intense sadness -- including feeling helpless, hopeless, and worthless -- lasts for many days to weeks and keeps you from living your life, it may be something more than sadness. You could have clinical depression, a treatable medical condition.
                </p>
            </span>
                
            </div>
            <div class="wid2">
            <br></br><br></br>
            <h1>OCD Diagnosis</h1>
            <img src={dep3}/>
            <span>
                <p>
                Your doctor may do a physical exam and blood tests to make sure something else isn’t causing your symptoms. They will also talk with you about your feelings, thoughts, and habits.
                    <br></br>
                    OCD comes in many forms, but most cases fall into at least one of four general categories:
                    <br></br><br></br>
                    <ol>
                        <li>Checking, such as locks, alarm systems, ovens, or light switches, or thinking you have a medical condition like pregnancy or schizophrenia.</li>
                        <li>Contamination, a fear of things that might be dirty or a having a compulsion to clean (you may hear this called "obsessive cleanliness disorder"). Mental contamination involves feeling like you’ve been treated like dirt.</li>
                        <li>Symmetry and ordering, the need to have things lined up in a certain way.</li>
                        <li>Ruminations and intrusive thoughts, an obsession with a line of thought. Some of these thoughts might be violent or disturbing.</li>
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
            <h1>OCD Treatment</h1>
                <p>
                There’s no cure for OCD. But you may be able to manage how your symptoms affect your life through medicine, therapy, or a combination of treatments.

Treatments include:
                    <br></br><br></br>
                    <ol>
                      <li>1. Psychotherapy. Cognitive behavioral therapy (CBT) can help change your thinking patterns. In a form called exposure and response prevention, your doctor will put you in a situation designed to create anxiety or set off compulsions. You’ll learn to lessen and then stop your OCD thoughts or actions.</li>
                      <li>2. Relaxation. Simple things like meditation, yoga, and massage can help with stressful OCD symptoms.</li>
                      <li>3. Medication. Psychiatric drugs called selective serotonin reuptake inhibitors help many people control obsessions and compulsions. They might take 2 to 4 months to start working. Common ones include citalopram (Celexa), clomipramine (Anafranil), escitalopram (Lexapro), fluoxetine (Prozac), fluvoxamine, paroxetine (Paxil), and sertraline (Zoloft). If you still have symptoms, your doctor might give you antipsychotic drugs like aripiprazole (Abilify) or risperidone (Risperdal).</li>
                      <li>4. Neuromodulation. In rare cases, when therapy and medication aren’t making enough of a difference, your doctor might talk to you about devices that change the electrical activity in a certain area of your brain. One kind, transcranial magnetic stimulation, is FDA-approved for OCD treatment. It uses magnetic fields to stimulate nerve cells. A more complicated procedure, deep brain stimulation, uses electrodes that are implanted in your head.</li>
                      <li>5. Transcranial magnetic stimulation (TMS). Your doctor typically suggests this only after antidepressants haven’t worked. This treatment uses a coil to send magnetic pulses through your brain to help stimulate nerve cells that regulate mood.</li>
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