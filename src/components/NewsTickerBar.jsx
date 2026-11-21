import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Bell,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Radio,
  Flame,
  Volume2,
  ExternalLink
} from 'lucide-react';

export default function NewsTickerBar() {
  const { teamData, navigateTo } = useApp();

  const tickerConfig = teamData?.ticker || {
    enabled: true,
    title: 'شريط الأخبار والإعلانات',
    items: [
      'بث الختمة القرآنية اليومية مستمر عبر منصة TikTok يومياً الساعة 9:00 مساءً بتوقيت مكة المكرمة',
      'انطلاق التسجيل في أكاديمية أُترُجة للعلوم القرآنية عبر قناة التليجرام المخصصة للنساء',
      'اكفل حلقة قرآنية واجعل لك صدقة جارية يتجدد أجرها في كل حرف يُتلى في صدور الحفظة',
      'رابط متابعة الختمة القرآنية متاح الآن للجميع لمتابعة ورد التلاوة والتسميع المباشر',
      'محاضرات إيمانية ودروس علمية أسبوعية كل خميس الساعة 9:30 مساءً على منصة TikTok',
      'أكثر من 18,450 مستفيد ومستفيدة من برامج ومبادرات فريق أترجة التطوعي حتى الآن'
    ]
  };

  // If disabled by administrator, do not render
  if (tickerConfig.enabled === false) {
    return null;
  }

  const items = Array.isArray(tickerConfig.items) && tickerConfig.items.length > 0
    ? tickerConfig.items.filter(item => item && item.trim().length > 0)
    : [
        'بث الختمة القرآنية اليومية مستمر عبر منصة TikTok يومياً الساعة 9:00 مساءً بتوقيت مكة المكرمة',
        'انطلاق التسجيل في أكاديمية أُترُجة للعلوم القرآنية عبر قناة التليجرام المخصصة للنساء'
      ];

  if (items.length === 0) return null;

  return (
    <section className="relative z-20 w-full bg-gradient-to-r from-utrujjah-green-950 via-[#0a3520] to-utrujjah-green-950 text-white border-y border-utrujjah-gold-500/30 shadow-md overflow-hidden select-none">
      
      {/* Subtle Islamic Decorative Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#e5b842_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto flex items-stretch">
        
        {/* Right Badge: Fixed Live News Label */}
        <div className="relative z-10 flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-l from-utrujjah-gold-500 via-amber-500 to-utrujjah-gold-600 text-slate-950 font-black text-xs sm:text-sm font-alexandria shadow-lg shrink-0 border-l border-amber-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-700"></span>
          </span>
          <Radio className="w-4 h-4 text-slate-950 animate-pulse hidden xs:inline-block" />
          <span className="whitespace-nowrap tracking-tight">{tickerConfig.title || 'شريط الأخبار'}</span>
        </div>

        {/* Scrolling News Ticker Container */}
        <div className="relative flex-1 overflow-hidden py-2 sm:py-2.5 flex items-center">
          
          {/* Subtle gradient fades on edges */}
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-[#0a3520] to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-utrujjah-green-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track: Duplicated list for seamless infinite loop (flows smoothly) */}
          <div
            className={`flex items-center gap-6 whitespace-nowrap ${
              tickerConfig.direction === 'ltr' ? 'animate-marquee-ltr' : 'animate-marquee-rtl'
            } hover:[animation-play-state:paused] cursor-pointer`}
          >
            {/* First Set of Items */}
            {items.map((newsText, idx) => (
              <div key={`news-1-${idx}`} className="flex items-center gap-4 text-xs sm:text-sm font-tajawal text-emerald-50 shrink-0">
                <span className="hover:text-utrujjah-gold-300 transition-colors font-medium">
                  {newsText}
                </span>
                {/* Separator Icon between news items */}
                <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 text-utrujjah-gold-400 shadow-sm shrink-0">
                  <Sparkles className="w-3 h-3 text-utrujjah-gold-300" />
                </div>
              </div>
            ))}

            {/* Second Set of Items (Duplicate for infinite seamless scroll) */}
            {items.map((newsText, idx) => (
              <div key={`news-2-${idx}`} className="flex items-center gap-4 text-xs sm:text-sm font-tajawal text-emerald-50 shrink-0">
                <span className="hover:text-utrujjah-gold-300 transition-colors font-medium">
                  {newsText}
                </span>
                {/* Separator Icon between news items */}
                <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 text-utrujjah-gold-400 shadow-sm shrink-0">
                  <Sparkles className="w-3 h-3 text-utrujjah-gold-300" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
