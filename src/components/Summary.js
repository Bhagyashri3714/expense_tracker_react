import "./Summary.css";

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expenses;

  return (
    <div className="summary-box">
      <h2>Summary</h2>
      <p><strong>Balance:</strong> ${balance.toFixed(2)}</p>
      <p className="income"><strong>Total Income:</strong> ${income.toFixed(2)}</p>
      <p className="expense"><strong>Total Expenses:</strong> ${expenses.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
