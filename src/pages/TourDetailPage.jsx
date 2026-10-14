// src/pages/TourDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlinePhone,
  HiOutlineCheck,
  HiOutlineStar,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineUser,
  HiOutlineArrowLeft,
  HiOutlineBadgeCheck,
  HiOutlineTruck,
  HiOutlineCreditCard,
  HiOutlineClock,
} from "react-icons/hi";
import { FaPlane, FaWhatsapp } from "react-icons/fa";
import ContactExpertModal from "../components/ContactExpertModal";

/* ================================================================ */
/*                     اعداد فارسی                                  */
/* ================================================================ */
const toPersianNum = (num) => {
  if (num === null || num === undefined) return "";
  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

const formatPrice = (price) => {
  return toPersianNum(price.toLocaleString("en-US"));
};

/* ================================================================ */
/*                    کامپوننت اصلی                                 */
/* ================================================================ */
const TourDetailPage = () => {
  const { id } = useParams();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const [selectedOrigin, setSelectedOrigin] = useState("تهران");
  const [departureDate, setDepartureDate] = useState("1405/07/24");
  const [returnDate, setReturnDate] = useState("1405/07/26");
  const [isUpdating, setIsUpdating] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ------- خواندن tours.json ------- */
  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("/tours.json")
      .then((res) => {
        if (!res.ok) throw new Error("خطا در خواندن فایل");
        return res.json();
      })
      .then((data) => {
        const found = data.find((t) => t.id === parseInt(id));
        if (found) {
          setTour(found);
          const days = found.duration || 3;
          setReturnDate(`1405/07/${24 + days}`);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  /* ================================================================ */
  /*                     حالت‌های لودینگ و خطا                       */
  /* ================================================================ */

  if (loading) {
    return (
      <div
        dir="rtl"
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div
        dir="rtl"
        className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
      >
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gray-100 flex items-center justify-center">
            <HiOutlineLocationMarker className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            تور مورد نظر پیدا نشد
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            ممکنه این تور حذف شده باشه یا آدرس اشتباه باشه
          </p>
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 bg-gradient-to-l from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white text-sm font-bold px-5 py-3 rounded-xl shadow-md shadow-amber-400/25 transition"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            بازگشت به لیست تورها
          </Link>
        </div>
      </div>
    );
  }

  /* ================================================================ */
  /*                       عملیات‌ها                                  */
  /* ================================================================ */

  const handleUpdatePrice = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      alert(`قیمت بروزرسانی شد: ${formatPrice(tour.price)} تومان`);
    }, 1200);
  };

  const handleBook = () => {
    setIsModalOpen(true);
  };

  /* ------- گالری ------- */
  const images = [tour.image, tour.image, tour.image];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const city = tour.location?.split("،")[0] || "ترکیه";

  /* ------- خدمات ------- */
  const tourServices = [
    "بلیط رفت و برگشت",
    "ترانسفر فرودگاهی",
    "گشت شهری",
    "استقبال فرودگاهی",
    "لیدر پارسی زبان",
    "بیمه مسافرتی",
    "راهنمای محلی",
    "صبحانه بوفه",
  ];

  const hotelAmenities = [
    "رستوران",
    "کافی شاپ",
    "اینترنت داخل لابی",
    "تهویه مطبوع",
    "پارکینگ",
    "آسانسور",
    "سرویس اتاق",
    "لاندری",
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* ================= Breadcrumb ================= */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 flex-wrap">
          <Link to="/" className="hover:text-amber-500 transition">
            خانه
          </Link>
          <span>/</span>
          <Link to="/tours" className="hover:text-amber-500 transition">
            تورها
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-bold">{city}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* ===================================================== */}
          {/*                 ستون چپ (سایدبار)                     */}
          {/* ===================================================== */}
          <div className="lg:col-span-1 space-y-4">
            {/* ---------- کارت قیمت و رزرو ---------- */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h2 className="text-base font-black text-amber-600 text-center mb-5 leading-relaxed">
                قیمت {tour.name}
              </h2>

              {/* مبدا */}
              <div className="mb-3">
                <label className="block text-xs font-bold text-amber-600 mb-1.5">
                  مبدا تور
                </label>
                <div className="relative">
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="w-full bg-amber-50/50 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none transition appearance-none cursor-pointer"
                  >
                    <option value="تهران">تهران</option>
                    <option value="مشهد">مشهد</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="شیراز">شیراز</option>
                    <option value="تبریز">تبریز</option>
                  </select>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              {/* تاریخ رفت */}
              <div className="mb-3">
                <label className="block text-xs font-bold text-amber-600 mb-1.5">
                  تاریخ رفت
                </label>
                <input
                  type="text"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full bg-amber-50/50 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none transition text-left"
                  dir="ltr"
                />
              </div>

              {/* تاریخ برگشت */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-amber-600 mb-1.5">
                  تاریخ برگشت
                </label>
                <input
                  type="text"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-amber-50/50 border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none transition text-left"
                  dir="ltr"
                />
              </div>

              {/* دکمه بروزرسانی */}
              <button
                onClick={handleUpdatePrice}
                disabled={isUpdating}
                className="w-full bg-gradient-to-l from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-60 text-white text-sm font-bold py-3 rounded-xl shadow-md shadow-amber-400/25 transition active:scale-95 flex items-center justify-center gap-2"
              >
                {isUpdating ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    در حال بروزرسانی...
                  </>
                ) : (
                  "بروزرسانی قیمت"
                )}
              </button>

              {/* قیمت */}
              <div className="mt-4 flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <FaPlane className="w-4 h-4 text-amber-500 rotate-[-45deg]" />
                <span className="text-sm font-black text-gray-800">
                  {formatPrice(tour.price)} تومان
                </span>
              </div>

              {/* دکمه رزرو */}
              <button
                onClick={handleBook}
                className="w-full mt-3 bg-gradient-to-l from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white text-sm font-black py-3.5 rounded-xl shadow-lg shadow-amber-400/30 hover:shadow-xl hover:shadow-amber-400/50 transition active:scale-95 flex items-center justify-center gap-2"
              >
                <HiOutlineCheck className="w-5 h-5" />
                رزرو تور
              </button>
            </div>

            {/* ---------- کارت راهنما ---------- */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <img
                  src="https://i.pravatar.cc/150?img=45"
                  alt="راهنمای تور"
                  className="w-full h-full rounded-full object-cover border-4 border-amber-100"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Guide";
                  }}
                />
                <span className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
              </div>

              <h3 className="text-base font-black text-amber-600 mb-1">
                خانم یعقوبی
              </h3>
              <p className="text-[11px] text-gray-500 mb-3">
                راهنمای تور • ۸ سال سابقه
              </p>

              <div className="flex items-center justify-center gap-2">
                <a
                  href="tel:09121234567"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-gradient-to-l from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 py-2.5 rounded-xl shadow-md shadow-amber-400/25 transition"
                >
                  <HiOutlinePhone className="w-3.5 h-3.5" />
                  تماس
                </a>
                <a
                  href="https://wa.me/989121234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-gradient-to-l from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 py-2.5 rounded-xl shadow-md shadow-green-500/20 transition"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  واتساپ
                </a>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/*                ستون راست (محتوای اصلی)                */}
          {/* ===================================================== */}
          <div className="lg:col-span-2 space-y-5">
            {/* ---------- گالری ---------- */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="relative h-64 sm:h-80 w-full bg-gray-200">
                <img
                  src={images[currentImage]}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x400?text=Tour";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 right-4 left-4">
                  <h1 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg">
                    {tour.name}
                  </h1>
                  <div className="flex items-center gap-3 mt-1.5 text-white/90 text-xs flex-wrap">
                    <span className="flex items-center gap-1">
                      <HiOutlineLocationMarker className="w-3.5 h-3.5" />
                      {tour.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineCalendar className="w-3.5 h-3.5" />
                      {toPersianNum(tour.duration)} روز
                    </span>
                  </div>
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-amber-400 hover:bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-400/30 transition"
                  aria-label="قبلی"
                >
                  <HiOutlineChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-amber-400 hover:bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-400/30 transition"
                  aria-label="بعدی"
                >
                  <HiOutlineChevronLeft className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 p-3 border-t border-gray-200">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition ${
                      currentImage === idx
                        ? "border-amber-400 ring-2 ring-amber-200"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`تصویر ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/100x80?text=Img";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ---------- توضیحات ---------- */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h2 className="text-base font-black text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full" />
                درباره‌ی این تور
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tour.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <HiOutlineLocationMarker className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-500">مقصد</p>
                  <p className="text-xs font-bold text-gray-800">{city}</p>
                </div>
                <div className="text-center">
                  <HiOutlineClock className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-500">مدت</p>
                  <p className="text-xs font-bold text-gray-800">
                    {toPersianNum(tour.duration)} روز
                  </p>
                </div>
                <div className="text-center">
                  <FaPlane className="w-5 h-5 text-amber-500 mx-auto mb-1 rotate-[-45deg]" />
                  <p className="text-[10px] text-gray-500">مبدا</p>
                  <p className="text-xs font-bold text-gray-800">
                    {selectedOrigin}
                  </p>
                </div>
                <div className="text-center">
                  <HiOutlineBadgeCheck className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-500">نوع</p>
                  <p className="text-xs font-bold text-gray-800">
                    {tour.hotel ? "لوکس" : "معمولی"}
                  </p>
                </div>
              </div>
            </div>

            {/* ---------- خدمات و امکانات ---------- */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h2 className="text-base font-black text-amber-600 text-center mb-5">
                خدمات تور {tour.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                  <h3 className="text-sm font-black text-amber-600 text-center mb-3 pb-3 border-b border-amber-200">
                    خدمات تور
                  </h3>
                  <ul className="space-y-2.5">
                    {tourServices.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-700"
                      >
                        <span className="w-4 h-4 rounded-full bg-gradient-to-l from-amber-400 to-amber-500 text-white flex items-center justify-center shrink-0">
                          <HiOutlineCheck className="w-2.5 h-2.5" />
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                  <h3 className="text-sm font-black text-amber-600 text-center mb-3 pb-3 border-b border-amber-200">
                    امکانات هتل
                  </h3>
                  <ul className="space-y-2.5">
                    {hotelAmenities.map((amenity, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-700"
                      >
                        <span className="w-4 h-4 rounded-full bg-gradient-to-l from-amber-400 to-amber-500 text-white flex items-center justify-center shrink-0">
                          <HiOutlineCheck className="w-2.5 h-2.5" />
                        </span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ---------- نوار هتل ---------- */}
            {tour.hotel && (
              <div className="bg-gradient-to-l from-amber-400 via-amber-500 to-amber-600 rounded-2xl p-5 text-white shadow-lg shadow-amber-400/20">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/25 backdrop-blur flex items-center justify-center">
                      <HiOutlineStar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/90">هتل</p>
                      <h3 className="text-base font-black">{tour.hotel}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <HiOutlineStar
                        key={i}
                        className="w-5 h-5 text-white"
                        style={{ fill: "#ffffff" }}
                      />
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-[11px] text-white/90">مدت</p>
                    <p className="font-black">
                      {toPersianNum(tour.duration)} روز
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ---------- ویژگی‌ها ---------- */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <FeatureBox
                icon={HiOutlineBadgeCheck}
                title="ضمانت اصالت"
                desc="تور اورجینال"
              />
              <FeatureBox
                icon={HiOutlineTruck}
                title="ترانسفر"
                desc="فرودگاه تا هتل"
              />
              <FeatureBox
                icon={HiOutlineCreditCard}
                title="پرداخت امن"
                desc="درگاه بانکی"
              />
              <FeatureBox
                icon={HiOutlineUser}
                title="لیدر فارسی"
                desc="همراه شما"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/*              مودال ارتباط با کارشناس                   */}
      {/* ===================================================== */}
      <ContactExpertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourName={tour.name}
      />
    </div>
  );
};

/* ================================================================ */
/*                    کامپوننت کمکی                                */
/* ================================================================ */
const FeatureBox = ({ icon: Icon, title, desc }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-3 flex flex-col items-center text-center hover:shadow-md hover:border-amber-200 transition">
    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center mb-2">
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-[11px] font-black text-gray-800">{title}</p>
    <p className="text-[10px] text-gray-500 mt-0.5">{desc}</p>
  </div>
);

export default TourDetailPage;