import React, { useState, useContext, useEffect } from "react";
import ExpenseContext from "../../Store/Expensecontext";
import "./Form.css";
const initial_value = { id: null, amount: "", category: "", description: "" };
const FormElement = () => {
  const [userInput, setUserInput] = useState(initial_value);
  const ctx = useContext(ExpenseContext);
  const { id, amount, category, description } = ctx.editData;
  const addInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.postuserData(userInput);
    setUserInput(initial_value);
  };
  useEffect(() => {
    setUserInput({ id, amount, category, description });
  }, [ctx.editData]);

  return (
    <div className="form-container">
      <h1>Expense Tracker</h1>
      <form className="from-element">
        <label>Amount</label>
        <br />
        <input
          type="text"
          name="amount"
          value={userInput.amount}
          onChange={addInput}
        ></input>
        <br />
        <label>Category</label>
        <br />
        <select name="category" onChange={addInput}>
          <option value={userInput.category}>
            {id ? userInput.category : " "}
          </option>
          <option value="food">Food</option>
          <option value="petrol">Petrol</option>
          <option value="cloths">Cloths</option>
          <option vlaue="travel">travel</option>
        </select>
        <br />
        <label>Description</label>
        <br />

        <input
          type="text"
          name="description"
          onChange={addInput}
          value={userInput.description}
        ></input>
        <br />
        <input type="hidden" value={id}></input>
        <br />
        <button type="submit" onClick={submitHandler}>
          {id ? "Update" : "Submit"}{" "}
        </button>
        <br />
      </form>
    </div>
  );
};
export default FormElement;
