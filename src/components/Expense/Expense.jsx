// import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expense = (Props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = Props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  // let expenseContent = <p>No Expense found.</p>;
  // if (filterExpenses.length > 0) {
  //   expenseContent = filterExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filterExpenses.length === 0 ? (
          <p>No Expense found.</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* {filterExpenses.length === 0 && <p>No Expense found.</p>}
        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* {expenseContent} */}
        <ExpensesChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
