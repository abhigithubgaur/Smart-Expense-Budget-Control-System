import React from "react";
import { Card, CardContent, Typography, Grid} from "@mui/material";

function Insights({ expenses }) {

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const highest = expenses.reduce((max, e) => 
    e.amount > (max?.amount || 0) ? e : max, null);

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const previousMonthYear =
    currentMonth === 0 ? currentYear - 1 : currentYear;

  // =========================
  // Calculate Totals
  // =========================

  let currentMonthTotal = 0;
  let previousMonthTotal = 0;

  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.date);
    const month = expenseDate.getMonth();
    const year = expenseDate.getFullYear();

    if (month === currentMonth && year === currentYear) {
      currentMonthTotal += Number(expense.amount);
    }

    if (month === previousMonth && year === previousMonthYear) {
      previousMonthTotal += Number(expense.amount);
    }
  });

  // =========================
  // Calculate Difference
  // =========================

  const difference = currentMonthTotal - previousMonthTotal;

  const percentageChange =
    previousMonthTotal === 0
      ? 0
      : ((difference / previousMonthTotal) * 100).toFixed(2);

  const isIncrease = difference > 0;

  return (
    <>
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6">Insights</Typography>
        <Typography>Total Spending: ₹{total}</Typography>
        {highest && (
          <Typography>
            Highest Expense: {highest.title} (₹{highest.amount})
          </Typography>
        )}
      </CardContent>
    </Card>

    <Card sx={{ marginBottom: 3 }}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          Monthly Comparison
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={4}>
            <Typography>
              Current Month: <strong>₹{currentMonthTotal}</strong>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography>
              Previous Month: <strong>₹{previousMonthTotal}</strong>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                color: isIncrease ? "error.main" : "success.main",
                fontWeight: "bold"
              }}
            >
              {isIncrease ? "↑ Increase" : "↓ Decrease"}: ₹{Math.abs(difference)} ({percentageChange}%)
            </Typography>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
    </>
  );
}

export default Insights;