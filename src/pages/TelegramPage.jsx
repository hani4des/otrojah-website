import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Sparkles,
  BookOpen,
  Users,
  Lock,
  Heart,
  ChevronLeft,
  ExternalLink,
  MessageCircle,
  Award,
  GraduationCap,
  CheckCircle2,
  CalendarDays,
  Clock,
  TableProperties
} from 'lucide-react';
import { TelegramIcon, TikTokIcon } from '../components/SocialIcons';

export default function TelegramPage() {
  const { navigateTo } = useApp();

  const womenFeatures = [
    { id: 1, title: 'تعليم وتصحيح التلاوة', desc: 'جلسات قرآنية متقنة لتصحيح النطق ومخارج الحروف وضبط أحكام التلاوة مع معلمات مجازات بالسند المتصل.', icon: BookOpen },
    { id: 2, title: 'تعليم أُسس التجويد', desc: 'شرح مبسط وتأصيلي لأحكام التجويد النظرية والتطبيقية من المتون المعتمدة لتيسير القراءة السليمة.', icon: Award },
    { id: 3, title: 'دورات ودروس علمية', desc: 'برامج إيمانية وتفسيرية وتثقيفية شاملة تعزز الفهم العميق لآيات القرآن الكريم وهدي النبي ﷺ.', icon: GraduationCap },
    { id: 4, title: 'قنوات نسائية خاصة', desc: 'بيئة إلكترونية مستقلة وآمنة تماماً تضمن أعلى معايير الخصوصية والراحة للأخوات الدارسات.', icon: Lock },
    { id: 5, title: 'بثوث نسائية خاصة', desc: 'حلقات مدارسة وتسميع مباشرة عبر غرف صوتية وبثوث حصرية للنساء فقط دون أي اختلاط.', icon: Users },
    { id: 6, title: 'طاقم تعليم نسائي', desc: 'نخبة من الحافظات والمعلمات المجازات ذوات الخبرة الطويلة والأسلوب التربوي المحفز.', icon: Sparkles },
    { id: 7, title: 'إدارة نسائية', desc: 'إشراف ومتابعة إدارية نسائية متكاملة بنسبة 100% لتنظيم المجموعات والجداول والتواصل.', icon: ShieldCheck }
  ];

  return (
    <div className="animate-fadeIn py-12 space-y-14">
      
      {/* Top Banner: Utrujjah Logo Merged with Telegram Logo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-utrujjah-green-950 via-[#072c1c] to-[#041c2c] border-2 border-utrujjah-gold-500/40 shadow-2xl p-6 sm:p-8 lg:p-10 text-white">
          
          {/* Subtle Arabesque and Glows */}
          <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-utrujjah-gold-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            
            {/* Right: Text and Welcome */}
            <div className="space-y-3.5 text-center lg:text-right max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-utrujjah-gold-400/30 text-utrujjah-gold-300 text-[11px] sm:text-xs font-bold backdrop-blur-md">
                <Lock className="w-3.5 h-3.5 text-utrujjah-gold-400" />
                <span>قناة مغلقة خاصة للنساء فقط</span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black font-alexandria text-white leading-snug">
                قناة أترجة القرآنية
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-utrujjah-gold-300 to-amber-200">
                  على منصة Telegram
                </span>
              </h1>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-tajawal">
                واحة إيمانية وقرآنية تعليمية مغلقة مخصصة للنساء فقط، تهدف إلى رعاية تلاوة كتاب الله وحفظه، وتجويده بإشراف وإدارة نسائية متكاملة تصون الخصوصية التامة.
              </p>

              {/* Action Banner Pill */}
              <div className="pt-1">
                <a
                  href="https://www.tiktok.com/@otrojah3"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-utrujjah-gold-500 via-amber-400 to-utrujjah-gold-600 text-slate-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>للانضمام إلى القناة، نرجوا التواصل مع المشرفات عبر TikTok</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
              </div>
            </div>

            {/* Left: Professional Merged Badges (Utrujjah Logo + Telegram Emblem) */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 flex-shrink-0">
              
              {/* Utrujjah Official Circular Logo */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-utrujjah-gold-500 blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 bg-gradient-to-tr from-utrujjah-gold-400 via-emerald-600 to-utrujjah-gold-500 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                    <img
                      src="/logo-circle.png"
                      alt="فريق أترجة"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <span className="block text-center text-[11px] sm:text-xs font-bold text-utrujjah-gold-300 mt-1.5 font-alexandria">
                  فريق أترجة
                </span>
              </div>

              {/* Seamless Elegant Connector */}
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-utrujjah-gold-400 to-sky-400 rounded-full" />
                <div className="w-6 h-6 rounded-full bg-black/60 border border-white/20 text-utrujjah-gold-300 flex items-center justify-center text-[10px] font-black">
                  ✕
                </div>
                <span className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-utrujjah-gold-400 to-sky-400 rounded-full" />
              </div>

              {/* Telegram Luxury Emblem Badge */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-sky-500 blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 bg-gradient-to-tr from-sky-700 via-sky-500 to-teal-400 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#17384e] to-[#0c2231] flex flex-col items-center justify-center p-2 text-white border border-white/20">
                    <TelegramIcon className="w-8 h-8 text-sky-400" />
                    <span className="text-[9px] font-black tracking-wider text-sky-300 mt-0.5 uppercase">Telegram</span>
                  </div>
                </div>
                <span className="block text-center text-[11px] sm:text-xs font-bold text-sky-300 mt-1.5 font-alexandria">
                  قناة التليجرام
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Main Focus: 7 Core Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-utrujjah-green-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800/40">
            <Lock className="w-3.5 h-3.5 text-utrujjah-gold-500" />
            <span>بيئة قرآنية خاصة ومغلقة 100%</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-alexandria text-utrujjah-green-950 dark:text-white">
            قناة مغلقة خاصة للنساء فقط
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-tajawal">
            صُممت برامج القناة لتلبي شغف الأخوات في تعلم كتاب الله وإتقان تلاوته في أجواء مفعمة بالسكينة والوقار والخصوصية التامة.
          </p>
        </div>

        {/* 7 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {womenFeatures.map((feat) => {
            const Icon = feat.icon;

            return (
              <div
                key={feat.id}
                className="card-luxury p-6 flex flex-col justify-between group hover:border-utrujjah-gold-500/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-utrujjah-green-800 to-utrujjah-green-600 text-utrujjah-gold-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <span className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-center font-mono">
                      0{feat.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-black font-alexandria text-utrujjah-green-950 dark:text-white mb-2 group-hover:text-utrujjah-green-700 dark:group-hover:text-utrujjah-gold-400 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-tajawal">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-xs font-bold text-utrujjah-green-800 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-utrujjah-gold-500" />
                  <span>معتمد ومُدار من الأخوات</span>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Join Banner Card */}
          <div className="card-luxury p-6 bg-gradient-to-br from-utrujjah-green-950 via-[#072417] to-black text-white border-2 border-utrujjah-gold-400/50 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
            
            <div className="relative z-10 space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-utrujjah-gold-500/20 text-utrujjah-gold-300 border border-utrujjah-gold-400/30 inline-block">
                طلب الانضمام
              </span>
              <h3 className="text-xl font-black font-alexandria text-white">
                كيفية الانضمام للقناة النسائية
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-tajawal">
                نظراً لخصوصية القناة وكونها مقتصرة تماماً على النساء، يتم التحقق والتنسيق المباشر قبل إرسال رابط الدعوة الخاص.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href="https://www.tiktok.com/@otrojah3"
                target="_blank"
                rel="noreferrer"
                className="w-full btn-gold py-3 px-4 text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2"
              >
                <TikTokIcon className="w-4 h-4" />
                <span>تواصلِ مع المشرفات عبر TikTok</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================
          NEW: Academy Weekly Schedule Banner (Item 9)
          Linked to: https://otrojah-academy.manus.space/
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#072418] via-[#093524] to-[#0c2a3f] border-2 border-sky-400/40 shadow-2xl p-6 sm:p-10 text-white">
          
          {/* Subtle Arabesque and Glows */}
          <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
          <div className="absolute -top-20 right-10 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-utrujjah-gold-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Right: Info and Schedule Overview */}
            <div className="space-y-4 text-center lg:text-right max-w-2xl">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold">
                  <TelegramIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>قناة أكاديمية أترجة بالتليجرام</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-utrujjah-gold-500/20 border border-utrujjah-gold-400/40 text-utrujjah-gold-300 text-xs font-bold">
                  <CalendarDays className="w-3.5 h-3.5 text-utrujjah-gold-400" />
                  <span>جدول الحصص والبرامج الأسبوعي</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-alexandria text-white leading-snug">
                جدول أكاديمية أُترُجة للعلوم القرآنية
              </h2>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-tajawal">
                يمكنكِ الآن الاطلاع على مواعيد وتفاصيل كافة الحصص، من حلقات تصحيح التلاوة اليومية، دورات التجويد، والمحاضرات العلمية المباشرة المخصصة للأخوات بدقة ومواعيد معلنة.
              </p>

              {/* Weekly Highlights Mini-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-right">
                <div className="bg-white/10 dark:bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0 text-sky-300 mt-0.5">
                    <TableProperties className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-sky-200 font-alexandria">حلقات التلاوة والتجويد</h4>
                    <p className="text-[11px] text-slate-300 font-tajawal mt-0.5">مواعيد صباحية ومسائية تناسب الجميع</p>
                  </div>
                </div>

                <div className="bg-white/10 dark:bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-utrujjah-gold-500/20 flex items-center justify-center flex-shrink-0 text-utrujjah-gold-300 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-utrujjah-gold-300 font-alexandria">المحاضرات والبثوث</h4>
                    <p className="text-[11px] text-slate-300 font-tajawal mt-0.5">دروس إيمانية أسبوعية بإشراف نخبة معلمات</p>
                  </div>
                </div>
              </div>

              {/* Direct Schedule Link Button */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://otrojah-academy.manus.space/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-teal-600 hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-xl shadow-sky-900/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <CalendarDays className="w-4 h-4 text-white" />
                  <span>فتح ومتابعة جدول الحصص المباشر</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

            </div>

            {/* Left: Creative Graphic Visual Mockup representing the Schedule Platform */}
            <div className="flex-shrink-0 w-full sm:w-80 lg:w-96">
              <a
                href="https://otrojah-academy.manus.space/"
                target="_blank"
                rel="noreferrer"
                className="block group relative"
                title="اضغط لفتح موقع جدول الحصص"
              >
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-utrujjah-gold-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-70 transition-opacity" />
                
                {/* Browser/Card Mockup Frame */}
                <div className="relative rounded-2xl bg-[#081d14] border-2 border-sky-400/50 overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02]">
                  
                  {/* Mockup Titlebar */}
                  <div className="bg-[#0b291d] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-sky-300/80 truncate max-w-[180px]">
                      otrojah-academy.manus.space
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  </div>

                  {/* Mockup Screen Content Preview */}
                  <div className="p-4 bg-gradient-to-b from-[#0a2318] to-[#061810] space-y-3">
                    
                    {/* Header in Preview */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                          <TelegramIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white font-alexandria">جدول أكاديمية أترجة</p>
                          <p className="text-[9px] text-utrujjah-gold-300">مواعيد الحصص الأسبوعية</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        محدث أسبوعياً
                      </span>
                    </div>

                    {/* Schedule Rows Preview */}
                    <div className="space-y-1.5 text-[10px]">
                      <div className="bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                        <span className="font-bold text-utrujjah-gold-300">حلقة التلاوة والتجويد</span>
                        <span className="text-slate-300 font-mono text-[9px]">9:00 ص - 10:30 ص</span>
                      </div>
                      <div className="bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                        <span className="font-bold text-sky-300">تصحيح مخارج الحروف</span>
                        <span className="text-slate-300 font-mono text-[9px]">4:30 م - 6:00 م</span>
                      </div>
                      <div className="bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                        <span className="font-bold text-pink-300">محاضرة فقهية إيمانية</span>
                        <span className="text-slate-300 font-mono text-[9px]">8:00 م - 9:30 م</span>
                      </div>
                    </div>

                    {/* Button on Mockup */}
                    <div className="pt-1 text-center">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-300 group-hover:text-white transition-colors">
                        <span>انقر هنا للدخول إلى الموقع</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>

                  </div>

                </div>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Prominent Action Banner for Joining via TikTok */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-500 via-utrujjah-gold-500 to-amber-600 rounded-3xl p-8 sm:p-10 text-slate-950 shadow-2xl border border-utrujjah-gold-300 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              <Lock className="w-4 h-4" />
              <span>انضمام آمن وموثق</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-alexandria text-slate-950">
              للانضمام إلى القناة ، نرجوا التواصل مع المشرفات
            </h3>

            <p className="text-slate-900/90 text-sm sm:text-base font-tajawal max-w-xl">
              اضغطي على الزر للتواصل المباشر مع طاقم الإشراف النسائي عبر الصفحة الرسمية على TikTok وسيتم تزويدك بالرابط.
            </p>
          </div>

          <a
            href="https://www.tiktok.com/@otrojah3"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-slate-950 hover:bg-black text-white font-black text-base flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all flex-shrink-0"
          >
            <TikTokIcon className="w-5 h-5 text-rose-400" />
            <span>تواصلِ مع المشرفات الآن (@otrojah3)</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>

        </div>
      </section>

    </div>
  );
}
