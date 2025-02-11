import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "content-type": "application/json",
  },
  withCredentials: false,
});

// axiosInstance.interceptors.request.use((config) => {
//   // 필요 시 요청 전 로직 (ex. 인증 토큰 추가)
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // 오류 처리 로직 (ex. 인증 만료 시 처리)
//     if (error.response?.status === 401) {
//       console.error("Unauthorized. Redirecting to login...");
//     }
//     return Promise.reject(error);
//   }
// );
