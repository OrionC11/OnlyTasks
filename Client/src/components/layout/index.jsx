import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <main>
      <header>
        <div className="quarter">
          <img src="/src/assets/Only_tasks.png" alt="logo" class="logo"/>
        </div>
        <div className="filler">
        </div>
      </header>
      <div className="layout">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/taskCreator">Task Creator</Link>
            </li>
            <li>
              <Link to="/completed">Completed Tasks</Link>
            </li>
            <li>
              <Link to="/calender">Company Calendar</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
        {children}
        </div>
      </div>
    </main>
  );
}