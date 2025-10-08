import React from "react";

const GameTable = ({ games = [], onEdit, onDelete }) => {
  if (!Array.isArray(games) || games.length === 0) {
    return <div className="alert alert-info">No games found.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>Game Name</th>
            <th>Cost per Hour</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.gameId}>
              <td>{game.gameName}</td>
              <td>{game.costPerHour}</td>
              <td>{game.status}</td>
              <td className="d-flex gap-2 flex-column flex-md-row">
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => onEdit(game)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(game.gameId)}
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

export default GameTable;
