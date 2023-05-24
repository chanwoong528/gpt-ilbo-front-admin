import axios from "axios";
import { baseApiUrl } from "../config/config"


const customAxios = axios.create({
  baseURL: baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

customAxios.interceptors.request.use((config) => {
  let token = localStorage.getItem("accToken");
  config.headers["x-access-token"] = token;
  return config;
});

customAxios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log("customAxios[error]: ", error.response);
    if (error.response.status === 408) {
      const refToken = localStorage.getItem("refToken");
      const res = await axios.post(`${baseApiUrl}/auth/token`, {
        refToken,
      });
      localStorage.setItem("accToken", res.data.accToken);
      originalRequest.headers["x-access-token"] = res.data.accToken;
      customAxios.defaults.headers.common["x-access-token"] = res.data.accToken;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default customAxios;