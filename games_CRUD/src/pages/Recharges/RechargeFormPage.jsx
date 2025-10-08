// src/pages/Recharges/RechargeFormPage.jsx
import React, { useEffect, useState } from "react";
import RechargeForm from "../../components/forms/RechargeForm";
import { createRecharge } from "../../api/rechargeApi";
import { getAllMembers } from "../../api/memberApi";
import Loader from "../../components/shared/Loader";
import { useNavigate } from "react-router-dom";

const RechargeFormPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAllMembers()
      .then((res) => setMembers(res))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (data) => {
    try {
      await createRecharge(data);
      navigate("/recharges");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    navigate("/recharges");
  };

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2>Add Recharge</h2>
      <div className="card p-3">
        <RechargeForm members={members} onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default RechargeFormPage;
