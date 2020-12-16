import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://emporio-serrana-api-cloud-run-dzpf2xv2eq-uc.a.run.app/api',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
