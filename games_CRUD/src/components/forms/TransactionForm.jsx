// src/components/TransactionForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransactionForm = ({
  members = [],
  games = [],
  initialData,
  onSubmit,
}) => {
  const navigate = useNavigate();

  // Form state
  const [memberId, setMemberId] = useState(initialData?.memberId || "");
  const [gameId, setGameId] = useState(initialData?.gameId || "");
  const [playTimeHrs, setPlayTimeHrs] = useState(
    initialData?.playTimeHrs || ""
  );

  // Update when editing (if initialData changes)
  useEffect(() => {
    setMemberId(initialData?.memberId || "");
    setGameId(initialData?.gameId || "");
    setPlayTimeHrs(initialData?.playTimeHrs || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { memberId, gameId, playTimeHrs };

    if (initialData?.transactionId) {
      formData.transactionId = initialData.transactionId;
    }

    onSubmit(formData);
  };

  const handleCancel = () => {
    navigate("/transactions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Member</label>
        <select
          className="form-select"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          required
        >
          <option value="">Select Member</option>
          {members.map((m) => (
            <option key={m.memberId} value={m.memberId}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Game</label>
        <select
          className="form-select"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          required
        >
          <option value="">Select Game</option>
          {games.map((g) => (
            <option key={g.gameId} value={g.gameId}>
              {g.gameName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Play Time (in Hours)</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          value={playTimeHrs}
          onChange={(e) => setPlayTimeHrs(e.target.value)}
          required
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {initialData ? "Update" : "Add"} Transaction
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
