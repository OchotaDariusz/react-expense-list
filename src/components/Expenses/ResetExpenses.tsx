import React from "react";
import { Expense } from "../../general/types";
import { DUMMY_EXPENSES } from "../../general/utils";
import Card from "../UI/Card";
import "./ResetExpenses.scss";

type Props = {
  onResetExpenses: (expenseList: Expense[]) => void;
};

const ResetExpenses: React.FC<Props> = ({ onResetExpenses }) => {
  const resetExpenses: () => void = () => {
    localStorage.clear();
    onResetExpenses(DUMMY_EXPENSES);
  };

  return (
    <Card className="reset-expenses">
      <button onClick={resetExpenses}>RESET LOCAL STORAGE</button>
    </Card>
  );
};

export default ResetExpenses;
