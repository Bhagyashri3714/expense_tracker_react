import "./TransactionList.css";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="list-container">
      <h3>Transactions</h3>

      {transactions.length === 0 && (
        <p>No transactions yet.</p>
      )}

      {transactions.map((t) => (
        <div key={t.id} className="list-item">
          <div>
            <strong>{t.title}</strong>
            <p className={t.type === "income" ? "income-text" : "expense-text"}>
              ${t.amount}
            </p>
          </div>

          <button
            onClick={() => deleteTransaction(t.id)}
            className="delete-btn"
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
