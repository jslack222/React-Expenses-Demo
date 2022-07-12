import React, { useState } from 'react'       

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(''); 
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const [enteredDate, setEnteredDate] = useState(''); 

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }; 
    
    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value); 
     }; 
    
    const dateChangedHandler = (event) => { 
        setEnteredDate(event.target.value);
    }; 
    
    const submitHandler = (evt) => {
        evt.preventDefault(); 

        const expenseData = {
            title: enteredTitle, 
            amount: enteredAmount, 
            date: new Date(enteredDate)
        }
    
        props.onSaveExpenseData(expenseData)
        setEnteredTitle(''); 
        setEnteredAmount(''); 
        setEnteredDate(''); 
    }


    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
                    <input type="text"
                           value={enteredTitle}
                           onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                           value={enteredAmount}
                           onChange={amountChangedHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                           value={enteredDate}
                           onChange={dateChangedHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    )}; 

export default ExpenseForm; 

//multiple state syntax

/* 
const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        }); 
    }; 
    
    const amountChangedHandler = (evt) => {
            setUserInput((prevState) => {
              return { ...prevState, enteredAmount: evt.target.value };
            }); 
     }; 
    
    const dateChangedHandler = (evt) => {
        setUserInput((prevState) => {
          return { ...prevState, enteredDate: evt.target.value };
        }); 
    }; 
*/