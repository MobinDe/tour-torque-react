// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/section.jpg";
import img2 from "../assets/section1.jpg";
import img3 from "../assets/section2.jpg";
import LocationSelect from "../components/LocationSelect";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

const destinationOptions = [
  { value: "استانبول", label: "استانبول", icon: "📍" },
  { value: "آنتالیا", label: "آنتالیا", icon: "🏖️" },
  { value: "کاپادوکیا", label: "کاپادوکیا", icon: "🏔️" },
  { value: "ازمیر", label: "ازمیر", icon: "🌊" },
  { value: "بدروم", label: "بدروم", icon: "⛵" },
  { value: "مارماریس", label: "مارماریس", icon: "🏝️" },
  { value: "فتحیه", label: "فتحیه", icon: "🪂" },
  { value: "آنکارا", label: "آنکارا", icon: "🏛️" },
  { value: "طرابزون", label: "طرابزون", icon: "🌲" },
  { value: "قونیه", label: "قونیه", icon: "🕌" },
  { value: "بورسا", label: "بورسا", icon: "⛷️" },
  { value: "پاموکاله", label: "پاموکاله", icon: "♨️" },
  { value: "ادرنه", label: "ادرنه", icon: "🕌" },
];

const originOptions = [
  { value: "tehran", label: "تهران", icon: "🏙️" },
  { value: "isfahan", label: "اصفهان", icon: "🕌" },
  { value: "mashhad", label: "مشهد", icon: "🕌" },
];

function HeroSection() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dates, setDates] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState(3);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // اعتبارسنجی فقط برای مقصد (چون مبدا و تاریخ‌ها نمایشی هستند)
    if (!destination) {
      alert("لطفاً مقصد را انتخاب کنید");
      return;
    }

    // ساخت query string – مبدا و تاریخ‌ها هنوز ارسال می‌شوند ولی در صفحه نتایج استفاده نمی‌شوند
    const params = new URLSearchParams();
    params.append("destination", destination);
    if (origin) params.append("origin", origin);
    if (dates.length === 2) {
      params.append("checkIn", dates[0].format("YYYY/MM/DD"));
      params.append("checkOut", dates[1].format("YYYY/MM/DD"));
    }
    params.append("duration", duration.toString());

    navigate(`/tours?${params.toString()}`);
  };

  // تغییر خودکار بک‌گراند
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative bg-cover bg-center h-[95vh] md:h-[60vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          سفر رویایی به ترکیه
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          بهترین تورهای استانبول، آنتالیا و کاپادوکیا را با کمترین قیمت پیدا کنید
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20"
        >
          <div className="flex flex-col md:flex-row gap-2 md:items-end">
            {/* دکمه جستجو */}
            <div className="md:w-auto md:min-w-[120px]">
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 px-6 rounded-full transition text-sm"
              >
                جستجوی تور
              </button>
            </div>

            {/* طول تور */}
            <div className="flex-1">
              <label className="block text-xs text-white/80 mb-1 text-right">
                طول تور (روز)
              </label>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setDuration(Math.max(1, duration - 1))}
                  className="bg-white/20 text-white px-3 py-1 rounded-lg hover:bg-white/30 text-sm"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                  className="w-full bg-white/20 text-white p-3 rounded-lg border border-white/30 text-center text-sm focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="button"
                  onClick={() => setDuration(duration + 1)}
                  className="bg-white/20 text-white px-3 py-1 rounded-lg hover:bg-white/30 text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* مقصد */}
            <div className="flex-1">
              <LocationSelect
                label="مقصد"
                options={destinationOptions}
                value={destination}
                onChange={setDestination}
                placeholder="انتخاب مقصد"
              />
            </div>

            {/* مبدا (نمایشی) */}
            <div className="flex-1">
              <LocationSelect
                label="مبدا (اختیاری)"
                options={originOptions}
                value={origin}
                onChange={setOrigin}
                placeholder="انتخاب مبدا"
                searchable={false}
              />
            </div>

            {/* تاریخ ورود و خروج (نمایشی) */}
            <div className="flex-1 md:flex-[2]">
              <label className="block text-xs text-white/80 mb-1 text-right">
                تاریخ ورود و خروج (اختیاری)
              </label>
              <DatePicker
                value={dates}
                onChange={setDates}
                range
                rangeHover
                calendar={persian}
                locale={persian_fa}
                inputClass="w-full bg-white/20 text-white p-3 rounded-lg border border-white/30 focus:ring-2 focus:ring-amber-400 text-right"
                containerClassName="w-full"
                placeholder="انتخاب بازه تاریخ"
                format="YYYY/MM/DD"
                className="bg-dark"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;