// /* eslint-disable react/prop-types */
import "./Card.css";
const Card = (Props) => {
  const classes = "card " + Props.className;

  return <div className={classes}>{Props.children}</div>;
};

export default Card;
