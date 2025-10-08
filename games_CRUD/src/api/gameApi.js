import axios from "./axiosInstance";

// Fetch all games
export const getAllGames = () =>
  axios.get("/games").then((res) => res.data.data);

// Fetch game by ID
export const getGameById = (id) =>
  axios.get(`/games/${id}`).then((res) => res.data.data);

// Create new game
export const createGame = (data) =>
  axios.post("/games", data).then((res) => res.data);

// Update game
export const updateGame = (id, data) =>
  axios.put(`/games/${id}`, data).then((res) => res.data);

// Delete game
export const deleteGame = (id) =>
  axios.delete(`/games/${id}`).then((res) => res.data);
