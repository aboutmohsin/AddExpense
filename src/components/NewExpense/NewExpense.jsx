import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (Props) => {
  const saveExpenseDataHandler = (formExpenseDate) => {
    const expenseData = {
      id: Math.random().toString(),
      ...formExpenseDate,
    };
    Props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
