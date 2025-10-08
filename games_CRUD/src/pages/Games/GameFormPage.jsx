// src/pages/Games/GameFormPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GameForm from "../../components/forms/GameForm";
import { getGameById, createGame, updateGame } from "../../api/gameApi";
import Loader from "../../components/shared/Loader";

const GameFormPage = () => {
  const { id } = useParams(); // undefined for add
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getGameById(id)
        .then((res) => setGame(res.data || res)) // in case API returns {status,message,data}
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      if (id) {
        await updateGame(id, formData);
      } else {
        await createGame(formData);
      }
      navigate("/games");
    } catch (error) {
      console.error("Error saving game:", error);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Game" : "Add Game"}</h2>
      <div className="card p-3">
        <GameForm
          initialData={game}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/games")} // navigate back to list
        />
      </div>
    </div>
  );
};

export default GameFormPage;
