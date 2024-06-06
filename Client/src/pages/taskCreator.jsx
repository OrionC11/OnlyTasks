import TaskForm from "../components/taskForm";
import Header from "../components/Header";
import React from "react";

const TaskCreator = () => {
  return (
    <div className="container">
      <Header />
      <TaskForm />
    </div>
  );
};

export default TaskCreator;
