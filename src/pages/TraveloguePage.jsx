// src/pages/TraveloguePage.jsx
import React, { useState } from 'react';
import travelogueBg from '../assets/travelogue-bg.jpg'; // تصویر دلخواه برای هیرو
import story1 from '../assets/story1.jpg';
import story2 from '../assets/story2.jpg';
import story3 from '../assets/story3.jpg';
import story4 from '../assets/story4.jpg';
import story5 from '../assets/story5.jpg';
import story6 from '../assets/story6.jpg';

const dummyStories = [
  {
    id: 1,
    image: story1,
    title: '۳ روز فراموش‌نشدنی در استانبول',
    excerpt: 'از بازار بزرگ تا تنگه بسفر، ماجراجویی که هر لحظه‌اش پر از رنگ و عطر بود...',
    author: 'سارا محمدی',
    date: '۲۰ خرداد ۱۴۰۵',
  },
  {
    id: 2,
    image: story2,
    title: 'کاپادوکیا؛ سرزمین دودکش‌های پریان',
    excerpt: 'پرواز با بالن روی دره‌های صورتی، تجربه‌ای که هیچ‌وقت از خاطرم نمی‌رود.',
    author: 'امیر حسینی',
    date: '۲۵ خرداد ۱۴۰۵',
  },
  {
    id: 3,
    image: story3,
    title: 'یک روز در سواحل آنتالیا',
    excerpt: 'آفتاب، شن‌های طلایی و آب‌های فیروزه‌ای، اینجا بهشت روی زمین است.',
    author: 'نرگس تقوی',
    date: '۱ تیر ۱۴۰۵',
  },
  {
    id: 4,
    image: story4,
    title: 'پاموکاله؛ قلعه سفید ترکیه',
    excerpt: 'راه رفتن روی تراس‌های آهکی و چشمه‌های آب گرم، تجربه‌ای بی‌نظیر.',
    author: 'علی رضایی',
    date: '۱۰ تیر ۱۴۰۵',
  },
  {
    id: 5,
    image: story5,
    title: 'ماجراهای شبانه در خیابان استقلال',
    excerpt: 'موسیقی خیابانی، قهوه ترکی و خرید در بوتیک‌های دوست‌داشتنی استانبول.',
    author: 'مینا حیدری',
    date: '۱۵ تیر ۱۴۰۵',
  },
  {
    id: 6,
    image: story6,
    title: 'تور غذایی ترکیه؛ از دونر تا باقلاوا',
    excerpt: 'یک سفر تمام‌عیار برای عاشقان غذا؛ هر شهر یک طعم جدید داشت.',
    author: 'رضا صادقی',
    date: '۲۰ تیر ۱۴۰۵',
  },
];

const TraveloguePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-emerald-900">
      {/* هیرو سکشن */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${travelogueBg})` }}
      >
        <div className="absolute inset-0 bg-emerald-900/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-amber-400 text-emerald-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
            ✍️ سفرنامه‌ها
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            روایت سفرهای <span className="text-amber-400">ترکیه</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            سفرنامه‌های واقعی از مسافران همسفر ما؛ تجربه‌های ناب، راهنمای سفر و خاطرات فراموش‌نشدنی
          </p>
        </div>
      </section>

      {/* لیست سفرنامه‌ها */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">آخرین سفرنامه‌ها</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyStories.map((story) => (
            <div
              key={story.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
                  {story.title}
                </h3>
                <p className="text-emerald-200 text-sm mb-4 line-clamp-3">{story.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-emerald-300">
                  <span>{story.author}</span>
                  <span>{story.date}</span>
                </div>
                <button className="mt-4 text-amber-400 font-medium hover:text-amber-300 transition flex items-center gap-1 text-sm">
                  خواندن ادامه
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* دعوت به ارسال سفرنامه */}
      <section className="py-12 px-4 bg-emerald-950/50 backdrop-blur-sm text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">شما هم بنویسید</h2>
          <p className="text-emerald-200 mb-8">
            اگر تجربه‌ی سفر به ترکیه دارید، داستان خود را با ما و دیگران به اشتراک بگذارید.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-xl"
          >
            ارسال سفرنامه
          </button>
        </div>
      </section>

      {/* مودال ساده برای ارسال سفرنامه */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-emerald-900 rounded-2xl p-6 max-w-md w-full border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-bold">ارسال سفرنامه</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-white/60 hover:text-white text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="نام شما"
                className="w-full bg-white/20 text-white placeholder:text-white/60 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
              />
              <input
                type="text"
                placeholder="عنوان سفرنامه"
                className="w-full bg-white/20 text-white placeholder:text-white/60 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
              />
              <textarea
                rows={4}
                placeholder="متن سفرنامه..."
                className="w-full bg-white/20 text-white placeholder:text-white/60 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right resize-none"
              />
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 rounded-xl transition"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
      )}

      {/* فوتر */}
      <footer className="text-center py-6 border-t border-white/10">
        <p className="text-emerald-300">
          © ۱۴۰۵ تورترکیه | سفرنامه‌ها متعلق به مسافران ماست
        </p>
      </footer>
    </div>
  );
};

export default TraveloguePage;