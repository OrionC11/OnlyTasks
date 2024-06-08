import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import { useMutation } from "@apollo/client";
import { ADD_EMPLOYEE } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [addEmployee, { error, data }] = useMutation(ADD_EMPLOYEE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addEmployee({
        variables: { ...formState },
      });

      Auth.login(data.addEmployee.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            multiline
            maxRows={4}
            noValidate
            maxWidth="1000"
            display="flex"
            flexDirection="column"
            alignItems="center"
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <div>
              <TextField
                id="outlined-multiline-required"
                label="Username"
                name="username"
                multiline
                value={formState.username}
                onChange={handleChange}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-required"
                label="First Name"
                multiline
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-required"
                label="Last Name"
                multiline
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
            <div></div>
            <div>
              <TextField
                id="outlined-multiline-required"
                label="Email"
                multiline
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </Box>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </main>
  );
};

export default Signup;
