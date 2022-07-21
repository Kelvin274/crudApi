import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "http://localhost:5000";

const apiService = axios.create({
   baseURL: BASE_URL,
   timeout: 8000,
});
const apiInstance = axios.create({
   baseURL: BASE_URL,
   timeout: 8000,
});

apiInstance.interceptors.response.use((config) => {
   config.headers["muniId"] = uuidv4();
   return config;
});

export { apiInstance, apiService };
