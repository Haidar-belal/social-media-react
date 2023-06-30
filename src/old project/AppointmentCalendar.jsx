import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css';

const AppointmentCalendar = ({ onDateSelect, disabledDates }) => {
  return (
    <div className="calendar">
      <h2>Select a Date:</h2>
      <Calendar
        onChange={onDateSelect}
        tileDisabled={({ date }) => disabledDates.includes(date)}
        className="react-calendar"
      />
    </div>
  );
}

export default AppointmentCalendar;
