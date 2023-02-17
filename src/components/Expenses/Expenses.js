import { useEffect, useState } from "react";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.scss";

const sortByDate = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA < dateB) return 1;
  if (dateA > dateB) return -1;
  return 0;
};

const Expenses = ({ expenses, filterRef }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses, setFilteredExpenses]);

  const filterExpensesByYear = (event) => {
    let filterValue = event.target.value;
    if (filterValue === "any") {
      setFilteredExpenses(expenses);
      return;
    }
    setFilteredExpenses(() => {
      return expenses.filter(
        (v) => new Date(v.date).getFullYear() === +filterValue
      );
    });
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectYear={filterExpensesByYear}
        filterRef={filterRef}
      />
      <ExpensesList items={filteredExpenses.sort(sortByDate)} />
    </Card>
  );
};

export default Expenses;
