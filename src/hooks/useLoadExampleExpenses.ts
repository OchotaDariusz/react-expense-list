import { useEffect } from "react";
import { Expense } from "../general/types";

export const DUMMY_EXPENSES: Expense[] = [
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

/**
 * Use Load Example Expenses
 *
 * this hook loads example expenses if there's
 * no data in localStorage otherwise it will
 * load them from localStorage
 * @param setExpenses setter from useState hook
 */
const useLoadExampleExpenses = (
  setExpenses: (expensesList: Expense[]) => void
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
