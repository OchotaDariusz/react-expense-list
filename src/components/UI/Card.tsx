import React from "react";
import { CardProps } from "./type";
import "./Card.scss";

const Card = ({ className, children }: CardProps) => {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
};

export default Card;
