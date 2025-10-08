import React from "react";

const RechargeTable = ({ recharges = [], members = [] }) => {
  if (!Array.isArray(recharges) || recharges.length === 0) {
    return <div className="alert alert-info">No recharges found.</div>;
  }

  // Helper to get member name by ID
  const getMemberName = (id) => {
    const member = members.find((m) => m.memberId === id);
    return member ? member.name : "Unknown";
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-wrap">
        <thead className="table-dark">
          <tr>
            <th>Member</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {recharges.map((r) => (
            <tr key={r.rechargeId}>
              <td>{getMemberName(r.memberId)}</td>
              <td>{Number(r.amount).toFixed(2)}</td>
              <td>{new Date(r.rechargeDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RechargeTable;
