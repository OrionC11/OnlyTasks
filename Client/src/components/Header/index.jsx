import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="titleSection">
        <h1>OnlyTasks</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/calender">Company Calender</Link>
          </li>
          <li>
            <Link to="/completed">Completed Tasks</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/taskCreator">Task Creator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
