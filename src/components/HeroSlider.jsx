import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
  Heart,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Calculator,
  ShieldCheck
} from 'lucide-react';

export default function HeroSlider() {
  const { heroSlides, navigateTo } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = heroSlides.length;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 60) {
      nextSlide();
    }
    if (touchEndX.current - touchStartX.current > 60) {
      prevSlide();
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <div
      className="relative w-full overflow-hidden bg-utrujjah-green-950 dark:bg-black text-white min-h-[500px] md:min-h-[560px] flex items-center select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Islamic Geometric SVG Overlay */}
      <div className="absolute inset-0 bg-islamic-stars opacity-40 z-0 pointer-events-none" />

      {/* Dynamic Background Gradients */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-all duration-1000 ease-in-out z-0`}
      />

      {/* Decorative Golden Ambient Lights & Arches */}
      <div className="absolute -top-32 right-1/4 w-[450px] h-[450px] bg-utrujjah-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-utrujjah-green-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text and Actions (Col 1-7) - Proportional Font Sizes */}
          <div className="lg:col-span-8 space-y-5 text-right animate-fadeIn">
            
            {/* Slogan Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-utrujjah-gold-500/20 border border-utrujjah-gold-400/40 text-utrujjah-gold-300 text-xs font-semibold backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{slide.badge}</span>
            </div>

            {/* Main Headline - Refined Font Size */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black font-alexandria leading-snug md:leading-[1.22] text-white">
              {slide.title}
            </h1>

            {/* Hadith / Quranic Slogan Subtitle */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-utrujjah-gold-300 font-tajawal bg-emerald-950/60 p-3 rounded-xl border-r-4 border-utrujjah-gold-500 max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Brief Description */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-tajawal">
              {slide.desc}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  if (slide.ctaLink.startsWith('project-')) {
                    navigateTo('projects', slide.ctaLink);
                  } else if (slide.ctaLink === 'zakat') {
                    navigateTo('zakat');
                  } else {
                    navigateTo('donate');
                  }
                }}
                className="btn-gold text-sm sm:text-base shadow-gold-glow px-6 py-3"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                <span>{slide.ctaText}</span>
              </button>

              <button
                onClick={() => navigateTo(slide.secondaryLink)}
                className="px-5 py-3 rounded-xl font-bold text-white border border-white/30 hover:bg-white/10 transition-all text-xs sm:text-sm flex items-center gap-2"
              >
                <span>{slide.secondaryText}</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Visual Side Card with Logo & Fluttering Leaves Animation (Col 8-12) */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
            <div className="relative group">
              
              {/* Outer Golden Glow Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-utrujjah-gold-400 to-utrujjah-green-500 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
              
              {/* =======================================================
                  Fluttering Leaves Around the Circular Emblem
                  ======================================================= */}
              
              {/* Leaf 1: Top Right Gold Leaf */}
              <div className="absolute -top-6 -right-4 z-20 pointer-events-none animate-flutter-1">
                <svg className="w-8 h-8 text-utrujjah-gold-400 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.5 5.5 3.5 7.5L12 22l6.5-2.5C20.5 17.5 22 15 22 12c0-5.5-4.5-10-10-10zm0 17.5c-3.5 0-6.5-2.5-7.5-5.5 2.5.5 5.5-1 7-3 1.5 2 4.5 3.5 7 3-1 3-4 5.5-7.5 5.5z"/>
                </svg>
              </div>

              {/* Leaf 2: Bottom Left Emerald Leaf */}
              <div className="absolute -bottom-6 -left-4 z-20 pointer-events-none animate-flutter-2">
                <svg className="w-9 h-9 text-emerald-400 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                </svg>
              </div>

              {/* Leaf 3: Top Left Sage Leaf */}
              <div className="absolute -top-4 -left-6 z-20 pointer-events-none animate-flutter-3">
                <svg className="w-7 h-7 text-emerald-300 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.5 5.5 3.5 7.5L12 22l6.5-2.5C20.5 17.5 22 15 22 12c0-5.5-4.5-10-10-10zm0 17.5c-3.5 0-6.5-2.5-7.5-5.5 2.5.5 5.5-1 7-3 1.5 2 4.5 3.5 7 3-1 3-4 5.5-7.5 5.5z"/>
                </svg>
              </div>

              {/* Leaf 4: Bottom Right Fluttering Leaf */}
              <div className="absolute -bottom-2 -right-8 z-20 pointer-events-none animate-flutter-1" style={{ animationDelay: '1.2s' }}>
                <svg className="w-6 h-6 text-amber-300 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                </svg>
              </div>

              {/* Leaf 5: Right Center Gentle Float */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 z-20 pointer-events-none animate-flutter-2" style={{ animationDelay: '2s' }}>
                <svg className="w-6 h-6 text-emerald-400 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.5 5.5 3.5 7.5L12 22l6.5-2.5C20.5 17.5 22 15 22 12c0-5.5-4.5-10-10-10z"/>
                </svg>
              </div>

              {/* Glass Frame Card */}
              <div className="relative w-72 h-72 rounded-full p-2.5 bg-gradient-to-b from-utrujjah-gold-400/40 via-emerald-800/20 to-utrujjah-gold-600/30 backdrop-blur-md border border-utrujjah-gold-400/50 flex items-center justify-center shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-2 flex items-center justify-center shadow-inner">
                  <img
                    src="/logo-circle.png"
                    alt="شعار فريق أترجة"
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-2 -right-4 bg-utrujjah-green-900/95 border border-utrujjah-gold-400/60 text-utrujjah-gold-200 px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <BookOpen className="w-4 h-4 text-utrujjah-gold-400" />
                <span className="text-xs font-bold">خدمة القرآن الكريم</span>
              </div>

              <div className="absolute -top-3 -left-4 bg-utrujjah-green-900/95 border border-utrujjah-gold-400/60 text-utrujjah-gold-200 px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-utrujjah-gold-400" />
                <span className="text-xs font-bold">مرخص ومعتمد رسمياً</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all z-20 focus:outline-none"
        aria-label="الشريحة السابقة"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all z-20 focus:outline-none"
        aria-label="الشريحة التالية"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Bottom Indicators & Autoplay Control */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'w-7 h-2 bg-utrujjah-gold-400'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`انتقل للشريحة ${idx + 1}`}
          />
        ))}

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-3 p-1 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white transition-all text-xs"
          title={isPlaying ? 'إيقاف الحركة التلقائية' : 'تشغيل الحركة التلقائية'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>
      </div>
    </div>
  );
}
