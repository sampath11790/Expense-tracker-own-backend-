import { useState } from "react";
import ExpenseContext from "./Expensecontext";
const initial_value = {
  id: null,
  amount: "",
  category: "",
  description: "",
};
const post_url = "http://localhost:4000/add-expense";
const ExpenseContextProvider = (props) => {
  const [data, setdata] = useState([]);
  const [editdata, setedit] = useState(initial_value);
  const postuserData = async (inputdata) => {
    const jsondata = JSON.stringify(inputdata);
    const response = await fetch(post_url, {
      method: "POST",
      body: jsondata,
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    getExpense();
    console.log("post", data);
  };

  async function getExpense() {
    const response = await fetch(post_url, {
      method: "GET",

      headers: {
        "Content-type": "application/json",
      },
    });
    const resdata = await response.json();
    let arr = [];
    const extactdata = () => {
      for (let val in resdata) {
        arr.push(resdata[val]);
      }
    };
    extactdata();
    // console.log("post", data);
    setdata(arr);
  }
  const deleteExpense = async (id) => {
    const response = await fetch(`http://localhost:4000/expense/${id}`, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    getExpense();
    console.log("post", data);
  };

  return (
    <ExpenseContext.Provider
      value={{
        data: data,
        postuserData: postuserData,
        getExpense: getExpense,
        deleteExpense: deleteExpense,
        editData: editdata,
        setedit: setedit,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
