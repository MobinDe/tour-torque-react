// src/components/TurCard.jsx
import React from 'react';

const TurCard = ({ tour }) => {
  const {
    
    name,
    image,
    price,
    duration,
    location,
    description,
    hotel, // فیلد جدید (اختیاری)
  } = tour;

  // فرمت قیمت با جداکننده هزارگان
  const formattedPrice = price.toLocaleString('fa-IR');

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      {/* تصویر */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          src={image}
          alt={name}
        />
        {/* نشان مدت تور */}
        <span className="absolute top-3 left-3 bg-gray-text text-white text-xs font-bold px-2 py-1 rounded-full">
          {duration} روزه
        </span>
      </div>

      {/* محتوا */}
      <div className="px-5 py-2 flex-grow">
        {/* نام و هتل */}
        <h3 className="font-bold text-xl text-gray-800 line-clamp-1">{name}</h3>
        {hotel && (
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>هتل: {hotel}</span>
          </div>
        )}
        {/* موقعیت */}
        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </p>
        {/* توضیحات کوتاه */}
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
      </div>

      {/* قیمت و دکمه */}
      <div className="px-5 pb-2 flex justify-between items-center border-t pt-2 mt-1">
        <div>
          <span className="text-xs text-gray-500 block">قیمت از</span>
          <span className="text-xl font-bold text-indigo-600">{formattedPrice}</span>
          <span className="text-xs text-gray-500"> تومان</span>
        </div>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 flex items-center gap-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 15v6"
            />
          </svg>
          رزرو
        </button>
      </div>
    </div>
  );
};

export default TurCard;