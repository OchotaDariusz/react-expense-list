import { useEffect } from "react";
import { ExpensesListHandler } from "../general/types";

/**
 * Use Save Expenses To Local Storage
 *
 * this hook saves expenses to local storage
 * every time they change.
 * @param expenses list of expenses
 */
const useSaveExpensesToLocalStorage: ExpensesListHandler = (expenses) => {
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
};

export default useSaveExpensesToLocalStorage;
