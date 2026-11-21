import React from 'react';
import HeroSlider from '../components/HeroSlider';
import NewsTickerBar from '../components/NewsTickerBar';
import LiveBannersSection from '../components/LiveBannersSection';
import BannersSection from '../components/BannersSection';
import AboutOverviewSection from '../components/AboutOverviewSection';
import ProgramsSection from '../components/ProgramsSection';
import ProjectsSection from '../components/ProjectsSection';
import StatsSection from '../components/StatsSection';
import MediaSection from '../components/MediaSection';
import MapSection from '../components/MapSection';

export default function HomePage() {
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 1.1 News Ticker Bar (Placed directly under the big slider) */}
      <NewsTickerBar />

      {/* 2. Three Live Quranic & Broadcast Banners */}
      <LiveBannersSection />

      {/* 3. Three Institutional Banners */}
      <BannersSection />

      {/* 4. About Overview */}
      <AboutOverviewSection />

      {/* 5. Programs & Aid (7 Programs) */}
      <ProgramsSection />

      {/* 6. Active Projects with Live Meters */}
      <ProjectsSection />

      {/* 7. Statistics & Field Impact */}
      <StatsSection />

      {/* 8. Media Center Highlights */}
      <MediaSection />

      {/* 9. Verified Location & Map */}
      <MapSection />
    </div>
  );
}
