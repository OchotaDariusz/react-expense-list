import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";
import { Expense, SelectEventHandler } from "../../general/types";
import { sortByDate } from "../../general/utils";

type Props = {
  expenses: Expense[];
  filterRef: React.RefObject<HTMLSelectElement>;
};

const Expenses: React.FC<Props> = ({ expenses, filterRef }) => {
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses, setFilteredExpenses]);

  const filterExpensesByYear: SelectEventHandler = (event) => {
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
