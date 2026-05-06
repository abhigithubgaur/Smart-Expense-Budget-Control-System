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

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", user);
      alert("Registered Successfully!");
      navigate("/");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ marginTop: 3 }}
            type="submit"
          >
            Register
          </Button>

          <Button
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={() => navigate("/")}
          >
            Back to Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;