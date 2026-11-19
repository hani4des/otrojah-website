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
  ArrowLeft,
  ChevronLeft,
  Sparkles
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

export default function ProgramsSection() {
  const { programs, navigateTo, openModal } = useApp();

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="programs-section">
      
      {/* Decorative Subtle Background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-utrujjah-gold-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-utrujjah-green-800 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-500" />
            <span>مسارات العطاء والتمكين</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-utrujjah-green-950 dark:text-white font-alexandria">
            برامجنا ومساعداتنا
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-tajawal">
            سبعة برامج نوعية متكاملة صُممت بعناية لتغطي الحاجات الأساسية للإنسان وتفتح أبواب الخير والتعليم القرآني بمهنية وكرامة.
          </p>
        </div>

        {/* 7 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((prog, index) => {
            const Icon = iconMap[prog.icon] || BookOpen;
            const isFeatured = index === 4 || index === 5; // Orphans or Quran

            return (
              <div
                key={prog.id}
                className={`card-luxury p-6 flex flex-col justify-between group relative overflow-hidden ${
                  isFeatured ? 'border-utrujjah-gold-400/50 bg-gradient-to-b from-white to-emerald-50/30' : ''
                }`}
              >
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-utrujjah-green-700 via-utrujjah-gold-500 to-utrujjah-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-utrujjah-green-800 to-utrujjah-green-600 text-utrujjah-gold-300 flex items-center justify-center p-3 shadow-md group-hover:scale-110 group-hover:from-utrujjah-green-700 group-hover:to-utrujjah-gold-600 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-utrujjah-green-900 transition-colors">
                      {prog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-utrujjah-green-950 font-alexandria mb-3 group-hover:text-utrujjah-green-700 transition-colors">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed font-tajawal mb-6">
                    {prog.desc}
                  </p>
                </div>

                {/* Footer Action Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openModal('program-details', prog)}
                    className="inline-flex items-center gap-1 text-sm font-bold text-utrujjah-green-800 hover:text-utrujjah-gold-600 transition-colors"
                  >
                    <span>تفاصيل البرنامج</span>
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </button>

                  <button
                    onClick={() => navigateTo('donate', { programName: prog.title })}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-utrujjah-green-800 hover:text-white transition-all"
                  >
                    مساهمة
                  </button>
                </div>

              </div>
            );
          })}

          {/* 8th Card: Full Program Catalog CTA Card */}
          <div className="card-luxury p-6 bg-gradient-to-br from-utrujjah-green-900 to-utrujjah-green-950 text-white flex flex-col justify-between border-utrujjah-gold-500/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-utrujjah-gold-400/20 text-utrujjah-gold-300 border border-utrujjah-gold-400/30 inline-block mb-4">
                تصفح الدليل
              </span>
              <h3 className="text-2xl font-black font-alexandria text-white mb-3">
                دليل البرامج والمساعدات الشامل
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-tajawal">
                تعرف على الشروط والمعايير ومسارات التقديم للمستفيدين أو كفالة البرامج للمانحين.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-emerald-800/60">
              <button
                onClick={() => navigateTo('programs')}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-utrujjah-gold-500 hover:bg-utrujjah-gold-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>عرض صفحة البرامج كاملة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
