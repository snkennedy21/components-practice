import "./ExpensePrice.css";

function ExpensePrice(props) {
  return (
    <div className="expense__price-container">
      <p className="expense__price">{props.price}</p>
    </div>
  );
}

export default ExpensePrice;
