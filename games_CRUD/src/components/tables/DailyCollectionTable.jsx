// src/components/tables/DailyCollectionTable.jsx
import React from "react";

const DailyCollectionTable = ({ collections = [] }) => {
  if (!Array.isArray(collections) || collections.length === 0) {
    return <div className="alert alert-info">No daily collections found.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Net Collection</th>
            <th>Total Recharges</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {collections.map((dc) => (
            <tr key={dc.collectionId}>
              <td>{dc.collectionDate}</td>
              <td>₹{dc.netCollection}</td>
              <td>₹{dc.totalRecharges}</td>
              <td>₹{dc.totalSpent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyCollectionTable;
