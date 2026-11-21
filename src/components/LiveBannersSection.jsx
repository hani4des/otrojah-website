import React from 'react';
import {
  Radio,
  BookOpen,
  Users,
  ExternalLink,
  Sparkles,
  ArrowLeft,
  Clock,
  CheckCircle2,
  Lock,
  MessageCircle
} from 'lucide-react';
import { TikTokIcon, TelegramIcon } from './SocialIcons';

export default function LiveBannersSection() {
  return (
    <section className="py-10 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 dark:from-[#05140c] dark:via-[#071910] dark:to-[#05140c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-utrujjah-gold-500/15 text-utrujjah-gold-800 dark:text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-500/30">
            <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-500 animate-spin" style={{ animationDuration: '8s' }} />
            <span>البثوث الحية والمنصات القرآنية التفاعلية</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-alexandria text-utrujjah-green-950 dark:text-white">
            شارك معنا في رحاب القرآن الكريم
          </h2>
        </div>

        {/* 3 Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ========================================================
              BANNER 1: الختمة اليومية - بث TikTok المباشر
              ======================================================== */}
          <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#0c1f17] via-[#092419] to-black text-white border-2 border-emerald-500/30 dark:border-emerald-600/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:border-utrujjah-gold-400/60 transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Top Row: Live Indicator + Platform */}
              <div className="flex items-center justify-between gap-2 mb-4">
                {/* Active Live Broadcast Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/25 border border-rose-500/60 text-rose-300 text-xs font-bold shadow-inner animate-pulse">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                  </span>
                  <span>بث مباشر يعمل الآن</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/20 flex items-center justify-center text-white shadow-md">
                  <TikTokIcon className="w-5 h-5 text-rose-400" />
                </div>
              </div>

              {/* Title & Timing */}
              <h3 className="text-xl sm:text-2xl font-black font-alexandria text-white mb-2 leading-snug">
                ختمة أُترُجة اليومية
                <span className="block text-utrujjah-gold-400 text-sm sm:text-base font-bold mt-1">
                  - للرجال - الساعة 9 م بتوقيت مكة
                </span>
              </h3>

              {/* Live Signal Indicator Pill */}
              <div className="bg-white/10 dark:bg-white/5 border border-white/10 p-3 rounded-2xl flex items-center gap-2.5 my-4">
                <Radio className="w-4 h-4 text-rose-400 animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-100 font-tajawal">
                  يُبث يومياً على حساب أترجة في منصة TikTok
                </span>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-tajawal">
                تلاوة ومدارسة مباركة لأجزاء القرآن الكريم يومياً بمشاركة وتفاعل المتابعين على منصة TikTok.
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-5 mt-4 border-t border-white/10">
              <a
                href="https://www.tiktok.com/@otrojah3"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 hover:brightness-110 text-white flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                <Radio className="w-4 h-4 animate-pulse" />
                <span>متابعة البث على TikTok</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>
            </div>
          </div>

          {/* ========================================================
              BANNER 2: موقع متابعة الختمة (othroja.manus.space)
              ======================================================== */}
          <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#123824] via-[#0d2a1b] to-[#071a11] text-white border-2 border-utrujjah-gold-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:border-utrujjah-gold-400 transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-utrujjah-gold-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Top Row: Badge + Icon */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-utrujjah-gold-500/20 border border-utrujjah-gold-400/40 text-utrujjah-gold-300 text-xs font-bold">
                  <Sparkles className="w-3 h-3 text-utrujjah-gold-400" />
                  <span>منصة متابعة الختمة</span>
                </span>

                <div className="w-10 h-10 rounded-xl bg-utrujjah-gold-500/20 border border-utrujjah-gold-400/30 flex items-center justify-center text-utrujjah-gold-300 shadow-md">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Slogan */}
              <h3 className="text-xl sm:text-2xl font-black font-alexandria text-white mb-2 leading-snug">
                تابع ختمتك معنا
              </h3>

              <div className="bg-emerald-950/60 border border-utrujjah-gold-500/30 p-3 rounded-2xl my-4 text-xs font-tajawal text-utrujjah-gold-200">
                منصة رقمية مخصصة لتسجيل ومتابعة ختمتك اليومية خطوة بخطوة مع جماعة القراء.
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-tajawal">
                ادخل إلى منصة متابعة الختمة وسجل قراءتك لتكون شريكاً في إتمام الختمات المشتركة.
              </p>
            </div>

            {/* Action CTA with Required Additional Button: (سجل ختمتك وتابع معنا) */}
            <div className="pt-5 mt-4 border-t border-white/10 space-y-2">
              <a
                href="https://othroja.manus.space/"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-utrujjah-gold-500 via-amber-400 to-utrujjah-gold-600 hover:brightness-110 text-slate-950 flex items-center justify-center gap-2 shadow-gold-glow active:scale-95 transition-all"
              >
                <BookOpen className="w-4 h-4 fill-slate-950" />
                <span>(سجل ختمتك وتابع معنا)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>
            </div>
          </div>

          {/* ========================================================
              BANNER 3: أكاديمية أُترُجة للعلوم القرآنية (للنساء فقط)
              ======================================================== */}
          <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#172e3d] via-[#0d222f] to-[#07131b] text-white border-2 border-sky-500/30 dark:border-sky-600/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:border-sky-400/60 transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Top Row: Women-Only Badge + Telegram/TikTok Icons */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-bold">
                  <Lock className="w-3 h-3" />
                  <span>للنساء فقط</span>
                </span>

                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shadow-md">
                  <TelegramIcon className="w-5 h-5 text-sky-400" />
                </div>
              </div>

              {/* Title & Details */}
              <h3 className="text-xl sm:text-2xl font-black font-alexandria text-white mb-2 leading-snug">
                أكاديمية أُترُجة للعلوم القرآنية
              </h3>

              <div className="bg-sky-950/60 border border-sky-400/30 p-3 rounded-2xl my-4 text-xs font-tajawal text-sky-200">
                للنساء فقط ، للانضمام التواصل مع مشرفات القناة
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-tajawal">
                تعليم وتصحيح التلاوة وأسس التجويد وبثوث خاصة بكادر وإشراف نسائي متكامل 100%.
              </p>
            </div>

            {/* Action CTA: Linked to TikTok account as requested */}
            <div className="pt-5 mt-4 border-t border-white/10">
              <a
                href="https://www.tiktok.com/@otrojah3"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-600 via-sky-500 to-teal-600 hover:brightness-110 text-white flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>تواصلِ مع المشرفات عبر TikTok</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
