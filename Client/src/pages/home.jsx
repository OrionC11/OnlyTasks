import Header from "../components/Header";
import React from "react";
import TaskList from "../components/taskList";

const HeaderTest = () => {
  return (
    <div className="container">
      <Header />
      <TaskList />
    </div>
  );
};

export default HeaderTest;
