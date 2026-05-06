

import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  MenuItem
} from "@mui/material";

function ExpenseForm({ expense, setExpense, handleSubmit, loading }) {

  const categories = [
    "FOOD",
    "TRAVEL",
    "SHOPPING",
    "SAVINGS/INVESTMENT",
    "BILLS/UTILITIES",
    "ENTERTAINMENT",
    "HEALTH/BEAUTY",
    "OTHERS"
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 3
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add New Expense
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>

        {/* Title */}
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          required
          value={expense.title}
          onChange={(e) =>
            setExpense({ ...expense, title: e.target.value })
          }
        />

        {/* Amount */}
        <TextField
          fullWidth
          type="number"
          label="Amount"
          margin="normal"
          required
          value={expense.amount}
          onChange={(e) =>
            setExpense({ ...expense, amount: e.target.value })
          }
        />

        {/* Category Dropdown */}
        <TextField
          select
          fullWidth
          label="Category"
          margin="normal"
          required
          value={expense.category}
          onChange={(e) =>
            setExpense({ ...expense, category: e.target.value })
          }
        >
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Date */}
        <TextField
          fullWidth
          type="date"
          margin="normal"
          required
          value={expense.date}
          onChange={(e) =>
            setExpense({ ...expense, date: e.target.value })
          }
          InputLabelProps={{ shrink: true }}
        />

        {/* Submit Button */}
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Add Expense"}
        </Button>

      </Box>
    </Paper>
  );
}

export default ExpenseForm;