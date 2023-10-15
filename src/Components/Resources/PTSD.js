import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './PTSD.css';
import appIcon from '../Images/mentalHealthIcon.png'
import uIcon from '../Images/uIcon.png'
import dep1 from '../Images/depimg.jpg'
import dep2 from '../Images/ptsd2.jpeg'
import dep3 from '../Images/ptsd3.jpg'
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
         window.location.href ="/profile";
        break;
      case 'appointment':
        // Handle chat click
         window.location.href ="/appointment";
        break;
      case 'about':
        // Handle about us click
         window.location.href ="/Aboutus";
        break;
      default:
        break;
    }
  };
  return (
    <div class="depression">
    <div class="topbar-container" style={{borderColor:'orange'}}>
      <div class="topbar-left" style={{backgroundColor:'orange'}}>
      <img src={backIcon} onClick={handleClick}  style={{cursor:'pointer'}}/>
        <span class="app-name" onClick={handleClick}>Back</span>


      </div>

      <div>
        <h1>PTSD - Posttraumatic Stress Disorder</h1>
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
            <h1>What Is PTSD?</h1>
            <img src={dep2}/>
            <span>
                <p>
                Posttraumatic stress disorder (PTSD), once called shell shock or battle fatigue syndrome, is a serious condition that can develop after a person has experienced or witnessed a traumatic or terrifying event in which there was serious physical harm or threat. PTSD is a lasting consequence of traumatic ordeals that cause intense fear, helplessness, or horror. Examples of things that can bring on PTSD include sexual or physical assault, the unexpected death of a loved one, an accident, war, or natural disaster. Families of victims can develop PTSD, as can emergency personnel and rescue workers.
                <br></br><br></br>
                Most people who have a traumatic event will have reactions that may include shock, anger, nervousness, fear, and even guilt. These reactions are common, and for most people, they go away over time. For a person with PTSD, however, these feelings continue and even increase, becoming so strong that they keep the person from going about their life as expected. People with PTSD have symptoms for longer than one month and can’t function as well as before the event that triggered it happened. 
                </p>
            </span>
                
            </div>
            <div class="wid2">
            <br></br><br></br>
            <h1>Symtoms Of PTSD</h1>
            <img src={dep3}/>
            <span>
                <p>
                Symptoms of PTSD most often begin within 3 months of the event. In some cases, however, they don’t begin until years later. The severity and duration of the illness can vary. Some people recover within 6 months, while others have it much longer. 
                Symptoms of PTSD often are grouped into four main categories, including:
                    <br></br><br></br>
                    <ol>
                        <li>Reliving: People with PTSD repeatedly relive the ordeal through thoughts and memories of the trauma. These may include flashbacks, hallucinations, and nightmares. They also may feel great distress when certain things remind them of the trauma, such as the anniversary date of the event.</li>
                        <li>Avoiding: The person may avoid people, places, thoughts, or situations that may remind them of the trauma. This can lead to feelings of detachment and isolation from family and friends, as well as a loss of interest in activities that the person once enjoyed.</li>
                        <li>Increased arousal: These include excessive emotions; problems relating to others, including feeling or showing affection; difficulty falling or staying asleep; irritability; outbursts of anger; difficulty concentrating; and being "jumpy" or easily startled. The person may also suffer physical symptoms, such as increased blood pressure and heart rate, rapid breathing, muscle tension, nausea, and diarrhea.</li>
                        <li>Negative cognitions and mood: This refers to thoughts and feelings related to blame, estrangement, and memories of the traumatic event.</li>

                    </ol>
                </p>
            </span>
            <br></br><br></br> 
            </div>
            <div class="wid3">
            <br></br><br></br><br></br>
            <h1>PTSD Prevention</h1>
                <p>
                Some studies suggest that early intervention with people who had a trauma may reduce some of the symptoms of PTSD or prevent it all together.
                    <br></br><br></br>
                    
                </p>
                
            </div>

            <div class="wid3">
            <br></br><br></br><br></br>
            <h1>PTSD Treatment</h1>
                <p>
                The goal of PTSD treatment is to reduce the emotional and physical symptoms, to improve daily functioning, and to help the person better manage with the event that triggered the disorder. Treatment for PTSD may involve psychotherapy (a type of counseling), medication, or both.
                    <br></br><br></br>
                    <ol>
                      <li>1. Medication. Doctors use certain antidepressant medications to treat PTSD -- and to control the feelings of anxiety and its associated symptoms.</li>
                      <li>2. Psychotherapy. Psychotherapy for PTSD involves helping the person learn skills to manage symptoms and develop ways of coping. Therapy also aims to teach the person and their family about the disorder, and help the person work through the fears associated with the traumatic event. A variety of psychotherapy approaches are used to treat people with PTSD, including:</li>
                      <li>2.1 Cognitive behavioral therapy, which involves learning to recognize and change thought patterns that lead to troublesome emotions, feelings, and behavior.</li>
                      <li>2.2 Prolonged exposure therapy, a type of behavioral therapy that involves having the person relive the traumatic event, or exposing the person to objects or situations that cause anxiety. This is done in a well-controlled and safe environment. Prolonged exposure therapy helps the person confront the fear and gradually become more comfortable with situations that are frightening and cause anxiety. This has been very successful at treating PTSD.</li>
                      <li>2.3 Psychodynamic therapy focuses on helping the person examine personal values and the emotional conflicts caused by the traumatic event.</li>
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