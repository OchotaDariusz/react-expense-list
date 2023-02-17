import { useState, useRef } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    uuid: crypto.randomUUID(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 7, 14),
  },
  {
    uuid: crypto.randomUUID(),
    title: "Car Sticker",
    amount: 569.04,
    date: new Date(2020, 5, 4),
  },
  {
    uuid: crypto.randomUUID(),
    title: "Car Smell",
    amount: 94.56,
    date: new Date(2021, 1, 15),
  },
  {
    uuid: crypto.randomUUID(),
    title: "Car",
    amount: 12564.5,
    date: new Date(2022, 3, 21),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const selectYearFilter = useRef(null);

  const addExpenseHandler = (expense) => {
    selectYearFilter.current.selectedIndex = 0;
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} filterRef={selectYearFilter} />
    </>
  );
};

export default App;
