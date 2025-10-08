// src/pages/Recharges/RechargeList.jsx
import React, { useEffect, useState } from "react";
import { getAllRecharges } from "../../api/rechargeApi";
import { getAllMembers } from "../../api/memberApi"; // <-- import member API
import Loader from "../../components/shared/Loader";
import { useNavigate } from "react-router-dom";
import RechargeTable from "../../components/tables/RechargeTable";

const RechargeList = () => {
  const [recharges, setRecharges] = useState([]);
  const [members, setMembers] = useState([]); // Store members
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch both members and recharges
      const [memberData, rechargeData] = await Promise.all([
        getAllMembers(),
        getAllRecharges(),
      ]);
      setMembers(memberData);
      setRecharges(rechargeData);
    } catch (err) {
      console.error(err);
      setMembers([]);
      setRecharges([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Recharges</h2>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/recharges/add")}
        >
          Add Recharge
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : recharges.length === 0 ? (
        <div className="alert alert-info">No recharges found.</div>
      ) : (
        <RechargeTable recharges={recharges} members={members} />
      )}
    </div>
  );
};

export default RechargeList;
