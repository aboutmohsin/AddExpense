import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (Props) => {
  //   let expenseContent = <p>No Expense found.</p>;
  if (Props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No Expense found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {Props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
