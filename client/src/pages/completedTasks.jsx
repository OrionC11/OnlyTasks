import React, { useState } from "react";
import Header from "../components/Header";
import { useQuery } from "@apollo/client";
import { QUERY_TASKS } from "../utils/queries";
import TaskCard from "../components/taskCard";

const CompletedTasks = () => {
  const { loading, data } = useQuery(QUERY_TASKS);
  const completedArray = data?.tasks.filter((i) => i.isComplete === true) || [];
  // console.log(completedArray);
  // console.log(data);

  return (
    <div>
      <h2 style={{ color: "cyan", marginLeft: "35px" }}>Completed Tasks</h2>
      {completedArray.map((task) => (
        <TaskCard
          key={task._id}
          taskTitle={task.title}
          taskDesc={task.description}
          taskDL={task.deadline}
          taskPri={task.priority}
          taskComp={task.isComplete}
        />
      ))}
    </div>
  );
};

export default CompletedTasks;
