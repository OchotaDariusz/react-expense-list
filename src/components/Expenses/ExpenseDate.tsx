import React from "react";
import { extractDate } from "../../general/utils";
import RoundedCard from "../UI/RoundedCard";
import "./ExpenseDate.scss";

type Props = {
  date: Date;
};

const ExpenseDate: React.FC<Props> = ({ date }) => {
  const [month, day, year] = extractDate(date);

  return (
    <RoundedCard className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </RoundedCard>
  );
};

export default ExpenseDate;
