import React, { useState, useEffect } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");

    // Fetch the user's appointments from the Supabase database
    const fetchAppointments = async () => {
      const { data, error } = await supabaseClient
        .from('appointments')
        .select('*')
        .eq('user_id', 'e078a3e2-9d3a-4cd0-9d8e-4103ffe57ae8');

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
      <h1>My Appointments</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsPage;
