import React, { useState, useRef } from 'react';
import './Home.css';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import mentalHealthIcon from "./Images/mentalHealthIcon.png";
import anxiety from "./Images/blue.jpg"
import depressionIcon from "./Images/green.jpg";
import helpIcon from "./Images/pink.jpg";
import checkAppointment from "./Images/purple.jpg";
import appIcon from './Images/mentalHealthIcon.png' 
import PTSD from "./Images/red.jpg"
import ASMR from "./Images/asmricon.png"
import vDoc from "./Images/doctor.jpg"
import bookA from "./Images/bookA.jpg"

const Home = () => {
  const myRef = useRef()
  const myRef2 = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  var display = false;
  


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleClick() {
    history.push("/depression")
  }

  function handleClick2() {
    window.location.href = '/anxiety';
  }

  function handleClick3() {
    window.location.href = '/ocd';
  }

  function handleClick4() {
    window.location.href = '/PersonalityDisorder';
  }

  function handleClick5() {
    window.location.href = '/ptsd';
  }

  function handleClick6() {
    window.location.href = '/ASMR';
  }

  function handleClick7() {
    window.location.href = '/Appointment';
  }

  

  const displayDoc = () => {
    display = !display;
    if(display)
    { 
      myRef.current.style.filter = "blur(5px)" ; 
      myRef2.current.style.display = "block" ; 
      myRef2.current.style.visibility = "visible" ; 
      myRef2.current.style.filter = "blur(0)" ; 
    }
    else
    {
      myRef.current.style.filter = "blur(0px)" ;
      myRef2.current.style.visibility = "hidden" ; 
    }
    
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
      <div class="topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div>
        <h1>Pure Minds - Mental Health</h1>
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

    <div ref={myRef2} class="docPopUp" style={{display:'none', position:'absolute',zIndex:1,height:'200px'}}>
        <form className="signup-form">,
  <table>
    <tr>
      <td class="middle" ><img src={appIcon} style={{marginLeft:'0px'}} /></td>
      <td class="middle" ><img src={appIcon} style={{marginLeft:'0px'}}/></td>
    </tr>

    <tr>
      <td> <label htmlFor="firstName" id="firstNameLabel">Name: CM Van Jaarsveldt</label><br></br></td>
      <td> <label htmlFor="firstName" id="firstNameLabel">Name: Milcah's Dad</label><br></br></td>
    </tr>

    <tr>
      <td> <label htmlFor="firstName" id="firstNameLabel">Job: Occupational Therapist</label><br></br></td>
      <td> <label htmlFor="firstName" id="firstNameLabel">Job: unknown</label><br></br></td>
    </tr>

    <tr>
      <td> <label htmlFor="firstName" id="firstNameLabel">Qualification: B.Occ (Pret) OT 0015105</label><br></br></td>
      <td> <label htmlFor="firstName" id="firstNameLabel">Qualification: unknown</label><br></br></td>
    </tr>

    <tr>
      <td> <label htmlFor="firstName" id="firstNameLabel">Workplace: Sebokeng Psychiatric Unit</label><br></br></td>
      <td> <label htmlFor="firstName" id="firstNameLabel">Workplace: unknown</label><br></br></td>
    </tr>

    <tr>
      <td> <label htmlFor="firstName" id="firstNameLabel">Office Hours: 07:30 to 16:00</label><br></br></td>
      <td> <label htmlFor="firstName" id="firstNameLabel">Office Hours: unknown</label><br></br></td>
    </tr>

    <tr>
      <td> <label htmlFor="firstName" id="firstNameLabel">Contact: vanjaarsveldtc@gmail.com</label><br></br></td>
      <td> <label htmlFor="firstName" id="firstNameLabel">Contact: unknown</label><br></br></td>
    </tr>

      <br></br>
      <tr>

      
      <td class="middle"><button onClick={displayDoc}>Ok</button></td>
      
      </tr>
      </table>
      
     </form>
        </div>

        <div ref={myRef} class="body-content">
        
        <div class="layout-content">
        
        <div class="wrapper">
        <div class="grid-item">
            <img class="addDocIcon" src={vDoc} />
                <div class="heading" onClick={displayDoc}>
                    <p id="mouse-pinter">View Doctors</p>
                <p class="descriptions">View Doctors Details.</p>
                </div>
            </div>

            <div class="grid-item">
            <img class="addDocIcon" src={bookA} />
                <div class="heading" onClick={handleClick7}>
                    <p id="mouse-pinter">Appointments</p>
                <p class="descriptions">View and Book Appointments.</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={ASMR}/>
                <div class="heading" onClick={handleClick6}>
                    <p id="mouse-pinter">ASMR SLEEP</p>
                <p class="descriptions">Find sounds and triggers that aid with sleeping</p>
                </div>
            </div>

            <div class="grid-item">
            <img class="addDocIcon" src={anxiety} />
                <div class="heading" onClick={handleClick2}>
                    <p id="mouse-pinter">Anxiety</p>
                <p class="descriptions">Learn and inform yourself all about anxiety.</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={depressionIcon}/>
                <div class="heading" onClick={handleClick}>
                    <p id="mouse-pinter">Depression</p>
                <p class="descriptions">Learn and inform yourself all about depression</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={helpIcon}/>
                <div class="heading"onClick={handleClick3}>
                    <p id="mouse-pinter">OCD</p>
                <p class="descriptions">Learn and inform yourself all about OCD</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={checkAppointment}/>
                <div class="heading" onClick={handleClick4}>
                    <p id="mouse-pinter">Personality Disorder</p>
                <p class="descriptions">Learn and inform yourself all about Personality Disorder</p>
                </div>
            </div>

            <div class="grid-item">
                <img class="addDocIcon" src={PTSD}/>
                <div class="heading" onClick={handleClick5}>
                    <p id="mouse-pinter">PTSD</p>
                <p class="descriptions">Learn and inform yourself all about PTSD</p>
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
  );
};

export default Home;
