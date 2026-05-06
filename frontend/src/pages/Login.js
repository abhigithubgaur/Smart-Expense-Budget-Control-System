import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box
} from "@mui/material";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", credentials);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Expense Tracker Login
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ marginTop: 3 }}
            type="submit"
          >
            Login
          </Button>

          <Button
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={() => navigate("/register")}
          >
            Create Account
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;