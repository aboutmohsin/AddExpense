import "./ExpenseDate.css";
const ExpenseDate = (Props) => {
  const month = Props.date.toLocaleString("en-US", { month: "long" });
  const year = Props.date.getFullYear();
  const day = Props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
