import { useState } from "react";
import "./TransactionForm.css";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Please fill all fields");

    const newTransaction = {
      id: Date.now(),
      title,
      amount,
      type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Add Transaction</h3>

      <input
        type="text"
        placeholder="Title (e.g., Groceries)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="form-input"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className="form-button">Add</button>
    </form>
  );
}

export default TransactionForm;
