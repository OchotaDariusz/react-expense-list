import React, { useState } from "react";
import "./ExpenseForm.scss";
import {
  Expense,
  FormEventHandler,
  InputEventHandler,
  SaveExpenseHanlder,
} from "../../general/types";
import { EXPENSE_TEMPLATE } from "../../general/utils";

type Props = {
  onSaveExpenseData: SaveExpenseHanlder;
  hideExpenseForm: () => void;
};

const ExpenseForm: React.FC<Props> = ({
  onSaveExpenseData,
  hideExpenseForm,
}) => {
  const [newExpenseDetails, setNewExpenseDetails] =
    useState<Expense>(EXPENSE_TEMPLATE);

  const newExpenseHandler: FormEventHandler = (event) => {
    event.preventDefault();
    onSaveExpenseData({
      ...newExpenseDetails,
      uuid: crypto.randomUUID(),
    });
    (event.target as HTMLFormElement).reset();
  };

  const titleInputHandler: InputEventHandler = (event) => {
    setNewExpenseDetails((prevValue) => {
      return {
        ...prevValue,
        title: event.target.value.trim(),
      };
    });
  };

  const amountInputHandler: InputEventHandler = (event) => {
    setNewExpenseDetails((prevValue) => {
      return { ...prevValue, amount: +event.target.value };
    });
  };

  const dateInputHandler: InputEventHandler = (event) => {
    setNewExpenseDetails((prevValue) => {
      return { ...prevValue, date: new Date(event.target.value) };
    });
  };

  return (
    <form onSubmit={newExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleInputHandler}
            required
            pattern=".*\S+.*"
          />
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
