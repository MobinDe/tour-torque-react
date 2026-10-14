// src/components/TurCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineClock,
  HiOutlineArrowLeft,
  HiOutlineStar,
} from "react-icons/hi";

const toPersianNum = (num) =>
  num?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) || "";

const TurCard = ({ tour }) => {
  const navigate = useNavigate();
  const { id, name, image, price, duration, location, description, hotel } =
    tour;

  const formattedPrice = toPersianNum(price.toLocaleString("en-US"));

  const handleClick = () => {
    navigate(`/tours/${id}`);
  };

  const city = location?.split("،")[0] || "ترکیه";

  return (
    <div
      onClick={handleClick}
      dir="rtl"
      className="
        group relative flex flex-col cursor-pointer
        bg-white rounded-2xl overflow-hidden
        border border-gray-100
        shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)]
        hover:shadow-[0_12px_40px_-12px_rgba(251,191,36,0.3)]
        hover:border-amber-200 hover:-translate-y-1
        transition-all duration-300
        h-full
      "
    >
      {/* ================= تصویر ================= */}
      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=Tour";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* نشان مدت */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
          <HiOutlineClock className="w-3 h-3" />
          {toPersianNum(duration)} روز
        </div>

        {/* برچسب VIP */}
        {hotel && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-l from-amber-400 to-amber-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg shadow-amber-400/30">
            <HiOutlineStar className="w-3 h-3" />
            VIP
          </div>
        )}

        {/* نام شهر */}
        <div className="absolute bottom-3 right-3">
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-gray-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
            <HiOutlineLocationMarker className="w-3.5 h-3.5 text-amber-500" />
            {city}
          </div>
        </div>
      </div>

      {/* ================= محتوا ================= */}
      <div className="flex flex-col flex-grow p-4 gap-2.5">
        <h3 className="font-black text-base text-gray-800 leading-snug line-clamp-2 min-h-[2.75rem] group-hover:text-amber-600 transition-colors">
          {name}
        </h3>

        {hotel && (
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 bg-amber-50/60 border border-amber-100 rounded-lg px-2.5 py-1.5">
            <HiOutlineOfficeBuilding className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="line-clamp-1">
              <span className="text-gray-400">هتل:</span> {hotel}
            </span>
          </div>
        )}

        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 flex-grow">
          {description}
        </p>

        {/* ================= قیمت و دکمه ================= */}
        <div className="flex items-center justify-between gap-3 pt-3 mt-1 border-t border-dashed border-amber-100">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-gray-400 font-medium">
              شروع قیمت
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-black text-amber-600 whitespace-nowrap">
                {formattedPrice}
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                تومان
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="
              shrink-0 flex items-center gap-1.5
              bg-gradient-to-l from-amber-400 to-amber-500
              hover:from-amber-300 hover:to-amber-400
              text-white text-xs font-bold
              px-3.5 py-2.5 rounded-xl
              shadow-md shadow-amber-400/25
              hover:shadow-lg hover:shadow-amber-400/50
              active:scale-95 transition-all duration-200
            "
          >
            <span>رزرو</span>
            <HiOutlineArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-l from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default TurCard;