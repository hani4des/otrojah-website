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
  CheckCircle2
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
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-utrujjah-green-950 via-[#072c1c] to-[#041c2c] border-2 border-utrujjah-gold-500/40 shadow-2xl p-8 sm:p-12 lg:p-16 text-white">
          
          {/* Subtle Arabesque and Glows */}
          <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-utrujjah-gold-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Right: Text and Welcome */}
            <div className="space-y-4 text-center lg:text-right max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-utrujjah-gold-400/30 text-utrujjah-gold-300 text-xs font-bold backdrop-blur-md">
                <Lock className="w-3.5 h-3.5 text-utrujjah-gold-400" />
                <span>قناة مغلقة خاصة للنساء فقط</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white leading-tight">
                قناة أترجة القرآنية
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-utrujjah-gold-300 to-amber-200">
                  على منصة Telegram
                </span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-tajawal">
                واحة إيمانية وقرآنية تعليمية مغلقة مخصصة للنساء فقط، تهدف إلى رعاية تلاوة كتاب الله وحفظه، وتجويده بإشراف وإدارة نسائية متكاملة تصون الخصوصية التامة.
              </p>

              {/* Action Banner Pill */}
              <div className="pt-2">
                <a
                  href="https://www.tiktok.com/@otrojah3"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-utrujjah-gold-500 via-amber-400 to-utrujjah-gold-600 text-slate-950 font-bold text-sm sm:text-base shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>للانضمام إلى القناة، نرجوا التواصل مع المشرفات عبر TikTok</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>
              </div>
            </div>

            {/* Left: Professional Merged Badges (Utrujjah Logo + Telegram Emblem) */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-shrink-0">
              
              {/* Utrujjah Official Circular Logo */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-utrujjah-gold-500 blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-2 bg-gradient-to-tr from-utrujjah-gold-400 via-emerald-600 to-utrujjah-gold-500 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <img
                      src="/logo-circle.png"
                      alt="فريق أترجة"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <span className="block text-center text-xs font-bold text-utrujjah-gold-300 mt-2 font-alexandria">
                  فريق أترجة
                </span>
              </div>

              {/* Seamless Elegant Connector */}
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-utrujjah-gold-400 to-sky-400 rounded-full" />
                <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-utrujjah-gold-300 flex items-center justify-center text-xs font-black">
                  ✕
                </div>
                <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-utrujjah-gold-400 to-sky-400 rounded-full" />
              </div>

              {/* Telegram Luxury Emblem Badge */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-sky-500 blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-2 bg-gradient-to-tr from-sky-700 via-sky-500 to-teal-400 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#17384e] to-[#0c2231] flex flex-col items-center justify-center p-3 text-white border border-white/20">
                    <TelegramIcon className="w-12 h-12 text-sky-400" />
                    <span className="text-[10px] font-black tracking-wider text-sky-300 mt-1 uppercase">Telegram</span>
                  </div>
                </div>
                <span className="block text-center text-xs font-bold text-sky-300 mt-2 font-alexandria">
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
