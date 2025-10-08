import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createTransaction } from "../../api/transactionApi";
import { getAllMembers } from "../../api/memberApi";
import { getAllGames } from "../../api/gameApi";
import Loader from "../../components/shared/Loader";
import TransactionForm from "../../components/forms/TransactionForm";

const TransactionFormPage = () => {
  const [members, setMembers] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // For API errors
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [memberRes, gameRes] = await Promise.all([
          getAllMembers(),
          getAllGames(),
        ]);
        setMembers(memberRes);
        setGames(gameRes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (data) => {
    setError(""); // Reset previous error
    try {
      await createTransaction(data);
      navigate("/transactions"); // Redirect on success
    } catch (err) {
      // If API returns {status: "ERROR", message: "..."}
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  };

  const handleCancel = () => {
    navigate("/transactions");
  };

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2>Add Transaction</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card p-3">
        <TransactionForm
          initialData={null}
          members={members}
          games={games}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default TransactionFormPage;
