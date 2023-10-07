import React, { useState } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';

const AppointmentPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointment = {
      name,
      email,
      date,
      time
    };

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
  };

  const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");

  return (
    <div>
      <h1>Book an Appointment</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
