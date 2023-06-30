import React, { useState } from 'react';
import DoctorSelection from './DoctorSelection';
import AppointmentCalendar from './AppointmentCalendar';
import AppointmentForm from './AppointmentForm';
import './app.css';

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [submittedForm, setSubmittedForm] = useState(null);

  const doctors = [
    { id: 1, name: 'Dr. John Smith', specialty: 'Cardiologist', rating: 4.5 },
    { id: 2, name: 'Dr. Sarah Lee', specialty: 'Pediatrician', rating: 4.2 },
    { id: 3, name: 'Dr. Michael Chen', specialty: 'Dermatologist', rating: 4.7 },
    { id: 4, name: 'Dr. Jane Doe', specialty: 'Oncologist', rating: 4.8 },
    { id: 5, name: 'Dr. James Lee', specialty: 'Neurologist', rating: 4.0 }
  ];
  
  doctors.sort((a, b) => b.rating - a.rating);

  const disabledDates = [new Date(2023, 3, 2), new Date(2023, 3, 3), new Date(2023, 3, 10)];

  const handleDoctorSelect = id => {
    setSelectedDoctor(doctors.find(doctor => doctor.id === id));
    setSelectedDate(null);
    setSubmittedForm(null);
  };

  const handleDateSelect = date => {
    setSelectedDate(date);
    setSubmittedForm(null);
  };

  const handleFormSubmit = data => {
    setSubmittedForm(data);
  };

  return (
    <div className="app">
      {selectedDoctor && selectedDate && !submittedForm &&
        <AppointmentForm
          selectedDoctor={selectedDoctor}
          selectedDate={selectedDate}
          onFormSubmit={handleFormSubmit}
        />
      }
      {selectedDoctor && !selectedDate && !submittedForm &&
        <AppointmentCalendar
          onDateSelect={handleDateSelect}
          disabledDates={disabledDates}
        />
      }
      {!selectedDoctor && !selectedDate && !submittedForm &&
        <DoctorSelection
          doctors={doctors}
          onDoctorSelect={handleDoctorSelect}
        />
      }
      {submittedForm &&
        <div className="success-message">
          <h2>Thank you for submitting your appointment request!</h2>
          <p>We will contact you within 24 hours to confirm your appointment with {selectedDoctor.name} on {selectedDate.toLocaleDateString()}.</p>
        </div>
      }
    </div>
  );
}

export default App;
