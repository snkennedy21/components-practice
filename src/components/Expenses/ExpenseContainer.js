import ExpenseDate from "./ExpenseDate.js";
import ExpensePrice from "./ExpensePrice";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseContainer.css";
import Container from "../UI/Container.js";

function ExpenseContainer(props) {
  return (
    <div>
      <Container className="expense-container">
        <ExpenseDate date={props.items[0].date}></ExpenseDate>
        <ExpenseItem type={props.items[0].type}></ExpenseItem>
        <ExpensePrice price={props.items[0].price}></ExpensePrice>
      </Container>
      <Container className="expense-container">
        <ExpenseDate date={props.items[1].date}></ExpenseDate>
        <ExpenseItem type={props.items[1].type}></ExpenseItem>
        <ExpensePrice price={props.items[1].price}></ExpensePrice>
      </Container>
      <Container className="expense-container">
        <ExpenseDate date={props.items[2].date}></ExpenseDate>
        <ExpenseItem type={props.items[2].type}></ExpenseItem>
        <ExpensePrice price={props.items[2].price}></ExpensePrice>
      </Container>
    </div>
  );
}

export default ExpenseContainer;
