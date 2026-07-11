import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
function Navbar() {
  const [menuopen,setmenuopen]=useState(false);
const toggleMenu = () => {
    setmenuopen(prevState => !prevState);
  };
  return (
    <nav className=" text-white w-full  bg-emerald-800 flex flex-auto shadow-md sticky top-0 z-50">
      <div className="w-full flex items-center justify-between h-20 px-0 md:px-4">
        {/* لوگو */}
        <Link to="/" className=" mr-auto py-7 ">
          <img src={logo} alt="logo" className=" w-44 h-20  " />
        </Link>

        {/* منوی دسکتاپ */}
        
        {/* دکمه ورود و همبرگر */}
        <div className="flex items-center gap-4 mr-20 ">
            <ul className="hidden md:flex  items-center space-x-1">
          
          <li>
            <Link to="/tours" className="px-8 py-7 hover:bg-green-700 rounded-md transition">
              تورها
            </Link>
          </li>
          <li>
            <Link to="/HotelsPage" className="px-8 py-7 hover:bg-green-700 rounded-md transition">
            هتل
            </Link>
          </li>
          <li>
            <Link to="/BlogPage" className="px-8 py-7 hover:bg-green-700 rounded-md transition">
              بلاگ
            </Link>
          </li>
          
          <li>
            <Link to="/travelogue" className="px-8 py-7 hover:bg-green-700 hover:text-white rounded-md transition">
              سفر نامه
            </Link>
          </li><li>
            <Link to="/visa" className="px-8 py-7 hover:bg-green-700 hover:text-white rounded-md transition">
              ویزا
            </Link>
          </li><li>
            <Link to="/gathering" className="px-8 py-7 hover:bg-green-700 hover:text-white rounded-md transition">
              دورهمی
            </Link>
          </li><li>
            <Link to="/popular-tours" className="px-8 py-7 hover:bg-green-700 hover:text-white rounded-md transition">
تورهای محبوب           </Link>
          </li><li>
            <Link to="/" className="px-8 py-7 hover:bg-green-700 hover:text-white rounded-md transition">
              خانه
            </Link>
          </li>
        </ul>

          <button className="bg-amber-500  text-emerald-900 px-4 py-2 ml-2 rounded-full font-semibold hover:bg-amber-400 transition">
            ورود / ثبت‌نام
          </button>
          {/* همبرگر (موبایل) */}
         
         <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="flex flex-col gap-1.5 p-2 focus:outline-none" aria-label="منو">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {menuopen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-emerald-800 flex flex-col items-center py-4 space-y-3 shadow-lg">
          
            <Link to="/" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">خانه</Link>
            <Link to="/tours" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">تورها</Link>
            <Link to="/hotels" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">هتل</Link>
            <Link to="/blog" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">بلاگ</Link>
            <Link to="/travelog" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">سفرنامه</Link>
            <Link to="/visa" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">ویزا</Link>
            <Link to="/gathering" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">دورهمی</Link>
            <Link to="/discount" onClick={toggleMenu} className="w-full py-2 hover:bg-green-700 rounded-md text-center">تخفیف ویژه</Link>
           
          
        </div>
      )}
      </div>

    
      
    </nav>
  );
}

export default Navbar;