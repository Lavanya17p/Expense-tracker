import React, { useState } from "react";
import NewExpense from "./compontents/NewExpense/NewExpense";
import Expenses from "./compontents/Expenses/Expenses";

// import ExpenseForm from "./compontents/NewExpense/ExpenseForm";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Milk",
    amount: 23,
    date: new Date(2021, 11, 24),
  },
  {
    id: "e2",
    title: "Electricity",
    amount: 205,
    date: new Date(2020, 10, 10),
  },
  {
    id: "e3",
    title: "Dress",
    amount: 2000,
    date: new Date(2019, 8, 5),
  },
  {
    id: "e4",
    title: "Newspaper",
    amount: 2000,
    date: new Date(2019, 4, 18),
  },
  {
    id: "e5",
    title: "Vegetables",
    amount: 500,
    date: new Date(2021, 11, 15),
  },
  {
    id: "e6",
    title: "Footwear",
    amount: 500,
    date: new Date(2021, 10, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
