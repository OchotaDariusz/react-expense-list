import { useEffect, useState } from "react";
import Card from "./../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = ({ items }) => {
  const [isListEmpty, setIsListEmpty] = useState(true);

  useEffect(() => {
    if (items.length === 0) setIsListEmpty(true);
    else setIsListEmpty(false);
  }, [items, setIsListEmpty]);

  if (isListEmpty) {
    return <Card className="expenses-list__empty">No expenses found.</Card>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.uuid}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
