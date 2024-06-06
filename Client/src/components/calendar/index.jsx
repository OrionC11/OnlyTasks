import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarPage = () => {
  const calendarRef = useRef(null);
  let calendar;

  useEffect(() => {
    const calendarEl = calendarRef.current;

    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      eventClick: handleEventClick,
      select: handleDateSelect
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  const handleEventClick = (info) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      info.event.remove();
    }
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a title for your event:');
    const time = prompt('Please enter the time for your event (HH:MM):'); // Prompt for time
    if (title && time) {
      const startTime = selectInfo.startStr.split('T')[0] + 'T' + time + ':00'; // Combine date and time
      const endTime = selectInfo.endStr.split('T')[0] + 'T' + time + ':00'; // Combine date and time
      calendar.addEvent({
        title,
        start: startTime,
        end: endTime,
        allDay: false // Set to false to indicate a timed event
      });
    }
    calendar.unselect();
  };

  return <div ref={calendarRef}></div>;
};

export default CalendarPage;