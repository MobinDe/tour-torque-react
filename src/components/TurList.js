// src/components/TurList.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api'; // استفاده از نمونه axios پیکربندی شده
import TurCard from './TurCard';

const TurList = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        // درخواست به فایل tours.json در پوشه public
        const response = await api.get('/tours.json');
        setTours(response.data);
        setError(null);
      } catch (err) {
        // مدیریت خطا (axios error structure)
        if (err.response) {
          // سرور پاسخ داده با وضعیت خطا
          if (err.response.status === 404) {
            setError('فایل tours.json در پوشه public یافت نشد.');
          } else {
            setError(`خطای سرور: ${err.response.status}`);
          }
        } else if (err.request) {
          // درخواست ارسال شده ولی پاسخی دریافت نشده
          setError('ارتباط با سرور برقرار نیست.');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // وضعیت بارگذاری
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
        <span className="mr-2 text-gray-600">در حال بارگذاری تورها...</span>
      </div>
    );
  }

  // وضعیت خطا
  if (error) {
    return (
      <div className="text-center text-red-600 bg-red-50 p-4 rounded-xl">
        ❌ {error}
      </div>
    );
  }

  // لیست خالی
  if (tours.length === 0) {
    return (
      <div className="text-center text-gray-500 p-6 bg-gray-100 rounded-xl">
        هیچ توری برای نمایش وجود ندارد.
      </div>
    );
  }

  // نمایش لیست تورها
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-28">
      {tours.map((tour) => (
        <TurCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default TurList;