import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Bike Insurance ',
    amount: 3500,
    date: new Date(2023,2,5)
  },
  {
    id: 'e2',
    title: 'Food Bill',
    amount: 2500,
    date: new Date(2023,2,7)
  },
  {
    id: 'e3',
    title: 'Doctor Fees',
    amount: 950,
    date: new Date(2023,2,20)
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;
