import React from "react";
import { CardProps } from "./type";
import "./RoundedCard.scss";

const RoundedCard = ({ className, children }: CardProps) => {
  const classes = "rounded-card " + className;

  return <div className={classes}>{children}</div>;
};

export default RoundedCard;
