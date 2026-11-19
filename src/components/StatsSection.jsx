import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Users,
  CheckCircle2,
  Layers,
  Award,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Users: Users,
  CheckCircle2: CheckCircle2,
  Layers: Layers,
  Award: Award,
  Shield: ShieldCheck
};

export default function StatsSection() {
  const { stats, teamData } = useApp();

  return (
    <section className="py-20 bg-gradient-to-br from-utrujjah-green-950 via-[#0a3520] to-utrujjah-green-950 text-white relative overflow-hidden">
      
      {/* Background Decorative Star Elements & Glows */}
      <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-utrujjah-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-500/30">
            <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-400" />
            <span>أثر ملموس وأرقام حقيقية</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-alexandria text-white">
            الإحصائيات والإنجازات الميدانية
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-tajawal">
            بفضل الله ثم بدعم المانحين والمحسنين، نحرص في فريق أترجة على تحويل كل ريال إلى أثر مستدام يمتد في نفوس المستفيدين.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item) => {
            const Icon = iconMap[item.icon] || TrendingUp;

            return (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 text-center flex flex-col items-center justify-between group hover:bg-white/10 hover:border-utrujjah-gold-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-utrujjah-green-800 to-utrujjah-gold-500/30 flex items-center justify-center text-utrujjah-gold-300 mb-4 border border-white/10 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="my-2">
                  <span className="block text-3xl sm:text-4xl lg:text-4xl font-black font-alexandria text-white tracking-tight text-utrujjah-gold-300">
                    {item.value.toLocaleString()}
                    <span className="text-xl text-utrujjah-gold-400 mr-1">{item.suffix}</span>
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm font-semibold font-tajawal leading-snug mt-1">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Governance Banner */}
        <div className="mt-12 bg-white/5 border border-emerald-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-utrujjah-gold-500/20 text-utrujjah-gold-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-alexandria">
                حوكمة مالية وإدارية معتمدة
              </h4>
              <p className="text-xs text-slate-300 font-tajawal">
                تخضع جميع تبرعات ومصروفات الفريق لمراجعة وتدقيق محاسبي خارجي مستقل لضمان وصول التبرعات بدقة وأمان.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <span className="inline-block px-4 py-2 rounded-xl text-xs font-bold bg-utrujjah-gold-500 text-slate-950 shadow-sm">
              امتثال بنسبة 100%
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
