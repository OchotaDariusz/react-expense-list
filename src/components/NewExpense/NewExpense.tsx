import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import { SaveExpenseHanlder } from "../../general/types";
import "./NewExpense.scss";

type Props = {
  onAddExpense: SaveExpenseHanlder;
};

const NewExpense: React.FC<Props> = ({ onAddExpense }) => {
  const [isExpenseFormHidden, setIsExpenseFormHidden] = useState(true);

  const hideExpenseForm = () => {
    setIsExpenseFormHidden(true);
  };

  const onSaveExpenseDataHandler: SaveExpenseHanlder = (enteredExpenseData) => {
    hideExpenseForm();
    onAddExpense(enteredExpenseData);
  };

  let expenseFormContainer = (
    <button
      onClick={() => {
        setIsExpenseFormHidden(false);
      }}
    >
      Add Expense
    </button>
  );

  if (!isExpenseFormHidden) {
    expenseFormContainer = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        hideExpenseForm={hideExpenseForm}
      />
    );
  }

  return (
    <Card className="new-expense new-expense__actions">
      {expenseFormContainer}
    </Card>
  );
};

export default NewExpense;
