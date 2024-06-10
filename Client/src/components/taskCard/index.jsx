import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_TASK } from "../../utils/mutations";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function TaskCard({
  taskID,
  taskTitle,
  taskDesc,
  taskDL,
  taskPri,
  taskComp,
}) {
  const [prio, setPriority] = useState("");
  const [updateTask, { error }] = useMutation(UPDATE_TASK);
  const handleUpdateTask = () => {
    updateTask({
      variables: {
        _id: taskID,
        isComplete: true,
      },
    });
  };

  return (
    <Box sx={{ maxWidth: 1000 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Deadline: {taskDL}
          </Typography>
          <Typography variant="h5" component="div">
            Task: <b>{taskTitle}</b>
          </Typography>
          <Typography variant="body2">
            Description of task:
            <br />
            {taskDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue="low"
            name="row-radio-buttons-group"
            value={taskPri}
            onChange={(e) => setPriority(e.target.value)}
          >
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
          </RadioGroup>
          <Button variant="contained" onClick={handleUpdateTask}>
            Complete
          </Button>
        </CardActions>
      </Card>
      <br />
    </Box>
  );
}
