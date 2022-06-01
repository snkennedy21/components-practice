import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-container__data-container">
      <div className="expense__datum">{year}</div>
      <div className="expense__datum">{month}</div>
      <div className="expense__datum">{day}</div>
    </div>
  );
}

export default ExpenseDate;
