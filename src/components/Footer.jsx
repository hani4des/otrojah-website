import React from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  BookOpen,
  ShieldCheck,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import {
  TikTokIcon,
  TelegramIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon
} from './SocialIcons';

export default function Footer() {
  const { navigateTo, teamData, programs, projects } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-utrujjah-green-950 via-[#071f14] to-[#04140d] text-slate-300 border-t border-utrujjah-gold-500/20 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Decorative Arabesque Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-utrujjah-green-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-utrujjah-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 cursor-pointer select-none group w-fit"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-utrujjah-gold-400 to-utrujjah-green-500 shadow-md">
                <img
                  src="/logo-circle.png"
                  alt="شعار فريق أترجة"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <span className="block text-2xl font-black text-white font-alexandria">
                  فريق أترجة
                </span>
                <span className="text-xs font-semibold text-utrujjah-gold-400">
                  {teamData.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300/90 leading-relaxed font-tajawal mt-2">
              {teamData.footerDesc || "منصة رقمية ومؤسسية رائدة تعكس رسالة الفريق الإنسانية والتعليمية والقرآنية في المملكة العربية السعودية، مستلهمين التوجيه النبوي الشريف في بناء الإنسان وخدمة كتاب الله وغرس الأثر المستدام."}
            </p>

            <div className="flex items-center gap-2 text-xs text-utrujjah-gold-300/90 bg-emerald-900/40 border border-utrujjah-gold-500/20 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-utrujjah-gold-400 flex-shrink-0" />
              <span>{teamData.licenseNumber}</span>
            </div>

            {/* Social Links (TikTok, X, Instagram, YouTube, Telegram) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={teamData?.social?.tiktok || "https://www.tiktok.com/@otrojah3"}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-900/40 hover:bg-black hover:text-rose-400 text-slate-300 flex items-center justify-center transition-all border border-emerald-800/50 shadow-sm"
                title="TikTok: @otrojah3"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <button
                onClick={() => navigateTo('telegram')}
                className="w-9 h-9 rounded-xl bg-emerald-900/40 hover:bg-sky-500 hover:text-white text-slate-300 flex items-center justify-center transition-all border border-emerald-800/50 shadow-sm"
                title="قناة التليجرام"
              >
                <TelegramIcon className="w-4 h-4" />
              </button>

              <a
                href={teamData?.social?.x || "https://x.com/utrujjah"}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-900/40 hover:bg-utrujjah-gold-500 hover:text-slate-900 text-slate-300 flex items-center justify-center transition-all border border-emerald-800/50 shadow-sm"
                title="منصة X"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={teamData?.social?.instagram || "https://instagram.com/utrujjah"}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-900/40 hover:bg-pink-600 hover:text-white text-slate-300 flex items-center justify-center transition-all border border-emerald-800/50 shadow-sm"
                title="إنستغرام"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={teamData?.social?.youtube || "https://youtube.com/@utrujjah"}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-900/40 hover:bg-rose-600 hover:text-white text-slate-300 flex items-center justify-center transition-all border border-emerald-800/50 shadow-sm"
                title="يوتيوب"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-base font-bold text-utrujjah-gold-300 font-alexandria flex items-center gap-2">
              <span className="w-1.5 h-4 bg-utrujjah-gold-500 rounded-full"></span>
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'الصفحة الرئيسية' },
                { id: 'about', label: 'عن أترجة ورسالتنا' },
                { id: 'activities', label: 'الأنشطة وبثوث TikTok' },
                { id: 'telegram', label: 'قناة التليجرام النسائية' },
                { id: 'designs', label: 'تصاميم دعوية للهاتف' },
                { id: 'programs', label: 'برامجنا ومساعداتنا' },
                { id: 'projects', label: 'المشاريع القائمة' },
                { id: 'zakat', label: 'حاسبة الزكاة الشرعية' },
                { id: 'media', label: 'المركز الإعلامي والأخبار' },
                { id: 'contact', label: 'تواصل معنا' },
                { id: 'privacy', label: 'سياسة الخصوصية' }
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => navigateTo(link.id)}
                    className="flex items-center gap-1.5 hover:text-utrujjah-gold-300 transition-colors text-slate-300/80 hover:translate-x-[-3px] transform duration-150"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-utrujjah-gold-500/70" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links (Col 7-9) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-base font-bold text-utrujjah-gold-300 font-alexandria flex items-center gap-2">
              <span className="w-1.5 h-4 bg-utrujjah-gold-500 rounded-full"></span>
              برامج ومشاريع أترجة
            </h4>
            <ul className="space-y-2 text-sm">
              {programs.slice(0, 5).map(prog => (
                <li key={prog.id}>
                  <button
                    onClick={() => navigateTo('programs', prog.id)}
                    className="flex items-center gap-1.5 hover:text-utrujjah-gold-300 transition-colors text-slate-300/80 text-right hover:translate-x-[-3px] transform duration-150"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-utrujjah-gold-500/70" />
                    <span>{prog.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigateTo('donate')}
                  className="flex items-center gap-1.5 text-utrujjah-gold-400 font-bold hover:underline pt-1"
                >
                  <Heart className="w-3.5 h-3.5 fill-utrujjah-gold-400" />
                  <span>ساهم في كفالة حلقة أو يتيم</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-base font-bold text-utrujjah-gold-300 font-alexandria flex items-center gap-2">
              <span className="w-1.5 h-4 bg-utrujjah-gold-500 rounded-full"></span>
              العنوان والتواصل المعتمد
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-utrujjah-gold-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300/90 leading-relaxed">
                  {teamData.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-utrujjah-gold-400 flex-shrink-0" />
                <a href={`tel:${teamData.phone}`} className="hover:text-utrujjah-gold-300 text-slate-300/90 dir-ltr">
                  {teamData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-utrujjah-gold-400 flex-shrink-0" />
                <a href={`mailto:${teamData.email}`} className="hover:text-utrujjah-gold-300 text-slate-300/90">
                  {teamData.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('donate')}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-utrujjah-gold-500 to-utrujjah-gold-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>بوابة التبرع الفوري الآمن</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-right font-tajawal">
            جميع الحقوق محفوظة © فريق أترجة {currentYear}م – المملكة العربية السعودية.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => navigateTo('privacy')} className="hover:text-utrujjah-gold-300 transition-colors">
              سياسة الخصوصية وحماية البيانات
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-utrujjah-gold-300 transition-colors">
              مركز المساعدة
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('admin')} className="hover:text-utrujjah-gold-300 transition-colors text-slate-500">
              إدارة المنصة
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
