import React, { useState } from "react";
import "./ExpenseForm.scss";
import { Expense } from "../../general/types";

type Props = {
  onSaveExpenseData: (expenseDetails: Expense) => void;
  hideExpenseForm: () => void;
};

const ExpenseForm = ({ onSaveExpenseData, hideExpenseForm }: Props) => {
  const [newExpenseDetails, setNewExpenseDetails] = useState<Expense>({
    uuid: "",
    title: "",
    amount: 0,
    date: new Date(),
  });

  const newExpenseHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSaveExpenseData(newExpenseDetails);
    const resetForm = event.target as HTMLFormElement;
    resetForm.reset();
  };

  const titleInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewExpenseDetails((prevValue) => {
      return {
        ...prevValue,
        uuid: crypto.randomUUID(),
        title: event.target.value,
      };
    });
  };

  const amountInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewExpenseDetails((prevValue) => {
      return { ...prevValue, amount: +event.target.value };
    });
  };

  const dateInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewExpenseDetails((prevValue) => {
      return { ...prevValue, date: new Date(event.target.value) };
    });
  };

  return (
    <form onSubmit={newExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleInputHandler} required />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountInputHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateInputHandler}
            required
          />
        </div>
      </div>
      <div>
        <button onClick={hideExpenseForm}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
