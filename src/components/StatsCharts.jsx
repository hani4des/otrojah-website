import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Award,
  Sparkles,
  Users,
  BookOpen,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Activity
} from 'lucide-react';

export default function StatsCharts({ isDarkBg = true }) {
  const [activeChartTab, setActiveChartTab] = useState('impact'); // 'impact', 'growth', 'kpi'

  // 1. Program Impact Breakdown Data
  const impactData = [
    { title: 'رعاية الحلقات وتخريج الحفاظ', beneficiaries: '10,250 مستفيد', percentage: 35, color: 'from-emerald-500 to-teal-400', icon: BookOpen },
    { title: 'كفالة الأيتام والرعاية التنموية', beneficiaries: '1,420 يتيماً', percentage: 25, color: 'from-amber-400 to-utrujjah-gold-500', icon: Heart },
    { title: 'السلال الغذائية والإغاثة المجتمعية', beneficiaries: '45,000 سلة', percentage: 22, color: 'from-emerald-600 to-green-500', icon: Users },
    { title: 'المساعدات الطبية والعمليات الجراحية', beneficiaries: '320 عملية وعلاج', percentage: 10, color: 'from-rose-500 to-pink-500', icon: Activity },
    { title: 'تفريج الكرب والمساعدات الطارئة', beneficiaries: '680 أسرة', percentage: 8, color: 'from-sky-500 to-blue-600', icon: ShieldCheck },
  ];

  // 2. Yearly Growth Data for SVG Chart
  const growthData = [
    { year: '2022', value: 20, amount: '1.8M ر.س', label: 'التأسيس والانطلاق' },
    { year: '2023', value: 38, amount: '3.6M ر.س', label: 'توسع البرامج القرآنية' },
    { year: '2024', value: 58, amount: '6.4M ر.س', label: 'تدشين كفالة الأيتام' },
    { year: '2025', value: 78, amount: '9.8M ر.س', label: 'التحول الرقمي الكامل' },
    { year: '2026', value: 100, amount: '14.2M ر.س', label: 'المرحلة الحالية والأثر المستدام' },
  ];

  return (
    <div className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
      isDarkBg
        ? 'bg-black/30 backdrop-blur-md border-white/10 text-white shadow-2xl p-6 sm:p-8'
        : 'bg-white dark:bg-[#0c2417] border-emerald-900/10 dark:border-emerald-800/40 text-slate-800 dark:text-white shadow-luxury p-6 sm:p-8'
    }`}>
      
      {/* Chart Top Controls & Tab Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/10 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-400" />
            <span>لوحة المؤشرات والبيانات الحية</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-alexandria">
            الرسم البياني للأثر المجتمعي والنمو الميداني
          </h3>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1.5 bg-black/40 dark:bg-white/5 p-1 rounded-2xl border border-white/15 self-start sm:self-auto">
          <button
            onClick={() => setActiveChartTab('impact')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeChartTab === 'impact'
                ? 'bg-gradient-to-r from-utrujjah-green-800 to-emerald-700 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-utrujjah-gold-400" />
            <span>توزيع الأثر</span>
          </button>

          <button
            onClick={() => setActiveChartTab('growth')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeChartTab === 'growth'
                ? 'bg-gradient-to-r from-utrujjah-green-800 to-emerald-700 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>نمو العطاء</span>
          </button>

          <button
            onClick={() => setActiveChartTab('kpi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeChartTab === 'kpi'
                ? 'bg-gradient-to-r from-utrujjah-green-800 to-emerald-700 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>الحوكمة والشفافية</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: PROGRAM IMPACT DISTRIBUTION (BART CHART) */}
      {activeChartTab === 'impact' && (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-xs sm:text-sm text-slate-300 font-tajawal leading-relaxed">
            توزيع المستفيدين والأثر التنموي لمشاريع فريق أترجة حسب التخصصات والمجالات الميدانية:
          </p>

          <div className="space-y-4">
            {impactData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-2 group">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-tajawal">
                    <span className="flex items-center gap-2 font-bold">
                      <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-utrujjah-gold-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{item.title}</span>
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="text-slate-300 font-mono text-xs">{item.beneficiaries}</span>
                      <span className="font-extrabold text-utrujjah-gold-300 min-w-[36px] text-left">{item.percentage}%</span>
                    </div>
                  </div>

                  {/* Meter Track & Bar */}
                  <div className="w-full h-3.5 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-sm transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 font-tajawal">
            <span>• إجمالي المستفيدين المباشرين: أكثر من <strong>58,000 مستفيد</strong></span>
            <span>• نسبة التنفيذ الميداني: <strong>100% مكتمل وموثق</strong></span>
          </div>
        </div>
      )}

      {/* VIEW 2: YEARLY GROWTH AREA CHART (SVG VECTOR CHART) */}
      {activeChartTab === 'growth' && (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-xs sm:text-sm text-slate-300 font-tajawal leading-relaxed">
            مؤشر تصاعد وتضاعف حجم التبرعات وأثر المبادرات سنوياً منذ التأسيس وحتى العام الحالي (2026):
          </p>

          {/* SVG Visual Curved Chart */}
          <div className="relative w-full h-64 sm:h-72 bg-black/40 rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between overflow-hidden">
            
            {/* Background Chart Gridlines */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-20 pointer-events-none">
              <div className="border-b border-white" />
              <div className="border-b border-white" />
              <div className="border-b border-white" />
              <div className="border-b border-white" />
            </div>

            {/* SVG Area and Line */}
            <div className="relative flex-1 w-full h-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ddb753" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#165b33" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#092719" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Filled Area */}
                <path
                  d="M 20 130 Q 120 100, 220 70 T 360 38 T 480 15 L 480 150 L 20 150 Z"
                  fill="url(#growthGrad)"
                />

                {/* Stroke Line */}
                <path
                  d="M 20 130 Q 120 100, 220 70 T 360 38 T 480 15"
                  fill="none"
                  stroke="#c59b27"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Data Points */}
                {[
                  { cx: 20, cy: 130, val: '2022' },
                  { cx: 135, cy: 98, val: '2023' },
                  { cx: 250, cy: 68, val: '2024' },
                  { cx: 365, cy: 38, val: '2025' },
                  { cx: 480, cy: 15, val: '2026' }
                ].map((pt, i) => (
                  <g key={i}>
                    <circle cx={pt.cx} cy={pt.cy} r="6" fill="#ddb753" stroke="#092719" strokeWidth="2" className="animate-pulse" />
                  </g>
                ))}
              </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="flex items-center justify-between text-xs font-bold pt-3 border-t border-white/10 font-tajawal text-slate-300">
              {growthData.map((d, i) => (
                <div key={i} className="text-center">
                  <span className="block font-alexandria text-white">{d.year}</span>
                  <span className="block text-[11px] text-utrujjah-gold-400 font-mono mt-0.5">{d.amount}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center text-xs font-tajawal">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="block text-slate-400">معدل النمو السنوي</span>
              <span className="text-lg font-black text-emerald-400 font-mono mt-1">+48% سنوياً</span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="block text-slate-400">إجمالي التبرعات التراكمية</span>
              <span className="text-lg font-black text-utrujjah-gold-400 font-mono mt-1">35.8M ريال</span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="block text-slate-400">معدل استدامة المشاريع</span>
              <span className="text-lg font-black text-sky-400 font-mono mt-1">94.6%</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: GOVERNANCE & TRANSPARENCY KPI GAUGE */}
      {activeChartTab === 'kpi' && (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-xs sm:text-sm text-slate-300 font-tajawal leading-relaxed">
            مؤشرات النزاهة والحوكمة المؤسسية المعتمدة وفق ضوابط العمل التطوعي والخيري:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* KPI 1 */}
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-between space-y-3">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-emerald-500" strokeDasharray="100, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-xl font-black font-alexandria text-white">100%</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-utrujjah-gold-300">وصول التبرعات للمستحقين</h4>
                <p className="text-[11px] text-slate-400 mt-1">صرف 100% من أموال التبرعات في مصارفها المحددة دون استقطاع</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-between space-y-3">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-utrujjah-gold-400" strokeDasharray="98, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-xl font-black font-alexandria text-white">98%</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-utrujjah-gold-300">رضا المتبرعين والمستفيدين</h4>
                <p className="text-[11px] text-slate-400 mt-1">وفق استطلاعات قياس الرضا الدورية وسرعة التجاوب</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-between space-y-3">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-sky-400" strokeDasharray="100, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-xl font-black font-alexandria text-white">100%</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-utrujjah-gold-300">الامتثال والحوكمة</h4>
                <p className="text-[11px] text-slate-400 mt-1">تدقيق محاسبي وتوثيق إداري وتقارير دورية معلنة</p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}