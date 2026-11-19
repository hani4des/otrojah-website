import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Filter,
  Heart,
  Target,
  Users,
  Sparkles,
  ChevronLeft
} from 'lucide-react';
import ProjectIcon from '../components/ProjectIcon';

export default function ProjectsPage() {
  const { projects, navigateTo, openModal } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'كافة المشاريع' },
    { id: 'قرآني', label: 'مشاريع قرآنية' },
    { id: 'كفالة أيتام', label: 'كفالة الأيتام' },
    { id: 'إغاثي', label: 'مشاريع إغاثية وتفريج كرب' },
    { id: 'صحي', label: 'مشاريع صحية' },
    { id: 'تعليمي', label: 'مشاريع تعليمية' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.code.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fadeIn py-12 space-y-12">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <Sparkles className="w-4 h-4 text-utrujjah-gold-400" />
            <span>مشاريع العطاء والتمكين</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-alexandria text-white">
            المشاريع والمبادرات القائمة
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            تصفح مشاريع فريق أترجة واختر ما تحب أن تجري لك به حسنات جارية في الدنيا والآخرة.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-emerald-900/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث عن مشروع أو رمز..."
              className="w-full pr-11 pl-4 py-2.5 rounded-xl border border-slate-200 focus:border-utrujjah-gold-500 focus:ring-2 focus:ring-utrujjah-gold-500/20 outline-none text-sm font-tajawal"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-utrujjah-green-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-lg font-tajawal">لم يتم العثور على مشاريع تطابق بحثكم.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-bold"
            >
              عرض كافة المشاريع
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const percentage = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden border border-emerald-900/10 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className="relative h-48 w-full bg-gradient-to-tr from-utrujjah-green-950 via-emerald-900 to-utrujjah-green-800 overflow-hidden flex items-center justify-center p-6 text-center">
                      <div className="absolute inset-0 bg-islamic-stars opacity-20 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-13 h-13 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-utrujjah-gold-300 shadow-md group-hover:scale-110 transition-transform p-3">
                          <ProjectIcon iconType={project.iconType} className="w-7 h-7 text-utrujjah-gold-300" />
                        </div>
                        <span className="text-xs text-white/90 font-medium px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm max-w-xs line-clamp-1">
                          {project.imageDesc}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-utrujjah-green-900 shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-black/40 text-utrujjah-gold-300 border border-white/10">
                          {project.code}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-black text-utrujjah-green-950 font-alexandria mb-2.5 line-clamp-2 leading-snug group-hover:text-utrujjah-green-700 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed font-tajawal mb-6 line-clamp-2">
                        {project.summary}
                      </p>

                      {/* Live Raised Meter */}
                      <div className="space-y-2 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-900/5">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-slate-600">المبلغ المحصل:</span>
                          <span className="text-utrujjah-green-800 font-bold text-sm">
                            {project.raisedAmount.toLocaleString()} ر.س
                          </span>
                        </div>

                        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden relative">
                          <div
                            className="h-full bg-gradient-to-r from-utrujjah-green-700 to-utrujjah-gold-500 rounded-full transition-all duration-700"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                          <span className="flex items-center gap-1 font-medium">
                            <Target className="w-3.5 h-3.5 text-utrujjah-gold-600" />
                            المستهدف: {project.targetAmount.toLocaleString()} ر.س
                          </span>
                          <span className="font-bold text-utrujjah-green-900 bg-white px-2 py-0.5 rounded border border-emerald-100 shadow-xs">
                            {percentage}%
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
                        <Users className="w-4 h-4 text-emerald-700" />
                        <span>{project.donorsCount || 0} مساهم ساهموا في هذا المشروع</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 border-t border-slate-100 mt-2 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => openModal('project-details', project)}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
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
        )}
      </section>

    </div>
  );
}
