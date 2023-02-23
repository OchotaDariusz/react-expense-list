import { useEffect, useState } from "react";
import { Expense, SelectEventHandler } from "../general/types";

/**
 * Use Filtered Expenses
 * @param expnesesList
 * @returns list of filtered expenses and filter function which takes select event from HTMLSelectElement
 */
const useFilteredExpenses: (
  expensesList: Expense[]
) => [Expense[], SelectEventHandler] = (expnesesList) => {
  const [filteredExpenses, setFilteredExpenses] =
    useState<Expense[]>(expnesesList);

  useEffect(() => {
    setFilteredExpenses(expnesesList);
  }, [expnesesList, setFilteredExpenses]);

  const filterExpensesByYear: SelectEventHandler = (event) => {
    let filterValue = event.target.value;
    if (filterValue === "any") {
      setFilteredExpenses(expnesesList);
      return;
    }
    setFilteredExpenses(() => {
      return expnesesList.filter(
        (v) => new Date(v.date).getFullYear() === +filterValue
      );
    });
  };

  return [filteredExpenses, filterExpensesByYear];
};

export default useFilteredExpenses;
