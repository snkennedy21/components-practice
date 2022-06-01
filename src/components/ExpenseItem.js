import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      <p className="expense__item">{props.type}</p>
    </div>
  );
}

export default ExpenseItem;
