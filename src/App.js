import ExpensesList from "./Components/ExpensesList";
import './App.css'

function App() {
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
  return (
    <div className="my-app">

      {/*
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
  */}

      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
