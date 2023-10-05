import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AboutUs.css';
import uIcon from "./Images/uIcon.png";
import appIcon from "./Images/mentalHealthIcon.png";
import milcah from "./Images/Milcah.jpg"
import moshe from "./Images/Moshe.jpg"
import tshepo from "./Images/Tshepo.jpg"

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#ffccd5', '#ccccff', '#ff6666']; // Add your desired colors here
  const [loginAttempts, setLoginAttempts] = useState(0);

  const maxLoginAttempts = 3;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change the interval time as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleClick1() {
    window.location.href = '/';
  }

  function handleClick2() {
    window.location.href = '/signup';
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);
        toast.error('Invalid email or password. Please try again.');
      } else {
        console.log('Logged in user:', user);
        toast.success('Login successful!');
        // Redirect to the home page after successful login
        history.push('/home');
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error);
      toast.error('Oops! Something went wrong. Please try again.');
    }
  };

  const formStyles = {
    background: `linear-gradient(to bottom, ${colors[currentColorIndex]} 0%, ${
      colors[(currentColorIndex + 1) % colors.length]
    } 100%)`,
  };

  return (
    <div className="AboutUs">
      <div class="welcome-topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick1}>Pure Minds</span>

      </div>

      <div>
        <h1>Mental Health</h1>
      </div>

      <div class="topbar-right">
        <button class="topbar-btns">About Us</button>
        <button class="topbar-btns">Login</button>
        <button class="topbar-btns" onClick={handleClick2}>Sign Up</button>
    </div>
    </div>
      <ToastContainer />
      <div class="AboutUsBody" style={{alignContent:'center'}}>
        <br></br><br></br><br></br>
      <div class="row">
  <div class="column">
    <div class="card">
    <img src={milcah} style={{width:'100%', height:'600px'}}/>
      <div class="container">
        <h2>KM Mbuyi</h2>
        <p class="title">Business Analyst and Front End Dev</p>
        <p>Turning challenges into success with every click and design</p>
        <p>kazadimbuyi09@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={moshe} style={{width:'100%', height:'600px'}}/>
      <div class="container">
        <h2>Moshe M Mahlaela</h2>
        <p class="title">Full Stack Developer</p>
        <p>The hardest choices require the strongest wills</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={tshepo} style={{width:'100%', height:'600px'}}/>
      <div class="container">
        <h2>Tshepo Molapisi</h2>
        <p class="title">Full Stack Developer</p>
        <p>It is not happy people who are greatful but greatful people who are happy</p>
        <p>molapisi91@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={milcah} style={{width:'100%', height:'600px'}}/>
      <div class="container">
        <h2>Vanessa</h2>
        <p class="title">Project Manager</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
      </div>
     </div>
  );

  
};

export default Login;
