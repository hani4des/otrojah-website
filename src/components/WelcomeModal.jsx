import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Sparkles,
  ArrowLeft,
  BookOpen,
  HeartHandshake,
  LogIn
} from 'lucide-react';

export default function WelcomeModal() {
  const { teamData } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const welcomeConfig = teamData?.welcomeModal || {
    enabled: true,
    title: "أهلاً ومرحباً بكم في الموقع الرسمي لفريق أُترُجة",
    dua: "نسأل الله لنا ولكم القبول والإخلاص في القول والعمل",
    buttonText: "الدخول إلى الموقع"
  };

  useEffect(() => {
    if (welcomeConfig.enabled === false) return;
    try {
      const hasSeen = sessionStorage.getItem('utrujjah_welcome_dismissed');
      if (!hasSeen) {
        // Small delay for smooth entrance after page mount
        const timer = setTimeout(() => setIsOpen(true), 350);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      setIsOpen(true);
    }
  }, [welcomeConfig.enabled]);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem('utrujjah_welcome_dismissed', 'true');
    } catch (e) {}
    setIsOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      {/* Background click overlay */}
      <div className="absolute inset-0" onClick={handleDismiss} />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden border-2 border-utrujjah-gold-500/60 shadow-2xl shadow-utrujjah-gold-500/20 bg-gradient-to-b from-[#092b1a] via-[#051c11] to-[#021008] text-white p-6 sm:p-8 text-center space-y-6 animate-scaleUp z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Islamic Decorative Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#e5b842_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-utrujjah-gold-500/15 blur-3xl pointer-events-none rounded-full" />

        {/* Close Button Top-Left */}
        <button
          onClick={handleDismiss}
          type="button"
          className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-utrujjah-gold-400"
          aria-label="إغلاق الرسالة الترحيبية"
          title="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Official Logo Emblem with Radiant Halo */}
        <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32">
          {/* Animated Gold Halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-utrujjah-gold-500 to-amber-600 opacity-80 blur-md animate-pulse" />
          
          {/* Leaf Ornaments around circle */}
          <div className="absolute -top-1 -right-2 z-20 pointer-events-none">
            <svg className="w-5 h-5 text-utrujjah-gold-400 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
            </svg>
          </div>
          <div className="absolute -bottom-1 -left-2 z-20 pointer-events-none">
            <svg className="w-5 h-5 text-emerald-400 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.5 5.5 3.5 7.5L12 22l6.5-2.5C20.5 17.5 22 15 22 12c0-5.5-4.5-10-10-10z"/>
            </svg>
          </div>

          {/* Logo Frame */}
          <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-utrujjah-gold-400 via-amber-500 to-utrujjah-gold-600 shadow-xl flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden bg-white p-1.5 flex items-center justify-center shadow-inner">
              <img
                src="/logo-circle.png"
                alt="شعار فريق أترجة"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Slogan Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-utrujjah-gold-500/20 border border-utrujjah-gold-400/40 text-utrujjah-gold-300 text-xs font-semibold backdrop-blur-sm shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-300 animate-spin" style={{ animationDuration: '8s' }} />
          <span>فريق تطوعي طموح • خدمة القرآن الكريم</span>
        </div>

        {/* Welcome Headline */}
        <div className="space-y-4 pt-1">
          <h2
            id="welcome-modal-title"
            className="text-xl sm:text-2xl font-bold font-alexandria leading-[1.85] sm:leading-[1.95] text-white tracking-normal px-2"
          >
            {welcomeConfig.title || 'أهلاً ومرحباً بكم في الموقع الرسمي لفريق أُترُجة'}
          </h2>

          {/* Dua Callout Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-utrujjah-gold-500/10 via-emerald-900/50 to-utrujjah-gold-500/10 border border-utrujjah-gold-400/40 text-utrujjah-gold-200 font-tajawal text-sm sm:text-base leading-relaxed shadow-inner">
            <p className="font-semibold text-utrujjah-gold-300 leading-relaxed">
              {welcomeConfig.dua || 'نسأل الله لنا ولكم القبول والإخلاص في القول والعمل'}
            </p>
          </div>
        </div>

        {/* Quick Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-utrujjah-gold-400" />
            <span>ختمة قرآنية يومية</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>أكاديمية أُترُجة للعلوم القرآنية</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center gap-1.5">
            <HeartHandshake className="w-3 h-3 text-rose-400" />
            <span>مبادرات إحسان وتطوع</span>
          </span>
        </div>

        {/* Entry Button (أيقونة وزر الدخول إلى الموقع) */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleDismiss}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-utrujjah-gold-500 to-amber-600 hover:from-amber-300 hover:via-utrujjah-gold-400 hover:to-amber-500 text-slate-950 font-black font-alexandria text-sm sm:text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer border border-amber-200"
          >
            {/* Shimmer light effect */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <span className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
            </span>

            <LogIn className="w-5 h-5 text-slate-950 group-hover:translate-x-0.5 transition-transform shrink-0" />
            <span>{welcomeConfig.buttonText || 'الدخول إلى الموقع'}</span>
            <ArrowLeft className="w-4 h-4 text-slate-950 group-hover:-translate-x-1 transition-transform shrink-0" />
          </button>
        </div>

      </div>
    </div>
  );
}
