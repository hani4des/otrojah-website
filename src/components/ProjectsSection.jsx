import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  ChevronLeft,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  ArrowLeft
} from 'lucide-react';
import ProjectIcon from './ProjectIcon';

export default function ProjectsSection() {
  const { projects, navigateTo, openModal } = useApp();

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-[#07160e] relative overflow-hidden transition-colors" id="projects-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Refined Title Size */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-utrujjah-gold-100 dark:bg-utrujjah-gold-950/60 text-utrujjah-gold-800 dark:text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-200 dark:border-utrujjah-gold-800/40">
              <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-600 dark:text-utrujjah-gold-400" />
              <span>مشاريع جارية تنتظر دعمكم</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-utrujjah-green-950 dark:text-white font-alexandria">
              المشاريع والمبادرات الخيرية
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-tajawal">
              مشاريع معتمدة وموثقة تساهم في إحداث أثر عميق في حفظ كتاب الله، ورعاية الأيتام، وتفريج كرب الأسر المتعففة.
            </p>
          </div>

          <button
            onClick={() => navigateTo('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-utrujjah-green-900 dark:text-utrujjah-gold-300 bg-white dark:bg-white/10 border border-emerald-900/10 dark:border-white/10 hover:border-utrujjah-gold-500 hover:shadow-md transition-all self-start md:self-end"
          >
            <span>عرض كافة المشاريع ({projects.length})</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.slice(0, 6).map((project) => {
            const percentage = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-[#0c2417] rounded-3xl overflow-hidden border border-emerald-900/10 dark:border-emerald-800/30 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Visual Header Image Container (Expressive, No Human Faces) */}
                  <div className="relative h-44 w-full bg-gradient-to-tr from-utrujjah-green-950 via-emerald-900 to-utrujjah-green-800 overflow-hidden flex items-center justify-center p-6 text-center">
                    {/* Islamic Pattern overlay */}
                    <div className="absolute inset-0 bg-islamic-stars opacity-20 pointer-events-none" />
                    
                    {/* Tailored Category Icon */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="w-13 h-13 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-utrujjah-gold-300 shadow-md group-hover:scale-110 transition-transform p-3">
                        <ProjectIcon iconType={project.iconType} className="w-7 h-7 text-utrujjah-gold-300" />
                      </div>
                      <span className="text-[11px] text-white/90 font-medium px-3 py-0.5 rounded-full bg-black/40 backdrop-blur-sm max-w-xs line-clamp-1">
                        {project.imageDesc}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/90 dark:bg-black/80 backdrop-blur-md text-utrujjah-green-900 dark:text-utrujjah-gold-300 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Code */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-black/50 text-utrujjah-gold-300 border border-white/10">
                        {project.code}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-black text-utrujjah-green-950 dark:text-white font-alexandria mb-2 line-clamp-2 leading-snug group-hover:text-utrujjah-green-700 dark:group-hover:text-utrujjah-gold-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-tajawal mb-5 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Financial Progress Meter */}
                    <div className="space-y-2 bg-emerald-50/60 dark:bg-white/5 p-4 rounded-2xl border border-emerald-900/5 dark:border-white/10">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-600 dark:text-slate-300">المبلغ المحصل:</span>
                        <span className="text-utrujjah-green-800 dark:text-utrujjah-gold-300 font-bold text-sm">
                          {project.raisedAmount.toLocaleString()} ر.س
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-utrujjah-green-700 to-utrujjah-gold-500 rounded-full transition-all duration-700"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                        <span className="flex items-center gap-1 font-medium">
                          <Target className="w-3.5 h-3.5 text-utrujjah-gold-600" />
                          المستهدف: {project.targetAmount.toLocaleString()} ر.س
                        </span>
                        <span className="font-bold text-utrujjah-green-900 dark:text-slate-900 bg-white px-2 py-0.5 rounded border border-emerald-100 shadow-xs">
                          {percentage}%
                        </span>
                      </div>
                    </div>

                    {/* Donors Counter */}
                    <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
                      <Users className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>{project.donorsCount || 0} مساهم ساهموا في هذا المشروع</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-white/10 mt-2 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => openModal('project-details', project)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>تفاصيل المشروع</span>
                  </button>

                  <button
                    onClick={() => navigateTo('donate', { projectId: project.id, projectName: project.title })}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold bg-utrujjah-green-800 hover:bg-utrujjah-green-700 text-white transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <Heart className="w-3.5 h-3.5 fill-utrujjah-gold-400 text-utrujjah-gold-400" />
                    <span>ساهم الآن</span>
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
