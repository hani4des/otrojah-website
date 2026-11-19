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
  Type
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
    resetFontSize
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
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'عن أترجة' },
    { id: 'activities', label: 'الأنشطة' },
    { id: 'telegram', label: 'قناة التليجرام' },
    { id: 'programs', label: 'برامجنا' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'zakat', label: 'حاسبة الزكاة' },
    { id: 'media', label: 'المركز الإعلامي' },
    { id: 'contact', label: 'تواصل معنا' },
    { id: 'privacy', label: 'سياسة الخصوصية' },
  ];

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

          {/* Left: Accessibility (Font Zoom + Theme Toggle) & Admin */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
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

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 relative whitespace-nowrap ${
                      isActive
                        ? 'text-utrujjah-green-900 dark:text-utrujjah-gold-300 font-bold bg-emerald-50 dark:bg-white/10'
                        : 'text-slate-600 dark:text-slate-300 hover:text-utrujjah-green-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-utrujjah-green-700 to-utrujjah-gold-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons: Donate CTA & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              {/* Standout "تبرع الآن" Button */}
              <button
                onClick={() => handleNavClick('donate')}
                className="relative group overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-utrujjah-gold-400 focus:ring-offset-2 transition-transform duration-200 active:scale-95 shadow-md shadow-utrujjah-green-900/15"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-utrujjah-green-800 via-utrujjah-gold-500 to-utrujjah-green-900 rounded-xl transition-all group-hover:opacity-90" />
                <div className="relative px-4 py-2 bg-gradient-to-r from-utrujjah-green-800 to-utrujjah-green-900 text-white rounded-[10px] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors group-hover:from-utrujjah-green-700 group-hover:to-utrujjah-green-800">
                  <Heart className="w-3.5 h-3.5 fill-utrujjah-gold-400 text-utrujjah-gold-400 animate-pulse" />
                  <span>تبرع الآن</span>
                </div>
              </button>

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
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-utrujjah-green-50 dark:bg-white/10 text-utrujjah-green-800 dark:text-utrujjah-gold-300 font-bold border-r-4 border-utrujjah-gold-500'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-utrujjah-gold-500"></span>}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100 dark:border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('donate')}
                  className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-utrujjah-green-800 to-utrujjah-green-700 shadow-md flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-utrujjah-gold-400 text-utrujjah-gold-400" />
                  <span>ساهم وتبرع الآن</span>
                </button>
                
                <button
                  onClick={() => handleNavClick('zakat')}
                  className="w-full py-2.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-utrujjah-gold-600" />
                  <span>حاسبة الزكاة الشرعية</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
