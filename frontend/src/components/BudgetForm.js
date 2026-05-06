import React from "react";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";

function BudgetForm({ budgetInput, setBudgetInput, updateBudget }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Set Monthly Budget
        </Typography>

        <TextField
          fullWidth
          type="number"
          label="Enter Amount"
          value={budgetInput}
          onChange={(e) => setBudgetInput(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Button fullWidth variant="contained" onClick={updateBudget}>
          Update Budget
        </Button>
      </CardContent>
    </Card>
  );
}

export default BudgetForm;