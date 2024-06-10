import { Link } from "react-router-dom";
import React from "react";
import '../../app.css';

const Header = () => {
  return (
    <main>
      <header>
        <div className="titleSection">
          <img src="../src/assets/Only_tasks.pn" alt ="Logo" class="logo"></img>
        </div>
      </header>

      <nav class="navBar">
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
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/taskCreator">Task Creator</Link>
          </li>
        </ul>
      </nav>
      </main>
  );
};

export default Header;
