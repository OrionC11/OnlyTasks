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
      height={575}
      width={350}
      sx={{
        "& .MuiTextField-root": { m: 5 },
      }}
      style={{ marginLeft: "35px"}}
      borderRadius={5}
      backgroundColor="#ededed"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2
        style={{
          color: "black",
          marginBottom: "5px",
          padding: "0px",
          marginLeft: "95px",
        }}
      >
        Create Task
      </h2>
      <div>
        <TextField
          id="outlined-multiline-required"
          label="Task Name"
          multiline
          style={{ width: "250px", marginBottom: "5px", marginTop: "10px" }}
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
          style={{
            width: "250px",
            height: "100px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
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
          value={deadline}
          style={{ width: "250px", marginTop: "30px", marginBottom: "10px" }}
          onChange={(e) => setDeadline(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue="low"
          name="row-radio-buttons-group"
          value={taskPriority}
          style={{
            marginLeft: "35px",
            marginTop: "5px",
            marginBottom: "10px",
          }}
          onChange={(e) => setPriority(e.target.value)}
        >
          <FormControlLabel value="High" control={<Radio />} label="High" />
          <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
        </RadioGroup>
      </div>
      <div>
        <TextField
          id="outlined-select"
          select
          label="Select"
          value={employeeID}
          style={{ width: "250px", marginTop: "10px" }}
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
      <div>
        <Button
          variant="contained"
          type="submit"
          style={{ marginLeft: "125px" }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default TaskForm;
