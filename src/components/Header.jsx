import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  MapPin,
  Lock,
  Sparkles,
  Calculator,
  Moon,
  Sun,
  Type,
  Radio,
  Palette,
  BookOpen,
  Target,
  Newspaper
} from 'lucide-react';
import {
  TikTokIcon,
  TelegramIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon
} from './SocialIcons';

export default function Header() {
  const {
    currentPage,
    navigateTo,
    adminAuth,
    teamData,
    theme,
    toggleTheme,
    fontZoom,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    colorTheme,
    changeColorTheme
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'عن أترجة', icon: Sparkles, iconColor: 'text-utrujjah-gold-500' },
    { id: 'activities', label: 'الأنشطة', icon: Radio, iconColor: 'text-rose-500' },
    { id: 'telegram', label: 'قناة التليجرام', icon: TelegramIcon, iconColor: 'text-sky-500' },
    { id: 'designs', label: 'تصاميم', icon: Palette, iconColor: 'text-amber-500' },
    { id: 'programs', label: 'برامجنا', icon: BookOpen, iconColor: 'text-emerald-500' },
    { id: 'projects', label: 'المشاريع', icon: Target, iconColor: 'text-teal-500' },
    { id: 'media', label: 'المركز الإعلامي', icon: Newspaper, iconColor: 'text-utrujjah-gold-500' },
  ];

  const visibleNavLinks = navLinks.filter(link => {
    if (!teamData?.headerSectionsEnabled) return true;
    return teamData.headerSectionsEnabled[link.id] !== false;
  });

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      
      {/* Top Utility Announcement Bar */}
      <div className="bg-utrujjah-green-950 dark:bg-black text-emerald-100 text-xs py-2 px-4 border-b border-utrujjah-gold-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Right: Address & Phone */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-tajawal">
            <span className="flex items-center gap-1.5 text-utrujjah-gold-300">
              <MapPin className="w-3.5 h-3.5" />
              المملكة العربية السعودية – جدة – حي الشاطئ
            </span>
            <span className="hidden md:inline-block text-emerald-700">|</span>
            <a href="tel:+966126000000" className="hidden sm:flex items-center gap-1.5 hover:text-utrujjah-gold-300 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +966 12 600 0000
            </a>
          </div>

          {/* Social Icons Strip in Header */}
          <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
            <span className="text-[11px] text-emerald-400 font-bold hidden xl:inline">تابعنا:</span>
            
            <a
              href="https://www.tiktok.com/@otrojah3"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-black hover:text-rose-400 flex items-center justify-center transition-colors"
              title="TikTok: @otrojah3"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => handleNavClick('telegram')}
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
              title="قناة التليجرام"
            >
              <TelegramIcon className="w-3.5 h-3.5" />
            </button>

            <a
              href={teamData?.social?.x || "https://x.com/utrujjah"}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
              title="منصة X"
            >
              <XIcon className="w-3 h-3" />
            </a>

            <a
              href={teamData?.social?.instagram || "https://instagram.com/utrujjah"}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={teamData?.social?.youtube || "https://youtube.com/@utrujjah"}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors"
              title="YouTube"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Left: Accessibility (Font Zoom + Color Palette + Theme Toggle) & Admin */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Color Theme Selector (Item 11) */}
            <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2 py-1 border border-white/15" title="تغيير ألوان هوية الموقع">
              <span className="text-[10px] text-utrujjah-gold-300 font-bold hidden md:inline ml-1">المظهر:</span>
              <button
                onClick={() => changeColorTheme('emerald')}
                className={`w-3.5 h-3.5 rounded-full bg-[#1b633e] transition-transform ${
                  colorTheme === 'emerald' ? 'ring-2 ring-utrujjah-gold-400 scale-125' : 'opacity-60 hover:opacity-100'
                }`}
                title="اللون الزمردي الملكي (الأصلي)"
              />
              <button
                onClick={() => changeColorTheme('navy')}
                className={`w-3.5 h-3.5 rounded-full bg-[#1d5786] transition-transform ${
                  colorTheme === 'navy' ? 'ring-2 ring-utrujjah-gold-400 scale-125' : 'opacity-60 hover:opacity-100'
                }`}
                title="اللون الكحلي الملكي"
              />
              <button
                onClick={() => changeColorTheme('ruby')}
                className={`w-3.5 h-3.5 rounded-full bg-[#8f2139] transition-transform ${
                  colorTheme === 'ruby' ? 'ring-2 ring-utrujjah-gold-400 scale-125' : 'opacity-60 hover:opacity-100'
                }`}
                title="اللون العنابي الياقوتي"
              />
            </div>

            {/* Font Zoom Controls */}
            <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/15" title="التحكم بحجم الخط">
              <button
                onClick={decreaseFontSize}
                disabled={fontZoom <= -1}
                className="px-1.5 py-0.5 text-[11px] font-bold text-white hover:text-utrujjah-gold-300 disabled:opacity-40 transition-colors"
                title="تصغير الخط"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="px-1.5 py-0.5 text-[11px] font-bold text-utrujjah-gold-400 hover:text-white transition-colors border-x border-white/20"
                title="إعادة ضبط حجم الخط الافتراضي"
              >
                A
              </button>
              <button
                onClick={increaseFontSize}
                disabled={fontZoom >= 2}
                className="px-1.5 py-0.5 text-[11px] font-bold text-white hover:text-utrujjah-gold-300 disabled:opacity-40 transition-colors"
                title="تكبير الخط"
              >
                A+
              </button>
            </div>

            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-utrujjah-gold-300 flex items-center justify-center transition-colors border border-white/15"
              title={theme === 'dark' ? 'التحويل إلى الوضع النهاري' : 'التحويل إلى الوضع الليلي'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-utrujjah-gold-300" />}
            </button>

            {/* Admin entry link */}
            <button
              onClick={() => handleNavClick('admin')}
              className="inline-flex items-center gap-1 text-[11px] hover:text-utrujjah-gold-300 text-emerald-300/80 transition-colors mr-1"
              title="لوحة تحكم المشرفين"
            >
              <Lock className="w-3 h-3" />
              <span className="hidden sm:inline">{adminAuth.isAuthenticated ? 'لوحة التحكم' : 'دخول الإدارة'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#071910]/95 backdrop-blur-md shadow-md py-2.5 border-b border-emerald-900/10 dark:border-emerald-800/40'
            : 'bg-white dark:bg-[#071910] py-3.5 border-b border-emerald-900/5 dark:border-emerald-800/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Logo and Brand Identity */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group select-none flex-shrink-0"
            >
              <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-utrujjah-gold-500 via-utrujjah-green-600 to-utrujjah-gold-300 shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo-circle.png"
                  alt="شعار فريق أترجة"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <span className="block text-lg md:text-xl font-black text-utrujjah-green-950 dark:text-white font-alexandria tracking-tight leading-none group-hover:text-utrujjah-green-700 dark:group-hover:text-utrujjah-gold-400 transition-colors">
                  فريق أترجة
                </span>
                <span className="text-[10px] md:text-[11px] font-semibold text-utrujjah-gold-600 dark:text-utrujjah-gold-400 font-tajawal mt-0.5 block">
                  عطاء يمتد وأثر يبقى
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links (With Color Hover, Active Feedback & Matching Icons) */}
            <div className="hidden xl:flex items-center gap-1.5">
              {visibleNavLinks.map((link) => {
                const isActive = currentPage === link.id;
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`group px-3 py-2 rounded-xl text-sm xl:text-[14px] 2xl:text-[15px] font-bold transition-all duration-200 relative whitespace-nowrap flex items-center gap-1.5 border select-none ${
                      isActive
                        ? 'bg-gradient-to-r from-utrujjah-green-900 to-utrujjah-green-800 text-utrujjah-gold-300 dark:from-utrujjah-green-950 dark:to-utrujjah-green-900 dark:text-utrujjah-gold-300 font-extrabold shadow-md shadow-utrujjah-green-950/20 border-utrujjah-gold-500/50 ring-1 ring-utrujjah-gold-500/30'
                        : 'text-slate-700 dark:text-slate-200 border-transparent hover:bg-gradient-to-r hover:from-utrujjah-green-900 hover:to-utrujjah-green-800 hover:text-utrujjah-gold-300 dark:hover:from-utrujjah-green-950 dark:hover:to-utrujjah-green-900 dark:hover:text-utrujjah-gold-300 hover:border-utrujjah-gold-500/40 hover:shadow-md hover:shadow-utrujjah-green-950/25 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 active:bg-utrujjah-green-950 active:text-amber-400'
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-4 h-4 transition-all duration-200 group-hover:scale-110 group-hover:rotate-3 ${
                          isActive
                            ? 'text-utrujjah-gold-300'
                            : `${link.iconColor} group-hover:text-utrujjah-gold-300`
                        }`}
                      />
                    )}
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-utrujjah-gold-400 to-amber-300 rounded-full shadow-gold-glow" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons: Donate CTA & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              {/* Standout "تبرع الآن" Button (Item 1: Controlled via Admin Dashboard) */}
              {teamData?.showDonateButton !== false && (
                <button
                  onClick={() => handleNavClick('donate')}
                  className="relative group overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-transform duration-200 active:scale-95 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-xl animate-pulse" />
                  <div className="relative px-4 py-2 bg-gradient-to-r from-amber-500 via-utrujjah-gold-400 to-amber-500 text-slate-950 rounded-[10px] font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all group-hover:brightness-105">
                    <Heart className="w-4 h-4 fill-rose-600 text-rose-600 animate-bounce" />
                    <span className="font-alexandria font-bold">تبرع الآن</span>
                  </div>
                </button>
              )}

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-utrujjah-green-800 hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none"
                aria-label="القائمة الرئيسية"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-100 dark:border-emerald-800/40 bg-white/98 dark:bg-[#071910]/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {visibleNavLinks.map((link) => {
                const isActive = currentPage === link.id;
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 group border ${
                      isActive
                        ? 'bg-gradient-to-r from-utrujjah-green-900 to-utrujjah-green-800 text-utrujjah-gold-300 border-utrujjah-gold-500/40 shadow-sm'
                        : 'text-slate-700 dark:text-slate-200 border-transparent hover:bg-gradient-to-r hover:from-utrujjah-green-900 hover:to-utrujjah-green-800 hover:text-utrujjah-gold-300 dark:hover:from-utrujjah-green-950 dark:hover:to-utrujjah-green-900 dark:hover:text-utrujjah-gold-300 hover:border-utrujjah-gold-500/30 hover:shadow-md active:scale-[0.98]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {Icon && (
                        <Icon
                          className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                            isActive
                              ? 'text-utrujjah-gold-300'
                              : `${link.iconColor} group-hover:text-utrujjah-gold-300`
                          }`}
                        />
                      )}
                      <span>{link.label}</span>
                    </div>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-utrujjah-gold-400 shadow-gold-glow animate-pulse"></span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-utrujjah-gold-400 transition-colors"></span>
                    )}
                  </button>
                );
              })}

              {teamData?.showDonateButton !== false && (
                <div className="pt-3 mt-2 border-t border-slate-100 dark:border-white/10 flex flex-col gap-2">
                  <button
                    onClick={() => handleNavClick('donate')}
                    className="w-full py-3.5 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 via-utrujjah-gold-400 to-amber-500 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 border border-amber-300 active:scale-95 transition-all"
                  >
                    <Heart className="w-4 h-4 fill-rose-600 text-rose-600 animate-bounce" />
                    <span className="font-alexandria font-bold">ساهم وتبرع الآن</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
