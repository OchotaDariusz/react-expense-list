import { useEffect } from "react";
import { Expense, ExpensesListHandler } from "../general/types";
import { DUMMY_EXPENSES } from "../general/utils";

/**
 * Use Load Example Expenses
 *
 * this hook loads example expenses if there's
 * no data in localStorage otherwise it will
 * load them from localStorage
 * @param setExpenses setter from useState hook
 */
const useLoadExampleExpenses: (setter: ExpensesListHandler) => void = (
  setExpenses
) => {
  useEffect(() => {
    let localExpenses = localStorage.getItem("expenses") as string;
    if (localExpenses) {
      const expensesList = JSON.parse(localExpenses).map((expense: Expense) => {
        expense.amount = +expense.amount;
        expense.date = new Date(expense.date);
        return expense;
      }) as Expense[];
      setExpenses(expensesList);
    } else {
      setExpenses(DUMMY_EXPENSES);
    }
  }, [setExpenses]);
};

export default useLoadExampleExpenses;
