import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Calendar,
  Newspaper,
  BookOpen,
  Bell,
  FileText,
  Image as ImageIcon,
  Video,
  Sparkles,
  ChevronLeft
} from 'lucide-react';

export default function MediaPage() {
  const { media, openModal } = useApp();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'كافة المواد' },
    { id: 'news', label: 'أخبار الفريق' },
    { id: 'articles', label: 'المقالات التربوية' },
    { id: 'announcements', label: 'الإعلانات والمواسم' },
    { id: 'reports', label: 'التقارير والإنجازات' },
    { id: 'photos', label: 'معرض الصور التوثيقي' },
    { id: 'videos', label: 'المكتبة المرئية' },
  ];

  const filtered = media.filter((item) => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <div className="animate-fadeIn py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <Sparkles className="w-4 h-4 text-utrujjah-gold-400" />
            <span>نافذتكم على أنشطة وإنجازات الفريق</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-alexandria text-white">
            المركز الإعلامي والتوثيقي
          </h1>

          <p className="text-sm sm:text-base text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            تغطيات حية، ومقالات معرفية، وتقارير الشفافية المالية والإدارية، ومعارض الصور التوثيقية الملتزمة بالهوية الإسلامية.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-emerald-900/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الأخبار والتقارير..."
              className="w-full pr-11 pl-4 py-2.5 rounded-xl border border-slate-200 focus:border-utrujjah-gold-500 text-sm font-tajawal"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-utrujjah-green-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Media Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 font-tajawal text-base">لا توجد مواد تطابق البحث في هذا القسم.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => openModal('media-details', item)}
                className="card-luxury overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative h-48 bg-gradient-to-tr from-emerald-950 via-utrujjah-green-900 to-teal-900 flex items-center justify-center p-6 text-center overflow-hidden">
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

                    <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-utrujjah-gold-500 text-slate-950">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-tajawal">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-utrujjah-green-950 font-alexandria mb-2.5 line-clamp-2 leading-snug group-hover:text-utrujjah-green-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-tajawal line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-utrujjah-green-800 group-hover:text-utrujjah-gold-600 transition-colors">
                  <span>قراءة المادة كاملة</span>
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
