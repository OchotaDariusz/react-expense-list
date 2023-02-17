import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = ({ onAddExpense }) => {
  const [isExpenseFormHidden, setIsExpenseFormHidden] = useState(true);

  const hideExpenseForm = () => {
    setIsExpenseFormHidden(true);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
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
