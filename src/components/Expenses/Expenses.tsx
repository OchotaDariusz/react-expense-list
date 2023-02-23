import React from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import useWindowSize from "../../hooks/useWindowSize";
import { Expense } from "../../general/types";
import { sortByDate } from "../../general/utils";
import "./Expenses.scss";
import useFilteredExpenses from "../../hooks/useFilteredExpenses";

type Props = {
  expenses: Expense[];
  filterRef: React.RefObject<HTMLSelectElement>;
};

const Expenses: React.FC<Props> = ({ expenses, filterRef }) => {
  const windowSize = useWindowSize();
  const [filteredExpenses, filterExpensesByYear] =
    useFilteredExpenses(expenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectYear={filterExpensesByYear}
        filterRef={filterRef}
      />
      {windowSize > 580 ? (
        <ExpensesChart expenses={filteredExpenses} />
      ) : (
        <div></div>
      )}
      <ExpensesList items={filteredExpenses.sort(sortByDate)} />
    </Card>
  );
};

export default Expenses;
