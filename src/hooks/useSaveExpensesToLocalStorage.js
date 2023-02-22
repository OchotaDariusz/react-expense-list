import { useEffect } from "react";

const useSaveExpensesToLocalStorage = (expenses) => {
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
};

export default useSaveExpensesToLocalStorage;
