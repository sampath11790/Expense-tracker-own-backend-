import { useEffect, useContext } from "react";
import "./App.css";
import ExpenseList from "./component/ExpenseList/ExpenseList";
import ExpenseContext from "./Store/Expensecontext";

function App() {
  const ctx = useContext(ExpenseContext);
  useEffect(() => {
    ctx.getExpense();
  }, []);
  return (
    <div className="App">
      <ExpenseList></ExpenseList>
    </div>
  );
}

export default App;
