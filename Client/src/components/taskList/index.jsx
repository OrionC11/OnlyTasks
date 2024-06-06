import React from "react";
import {useState} from "react"
import {useMutation, useQuery} from "@apollo/client"
import { QUERY_EMPLOYEETASKS } from "../../utils/queries";
import Auth from "../../utils/auth";

const TaskList = () => {
    const profile = Auth.getProfile()
    console.log(profile)
    const {loading, data} = useQuery(QUERY_EMPLOYEETASKS, {})
    console.log(data)
    return (
      
    )

}

export default TaskList