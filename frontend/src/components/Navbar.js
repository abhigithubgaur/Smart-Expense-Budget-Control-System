import React from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  Box
} from "@mui/material";

function Navbar({ darkMode, setDarkMode, setActiveTab }) {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 2 }}>
          Smart Expense Tracker
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={() => setActiveTab("expenses")}>
            Expenses
          </Button>

          <Button color="inherit" onClick={() => setActiveTab("budget")}>
            Budget
          </Button>

          <Button color="inherit" onClick={() => setActiveTab("insights")}>
            Insights
          </Button>

          <Button color="inherit" onClick={() => setActiveTab("charts")}>
            Charts
          </Button>
        </Box>

        <Button color="inherit" onClick={() => setActiveTab("ai")}>
          AI Assistant
        </Button>

        <Switch
          icon={<Brightness4Icon />}
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />


        <Button color="inherit" onClick={logout}>
          <LogoutIcon />
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;