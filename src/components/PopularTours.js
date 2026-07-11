// src/components/PopularTours.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import TurCard from './TurCard';
import { Link } from 'react-router-dom';

const PopularTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularTours = async () => {
      try {
        setLoading(true);
        const response = await api.get('/tours.json');
        // فیلتر تورهای با آیدی 1 تا 15 (محبوب‌ها)
        const popular = response.data.filter(tour => tour.id >= 1 && tour.id <= 15);
        setTours(popular);
      } catch (err) {
        setError('خطا در دریافت تورهای محبوب');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularTours();
  }, []);

  if (loading) {
    return (
      <div className="flex  justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <span className="mr-2 text-gray-600">بارگذاری تورهای محبوب...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 bg-red-50 p-4 rounded-xl">
        ❌ {error}
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="text-center text-gray-500 p-6 bg-gray-100 rounded-xl">
        هیچ تور محبوبی یافت نشد.
      </div>
    );
  }

  return (
    <div className='bg-emerald-800 py-6 shadow-md border-t-2  border-slate-900'>
      <Link className='text-blue-600 hover absolute mt-4 mx-4  hover:text-blue-800'></Link>
        <div className=" inset-0 bg-black/50"></div>
<div className='px-4 py-2  '>
    <h1 className='relative flex items-center before:flex-1 before:border-t before:border-gray-300 before:mr-4 before:translate-y-2 after:flex-1 after:border-t after:border-gray-300 after:ml-4 after:translate-y-2 text-white   justify-center text-4xl font-bold  '  >
     محبوب ترین تور ها
    </h1>
    
</div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 p-4 mt-2">
      {tours.map((tour) => (
        <TurCard key={tour.id} tour={tour} />
      ))}
    </div>
    </div>
    
  );
};

export default PopularTours;