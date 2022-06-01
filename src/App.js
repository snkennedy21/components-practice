import "./App.css";
import ExpenseContainer from "./components/ExpenseContainer";

function App() {
  const expenses = [
    { type: "Groceries", price: "$120", date: new Date(2022, 3, 23) },
    { type: "Happy Hour", price: "$40", date: new Date(2022, 2, 25) },
    { type: "Oil Change", price: "$750", date: new Date(2022, 4, 6) },
  ];
  return (
    <div>
      <div className="header-container">
        <h2 className="header">This Is Practice For React Components</h2>
      </div>

      <div className="container">
        <ExpenseContainer items={expenses}></ExpenseContainer>
      </div>
    </div>
  );
}

export default App;
