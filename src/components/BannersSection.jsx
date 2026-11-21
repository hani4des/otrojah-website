import React from 'react';
import { useApp } from '../context/AppContext';
import { Calculator, Heart, BookOpen, ArrowLeft, Sparkles } from 'lucide-react';

export default function BannersSection() {
  const { navigateTo } = useApp();

  const banners = [
    {
      id: 'zakat',
      title: 'زكاتك حياة لهم',
      desc: 'أدِّ فريضتك بطمأنينة ويسر وفق الأحكام الشرعية المعتمدة، وساند الأسر المتعففة في تفريج كربهم وسداد حاجاتهم.',
      btnText: 'احسب زكاتك',
      action: () => navigateTo('zakat'),
      theme: 'gold',
      badge: 'فريضة ونماء',
      icon: Calculator
    },
    {
      id: 'orphans',
      title: 'كفالة الأيتام',
      desc: '«أنا وكافل اليتيم في الجنة هكذا»؛ كن سنداً لأبنائنا وبناتنا الأيتام واغرس في حياتهم الأمل والسكينة والتعليم.',
      btnText: 'ساهم الآن',
      action: () => navigateTo('projects', 'project-1'),
      theme: 'emerald',
      badge: 'أجر مستمر',
      icon: Heart
    },
    {
      id: 'quran',
      title: 'كفالة حلقة قرآنية',
      desc: '«خيركم من تعلم القرآن وعلمه»؛ مساهمتك ترعى الحفاظ وتكافئ المعلمين وتثمر حسنات جارية في ميزانك.',
      btnText: 'ساهم في الأجر',
      action: () => navigateTo('projects', 'project-2'),
      theme: 'teal',
      badge: 'نور وهداية',
      icon: BookOpen
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-emerald-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title & "المزيد" Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-2 border-b border-emerald-900/10 dark:border-emerald-800/30">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-utrujjah-green-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800/40 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-500" />
              <span>مساحات الخير والأثر</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-alexandria text-utrujjah-green-950 dark:text-white">
              من المشاريع والمبادرات
            </h2>
          </div>
          
          <button
            onClick={() => navigateTo('projects')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-utrujjah-green-800 dark:text-utrujjah-gold-400 hover:text-utrujjah-gold-600 dark:hover:text-utrujjah-gold-300 transition-colors group self-start sm:self-end py-1 px-2.5 rounded-lg hover:bg-emerald-50 dark:hover:bg-white/5"
            title="عرض كافة المشاريع والمبادرات"
          >
            <span>المزيد</span>
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((item) => {
            const Icon = item.icon;
            
            // Themed styles
            let cardBg = '';
            let btnStyle = '';
            let badgeStyle = '';

            if (item.theme === 'gold') {
              cardBg = 'bg-gradient-to-br from-amber-900/90 via-amber-950 to-amber-900 border-amber-500/40 text-amber-50';
              btnStyle = 'bg-gradient-to-r from-utrujjah-gold-400 to-amber-500 text-slate-950 hover:from-utrujjah-gold-300 hover:to-amber-400';
              badgeStyle = 'bg-amber-400/20 text-amber-300 border-amber-400/30';
            } else if (item.theme === 'emerald') {
              cardBg = 'bg-gradient-to-br from-emerald-900/95 via-emerald-950 to-green-950 border-emerald-500/40 text-emerald-50';
              btnStyle = 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400';
              badgeStyle = 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30';
            } else {
              cardBg = 'bg-gradient-to-br from-teal-900/95 via-teal-950 to-emerald-950 border-teal-500/40 text-teal-50';
              btnStyle = 'bg-gradient-to-r from-teal-400 to-utrujjah-gold-400 text-slate-950 hover:from-teal-300 hover:to-utrujjah-gold-300';
              badgeStyle = 'bg-teal-400/20 text-teal-300 border-teal-400/30';
            }

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-6 sm:p-7 border shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${cardBg}`}
              >
                {/* Background Geometric Watermark */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 opacity-10 pointer-events-none">
                  <Icon className="w-36 h-36" />
                </div>

                {/* Top Row: Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeStyle}`}>
                    <Sparkles className="w-3 h-3" />
                    {item.badge}
                  </span>
                  
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2.5 mb-6 relative z-10">
                  <h3 className="text-2xl font-black font-alexandria tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed font-tajawal min-h-[50px]">
                    {item.desc}
                  </p>
                </div>

                {/* Action Button */}
                <div className="relative z-10 pt-2">
                  <button
                    onClick={item.action}
                    className={`w-full py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${btnStyle}`}
                  >
                    <span>{item.btnText}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
