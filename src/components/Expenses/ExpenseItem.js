import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css'



function ExpenseItem(props) {
      return (
      <Card className="expense-item">
            <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    );
}; 
export default ExpenseItem; 
//A component in react is just a function.
//When naming react files(just js) capitalize first letter in each word. - even in functions!
//You can have complex html code by wrapping the html elements in '()'
//Jsx is not html therefore class attribute was renamed to className