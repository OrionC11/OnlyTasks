import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarPage = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      // Add any additional configuration options here
    });

    calendar.render();

    return () => {
      calendar.destroy(); // Cleanup when component unmounts
    };
  }, []); // Empty dependency array to ensure this only runs once

  return <div ref={calendarRef}></div>;
};

export default CalendarPage;