import ExpensesList from "./Components/Expenses/ExpensesList";
import "./App.css";
import NewExpense from "./Components/New Expense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "League Inscription",
      date: new Date(2023, 9, 4),
      amount: 250,
    },
    {
      id: "e2",
      title: "Card Sleeves",
      date: new Date(2023, 9, 4),
      amount: 220,
    },
    { id: "e3", title: "Car Gas", date: new Date(2023, 9, 2), amount: 150 },
    {
      id: "e4",
      title: "Parking Ticket",
      date: new Date(2023, 9, 4),
      amount: 20,
    },
  ];

  const addExpenseHandler = expense =>{
    console.log(expenses);
    expenses.push(expense);
  };

  return (
    <div className="my-app">
      <NewExpense onAddExpenseData={addExpenseHandler}/>
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default App;
