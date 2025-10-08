// src/pages/dailyCollections/DailyCollectionByDate.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDailyCollectionByDate } from "../../api/dailyCollectionApi";
import Loader from "../../components/shared/Loader";

const DailyCollectionByDate = () => {
  const { date } = useParams(); // date comes from URL
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCollection = async () => {
    setLoading(true);
    try {
      const data = await getDailyCollectionByDate(date);
      setCollection(data);
    } catch (error) {
      console.error("Error fetching daily collection:", error);
      setCollection(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollection();
  }, [date]);

  if (loading) return <Loader />;

  if (!collection) {
    return (
      <div className="alert alert-info">No collection found for {date}</div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Daily Collection for {date}</h2>
      <div className="card p-3">
        <div className="mb-2">
          <strong>Net Collection:</strong> ₹{collection.net_collection}
        </div>
        <div className="mb-2">
          <strong>Total Recharges:</strong> ₹{collection.total_recharges}
        </div>
        <div className="mb-2">
          <strong>Total Spent:</strong> ₹{collection.total_spent}
        </div>
      </div>
    </div>
  );
};

export default DailyCollectionByDate;
