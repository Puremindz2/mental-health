import React, { useState, useEffect } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../supabaseClient';
import appIcon from "../Images/mentalHealthIcon.png";
import './ViewAppointment.css'

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  function handleClick() {
    window.location.href = '/home';
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  async function cancelAppointment(appointmentId) {
    try {
      const { data, error } = await supabase
      .from('appointments')
      .update({ appstatus: 'cancelled' })
      .eq('appointment_id', appointmentId);
    

      if (error) {
        throw error;
      }

      // Handle success (e.g., display a success message)
      console.log('Appointment cancelled:', data);
      
      // Reload the appointments after cancellation
      fetchAppointments();
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error cancelling appointment:', error.message);
    }
  }

  const handleMenuClick = (menuItem) => {
    // Handle menu item click (e.g., navigate to different pages)
    switch (menuItem) {
      case 'profile':
        window.location.href ="/profile";
        break;
      case 'settings':
        // Handle settings click
        window.location.href = "/settings";
        break;
      case 'appointments':
        // Handle chat click
        window.location.href = "/appointments";
        break;
      case 'about':
        // Handle about us click
        window.location.href ="/about";
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");

    // Fetch the user's appointments from the Supabase database
    const fetchAppointments = async () => {
      const { data, error } = await supabaseClient
        .from('appointments')
        .select('*')
        .eq('appstatus', 'booked')
        //.eq('user_id', 'e078a3e2-9d3a-4cd0-9d8e-4103ffe57ae8');

      if (error) {
        console.error(error);
        return;
      }

      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <div class="topbar-container-home">
      <div class="topbar-left-home">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div style={{position:'absolute', marginLeft:'45%', overflow: 'hidden'}}>
        <h1> <span> My Appointments</span></h1>
      </div>

      <div class="topbar-right-home">
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

    {isMenuOpen && (
          <div className="menu-dropdown" style={{overflow: 'hidden'}}>
            <ul>
              <li onClick={() => handleMenuClick('profile')}>Profile</li>
              <li onClick={() => handleMenuClick('settings')}>Settings</li>
              <li onClick={() => handleMenuClick('about')}>About Us</li>
            </ul>
          </div>
        )}
    </div>
    <div class='VA-layout'>
      <form className='viewAppointmentForm'>
      <table className='viewAppointmentTable' style={{width:'100%'}}>
        <thead>
          <tr>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Name</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Email</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Date</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Time</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Reason</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Brief</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Status</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td style={{width:'15%', border: '1px solid black'}}>{appointment.name}</td>
              <td style={{width:'15%', border: '1px solid black'}}>{appointment.email}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.date}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.time}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.reason}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.brief}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.appstatus}</td>
              <td style={{width:'30%', border: '1px solid black'}}>{appointment.comment}</td>
              <td><button onClick={() => cancelAppointment(appointment.id)}>Cancel Appointment</button></td>
         
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      </form>
      </div>
    </div>
  );
};

export default AppointmentsPage;
