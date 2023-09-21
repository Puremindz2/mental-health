import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Depression.css';


function topbar() {
  return (
    <div class="depression">
    <div class="topbar-container">
      <div class="topbar-left">
      <img className="appIcon" src={mentalHealthIcon}/>
        <span class="app-name">Pure Minds - Mental Health</span>

      </div>

      <div>
        <h1>DEPRESSION</h1>
      </div>

      <div class="topbar-right">
      <div class="dropdown">
      <img class="userIcon" src={uIcon}/>

      <div class="userName"> <span>Tshepo Molapisi</span>

      <div class="dropDown">
        <span><img class="dropDownImage" src="../assets/images/dropdown1.png"/></span>
        <div class="dropdown-content">
        <label>Hi Tshepo Molapisi</label>
        <p class="logOut">Sign Out</p>
       </div>

      </div>
      </div>
    </div>
    </div>
    </div>

    <div class="body-content">
        <div class="text-context">
        <h1>What Is Depression?</h1>
            <br></br> 
            <p>
Depression, also known as major depressive disorder, is a mood disorder that makes you feel constant sadness or lack of interest in life.

Most people feel sad or depressed at times. It’s a normal reaction to loss or life's challenges. But when intense sadness -- including feeling helpless, hopeless, and worthless -- lasts for many days to weeks and keeps you from living your life, it may be something more than sadness. You could have clinical depression, a treatable medical condition.

Is Depression Curable?
There’s no cure for depression. Your symptoms may go away over time, but the condition won’t.

But with care and treatment, you can reach remission and enjoy a long, healthy life.

Depression Symptoms
According to the DSM-5, a manual doctors use to diagnose mental disorders, you have depression when you have five or more of these symptoms for at least 2 weeks:

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

You may also:

Feel cranky and restless
Lose pleasure in life
Overeat or stop feeling hungry
Have aches, pains, headaches, cramps, or digestive problems that don’t go away or get better with treatment
Have sad, anxious, or "empty" feelings
While these symptoms are common, not everyone with depression will have the same ones. How severe they are, how often they happen, and how long they last can vary.


Your symptoms may also happen in patterns. For example, depression may come with a change in seasons (a condition formerly called seasonal affective disorder).

It's not uncommon for people with depression to have physical signs of the condition. They may include joint pain, back pain, digestive problems, sleep trouble, and appetite changes. You might have slowed speech and movements, too. The reason is that brain chemicals linked to depression, specifically serotonin and norepinephrine, play a role in both mood and pain.</p>
</div>
    </div>
    </div>
  );
};

export default topbar;