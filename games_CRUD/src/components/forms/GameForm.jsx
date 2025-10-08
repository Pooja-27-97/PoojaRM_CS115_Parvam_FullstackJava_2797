import React, { useState, useEffect } from "react";

const GameForm = ({ initialData, onSubmit, onCancel }) => {
  const [gameName, setGameName] = useState(initialData?.gameName || "");
  const [costPerHour, setCostPerHour] = useState(initialData?.costPerHour || "");
  const [status, setStatus] = useState(initialData?.status || "AVAILABLE");

  useEffect(() => {
    setGameName(initialData?.gameName || "");
    setCostPerHour(initialData?.costPerHour || "");
    setStatus(initialData?.status || "AVAILABLE");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { gameName, costPerHour, status };

    // Pass gameId if editing
    if (initialData?.gameId) {
      formData.gameId = initialData.gameId;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Game Name</label>
        <input
          type="text"
          className="form-control"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Cost per Hour</label>
        <input
          type="number"
          className="form-control"
          value={costPerHour}
          onChange={(e) => setCostPerHour(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="AVAILABLE">AVAILABLE</option>
          <option value="UNAVAILABLE">UNAVAILABLE</option>
        </select>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {initialData ? "Update" : "Add"} Game
        </button>
        {onCancel && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default GameForm;
