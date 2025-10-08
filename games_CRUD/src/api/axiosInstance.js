import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // your Spring Boot base URL
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
