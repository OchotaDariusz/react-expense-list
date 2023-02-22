import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";
import { Expense } from "../../general/types";

type Props = {
  expenses: Expense[];
  filterRef: React.LegacyRef<HTMLSelectElement>;
};

const sortByDate = (a: Expense, b: Expense) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA < dateB) return 1;
  if (dateA > dateB) return -1;
  return 0;
};

const Expenses = ({ expenses, filterRef }: Props) => {
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses, setFilteredExpenses]);

  const filterExpensesByYear = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses.sort(sortByDate)} />
    </Card>
  );
};

export default Expenses;
