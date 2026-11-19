import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Newspaper,
  BookOpen,
  Bell,
  FileText,
  Image as ImageIcon,
  Video,
  Calendar,
  ArrowLeft,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

export default function MediaSection() {
  const { media, navigateTo, openModal } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'الكل' },
    { id: 'news', label: 'الأخبار' },
    { id: 'articles', label: 'المقالات' },
    { id: 'announcements', label: 'الإعلانات' },
    { id: 'reports', label: 'التقارير والإنجازات' },
    { id: 'photos', label: 'معرض الصور' },
    { id: 'videos', label: 'مكتبة الفيديو' },
  ];

  const filteredMedia = activeTab === 'all'
    ? media
    : media.filter(item => item.type === activeTab);

  return (
    <section className="py-20 bg-white relative" id="media-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-utrujjah-green-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-500" />
              <span>نبض الفريق ومستجداته</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-utrujjah-green-950 dark:text-white font-alexandria">
              المركز الإعلامي
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-tajawal max-w-2xl">
              تابع آخر أخبار فريق أترجة، وإعلانات المبادرات الجديدة، وتصفح تقارير الإنجاز والمعارض التوثيقية.
            </p>
          </div>

          <button
            onClick={() => navigateTo('media')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-utrujjah-green-900 bg-emerald-50 hover:bg-emerald-100 transition-all self-start md:self-end"
          >
            <span>تصفح الأرشيف الإعلامي كاملاً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-utrujjah-green-800 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => openModal('media-details', item)}
              className="card-luxury overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Visual Header Image Description Placeholder (Strictly no human faces) */}
                <div className="relative h-44 bg-gradient-to-tr from-emerald-950 via-utrujjah-green-900 to-teal-900 flex items-center justify-center p-6 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-islamic-stars opacity-20 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-utrujjah-gold-300 border border-white/20 group-hover:scale-110 transition-transform">
                      {item.type === 'news' && <Newspaper className="w-6 h-6" />}
                      {item.type === 'articles' && <BookOpen className="w-6 h-6" />}
                      {item.type === 'announcements' && <Bell className="w-6 h-6" />}
                      {item.type === 'reports' && <FileText className="w-6 h-6" />}
                      {item.type === 'photos' && <ImageIcon className="w-6 h-6" />}
                      {item.type === 'videos' && <Video className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] text-slate-200 font-medium px-3 py-1 bg-black/40 rounded-full line-clamp-1 backdrop-blur-xs">
                      {item.imageText}
                    </span>
                  </div>

                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-utrujjah-gold-500 text-slate-950 shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-tajawal">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-utrujjah-green-950 font-alexandria mb-2 line-clamp-2 leading-snug group-hover:text-utrujjah-green-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-tajawal line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-utrujjah-green-800 group-hover:text-utrujjah-gold-600 transition-colors">
                <span>قراءة المزيد</span>
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
