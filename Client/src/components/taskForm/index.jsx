import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ADD_TASK } from "../../utils/mutations";
import { QUERY_EMPLOYEES } from "../../utils/queries";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const { loading, data } = useQuery(QUERY_EMPLOYEES);
  const [employeeID, setEmployeeID] = useState("");
  const [taskPriority, setPriority] = useState("");

  const [createTask, { error }] = useMutation(ADD_TASK);
  const employeeArray = data?.employees || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("running create task");
    const vars = {
      title: taskName,
      description: taskDescription,
      deadline: deadline,
      priority: taskPriority,
      employee: employeeID,
    };
    console.log(vars);
    createTask({
      //changed
      variables: vars,
    });
    console.log("success");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="outlined-multiline-required"
          label="Task Name"
          multiline
          maxRows={4}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Task Description"
          multiline
          rows={4}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="date"
          label="Deadline"
          type="date"
          defaultValue="2021-09-01"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <RadioGroup
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue="low"
          name="row-radio-buttons-group"
          value={taskPriority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <FormControlLabel value="High" control={<Radio />} label="High" />
          <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
        </RadioGroup>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          value={employeeID}
          onChange={(e) => setEmployeeID(e.target.value)}
          helperText="Please Select Employee Assigned"
        >
          {employeeArray.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.firstName}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default TaskForm;
