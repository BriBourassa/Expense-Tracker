import React from 'react';
import Expenses from '../Expenses/Expenses';
import NewExpense from '../NewExpense/NewExpense';
import './App.css';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('app.js');
    console.log(expense)
  }

  return (
    <div>
      <h2>this is the app componenet</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'this is the app component'),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
}

export default App;
