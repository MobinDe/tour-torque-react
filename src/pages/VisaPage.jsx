// src/pages/VisaPage.jsx
import React, { useState } from 'react';
import visaBg from '../assets/visa-bg.jpg'; // تصویر داخلی

const VisaPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: 'آیا برای سفر به ترکیه نیاز به ویزا دارم؟',
      a: 'برای اتباع ایرانی، دریافت ویزای ترکیه الزامی است. البته ویزای فرودگاهی (e-Visa) برای سفرهای توریستی کوتاه‌مدت وجود دارد.',
    },
    {
      q: 'ویزای الکترونیکی (e-Visa) چقدر زمان می‌برد؟',
      a: 'درخواست آنلاین معمولاً ظرف ۲۴ تا ۷۲ ساعت بررسی می‌شود و در صورت تأیید، ویزا به ایمیل شما ارسال می‌گردد.',
    },
    {
      q: 'هزینه ویزای توریستی ترکیه چقدر است؟',
      a: 'هزینه‌ها بسته به نوع ویزا و ملیت متفاوت است. برای ایرانیان، ویزای توریستی حدود ۶۰ دلار می‌باشد. (ممکن است تغییر کند)',
    },
    {
      q: 'آیا با پاسپورت کمتر از ۶ ماه اعتبار می‌توانم ویزا بگیرم؟',
      a: 'خیر، پاسپورت شما باید حداقل ۶ ماه از تاریخ ورود به ترکیه اعتبار داشته باشد.',
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-900">
      {/* هیرو سکشن با تصویر داخلی */}
      <section
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${visaBg})` }}
      >
        <div className="absolute inset-0 bg-emerald-900/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-amber-400 text-emerald-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
            🇹🇷 ویزای ترکیه
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            اخذ <span className="text-amber-400">آسان و سریع</span> ویزای ترکیه
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            از ویزای توریستی الکترونیکی تا ویزای تحصیلی و کاری، ما در کنار شما هستیم
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              درخواست مشاوره
            </a>
            <a
              href="#faq"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full border border-white/30 transition"
            >
              سوالات متداول
            </a>
          </div>
        </div>
      </section>

      {/* انواع ویزا */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">انواع ویزای ترکیه</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🏖️', title: 'ویزای توریستی', desc: 'برای سفرهای کوتاه‌مدت و گردشگری. ویزای الکترونیکی یا لیبل در پاسپورت.' },
            { icon: '🎓', title: 'ویزای تحصیلی', desc: 'برای دانشجویان پذیرفته‌شده در دانشگاه‌ها و مؤسسات آموزشی ترکیه.' },
            { icon: '💼', title: 'ویزای کاری', desc: 'برای متخصصان، کارآفرینان و افرادی که در ترکیه پیشنهاد شغلی دارند.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform duration-300 ">
                {item.icon}
              </span>
              <h3 className="text-2xl font-semibold text-amber-400 mb-2">{item.title}</h3>
              <p className="text-emerald-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* مدارک مورد نیاز */}
      <section className="py-12 px-4 bg-emerald-950/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">مدارک لازم</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'پاسپورت با حداقل ۶ ماه اعتبار',
              'فرم تکمیل‌شده درخواست ویزا',
              'عکس پرسنلی جدید (۴×۶)',
              'بیمه مسافرتی معتبر',
              'رزرو بلیط رفت و برگشت',
              'واچر هتل یا دعوت‌نامه',
              'گواهی تمکن مالی',
              'مدارک شغلی (حکم کارگزینی، جواز کسب)',
            ].map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <span className="text-amber-400 text-2xl">📋</span>
                <span className="text-white">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مراحل دریافت ویزا (تایم‌لاین) */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">مراحل دریافت ویزا</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>
        <div className="relative">
          <div className="absolute right-4 md:right-1/2 top-0 bottom-0 w-1 bg-amber-400/50 transform md:translate-x-1/2"></div>
          {[
            { step: '۱', title: 'مشاوره و انتخاب نوع ویزا', desc: 'کارشناسان ما شما را راهنمایی می‌کنند.' },
            { step: '۲', title: 'آماده‌سازی مدارک', desc: 'مدارک مورد نیاز را جمع‌آوری و بررسی می‌کنیم.' },
            { step: '۳', title: 'ثبت درخواست', desc: 'فرم درخواست شما در سامانه سفارت بارگذاری می‌شود.' },
            { step: '۴', title: 'پرداخت هزینه و پیگیری', desc: 'هزینه ویزا را پرداخت کرده و وضعیت را پیگیری می‌کنیم.' },
            { step: '۵', title: 'دریافت ویزا', desc: 'ویزا صادر شده و آماده سفر هستید!' },
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center mb-8">
              <div className="flex-1 md:text-left text-right md:pr-10 pr-14">
                <h3 className="text-xl font-bold text-amber-400">{item.title}</h3>
                <p className="text-emerald-200">{item.desc}</p>
              </div>
              <div className="absolute right-0 md:right-1/2 transform md:translate-x-1/2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-emerald-900 font-bold z-10">
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* سوالات متداول (آکاردئون) */}
      <section id="faq" className="py-12 px-4 bg-emerald-950/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">سوالات متداول</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 text-right text-white font-medium hover:bg-white/10 transition"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-emerald-200 border-t border-white/10">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* فرم مشاوره رایگان */}
      <section id="apply" className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-2">همین حالا اقدام کنید</h2>
          <p className="text-emerald-200 mb-8">
            برای دریافت ویزای ترکیه فرم زیر را پر کنید تا کارشناسان ما با شما تماس بگیرند.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full bg-white/20 text-white placeholder:text-white/60 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="w-full bg-white/20 text-white placeholder:text-white/60 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
            />
            <select className="w-full bg-white/20 text-white p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right appearance-none">
              <option value="" disabled selected>
                نوع ویزا
              </option>
              <option value="tourist">توریستی</option>
              <option value="student">تحصیلی</option>
              <option value="work">کاری</option>
            </select>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 rounded-xl transition"
            >
              ارسال درخواست
            </button>
          </form>
        </div>
      </section>

      {/* فوتر */}
      <footer className="text-center py-6 border-t border-white/10">
        <p className="text-emerald-300">
          © ۱۴۰۵ تورترکیه | پشتیبانی ویزا:{' '}
          <a href="tel:02112345678" className="text-amber-400 hover:underline">
            ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
        </p>
      </footer>
    </div>
  );
};

export default VisaPage;