import React, { useContext } from "react";
import ExpenseContext from "../../Store/Expensecontext";
import ExpenseListItem from "../ExpenseListItems/ExpenseListItem";
import FormElement from "../Form/Form";
import "./ExpenseList.css";
const ExpenseList = () => {
  const ctx = useContext(ExpenseContext);
  return (
    <div className="expense_container">
      <FormElement></FormElement>
      <ul className="expense_Ul">
        {ctx.data.map((each) => (
          <ExpenseListItem key={each.id} item={each} />
        ))}
      </ul>
      <p className="expense_Amount">
        Total Expenses :
        {ctx.data.reduce((acc, cur) => acc + Number(cur.amount), 0)}
      </p>
    </div>
  );
};
export default ExpenseList;
