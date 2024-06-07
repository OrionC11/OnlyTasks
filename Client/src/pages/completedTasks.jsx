import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import {QUERY_TASKS} from "../utils/queries";

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
  
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const tasksResponse = await QUERY_TASKS();
          const allTasks = tasksResponse.data.tasks;
          const completedTasks = allTasks.filter(task => task.isComplete === true);
          setCompletedTasks(completedTasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
  
      fetchTasks();
    }, []);
  
    return (
      <div>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map(task => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CompletedTasks;