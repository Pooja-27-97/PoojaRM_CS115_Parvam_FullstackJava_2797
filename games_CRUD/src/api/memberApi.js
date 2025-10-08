import axios from "./axiosInstance";

// Return only the "data" array for all calls
export const getAllMembers = () =>
  axios.get("/members").then((res) => res.data.data);

export const getMemberById = (id) =>
  axios.get(`/members/${id}`).then((res) => res.data.data);

export const createMember = (data) =>
  axios.post("/members", data).then((res) => res.data.data);

export const updateMember = (id, data) =>
  axios.put(`/members/${id}`, data).then((res) => res.data.data);

export const deleteMember = (id) =>
  axios.delete(`/members/${id}`).then((res) => res.data.data);
