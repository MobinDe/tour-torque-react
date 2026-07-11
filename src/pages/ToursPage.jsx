// src/pages/ToursPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import TurCard from '../components/TurCard';

const ToursPage = () => {
  const [searchParams] = useSearchParams();
  const [allTours, setAllTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const destination = searchParams.get('destination') || '';
  const duration = parseInt(searchParams.get('duration')) || 0;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await api.get('/tours.json');
        setAllTours(response.data);
      } catch (err) {
        setError('خطا در دریافت اطلاعات تورها');
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const filteredTours = useMemo(() => {
    return allTours.filter((tour) => {
      if (destination && !tour.location?.includes(destination)) return false;
      if (duration > 0 && tour.duration !== duration) return false;
      return true;
    });
  }, [allTours, destination, duration]);

  return (
    <div className="min-h-screen bg-emerald-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* هدر صفحه */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3"> تورها
          </h1>
          {destination && (
            <p className="text-emerald-200 text-lg md:text-xl">
              مقصد: <span className="font-bold text-amber-400">{destination}</span>
            </p>
          )}
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* حالت بارگذاری */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-400 border-t-transparent"></div>
            <p className="text-white mt-4 text-lg">در حال جستجوی تورها...</p>
          </div>
        )}

        {/* خطا */}
        {error && (
          <div className="text-center bg-red-100/20 backdrop-blur-sm text-red-200 p-6 rounded-2xl max-w-lg mx-auto border border-red-300/30">
            ❌ {error}
          </div>
        )}

        {/* بدون نتیجه */}
        {!loading && !error && filteredTours.length === 0 && (
          <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl max-w-lg mx-auto border border-white/20">
            <span className="text-6xl block mb-4">😔</span>
            <p className="text-white text-xl font-medium mb-2">تور مورد نظر یافت نشد</p>
            <p className="text-emerald-200">لطفاً مقصد یا طول تور دیگری را جستجو کنید.</p>
          </div>
        )}

        {/* لیست تورها – چیدمان flex-wrap با وسط‌چینی */}
        {!loading && !error && filteredTours.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="w-full sm:w-72 md:w-64 lg:w-56">
                <TurCard tour={tour} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToursPage;