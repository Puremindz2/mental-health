import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import uIcon from "./Images/uIcon.png";
import appIcon from "./Images/mentalHealthIcon.png";

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
    window.location.href = '/AboutUs';
  }

  function handleClick2() {
    window.location.href = '/signup';
  }
  function goToWelcome() {
    window.location.href = '/';
  }

  function fogotPassward() {
    window.location.href = '/forgotpassword';
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
    <div className="login">
      <div class="welcome-topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={goToWelcome}>Pure Minds</span>

      </div>

      <div>
        <h1>Mental Health</h1>
      </div>

      <div class="topbar-right">
        <button class="topbar-btns">About</button>
        <button class="topbar-btns">Login</button>
        <button class="topbar-btns" onClick={handleClick2}>Sign Up</button>
    </div>
    </div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="login-form">
      <img class="userIcon" src={uIcon}/>
        <h2>Login</h2>
        
        <label>Email:</label>
        <input type="email"
         value={email} 
         onChange={(e) => setEmail(e.target.value)}
         required
         />
        <label>Password:</label>
        <input type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
        />
        
        <button style={{marginLeft:'-80px'}}type="submit">Log in</button>
        <br></br>
        <p onClick={fogotPassward} style={{textDecoration:'underline'}}>Forgot Password?</p>
      </form>
     </div>
  );

  
};

export default Login;
