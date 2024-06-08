import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Header from "../components/Header";

import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);
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
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        multiline
        maxRows={3}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <div>
          <TextField
            id="outlined-multiline-required"
            label="Email"
            multiline
            maxRows={3}
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-required"
            label="Password"
            multiline
            maxRows={3}
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </Box>
    </main>
  );
};

export default Login;
