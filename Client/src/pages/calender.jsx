import FullCalendar from "../components/calendar";
import Header from "../components/Header";
import React from "react";

const Calendar = () => {
  return (
    <div
      className="calendar"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        margin: "0px",
        width: "100vw",
      }}
    >
      <FullCalendar />
    </div>
  );
};

export default Calendar;
