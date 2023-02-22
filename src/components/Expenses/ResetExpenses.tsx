import React from "react";
import { Expense } from "../../general/types";
import { DUMMY_EXPENSES } from "../../hooks/useLoadExampleExpenses";
import Card from "../UI/Card";
import "./ResetExpenses.scss";

type Props = {
  onResetExpenses: (expenseList: Expense[]) => void;
};

const resetLocalStorageExpenses = (
  onResetExpenses: (expenseList: Expense[]) => void
) => {
  localStorage.clear();
  onResetExpenses(DUMMY_EXPENSES); // reset expenses
};

const ResetExpenses = ({ onResetExpenses }: Props) => {
  return (
    <Card className="reset-expenses">
      <button
        onClick={() => {
          resetLocalStorageExpenses(onResetExpenses);
        }}
      >
        RESET LOCAL STORAGE
      </button>
    </Card>
  );
};

export default ResetExpenses;
