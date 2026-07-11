// src/services/api.js
import axios from 'axios';

// برای فایل‌های ایستا در پوشه public، baseURL را خالی یا '/' بگذارید
const api = axios.create({
  baseURL: '',  // یا '/'  (نسبی به ریشه سایت)
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// اینترسپتور درخواست (اختیاری - اگر توکن ندارید می‌توانید حذف کنید)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// اینترسپتور پاسخ
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      console.error('فایل مورد نظر یافت نشد (404)');
    }
    return Promise.reject(error);
  }
);

export default api;