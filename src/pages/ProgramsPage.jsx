import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Coins,
  PackageCheck,
  Stethoscope,
  GraduationCap,
  Heart,
  BookOpen,
  BookMarked,
  Sparkles,
  ArrowLeft,
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Coins: Coins,
  PackageCheck: PackageCheck,
  Stethoscope: Stethoscope,
  GraduationCap: GraduationCap,
  Heart: Heart,
  BookOpen: BookOpen,
  BookMarked: BookMarked
};

export default function ProgramsPage() {
  const { programs, navigateTo, openModal } = useApp();

  return (
    <div className="animate-fadeIn py-12 space-y-16">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <Sparkles className="w-4 h-4 text-utrujjah-gold-400" />
            <span>مسارات الإحسان المتكاملة</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-alexandria text-white">
            برامج ومساعدات فريق أترجة
          </h1>

          <p className="text-sm sm:text-base text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            منظومة متكاملة من 7 برامج نوعية تلبي الحاجات التنموية والإنسانية والقرآنية في مجتمعنا، وفق ضوابط مهنية وحوكمة شفافة.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {programs.map((prog, index) => {
          const Icon = iconMap[prog.icon] || BookOpen;

          return (
            <div
              key={prog.id}
              className="card-luxury p-8 sm:p-10 border border-emerald-900/10 flex flex-col lg:flex-row items-start justify-between gap-8 group"
            >
              {/* Program Details */}
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-utrujjah-green-800 to-utrujjah-green-600 text-utrujjah-gold-300 flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {prog.category}
                    </span>
                    <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950 mt-1">
                      {prog.title}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-tajawal">
                  {prog.detailedDesc}
                </p>

                {/* Badges / Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 block mb-1">المستفيدون المستهدفون:</span>
                    <span className="text-xs sm:text-sm text-slate-800 font-tajawal font-medium">{prog.target}</span>
                  </div>

                  <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200">
                    <span className="text-xs font-bold text-emerald-800 block mb-1">الأثر الميداني:</span>
                    <span className="text-xs sm:text-sm text-emerald-950 font-bold font-tajawal">{prog.impact}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:w-60 w-full flex flex-col gap-3 flex-shrink-0 pt-4 lg:pt-0 lg:border-r lg:border-slate-100 lg:pr-8">
                <button
                  onClick={() => navigateTo('donate', { programName: prog.title })}
                  className="w-full btn-primary text-sm py-3"
                >
                  <Heart className="w-4 h-4 fill-utrujjah-gold-400 text-utrujjah-gold-400" />
                  <span>دعم هذا البرنامج</span>
                </button>

                <button
                  onClick={() => openModal('program-details', prog)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
                >
                  <span>عرض بطاقة التفاصيل</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Zakat Link Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-900 to-amber-950 text-amber-50 p-8 rounded-3xl border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold text-utrujjah-gold-300 block mb-1">فريضة ونماء</span>
            <h3 className="text-xl sm:text-2xl font-black font-alexandria text-white">
              هل ترغب بتوجيه زكاة مالك لأحد هذه البرامج؟
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 font-tajawal mt-1">
              استخدم حاسبة الزكاة الشرعية لحساب نصابك بالريال والذهب بدقة تامة.
            </p>
          </div>

          <button
            onClick={() => navigateTo('zakat')}
            className="btn-gold whitespace-nowrap text-sm px-6 py-3 flex-shrink-0"
          >
            الانتقال لحاسبة الزكاة
          </button>
        </div>
      </section>

    </div>
  );
}
