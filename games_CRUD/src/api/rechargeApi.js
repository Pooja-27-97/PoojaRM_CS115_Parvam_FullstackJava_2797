import axios from "./axiosInstance";

export const getAllRecharges = () =>
  axios.get("/recharges").then((res) => res.data.data);

export const getRechargesByMember = (memberId) =>
  axios.get(`/recharges/member/${memberId}`).then((res) => res.data.data);

export const createRecharge = (data) =>
  axios.post("/recharges", data).then((res) => res.data.data);
