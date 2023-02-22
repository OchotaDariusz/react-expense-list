import React from "react";
import RoundedCard from "../UI/RoundedCard";
import "./ExpenseDate.scss";

type Props = {
  date: string | Date;
};

const ExpenseDate = ({ date }: Props) => {
  const expenseDate = new Date(date);
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <RoundedCard className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </RoundedCard>
  );
};

export default ExpenseDate;
