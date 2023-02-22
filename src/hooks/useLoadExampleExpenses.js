import { useEffect } from "react";

export const DUMMY_EXPENSES = [
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

const useLoadExampleExpenses = (setExpenses) => {
  useEffect(() => {
    const localExpenses = localStorage.getItem("expenses");
    setExpenses(localExpenses ? JSON.parse(localExpenses) : DUMMY_EXPENSES);
  }, [setExpenses]);
};

export default useLoadExampleExpenses;
