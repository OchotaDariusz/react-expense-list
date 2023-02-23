import { Expense } from "./types";

export const sortByDate = (a: Expense, b: Expense) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA < dateB) return 1;
  if (dateA > dateB) return -1;
  return 0;
};

export const extractDate: (date: Date) => [string, number, number] = (date) => {
  const expenseDate = new Date(date);
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = +expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = +expenseDate.getFullYear();
  return [month, day, year];
};

export const EXPENSE_TEMPLATE: Expense = {
  uuid: "",
  title: "",
  amount: 0,
  date: new Date(),
};

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
