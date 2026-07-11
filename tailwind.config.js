/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
        'blue-deep': '#1A2B4C',    // هدر و فوتر
        'blue-sky': '#0EA5E9',      // لینک‌ها
        'orange-bright': '#F97316', // دکمه اصلی رزرو
        'gray-light': '#F7F9FC',    // پس‌زمینه
        'gray-text': '#334155',     // متن اصلی
        'green-success': '#10B981', // پیام موفقیت
        'red-error': '#EF4444',     // پیام خطا
      }},
  },
  plugins: [],
}