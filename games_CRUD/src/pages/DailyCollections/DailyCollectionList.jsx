// src/pages/dailyCollections/DailyCollectionList.jsx
import React, { useEffect, useState } from "react";
import DailyCollectionTable from "../../components/tables/DailyCollectionTable";
import { getAllDailyCollections } from "../../api/dailyCollectionApi";
import Loader from "../../components/shared/Loader";

const DailyCollectionList = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCollections = async () => {
    setLoading(true);
    try {
      const data = await getAllDailyCollections();
      setCollections(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching daily collections:", error);
      setCollections([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Daily Collections</h2>
      {loading ? (
        <Loader />
      ) : (
        <DailyCollectionTable
          collections={collections}
        />
      )}
    </div>
  );
};

export default DailyCollectionList;
