// src/pages/Games/GameList.jsx
import React, { useEffect, useState } from "react";
import GameTable from "../../components/tables/GameTable";
import { getAllGames, deleteGame } from "../../api/gameApi";
import Button from "../../components/shared/Button";
import Loader from "../../components/shared/Loader";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchGames = async () => {
    setLoading(true);
    try {
      const res = await getAllGames();
      // Expecting res.data to be array
      setGames(Array.isArray(res) ? res : []);
    } catch (error) {
      console.error("Error fetching games:", error);
      setGames([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleDelete = (gameId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteGame(gameId);
          fetchGames();
          Swal.fire("Deleted!", "Game has been deleted.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Failed to delete game.", "error");
        }
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Games</h2>
        <Button onClick={() => navigate("/games/add")} className="btn btn-outline-primary">Add Game</Button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <GameTable
          games={games}
          onDelete={handleDelete}
          onEdit={(game) => navigate(`/games/edit/${game.gameId}`)}
        />
      )}
    </div>
  );
};

export default GameList;
