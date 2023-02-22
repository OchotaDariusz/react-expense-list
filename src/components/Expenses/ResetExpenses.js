import { DUMMY_EXPENSES } from "../../hooks/useLoadExampleExpenses";
import Card from "../UI/Card";
import "./ResetExpenses.scss";

const resetLocalStorageExpenses = (onResetExpenses) => {
  localStorage.clear();
  onResetExpenses(DUMMY_EXPENSES); // reset expenses
};

const ResetExpenses = ({ onResetExpenses }) => {
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
