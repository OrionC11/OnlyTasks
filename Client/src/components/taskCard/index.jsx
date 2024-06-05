import React from "react";
import {useState} from "react"
import {useMutation} from "@apollo/client"

const TaskCard = () => {
    return (
        <div className= "taskCard">
            <a className ="username" href="#"></a>
            <div className="descSec">
                <p className="desc"></p>
            </div>
            <div className="dateSec">
                <p className="date"></p>
            </div>
            <div classname= "statusSec">
                <input type="radio" name="statusGroup">Completed</input>
                <input type="radio" name="statusGroup">In Progress</input>
                <input type="radio" name="statusGroup">Not Complete</input>
            </div>
            <div className="prioritySec">
                <input type="radio" name="priorityGroup">Low</input>
                <input type="radio" name="priorityGroup">Medium</input>
                <input type="radio" name="priorityGroup">High</input>
            </div>
            <button type="Submit">Submit</button>
        </div>
    )
}
export default TaskCard