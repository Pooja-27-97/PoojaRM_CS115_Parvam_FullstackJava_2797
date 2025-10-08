// src/api/dailyCollectionApi.js
import axios from "./axiosInstance";

// Return only the "data" array/object for all calls
export const getAllDailyCollections = () =>
  axios.get("/daily-collections").then((res) => res.data.data);

export const getDailyCollectionByDate = (date) =>
  axios.get(`/daily-collections/${date}`).then((res) => res.data.data);
