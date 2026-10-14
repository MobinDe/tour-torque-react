// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import TourDetailPage from './pages/TourDetailPage'; // 🆕 اضافه کن
import PopularTours from './components/PopularTours';
import GatheringPage from './pages/GatheringPage';
import VisaPage from './pages/VisaPage';
import TraveloguePage from './pages/TraveloguePage';
import BlogPage from './pages/BlogPage'
import HotelsPage from './pages/HotelsPage'

function App() {
  return (
    <>
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/tours/:id" element={<TourDetailPage />} /> {/* 🆕 این خطه که کم بود */}
          <Route path="/popular-tours" element={<PopularTours />} />
          <Route path="/gathering" element={<GatheringPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/travelogue" element={<TraveloguePage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/HotelsPage" element={<HotelsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;