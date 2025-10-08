// src/pages/transactions/TransactionList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionTable from "../../components/tables/TransactionTable";
import { getAllTransactions } from "../../api/transactionApi";
import { getAllMembers } from "../../api/memberApi";
import { getAllGames } from "../../api/gameApi";
import Loader from "../../components/shared/Loader";
import Button from "../../components/shared/Button";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [members, setMembers] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const [txRes, memberRes, gameRes] = await Promise.all([
        getAllTransactions(),
        getAllMembers(),
        getAllGames(),
      ]);

      setMembers(memberRes);
      setGames(gameRes);

      const memberMap = Object.fromEntries(
        memberRes.map((m) => [m.memberId, m.name])
      );
      const gameMap = Object.fromEntries(
        gameRes.map((g) => [g.gameId, g.gameName])
      );

      const txWithNames = (Array.isArray(txRes) ? txRes : []).map((tx) => ({
        ...tx,
        memberName: memberMap[tx.memberId] || "Unknown",
        gameName: gameMap[tx.gameId] || "Unknown",
      }));

      setTransactions(txWithNames);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Transactions</h2>
        <Button onClick={() => navigate("/transactions/add")}>
          Add Transaction
        </Button>
      </div>

      {loading ? <Loader /> : <TransactionTable transactions={transactions} />}
    </div>
  );
};

export default TransactionList;
