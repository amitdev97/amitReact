import React, { useState } from "react";

import ExpenseWindow from "./components/ExpenseWindow/ExpenseWindow";
import NewExpenseForm from "./components/NewExpenseWindow/NewExpenseForm/NewExpenseForm";
import { Paper } from "@mui/material";

function App() {
  const expenseArr = [
    {
      id: 1,
      label: "New TV",
      amount: "749.49",
      expenseDate: '2023-06-23'
    },
    {
      id: 2,
      label: "Freeze",
      amount: "439.50",
      expenseDate: '2022-06-22'
    },
    {
      id: 3,
      label: "Laptop",
      amount: "1000",
      expenseDate: '2023-06-23'
    },
  ];

  const [allExpenses, setallExpenses] = useState(expenseArr);

  const addNewExpenseToList = (data: any) => {
    const newItem = {...data, id: allExpenses.length + 1}
    setallExpenses(prevData => {
      return [newItem, ...prevData];
    })
    console.log(allExpenses)
  }

  return (
    <Paper
      sx={{
        width: "600px",
        position: "absolute",
        top: "50%",
        left: "50%",
        padding: "20px",
        transform: "translate(-50%, -50%)",
        bgcolor: 'whitesmoke'
      }}
    >
      <NewExpenseForm onNewExpenseItem={addNewExpenseToList}/>
      <ExpenseWindow expenseData={allExpenses}/>
    </Paper>
  );
}

export default App;
