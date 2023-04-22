import React, { createContext } from "react";

const ExpenseContext = createContext({
  data: [],
  postuserData: () => {},
  getExpense: () => {},
  deleteExpense: () => {},
  editData: {},
  editExpense: () => {},
  setedit: () => {},
});

export default ExpenseContext;
