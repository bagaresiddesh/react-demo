import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Bike Insurance ',
      amount: 3500,
      date: new Date(2023,3,5)
    },
    {
      id: 'e2',
      title: 'Food Bill',
      amount: 2500,
      date: new Date(2023,3,7)
    },
    {
      id: 'e3',
      title: 'Doctor Fees',
      amount: 950,
      date: new Date(2023,3,20)
    },
    {
      id: 'e4',
      title: 'Fuel',
      amount: '3000',
      date: new Date(2023,3,25)
    },
    {
      id: 'e5',
      title: 'SIP',
      amount: '1000',
      date: new Date(2023,3,5)
    },
  ]

  return (
    <Expenses items={expenses} /> 
  );
}

export default App;
