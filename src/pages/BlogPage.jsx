// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import blogBg from '../assets/blog-bg.jpg';        // تصویر هیرو (اختیاری)
import article1 from '../assets/article1.jpg';
import article2 from '../assets/article2.jpg';
import article3 from '../assets/article3.jpg';
import article4 from '../assets/article4.jpg';
import article5 from '../assets/article5.jpg';
import article6 from '../assets/article6.jpg';

const dummyPosts = [
  {
    id: 1,
    image: article1,
    title: 'راهنمای کامل سفر به استانبول در بهار',
    excerpt: 'از شکوفه‌های گولهانه تا تراس‌های روباز؛ هر آنچه برای یک سفر بهاری نیاز دارید.',
    author: 'مریم احمدی',
    date: '۵ فروردین ۱۴۰۵',
    category: 'استانبول',
    readTime: '۸ دقیقه',
  },
  {
    id: 2,
    image: article2,
    title: '۵ هتل لوکس کاپادوکیا با چشم‌انداز بالن‌ها',
    excerpt: 'اقامت در غارهای باستانی با امکانات مدرن؛ انتخاب‌هایی که سفرتان را رویایی می‌کند.',
    author: 'امیررضا محمدی',
    date: '۱۲ فروردین ۱۴۰۵',
    category: 'کاپادوکیا',
    readTime: '۶ دقیقه',
  },
  {
    id: 3,
    image: article3,
    title: 'غذاهای خیابانی ترکیه که حتماً باید امتحان کنید',
    excerpt: 'از سیمیت و کومپیر تا میدیه دولما؛ با دنیای طعم‌های خیابانی ترکیه آشنا شوید.',
    author: 'سارا حسینی',
    date: '۲۰ فروردین ۱۴۰۵',
    category: 'غذا',
    readTime: '۵ دقیقه',
  },
  {
    id: 4,
    image: article4,
    title: 'نکاتی که قبل از خرید ملک در ترکیه باید بدانید',
    excerpt: 'قوانین جدید، مناطق مناسب و تجربه‌ی کسانی که در ترکیه خانه خریده‌اند.',
    author: 'علیرضا محمدی',
    date: '۲۸ فروردین ۱۴۰۵',
    category: 'مهاجرت',
    readTime: '۱۰ دقیقه',
  },
  {
    id: 5,
    image: article5,
    title: 'سواحل مخفی آنتالیا که توریست‌ها از آنها بی‌خبرند',
    excerpt: 'دور از شلوغی، در خلیج‌های کوچک و آب‌های زلال مدیترانه غوطه‌ور شوید.',
    author: 'نیلوفر تقوی',
    date: '۳ اردیبهشت ۱۴۰۵',
    category: 'آنتالیا',
    readTime: '۷ دقیقه',
  },
  {
    id: 6,
    image: article6,
    title: 'راهنمای اخذ ویزای تحصیلی ترکیه ۲۰۲۵',
    excerpt: 'تمام مراحل، مدارک و نکات مهم برای دریافت اقامت تحصیلی ترکیه به زبان ساده.',
    author: 'احمد کاظمی',
    date: '۱۰ اردیبهشت ۱۴۰۵',
    category: 'ویزا',
    readTime: '۹ دقیقه',
  },
];

const categories = ['همه', 'استانبول', 'کاپادوکیا', 'آنتالیا', 'غذا', 'ویزا', 'مهاجرت'];

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('همه');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // فیلتر مقالات بر اساس جستجو و دسته‌بندی
  const filteredPosts = dummyPosts.filter((post) => {
    const matchesSearch =
      search === '' ||
      post.title.includes(search) ||
      post.excerpt.includes(search) ||
      post.author.includes(search);
    const matchesCategory =
      activeCategory === 'همه' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // صفحه‌بندی
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-emerald-900">
      {/* هیرو سکشن */}
      <section
        className="relative h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="absolute inset-0 bg-emerald-900/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-amber-400 text-emerald-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
            📝 وبلاگ تورترکیه
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            راهنمای سفر، فرهنگ و <span className="text-amber-400">سبک زندگی</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            تازه‌ترین مطالب، نکات سفر، تجربیات و داستان‌هایی از قلب ترکیه
          </p>
        </div>
      </section>

      {/* محتوای اصلی: جستجو + دسته‌بندی + مقالات */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {/* نوار جستجو و دسته‌بندی */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          {/* جستجو */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="جستجوی مقاله..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-white/10 text-white placeholder:text-white/50 p-3 pr-10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* دسته‌بندی‌ها */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-emerald-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* گرید مقالات */}
        {currentPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl group hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center text-xs text-emerald-300 mb-2">
                    <span>{post.date}</span>
                    <span className="bg-amber-400/20 text-amber-400 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
                    {post.title}
                  </h3>
                  <p className="text-emerald-200 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-emerald-300">
                    <span>✍️ {post.author}</span>
                    <span>⏳ {post.readTime} مطالعه</span>
                  </div>
                  <button className="mt-4 w-full bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-2 rounded-lg transition text-sm">
                    ادامه مطلب
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-white/70 py-12">
            <span className="text-4xl block mb-4">🔍</span>
            مقاله‌ای با این مشخصات یافت نشد.
          </div>
        )}

        {/* صفحه‌بندی */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full text-sm font-bold transition ${
                  currentPage === page
                    ? 'bg-amber-400 text-emerald-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* خبرنامه */}
      <section className="py-12 px-4 bg-emerald-950/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">در خبرنامه عضو شوید</h2>
          <p className="text-emerald-200 mb-8">
            جدیدترین مقالات، راهنماهای سفر و تخفیف‌های ویژه را در ایمیل خود دریافت کنید.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="bg-white/20 text-white placeholder:text-white/60 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right flex-1"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-xl transition"
            >
              عضویت
            </button>
          </form>
        </div>
      </section>

      {/* فوتر */}
      <footer className="text-center py-6 border-t border-white/10">
        <p className="text-emerald-300">© ۱۴۰۵ تورترکیه | تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
};

export default BlogPage;