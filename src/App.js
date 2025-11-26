import { useEffect, useState } from "react";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./index.css";
import dark from "./logos/dark.svg";
import light from "./logos/light.svg";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // THEME STATE
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // APPLY THEME TO BODY
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // TOGGLE FUNCTION
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <h1 className="app-title">Expense Tracker</h1>

        {/* Toggle button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
            <img 
                src={theme === "light" ? dark : light} 
                alt="theme icon" 
                className="theme-icon"
            />
        </button>

      </div>

      <Summary transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList 
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
