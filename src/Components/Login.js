import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#ff0000', '#00ff00', '#0000ff']; // Add your desired colors here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change the interval time as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

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
      <ToastContainer />
      <form onSubmit={handleSubmit} className="login-form" style={formStyles}>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
