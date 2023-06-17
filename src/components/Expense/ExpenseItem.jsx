import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (Props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={Props.date} />
      <div className="expense-item__description">
        <h2>{Props.title}</h2>
        <div className="expense-item__price"> $ {Props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
