// src/api/transactionApi.js
import axios from "./axiosInstance";

// Return only the "data" array from API
export const getAllTransactions = () =>
  axios.get("/transactions").then((res) => res.data.data);

export const getTransactionsByMember = (memberId) =>
  axios.get(`/transactions/member/${memberId}`).then((res) => res.data.data);

export const getTransactionsByGame = (gameId) =>
  axios.get(`/transactions/game/${gameId}`).then((res) => res.data.data);

export const createTransaction = (data) =>
  axios.post("/transactions", data).then((res) => res.data.data);
