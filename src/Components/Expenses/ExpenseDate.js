import "./ExpenseDate.css";

const ExpenseDate = (props)=> {
    const day = props.date.toLocaleString('es-MX',{day: "numeric"});
    const month = props.date.toLocaleString('es-MX',{month: "long"});
    const year = props.date.toLocaleString('es-MX',{year: "numeric"});

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;