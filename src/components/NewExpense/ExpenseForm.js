import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = ({ onSaveExpenseData, hideExpenseForm }) => {
  const [newExpenseDetails, setNewExpenseDetails] = useState({
    uuid: "",
    title: "",
    amount: 0,
    date: new Date(),
  });

  const newExpenseHandler = (event) => {
    event.preventDefault();

    onSaveExpenseData(newExpenseDetails);
    event.target.reset();
  };

  const titleInputHandler = (event) => {
    setNewExpenseDetails((prevValue) => {
      return {
        ...prevValue,
        uuid: crypto.randomUUID(),
        title: event.target.value,
      };
    });
  };

  const amountInputHandler = (event) => {
    setNewExpenseDetails((prevValue) => {
      return { ...prevValue, amount: +event.target.value };
    });
  };

  const dateInputHandler = (event) => {
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
