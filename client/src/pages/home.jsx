import React from "react";
import TaskList from "../components/taskList";
import '../app.css';

const Home = () => {
  return (
    <main className="container">
      <TaskList />
    </main>
  );
};

export default Home;
