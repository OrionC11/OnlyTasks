import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_EMPLOYEETASKS } from "../../utils/queries";
import Auth from "../../utils/auth";

const TaskList = () => {
  const profile = Auth.getProfile();
  console.log("profile:", profile);
  const { loading, data } = useQuery(QUERY_EMPLOYEETASKS, {
    variables: { employee: profile.data._id },
  });
  return (
    console.log(data),
    (
      <div>
        <h1>{profile.data.username}'s Tasks</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.employeeTasks.map((task) => (
              <li key={task._id}>{task.description}</li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default TaskList;
