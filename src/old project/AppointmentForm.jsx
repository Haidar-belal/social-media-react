import React, { useState } from 'react';
import './form.css';

const AppointmentForm = ({ selectedDoctor, selectedDate, onFormSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit({
      name,
      email,
      phone,
      reason,
      doctor: selectedDoctor,
      date: selectedDate
    });
  }

  return (
    <div className="appointment-form">
      <h2>Appointment Form:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="reason">Reason for visit:</label>
          <textarea id="reason" value={reason} onChange={e => setReason(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
