import React, { useState, useRef } from "react";
import useLoadExampleExpenses from "./hooks/useLoadExampleExpenses";
import useSaveExpensesToLocalStorage from "./hooks/useSaveExpensesToLocalStorage";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ResetExpenses from "./components/Expenses/ResetExpenses";
import { Expense } from "./general/types";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const selectYearFilter = useRef<HTMLSelectElement>(null);

  useLoadExampleExpenses(setExpenses);
  useSaveExpensesToLocalStorage(expenses);

  const addExpenseHandler = (expense: Expense) => {
    if (selectYearFilter.current !== null) {
      (selectYearFilter.current as HTMLSelectElement).selectedIndex = 0;
      setExpenses((prevExpenses) => {
        return [...prevExpenses, expense];
      });
    }
  };

  return (
    <>
      <ResetExpenses onResetExpenses={setExpenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} filterRef={selectYearFilter} />
    </>
  );
};

export default App;
