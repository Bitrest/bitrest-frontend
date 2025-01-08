import { UserTokenStorage } from "@/app/_utils/localStorage/localStorage";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}`,
});

axiosClient.interceptors.request.use((config) => {
  const token = UserTokenStorage.getUserToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  config.headers["Content-Type"] = "application/json";

  return config;
});
