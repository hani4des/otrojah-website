import React from 'react';
import HeroSlider from '../components/HeroSlider';
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

      {/* 2. Three Feature Banners */}
      <BannersSection />

      {/* 3. About Overview */}
      <AboutOverviewSection />

      {/* 4. Programs & Aid (7 Programs) */}
      <ProgramsSection />

      {/* 5. Active Projects with Live Meters */}
      <ProjectsSection />

      {/* 6. Statistics & Field Impact */}
      <StatsSection />

      {/* 7. Media Center Highlights */}
      <MediaSection />

      {/* 8. Verified Location & Map */}
      <MapSection />
    </div>
  );
}
