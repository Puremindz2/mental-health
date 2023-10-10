import React, { useState } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import './BookAppointment.css'
import appIcon from '../Images/mentalHealthIcon.png'

const AppointmentPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
const [reason, setReason] = useState('');
const [brief, setBrief] = useState('');
/*const [isMenuOpen, setIsMenuOpen] = useState(false);
const history = useHistory();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };*/

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointment = {
      name,
      email,
      date,
      time,
      reason,
      brief
    };

/*function goHome() {
    history.push("/")
  }*/

    const { error } = await supabaseClient.from('appointments').insert([appointment]);

    if (error) {
      console.error(error);
      return;
    }

    alert('Your appointment has been booked successfully!');

    // Clear the form fields
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setReason('');
    setBrief('');
  };

/*const handleMenuClick = (menuItem) => {
    // Handle menu item click (e.g., navigate to different pages)
    switch (menuItem) {
      case 'profile':
        //history.push("/profile");
        break;
      case 'settings':
        // Handle settings click
        //history.push("/settings");
        break;
      case 'appointments':
        // Handle chat click
        //history.push("/appointments");
        break;
      case 'about':
        // Handle about us click
        //history.push("/Aboutus");
      default:
        break;
    }
  };*/

  const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");

  return (
    <div class='bookApp'>

      <h1>Book an Appointment</h1>

      <form onSubmit={handleSubmit} class='bookAppForm'>
        <img style={{height:'150px', width:'150px'}} src={appIcon}/>
        <table>

        <tr>
            <td><label>Name & Surname</label> <br></br>
            <input type="text" placeholder="Name & Surname" value={name} onChange={(event) => setName(event.target.value)}/></td>   
        
            <td><label>Email</label> <br></br>
            <input type="email"placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/></td>
        </tr>

        <tr>
            <td><label>Date</label><br></br>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/></td>

            <td><label>Time</label><br></br>
            <input type="time" value={time} onChange={(event) => setTime(event.target.value)}/></td>
        </tr>

        <tr>
            <td><label>Reason</label><br></br>
            <select name="reason" id="reason" placeholder='Please Select One Option' value={reason} onChange={(event) => setReason(event.target.value)}>
                <option value="empty"></option>
                <option value="Depression">Depression</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Personality Disorder">Personality Disorder</option>
                <option value="Other">Other</option>
            </select></td>

            <td><label>Brief text about condition</label><br></br>
            <textarea type="text" value={brief} onChange={(event) => setBrief(event.target.value)}/></td>
        </tr>
        </table>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
