import React from 'react';
import './doctor.css'

const DoctorSelection = ({ doctors, onDoctorSelect }) => {
  return (
    <div className="doctor-selection">
      <h2>Select a Doctor</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id} onClick={() => onDoctorSelect(doctor.id)}>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
            <div className="doctor-rating">
              <p>Rating:</p>
              <p className="rating-number">{doctor.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorSelection;
