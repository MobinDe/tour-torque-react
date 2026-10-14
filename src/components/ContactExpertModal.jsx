// src/components/ContactExpertModal.jsx
import React, { useState } from "react";
import {
  HiOutlineX,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineClock,
  HiOutlineChat,
  HiOutlineCheck,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const toPersianNum = (num) =>
  num?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) || "";

const ContactExpertModal = ({ isOpen, onClose, tourName }) => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const expert = {
    name: "خانم یعقوبی",
    avatar: "https://i.pravatar.cc/200?img=45",
    role: "کارشناس ارشد تورهای ترکیه",
    experience: "۸ سال سابقه",
    phone: "09121234567",
    availability: "پاسخگویی ۹ صبح تا ۹ شب",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      alert("لطفاً نام و شماره تماس را وارد کنید");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setForm({ name: "", phone: "", message: "" });
      onClose();
    }, 2500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setForm({ name: "", phone: "", message: "" });
    onClose();
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= حالت موفقیت ================= */}
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="relative w-20 h-20 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-l from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/30">
                <HiOutlineCheck className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-xl font-black text-gray-800 mb-2">
              درخواست شما ثبت شد! 🎉
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              کارشناس ما در اسرع وقت با شما تماس می‌گیرد
            </p>
            <p className="text-xs text-gray-400 mb-6">
              میانگین زمان پاسخگویی: کمتر از ۵ دقیقه
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-[10px] text-amber-600 font-bold mb-1">
                شماره تماس ما
              </p>
              <p className="text-base font-black text-amber-700" dir="ltr">
                {toPersianNum(expert.phone)}
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* ================= هدر گرادیانی (روشن‌تر) ================= */}
            <div className="relative bg-gradient-to-l from-amber-300 via-amber-400 to-amber-500 px-6 pt-6 pb-20 rounded-t-3xl">
              <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden rounded-t-3xl">
                <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-white/40 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full bg-amber-600/30 blur-3xl" />
              </div>

              <button
                onClick={handleClose}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md flex items-center justify-center text-white transition active:scale-90 z-10"
                aria-label="بستن"
              >
                <HiOutlineX className="w-5 h-5" />
              </button>

              <div className="relative text-center">
                <h2 className="text-lg font-black text-white mb-1 drop-shadow-sm">
                  ارتباط با کارشناسان ما
                </h2>
                <p className="text-xs text-white/95 drop-shadow-sm">
                  پاسخگوی سوالات شما هستیم
                </p>
              </div>
            </div>

            {/* ================= بدنه ================= */}
            <div className="relative px-6 -mt-14 pb-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-5">
                {/* آواتار کارشناس */}
                <div className="flex flex-col items-center -mt-16 mb-3">
                  <div className="relative">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/200x200?text=Expert";
                      }}
                    />
                    <span className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </span>
                  </div>
                </div>

                {/* اطلاعات کارشناس */}
                <div className="text-center mb-5">
                  <h3 className="text-base font-black text-gray-800 mb-1 flex items-center justify-center gap-1.5">
                    {expert.name}
                    <HiOutlineBadgeCheck className="w-4 h-4 text-amber-500" />
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{expert.role}</p>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <HiOutlineUser className="w-3 h-3" />
                      {expert.experience}
                    </span>
                    <span className="w-px h-3 bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <HiOutlineClock className="w-3 h-3" />
                      {expert.availability}
                    </span>
                  </div>
                </div>

                {/* نمایش تور */}
                {tourName && (
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-4">
                    <p className="text-[10px] text-amber-600 font-bold mb-1">
                      درباره‌ی این تور مشاوره می‌خواید:
                    </p>
                    <p className="text-xs text-amber-800 font-bold line-clamp-1">
                      {tourName}
                    </p>
                  </div>
                )}

                {/* دکمه‌های تماس */}
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  <a
                    href={`tel:${expert.phone}`}
                    className="flex items-center justify-center gap-1.5 bg-gradient-to-l from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white text-xs font-bold py-3 rounded-xl shadow-md shadow-amber-400/25 hover:shadow-lg hover:shadow-amber-400/50 active:scale-95 transition-all"
                  >
                    <HiOutlinePhone className="w-4 h-4" />
                    تماس تلفنی
                  </a>
                  <a
                    href={`https://wa.me/98${expert.phone.slice(1)}?text=${encodeURIComponent(
                      `سلام، درباره ${tourName || "تور"} سوال داشتم`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-gradient-to-l from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-xs font-bold py-3 rounded-xl shadow-md shadow-green-500/20 hover:shadow-lg active:scale-95 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    واتساپ
                  </a>
                </div>

                {/* خط جداکننده */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-[10px] text-gray-400 font-bold">
                    یا فرم زیر رو پر کن
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* فرم */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1.5">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="مثلاً علی رضایی"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1.5">
                      شماره تماس *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="09123456789"
                      dir="ltr"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1.5">
                      توضیحات (اختیاری)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={2}
                      placeholder="سوال یا درخواست خاصی داری؟"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-l from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white text-sm font-black py-3 rounded-xl shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 active:scale-[0.98] transition-all"
                  >
                    <HiOutlineChat className="w-4 h-4" />
                    درخواست تماس
                  </button>
                </form>

                {/* پیام پایین */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-[10px] text-gray-400">
                  <HiOutlineClock className="w-3 h-3" />
                  پاسخگویی سریع در کمتر از ۵ دقیقه
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out both;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.21, 1.02, 0.73, 1) both;
        }
      `}</style>
    </div>
  );
};

export default ContactExpertModal;