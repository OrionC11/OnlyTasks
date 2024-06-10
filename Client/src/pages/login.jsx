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
    <div>
    <main>
      <Box
        component="form"
        width={450}
        sx={{
          "& .MuiTextField-root": { m: 3 },
        }}
        multiline
        display="flex"
        flexDirection="column"
        backgroundColor="#ededed"
        borderRadius={5}
        maxRows={3}
        noValidate
        autoComplete="off"
        style={{ marginLeft: "35px" }}
        onSubmit={handleFormSubmit}
      >
        <h2
          style={{
            color: "black",
            marginBottom: "5px",
            padding: "0px",
            textAlign: "center",
          }}
        >
          Login
        </h2>
        <div>
          <TextField
            id="outlined-multiline-required"
            label="Email"
            multiline
            maxRows={3}
            name="email"
            style={{ width: "350px", marginLeft: "50px", marginBottom: "10px" }}
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
            style={{
              width: "350px",
              marginLeft: "50px",
              marginBottom: "15px",
              marginTop: "10px",
            }}
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              width: "150px",
              marginLeft: "150px",
              marginTop: "15px",
              marginBottom: "25px",
            }}
          >
            Login
          </Button>
        </div>
      </Box>
    </main>
    </div>
  );
};

export default Login;
