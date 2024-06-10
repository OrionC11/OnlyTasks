import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_EMPLOYEETASKS } from "../../utils/queries";
import Auth from "../../utils/auth";
import TaskCard from "../taskCard";

const TaskList = () => {
  const profile = Auth.getProfile();
  console.log("profile:", profile);
  console.log("profile ID:", profile.authenticatedPerson._id);
  const { loading, data } = useQuery(QUERY_EMPLOYEETASKS, {
    variables: {
      employee: profile.authenticatedPerson._id,
    },
  });

  const notCompleteArray =
    data?.employeeTasks.filter((task) => task.isComplete === false) || [];
  return (
    <div>
      <h1 style={{ color: "#00b2f1", marginLeft: "35px" }}>
        {profile.authenticatedPerson.username}'s Tasks:
      </h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {notCompleteArray.map((task) => (
            // <li key={task._id}>{task.description}</li>
            <TaskCard
              key={task._id}
              taskID={task._id}
              taskTitle={task.title}
              taskDesc={task.description}
              taskDL={task.deadline}
              taskPri={task.priority}
              taskComp={task.isComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
