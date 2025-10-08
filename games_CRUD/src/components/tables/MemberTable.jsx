// src/components/tables/MemberTable.jsx
import React from "react";

const MemberTable = ({ members = [], onEdit, onDelete }) => {
  if (!Array.isArray(members) || members.length === 0) {
    return <div className="alert alert-info">No members found.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Join Date</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.memberId}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.joinDate}</td>
              <td>{member.balance}</td>
              <td>{member.status}</td>
              <td>
                <div className="d-flex flex-column flex-md-row gap-2">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => onEdit(member)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(member.memberId)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;
