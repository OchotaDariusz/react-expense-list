import "./RoundedCard.scss";

const RoundedCard = ({ className, children }) => {
  const classes = "rounded-card " + className;

  return <div className={classes}>{children}</div>;
};

export default RoundedCard;
