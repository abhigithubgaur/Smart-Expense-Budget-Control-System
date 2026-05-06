import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ExpenseChart({ expenses }) {

  // ==============================
  // 🔹 Group Expenses by Category
  // ==============================

  const categoryTotals = expenses.reduce((acc, expense) => {
    const category = expense.category;
    const amount = Number(expense.amount);

    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }

    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Amount Spent",
        data: Object.values(categoryTotals),
        backgroundColor: "rgba(25, 118, 210, 0.6)"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Expenses by Category"
      }
    }
  };

  // ==============================
  // 🔹 Empty State
  // ==============================

  if (expenses.length === 0) {
    return (
      <Card sx={{ marginTop: 3 }}>
        <CardContent>
          <Typography variant="h6">
            No data available for chart
          </Typography>
        </CardContent>
      </Card>
    );
  }

  // ==============================
  // 🔹 Render Chart
  // ==============================

  return (
    <Card sx={{ marginTop: 3 }} >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Expense Analytics
        </Typography>

        <Bar data={chartData} options={options} />
      </CardContent>
    </Card>
  );
}

export default ExpenseChart;