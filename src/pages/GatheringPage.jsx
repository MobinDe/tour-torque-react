// src/pages/GatheringPage.jsx
import React from 'react';
import gatheringBg from '../assets/gathering-bg.jpg'; // یک عکس از جمع گردشگران یا دوستان
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';

const events = [
  {
    id: 1,
    title: 'تور گروهی استانبول',
    date: '۲۰ تیر ۱۴۰۵',
    description: 'سفر ۷ روزه به استانبول همراه با تور لیدر فارسی‌زبان و برنامه‌های تفریحی گروهی',
    image: event1,
  },
  {
    id: 2,
    title: 'دورهمی کاپادوکیا',
    date: '۵ مرداد ۱۴۰۵',
    description: 'پرواز با بالن، شب‌های موسیقی زنده و گشت‌های محلی',
    image: event2,
  },
  {
    id: 3,
    title: 'تور آنتالیا مخصوص خانواده‌ها',
    date: '۱۸ مرداد ۱۴۰۵',
    description: 'تفریحات ساحلی، پارک‌های آبی و برنامه‌های کودک و نوجوان',
    image: event3,
  },
];

const GatheringPage = () => {
  return (
    <div className="min-h-screen bg-emerald-900">
      {/* هیرو سکشن */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${gatheringBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
            دورهمی‌های <span className="text-amber-400">ترکیه‌گردی</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto">
            سفرهای گروهی، خاطرات جمعی، لحظه‌هایی که تا ابد می‌مانند
          </p>
          <button className="mt-8 bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            مشاهده رویدادها
          </button>
        </div>
      </section>

      {/* بخش معرفی و مزایا */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            چرا دورهمی‌های ما؟
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🤝', title: 'همسفرهای هم‌سلیقه', desc: 'با افرادی که مثل شما عاشق ماجراجویی هستند همسفر شوید.' },
            { icon: '🗣️', title: 'تور لیدر فارسی‌زبان', desc: 'بدون دغدغه‌ی زبان، همه‌جا همراه شماست.' },
            { icon: '🎉', title: 'برنامه‌های ویژه و سرگرمی', desc: 'شب‌های موسیقی، گیم‌های گروهی و سورپرایزهای هر روز.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </span>
              <h3 className="text-2xl font-semibold text-amber-400 mb-2">{item.title}</h3>
              <p className="text-emerald-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* رویدادهای آینده (کارت‌ها) */}
      <section className="py-12 px-4 bg-emerald-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              رویدادهای پیش رو
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl group hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-amber-400 text-emerald-900 text-sm font-bold px-3 py-1 rounded-full mb-3">
                    {event.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-emerald-200 mb-4">{event.description}</p>
                  <button className="w-full bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-2 rounded-xl transition">
                    ثبت‌نام در دورهمی
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* فرم ثبت‌نام یا اعلام علاقه‌مندی */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-2">دوست داری با ما باشی؟</h2>
          <p className="text-emerald-200 mb-8">
            ایمیل یا شماره‌ات رو بذار تا از دورهمی‌های جدید باخبرت کنیم
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="ایمیل یا شماره موبایل"
              className="flex-1 bg-white/20 text-white placeholder:text-white/60 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-xl transition"
            >
              خبرم کن!
            </button>
          </form>
        </div>
      </section>

      {/* فوتر کوتاه */}
      <footer className="text-center py-6 border-t border-white/10">
        <p className="text-emerald-300">
          © ۱۴۰۵ تورترکیه | دورهمی‌ها را در
          <a href="#" className="text-amber-400 hover:underline mx-1">اینستاگرام</a>
          دنبال کنید
        </p>
      </footer>
    </div>
  );
};

export default GatheringPage;