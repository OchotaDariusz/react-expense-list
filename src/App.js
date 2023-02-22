import { useState, useRef } from "react";
import useLoadExampleExpenses from "./hooks/useLoadExampleExpenses";
import useSaveExpensesToLocalStorage from "./hooks/useSaveExpensesToLocalStorage";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ResetExpenses from "./components/Expenses/ResetExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const selectYearFilter = useRef(null);

  useLoadExampleExpenses(setExpenses);
  useSaveExpensesToLocalStorage(expenses);

  const addExpenseHandler = (expense) => {
    selectYearFilter.current.selectedIndex = 0;
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
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
