import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import API from "../services/api";

import Navbar from "../components/Navbar";
import BudgetCards from "../components/BudgetCards";
import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseChart from "../components/ExpenseChart";
import ExpenseTable from "../components/ExpenseTable";
import Insights from "../components/Insights";
import AIAssistant from "../components/AIAssistant";

function Dashboard({ darkMode, setDarkMode }) {

  // ==============================
  // 🔹 STATES
  // ==============================

  const [expenses, setExpenses] = useState([]);
  const [budgetStatus, setBudgetStatus] = useState(null);
  const [budgetInput, setBudgetInput] = useState("");

  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const [, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("expenses");


  // ==============================
  // 🔹 FETCH FUNCTIONS
  // ==============================

  const fetchExpenses = async () => {
    try {
      const response = await API.get("/expenses");
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses", error);
    }
  };

  const fetchBudgetStatus = async () => {
    try {
      const response = await API.get("/expenses/budget-status");
      setBudgetStatus(response.data);
    } catch (error) {
      console.error("Error fetching budget status", error);
    }
  };


  // ==============================
  // 🔹 ADD EXPENSE
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/expenses", {
        ...expense,
        amount: Number(expense.amount)
      });

      setExpense({
        title: "",
        amount: "",
        category: "",
        date: ""
      });

      fetchExpenses();
      fetchBudgetStatus();

    } catch (error) {
      console.error("Error adding expense", error);
    } finally {
      setLoading(false);
    }
  };


  // ==============================
  // 🔹 DELETE EXPENSE
  // ==============================

  const deleteExpense = async (id) => {
    try {
      await API.delete(`/expenses/${id}`);
      fetchExpenses();
      fetchBudgetStatus();
    } catch (error) {
      console.error("Error deleting expense", error);
    }
  };


  // ==============================
  // 🔹 UPDATE BUDGET
  // ==============================

  const updateBudget = async () => {
    if (!budgetInput) return;

    try {
      await API.put(`/auth/budget?amount=${budgetInput}`);
      setBudgetInput("");
      fetchBudgetStatus();
    } catch (error) {
      console.error("Error updating budget", error);
    }
  };


  // ==============================
  // 🔹 LOAD DATA ON PAGE LOAD
  // ==============================

  useEffect(() => {
    fetchExpenses();
    fetchBudgetStatus();
  }, []);


  // ==============================
  // 🔹 RENDER
  // ==============================

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setActiveTab={setActiveTab}
      />

      <Container sx={{ marginTop: 4 }}>

        {activeTab === "budget" && (
          <>
            <BudgetCards budgetStatus={budgetStatus} />
              <BudgetForm
                budgetInput={budgetInput}
                setBudgetInput={setBudgetInput}
                updateBudget={updateBudget}
              />
          </>
        )}

  {activeTab === "expenses" && (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <ExpenseForm
          expense={expense}
          setExpense={setExpense}
          handleSubmit={handleSubmit}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <ExpenseTable
          expenses={expenses}
          deleteExpense={deleteExpense}
        />
      </Grid>
    </Grid>
  )}

  {activeTab === "charts" && (
    <ExpenseChart expenses={expenses} />
  )}

  {activeTab === "insights" && (
    <Insights expenses={expenses} />
  )}
  {activeTab === "ai" && (
  <AIAssistant />
)}

</Container>
    </>
  );
}

export default Dashboard;
