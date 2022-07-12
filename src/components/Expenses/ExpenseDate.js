import './ExpenseDate.css'

function ExpenseDate(props) {
     const month = props.date.toLocaleString("en-US", { month: "long" });
     const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
}

export default ExpenseDate; 

//Keep your components small and focused don't put too much functionality into your functions
// your supposed to have multiple js files that are imported and operate through the app.js
// which you can think of as the parent file. 