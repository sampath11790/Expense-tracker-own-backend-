import React, { useContext } from "react";
import ExpenseContext from "../../Store/Expensecontext";

const ExpenseListItem = ({ item }) => {
  const ctx = useContext(ExpenseContext);
  const edithandler = (item) => {
    console.log(item);
    let newobj = {
      id: item.id,
      amount: item.amount,
      category: item.category,
      description: item.description,
    };
    ctx.setedit(newobj);
  };
  const delete_handler = (id) => {
    console.log(id);
    // console.log(id);
    ctx.deleteExpense(id);
  };
  return (
    <li key={item.id}>
      <span>{item.amount}</span>--
      <span>{item.category}</span>--
      <span>{item.description}</span>
      <button onClick={() => edithandler(item)}>Edit</button>
      <button onClick={() => delete_handler(item.id)}>Delete</button>
    </li>
  );
};

export default ExpenseListItem;
