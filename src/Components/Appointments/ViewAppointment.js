import React, { useState, useEffect } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../supabaseClient';
import appIcon from "../Images/mentalHealthIcon.png";
import './ViewAppointment.css'
import backIcon from '../Images/BackIcon.png'

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [app_id, setId] = useState([]);
  const [app_date, setDate] = useState([]);
  const [app_reason, setReason] = useState([]);
  const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");


  function handleClick() {
    window.location.href = '/Appointment';
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
      //.eq('appointment_id', appointmentId);
    

      if (error) {
        throw error;
      }

      // Handle success (e.g., display a success message)
      console.log('Appointment cancelled:', data);
      
      // Reload the appointments after cancellation
      //fetchAppointments();
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
      case 'appointments':
        // Handle chat click
        window.location.href = "/appointments";
        break;
      case 'about':
        // Handle about us click
        window.location.href ="/aboutus";
        break;
      default:
        break;
    }
  };

  const cancelApp = async (event) => {
        event.preventDefault();
    
        const { error } = await supabaseClient.from('appointments').update({appstatus: 'cancelled'}).eq('id',app_id );
        if (error) {
          console.error(error);
          return;
        }
    
        alert('Your appointment has been updated successfully!');
        // Clear the form fields
    window.location.reload();
      };

  useEffect(() => {

    // Fetch the user's appointments from the Supabase database
    const fetchAppointments = async () => {
      const cond = 'appstatus.not.eq.cancelled';
      const { data, error } = await supabaseClient
        .from('appointments')
        .select('*')
        .neq('appstatus', 'cancelled')
        //.neg('appstatus', 'cancelled')
        //.eq('user_id', 'e078a3e2-9d3a-4cd0-9d8e-4103ffe57ae8');

      if (error) {
        console.error(error);
        return;
      }

      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  const filterByDate = async (event) => {
        event.preventDefault();
    
        const { data, error } = await supabaseClient
    .from('appointments')
        .select('*')
        .eq('date', app_date)
        if (error) {
          console.error(error);
          return;
        }
    
        setAppointments(data)
        // Clear the form fields
    //window.location.reload();
      };

    const filterByReason = async (event) => {
          event.preventDefault();
      
          const { data, error } = await supabaseClient
      .from('appointments')
        .select('*')
        .eq('reason', app_reason)
          if (error) {
            console.error(error);
            return;
          }
      
          setAppointments(data)
          // Clear the form fields
      //window.location.reload();
        };

  return (
    <div class='vAppContent'>
      <div class="topbar-container-home">
      <div class="topbar-left-home">
      <img src={backIcon} onClick={handleClick}  style={{cursor:'pointer'}}/>
        <span class="app-name" onClick={handleClick}>Back</span>

      </div>

      <div style={{position:'absolute', marginLeft:'45%', overflow: 'hidden'}}>
        <h1 class='mHead'> <span> My Appointments</span></h1>
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
              <li onClick={() => handleMenuClick('about')}>About Us</li>
            </ul>
          </div>
        )}
    </div>
    <div class='VA-layout'>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <form className='viewAppointmentForm'>

      <h3>Filters</h3>
      <label>Date</label> <input type='date' value={app_date} onChange={(e) => setDate(e.target.value)}></input> <button  onClick={filterByDate}>Search</button><br></br>
      <label>Reason</label> <input type='text' value={app_reason} onChange={(e) => setReason(e.target.value)}></input> <button  onClick={filterByReason}>Search</button><br></br>
      <table className='viewAppointmentTable' style={{width:'100%'}}>
        <thead>
          <tr>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Name</th>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Email</th>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Date</th>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Time</th>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Reason</th>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Brief</th>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Status</th>
            <th style={{border: '1px solid black', backgroundColor: '#bd396c'}}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} onMouseOver={(e) => setId(appointment.id)}>
              <td style={{width:'15%', border: '1px solid black'}}>{appointment.name}</td>
              <td style={{width:'15%', border: '1px solid black'}}>{appointment.email}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.date}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.time}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.reason}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.brief}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.appstatus}</td>
              <td style={{width:'30%', border: '1px solid black'}}>{appointment.comment}</td>
              <td style={{width:'30%', border: '1px solid black'}}><button onClick={cancelApp}>Cancel</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </form>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
};

export default AppointmentsPage;
