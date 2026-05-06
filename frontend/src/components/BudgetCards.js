import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function BudgetCards({ budgetStatus }) {
  if (!budgetStatus) return null;

  return (
    <Grid container spacing={3} mb={4}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Monthly Budget</Typography>
            <Typography variant="h5">
              ₹{budgetStatus.monthlyBudget}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Current Spending</Typography>
            <Typography variant="h5">
              ₹{budgetStatus.currentSpending}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ backgroundColor: budgetStatus.exceeded ? "#df5f72" : "#4bb955" }}>
          <CardContent>
            <Typography variant="h6">Status</Typography>
            <Typography variant="h5">
              {budgetStatus.exceeded ? "Exceeded ⚠" : "Within Budget ✅"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default BudgetCards;