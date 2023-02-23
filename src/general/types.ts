export interface Expense {
  uuid: string;
  title: string;
  amount: number;
  date: Date;
}

export type FormEventHandler = (
  event: React.FormEvent<HTMLFormElement>
) => void;

export type InputEventHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export type SelectEventHandler = (
  event: React.ChangeEvent<HTMLSelectElement>
) => void;

export type SaveExpenseHanlder = (expenseDetails: Expense) => void;

export type ExpensesListHandler = (expensesList: Expense[]) => void;
