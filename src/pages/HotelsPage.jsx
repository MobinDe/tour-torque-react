// src/pages/HotelsPage.jsx
import React, { useState } from 'react';
import hotelsBg from '../assets/article5.jpg';     // تصویر هیرو
import h1 from '../assets/images(1).jpg';
import h2 from '../assets/images(2).jpg';
import h3 from '../assets/images(3).jpg';
import h4 from '../assets/images(4).jpg';
import h5 from '../assets/images(5).jpg';
import h6 from '../assets/images(6).jpg';

const allHotels = [
  {
    id: 1,
    name: 'هتل چهار فصل استانبول',
    location: 'استانبول',
    stars: 5,
    price: 'از ۴,۵۰۰,۰۰۰ تومان / شب',
    rating: 9.4,
    image: h1,
    description: 'اقامتی لوکس در قلب سلطان احمد با چشم‌انداز بسفر',
  },
  {
    id: 2,
    name: 'هتل غارنشین آریادا',
    location: 'کاپادوکیا',
    stars: 4,
    price: 'از ۲,۸۰۰,۰۰۰ تومان / شب',
    rating: 9.1,
    image: h2,
    description: 'اقامت در غارهای باستانی با بالکن‌های اختصاصی',
  },
  {
    id: 3,
    name: 'هتل ساحلی آکوا',
    location: 'آنتالیا',
    stars: 5,
    price: 'از ۵,۲۰۰,۰۰۰ تومان / شب',
    rating: 9.6,
    image: h3,
    description: 'دسترسی مستقیم به ساحل خصوصی و استخر روباز',
  },
  {
    id: 4,
    name: 'هتل ریتز کارلتون استانبول',
    location: 'استانبول',
    stars: 5,
    price: 'از ۶,۹۰۰,۰۰۰ تومان / شب',
    rating: 9.7,
    image: h4,
    description: 'چشم‌انداز پانوراما، اسپا و خدمات شخصی‌سازی‌شده',
  },
  {
    id: 5,
    name: 'هتل پاموکاله اسپا',
    location: 'پاموکاله',
    stars: 3,
    price: 'از ۱,۶۰۰,۰۰۰ تومان / شب',
    rating: 8.8,
    image: h5,
    description: 'نزدیک به تراس‌های آهکی و چشمه‌های آب گرم طبیعی',
  },
  {
    id: 6,
    name: 'هتل کاخ بدروم',
    location: 'بدروم',
    stars: 5,
    price: 'از ۷,۲۰۰,۰۰۰ تومان / شب',
    rating: 9.5,
    image: h6,
    description: 'ویلاهای خصوصی با استخر، کنار دریای اژه',
  },
];

const cities = ['همه', 'استانبول', 'کاپادوکیا', 'آنتالیا', 'پاموکاله', 'بدروم'];
const starFilters = [
  { label: 'همه', value: 0 },
  { label: '۵ ستاره', value: 5 },
  { label: '۴ ستاره', value: 4 },
  { label: '۳ ستاره', value: 3 },
];

const HotelsPage = () => {
  const [city, setCity] = useState('همه');
  const [stars, setStars] = useState(0);

  const filteredHotels = allHotels.filter((hotel) => {
    const matchCity = city === 'همه' || hotel.location === city;
    const matchStars = stars === 0 || hotel.stars === stars;
    return matchCity && matchStars;
  });

  return (
    <div className="min-h-screen bg-emerald-900">
      {/* هیرو سکشن */}
      <section
        className="relative h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hotelsBg})` }}
      >
        <div className="absolute inset-0 bg-emerald-900/75 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-amber-400 text-emerald-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
            🏨 اقامتگاه‌ها
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            بهترین هتل‌های <span className="text-amber-400">ترکیه</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            از هتل‌های لوکس استانبول تا اقامتگاه‌های سنگی کاپادوکیا، اقامت رویایی خود را پیدا کنید
          </p>
        </div>
      </section>

      {/* فیلترها */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          {/* فیلتر شهر */}
          <div className="flex flex-wrap gap-2">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  city === c
                    ? 'bg-amber-400 text-emerald-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {/* فیلتر ستاره */}
          <div className="flex gap-2">
            {starFilters.map((s) => (
              <button
                key={s.value}
                onClick={() => setStars(s.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  stars === s.value
                    ? 'bg-amber-400 text-emerald-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* لیست هتل‌ها */}
      <section className="pb-16 px-4 max-w-7xl mx-auto">
        {filteredHotels.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl group hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-400 text-emerald-900 text-xs font-bold px-2 py-1 rounded-full">
                    ⭐ {hotel.stars}
                  </div>
                  <div className="absolute top-3 right-3 bg-emerald-900/70 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                    {hotel.rating}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                      {hotel.name}
                    </h3>
                  </div>
                  <p className="text-emerald-200 text-sm mb-3">{hotel.description}</p>
                  <div className="flex justify-between items-center text-xs text-emerald-300 mb-4">
                    <span>📍 {hotel.location}</span>
                    <span className="text-amber-400 font-bold">{hotel.price}</span>
                  </div>
                  <button className="w-full bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-2 rounded-lg transition text-sm">
                    مشاهده و رزرو
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-white/70 py-12">
            <span className="text-4xl block mb-4">🏨</span>
            هتلی با این مشخصات یافت نشد.
          </div>
        )}
      </section>

      {/* فوتر */}
      <footer className="text-center py-6 border-t border-white/10">
        <p className="text-emerald-300">© ۱۴۰۵ تورترکیه | تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
};

export default HotelsPage;