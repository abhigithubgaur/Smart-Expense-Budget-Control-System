import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button
} from "@mui/material";

function ExpenseTable({ expenses, deleteExpense }) {

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ borderRadius: 3, marginTop: 3 }}
    >
      <Typography
        variant="h6"
        sx={{ padding: 2 }}
      >
        Expense List
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Title</strong></TableCell>
            <TableCell><strong>Amount</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell align="center"><strong>Action</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {expenses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No expenses found
              </TableCell>
            </TableRow>
          ) : (
            expenses.map((exp) => (
              <TableRow key={exp.id}>
                <TableCell>{exp.title}</TableCell>
                <TableCell>₹{exp.amount}</TableCell>
                <TableCell>{exp.category}</TableCell>
                <TableCell>{exp.date}</TableCell>
                <TableCell align="center">
                  <Button
                    color="error"
                    variant="outlined"
                    size="small"
                    onClick={() => deleteExpense(exp.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default ExpenseTable;