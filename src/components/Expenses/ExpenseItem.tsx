import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

type Props = {
  title: string;
  date: Date;
  amount: number;
};

const ExpenseItem: React.FC<Props> = ({ title, date, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <Card className="expense-item__price">{`${amount}$`}</Card>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
