import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Radio,
  BookOpen,
  Video,
  Users,
  Calendar,
  Clock,
  ExternalLink,
  Sparkles,
  ChevronLeft,
  Flame,
  Bell
} from 'lucide-react';
import { TikTokIcon } from '../components/SocialIcons';

export default function ActivitiesPage() {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('khatma');

  const activities = [
    {
      id: 'khatma',
      title: 'بث الختمة القرآنية',
      subtitle: 'تلاوة مباركة وختمات متتالية لكتاب الله تعالى',
      platform: 'على منصة TikTok',
      timing: 'يومياً ، الساعة 9:00 مساءً بتوقيت مكة المكرمة',
      desc: 'بث مباشر يومي مبارك يُعنى بتلاوة وتدبر آيات الذكر الحكيم، ومشاركة المتابعين في ختم القرآن الكريم بصوت نخبة من القراء المتقنين بالسند المتصل.',
      badge: 'بث مباشر يومي',
      badgeColor: 'bg-rose-500 text-white',
      icon: Radio,
      features: [
        'تلاوة يومية منتظمة لأجزاء القرآن الكريم',
        'تصحيح مخارج الحروف والوقف والابتداء',
        'مشاركة تفاعلية مع أسئلة المتابعين الكرام',
        'أدعية ختام التلاوة والبركة'
      ]
    },
    {
      id: 'lectures',
      title: 'محاضرات أترجة العلمية',
      subtitle: 'دروس تأصيلية في علوم القرآن والتربية الإيمانية',
      platform: 'على منصة TikTok',
      timing: 'يوم الخميس من كل أسبوع ، الساعة 9:30 مساءً بتوقيت مكة المكرمة',
      desc: 'سلسلة محاضرات أسبوعية هادفة يقدمها مشايخ وأساتذة متخصصون في التفسير، وعلوم القرآن، وغرس القيم التربوية الإيمانية المستوحاة من هدي كتاب الله وسنة رسوله ﷺ.',
      badge: 'أسبوعياً كل خميس',
      badgeColor: 'bg-utrujjah-gold-500 text-slate-950',
      icon: Video,
      features: [
        'شرح معاني الآيات وتدبر قصص القرآن',
        'قواعد التزكية والأثر الأخلاقي',
        'تلقي المداخلات والأسئلة المباشرة',
        'تفريغ ملخصات المحاضرة ونشرها'
      ]
    },
    {
      id: 'seminars',
      title: 'لقاءات وندوات أترجة',
      subtitle: 'حوارات فكرية ومجتمعية تثري المعرفة وتعزز الأثر',
      platform: 'على منصة TikTok',
      timing: 'يتم الإعلان عن اللقاء وموعده في الصفحة الرسمية',
      desc: 'جلسات حوارية وندوات نوعية تستضيف نخبة من الباحثين والمربين لمناقشة قضايا التعليم القرآني، والتكافل الاجتماعي، وتطوير العمل الخيري والإنساني في مجتمعنا.',
      badge: 'ندوات دورية معلنة',
      badgeColor: 'bg-emerald-600 text-white',
      icon: Users,
      features: [
        'استضافة شخصيات ملهمة وخبراء في التنمية والقرآن',
        'طرح مواضيع معاصرة تهم الأسرة والشباب',
        'الإعلان المسبق وجدول زمني محدد لكل لقاء',
        'شهادات حضور رقمية للمشاركين في الورش'
      ]
    }
  ];

  const currentActivity = activities.find(a => a.id === activeTab) || activities[0];
  const CurrentIcon = currentActivity.icon;

  return (
    <div className="animate-fadeIn py-12 space-y-14">
      
      {/* Top Banner: Utrujjah Logo Merged with TikTok Logo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-utrujjah-green-950 via-[#0a2f1c] to-black border-2 border-utrujjah-gold-500/40 shadow-2xl p-6 sm:p-8 lg:p-10 text-white">
          
          {/* Subtle Arabesque and Glows */}
          <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-utrujjah-gold-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            
            {/* Right: Text and Announcement */}
            <div className="space-y-3.5 text-center lg:text-right max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-utrujjah-gold-400/30 text-utrujjah-gold-300 text-[11px] sm:text-xs font-bold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-400 animate-pulse" />
                <span>الأنشطة والبثوث التفاعلية الحية</span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black font-alexandria text-white leading-snug">
                أنشطة فريق أترجة
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-utrujjah-gold-300 via-utrujjah-gold-400 to-amber-200">
                  عبر منصة TikTok الرسمية
                </span>
              </h1>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-tajawal">
                انضم إلى برامجنا القرآنية المباشرة، وحلقات تلاوة وتدبر كتاب الله، والمحاضرات الأسبوعية التفاعلية مع نخبة من القراء والمربين.
              </p>

              {/* Direct Follow Button */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://www.tiktok.com/@otrojah3"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-black via-slate-900 to-rose-950 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 border border-rose-500/40 shadow-lg hover:shadow-rose-900/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <TikTokIcon className="w-4 h-4 text-rose-400" />
                  <span>متابعة حساب أترجة على TikTok (@otrojah3)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
              </div>
            </div>

            {/* Left: Professional Merged Badges (Utrujjah Logo + TikTok Emblem) */}
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
                <span className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-utrujjah-gold-400 to-rose-500 rounded-full" />
                <div className="w-6 h-6 rounded-full bg-black/60 border border-white/20 text-utrujjah-gold-300 flex items-center justify-center text-[10px] font-black">
                  ✕
                </div>
                <span className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-utrujjah-gold-400 to-rose-500 rounded-full" />
              </div>

              {/* TikTok Luxury Emblem Badge */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-rose-500 blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 bg-gradient-to-tr from-slate-900 via-black to-rose-600 shadow-xl border border-rose-500/40 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-slate-950 to-black flex flex-col items-center justify-center p-2 text-white border border-white/10">
                    <TikTokIcon className="w-8 h-8 text-white" />
                    <span className="text-[9px] font-black tracking-wider text-rose-400 mt-0.5 uppercase">TikTok</span>
                  </div>
                </div>
                <span className="block text-center text-[11px] sm:text-xs font-bold text-rose-300 mt-1.5 font-alexandria">
                  @otrojah3
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Activities Tabs & Detail Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {activities.map((act) => {
            const Icon = act.icon;
            const isSelected = activeTab === act.id;

            return (
              <button
                key={act.id}
                onClick={() => setActiveTab(act.id)}
                className={`p-5 rounded-3xl border text-right transition-all duration-300 flex items-center gap-4 ${
                  isSelected
                    ? 'bg-white dark:bg-[#0e291b] border-utrujjah-gold-500 shadow-luxury ring-2 ring-utrujjah-gold-400/40 -translate-y-1'
                    : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-gradient-to-tr from-utrujjah-green-800 to-utrujjah-green-700 text-utrujjah-gold-400 shadow-md'
                    : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full inline-block ${
                    isSelected ? act.badgeColor : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                  }`}>
                    {act.badge}
                  </span>
                  <h3 className="text-base font-black font-alexandria text-slate-900 dark:text-white truncate">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {act.platform}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Activity Deep Dive Card */}
        <div className="card-luxury p-8 sm:p-12 border-utrujjah-gold-500/40 bg-gradient-to-br from-white via-emerald-50/20 to-white dark:from-[#0c2417] dark:via-[#092015] dark:to-[#0c2417] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            
            <div className="space-y-6 flex-1">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${currentActivity.badgeColor}`}>
                  {currentActivity.badge}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-bold border border-white/10">
                  <TikTokIcon className="w-3.5 h-3.5 text-rose-400" />
                  <span>{currentActivity.platform}</span>
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-utrujjah-green-950 dark:text-white mb-2">
                  {currentActivity.title}
                </h2>
                <p className="text-sm sm:text-base font-bold text-utrujjah-gold-700 dark:text-utrujjah-gold-400 font-tajawal">
                  {currentActivity.subtitle}
                </p>
              </div>

              {/* Exact Timing Box */}
              <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/50 p-4 rounded-2xl flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-amber-900 dark:text-amber-300">موعد البث والنشاط:</span>
                  <span className="text-sm font-black text-amber-950 dark:text-amber-200">
                    {currentActivity.timing}
                  </span>
                </div>
              </div>

              {/* Narrative */}
              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-tajawal">
                {currentActivity.desc}
              </p>

              {/* Features List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">مميزات هذا النشاط:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentActivity.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-utrujjah-gold-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Side Action Column */}
            <div className="w-full lg:w-72 flex flex-col gap-4 flex-shrink-0 bg-slate-50 dark:bg-white/5 p-6 rounded-3xl border border-slate-200 dark:border-white/10 text-center">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-utrujjah-green-800 to-utrujjah-green-600 text-utrujjah-gold-300 flex items-center justify-center mx-auto shadow-md">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold block">منصة النشاط:</span>
                <span className="font-bold text-slate-900 dark:text-white block font-alexandria">حساب أترجة على TikTok</span>
                <span className="text-xs font-mono text-rose-500 font-bold">@otrojah3</span>
              </div>

              <a
                href="https://www.tiktok.com/@otrojah3"
                target="_blank"
                rel="noreferrer"
                className="w-full btn-gold py-3 px-4 text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2"
              >
                <TikTokIcon className="w-4 h-4" />
                <span>مشاهدة البث المباشر</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-slate-400 dark:text-slate-400 font-tajawal">
                فعّل جرس التنبيهات في تطبيق TikTok لتصلك إشعارات بدء البثوث والمحاضرات فور انطلاقها.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Community Engagement Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-utrujjah-green-950 via-emerald-900 to-utrujjah-green-950 text-white p-8 rounded-3xl border border-utrujjah-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
          <div>
            <h3 className="text-xl sm:text-2xl font-black font-alexandria text-white">
              تريد المشاركة أو تقديم اقتراح نشاط؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-tajawal mt-1">
              يسعد فريق أترجة باستقبال مقترحاتكم واستفساراتكم حول الأنشطة القرآنية والعلمية.
            </p>
          </div>

          <button
            onClick={() => navigateTo('contact')}
            className="btn-primary text-xs sm:text-sm px-6 py-3 whitespace-nowrap flex-shrink-0"
          >
            <span>تواصل مع الفريق</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
