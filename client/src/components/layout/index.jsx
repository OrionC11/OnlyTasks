import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Auth from "../../utils/auth.js";
import Logo from "../../assets/Only_tasks.png";

export default function Layout({ children }) {
  const logout = () => {
    Auth.logout();
    window.location.replace("/login");
  };
  const checkUser = Auth.getToken();
  return (
    <main>
      <header>
        <div className="quarter">
          <img src={Logo} alt="logo" class="logo" />
        </div>
        <div className="filler"></div>
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
            {checkUser && (
              <li>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={logout}
                  style={{ width: "3vw", color: "red" }}
                >
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </nav>
        <div className="container">{children}</div>
      </div>
    </main>
  );
}
