import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = () => {
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income + expense;

  return (
    <div style={styles.container}>
      <h1>💰 Expense Tracker</h1>

      <p>"Track every rupee. Build smarter financial habits."</p>

      <div style={styles.balanceCard}>
        <h2>Balance</h2>
        <h1>₹{balance}</h1>
      </div>

      <div style={styles.summary}>
        <div style={styles.income}>
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div style={styles.expense}>
          <h3>Expense</h3>
          <p>₹{Math.abs(expense)}</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Enter Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Amount (+income, -expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />

      <button onClick={addTransaction} style={styles.button}>
        Add Transaction
      </button>

      <h2>History</h2>

      {transactions.map((item) => (
        <div
          key={item.id}
          style={{
            ...styles.transaction,
            borderLeft:
              item.amount > 0 ? "5px solid green" : "5px solid red",
          }}
        >
          <span>{item.text}</span>

          <div>
            ₹{item.amount}
            <button
              onClick={() => deleteTransaction(item.id)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0px auto",
    padding: "0px",
    fontFamily: "Arial",
  },

  balanceCard: {
    background: "#111827",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    marginBottom: "20px",
  },

  summary: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "20px",
  },

  income: {
    flex: 1,
    background: "#dcfce7",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },

  expense: {
    flex: 1,
    background: "#fee2e2",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
  },

  transaction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f3f4f6",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
  },

  deleteBtn: {
    marginLeft: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
};

export default App;