import React from 'react'; 

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses'; 



function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in App.js'); 
    console.log(expense); 
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

/* 

Import React from 'react'; 

state this at the top of page and then enter the syntax alternatively like: 

return React.createElement( 
  'div', {}, 
  React.createElement('h2', {}, "lets get started"), 
  React.createElement(Expenses, {items: expenses})
)

This is a alternative way to do this but is not common practice. Still good to see what react is doing 
under the hood with this syntax.

*/



export default App;
//jsx stands for javascript-html and it is the practice of putting html in javascript.
//import the function by doing import at the top of the page and then plugging it into function app
// like a an html element. 
//You can pass data via "props" which stands for properties. 