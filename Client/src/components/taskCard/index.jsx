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
import FormLabel from "@mui/material/FormLabel";

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
    <Box sx={{ maxWidth: 1000, marginTop: 5 }}>
      <Card
        variant="outlined"
        backgroundColor="#ededed"
        style={{
          width: "600px",
          marginLeft: "35px",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Deadline: {taskDL}
          </Typography>
          <Typography
            variant="h5"
            component="li"
            style={{
              textAlign: "center",
              marginBottom: "5px",
              padding: "40px",
              paddingBottom: "20px",
            }}
          >
            Task: <b>{taskTitle}</b>
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            Task Outline:
            <br />
            {taskDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            defaultValue="low"
            name="row-radio-buttons-group"
            value={taskPri}
            style={{
              textAlign: "center",
              marginLeft: "15px",
              padding: "3px",
              marginBottom: "25px",
            }}
            onChange={(e) => setPriority(e.target.value)}
          >
            <FormLabel
              id="radio-buttons-group-label"
              style={{
                marginLeft: "10px",
                marginRight: "18px",
                marginTop: "8px",
              }}
            >
              Priority:
            </FormLabel>
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
          </RadioGroup>
          {!taskComp && (
            <Button
              variant="contained"
              onClick={handleUpdateTask}
              style={{
                width: "125px",
                marginLeft: "45px",
                marginBottom: "15px",
              }}
            >
              Complete
            </Button>
          )}
        </CardActions>
      </Card>
      <br />
    </Box>
  );
}
