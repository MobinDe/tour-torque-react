// Pages/HomePage.jsx (یا هر کامپوننت اصلی شما)
import React from 'react';

import HeroSection from '../components/HeroSection';
import PopularTours from '../components/PopularTours';

import Takhfifha from '../components/Takhfifha';

const HomePage = () => {
  return (
    <div  >
      
      <HeroSection/>  
      <PopularTours/>
      <Takhfifha/>
    </div>
  );
};

export default HomePage;