// src/components/tables/TransactionTable.jsx
import React from "react";

const TransactionTable = ({ transactions = [] }) => {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <div className="alert alert-info">No transactions found.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Transaction ID</th>
            <th>Member</th>
            <th>Game</th>
            <th>Play Time (hrs)</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.transactionId}>
              <td>{tx.transactionId}</td>
              <td>{tx.memberName || "—"}</td>
              <td>{tx.gameName || "—"}</td>
              <td>{tx.playTimeHrs}</td>
              <td>{tx.cost}</td>
              <td>
                {tx.transactionDate
                  ? new Date(tx.transactionDate).toLocaleString()
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
