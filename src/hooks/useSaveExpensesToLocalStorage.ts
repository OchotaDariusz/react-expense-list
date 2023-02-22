import { useEffect } from "react";
import { Expense } from "../general/types";

/**
 * Use Save Expenses To Local Storage
 *
 * this hook saves expenses to local storage
 * every time they change.
 * @param expenses list of expenses
 */
const useSaveExpensesToLocalStorage = (expenses: Expense[]) => {
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
};

export default useSaveExpensesToLocalStorage;
