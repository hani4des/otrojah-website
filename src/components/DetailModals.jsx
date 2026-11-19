import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Heart,
  Target,
  Users,
  Calendar,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Share2
} from 'lucide-react';

export default function DetailModals() {
  const { activeModal, modalData, closeModal, navigateTo } = useApp();

  if (!activeModal || activeModal === 'receipt') return null;

  // 1. Project Details Modal
  if (activeModal === 'project-details' && modalData) {
    const project = modalData;
    const percentage = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));
    const remaining = Math.max(0, project.targetAmount - project.raisedAmount);

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-emerald-900/10 animate-fadeIn relative">
          
          {/* Header Visual Bar */}
          <div className="bg-gradient-to-r from-utrujjah-green-950 via-emerald-900 to-utrujjah-green-950 text-white p-6 sm:p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-utrujjah-gold-500 text-slate-950">
                {project.category}
              </span>
              <span className="text-xs text-utrujjah-gold-300 font-mono">
                {project.code}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-alexandria text-white leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Progress Card */}
            <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-900/10 space-y-3">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-600">المبلغ المحصل:</span>
                <span className="text-utrujjah-green-900 text-lg font-alexandria">
                  {project.raisedAmount.toLocaleString()} ريال
                </span>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-utrujjah-green-700 to-utrujjah-gold-500 rounded-full transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>المستهدف الإجمالي: {project.targetAmount.toLocaleString()} ريال</span>
                <span className="font-bold text-utrujjah-green-900">{percentage}% منجز</span>
                <span>المتبقي: {remaining.toLocaleString()} ريال</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-utrujjah-green-950 font-alexandria">
                عن هذا المشروع المبارك:
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed font-tajawal">
                {project.details || project.summary}
              </p>
            </div>

            {/* Suggested Amounts */}
            {project.suggestedAmounts && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block">خيارات المساهمة السريعة:</span>
                <div className="flex flex-wrap gap-2">
                  {project.suggestedAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        closeModal();
                        navigateTo('donate', {
                          projectId: project.id,
                          projectName: project.title,
                          amount: amt
                        });
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-emerald-100 hover:text-utrujjah-green-900 text-xs font-bold transition-all border border-slate-200"
                    >
                      {amt} ريال
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100"
              >
                إغلاق
              </button>

              <button
                onClick={() => {
                  closeModal();
                  navigateTo('donate', { projectId: project.id, projectName: project.title });
                }}
                className="btn-primary text-sm px-6 py-3"
              >
                <Heart className="w-4 h-4 fill-utrujjah-gold-400 text-utrujjah-gold-400" />
                <span>تبرع الآن لهذا المشروع</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // 2. Program Details Modal
  if (activeModal === 'program-details' && modalData) {
    const prog = modalData;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-emerald-900/10 animate-fadeIn relative">
          
          <div className="bg-gradient-to-r from-utrujjah-green-950 via-emerald-900 to-utrujjah-green-950 text-white p-6 sm:p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-utrujjah-gold-500 text-slate-950 inline-block mb-2">
              {prog.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-alexandria text-white leading-tight">
              {prog.title}
            </h3>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-utrujjah-green-950 font-alexandria">
                التعريف والأهداف:
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed font-tajawal">
                {prog.detailedDesc || prog.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-500 block mb-1">الفئات المستهدفة:</span>
                <p className="text-xs sm:text-sm text-slate-800 font-tajawal">{prog.target}</p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 block mb-1">الأثر المحقق:</span>
                <p className="text-xs sm:text-sm text-emerald-950 font-bold font-tajawal">{prog.impact}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100"
              >
                إغلاق
              </button>

              <button
                onClick={() => {
                  closeModal();
                  navigateTo('donate', { programName: prog.title });
                }}
                className="btn-primary text-sm px-6 py-3"
              >
                <Heart className="w-4 h-4 fill-utrujjah-gold-400 text-utrujjah-gold-400" />
                <span>دعم وكفالة هذا البرنامج</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Media Details Modal
  if (activeModal === 'media-details' && modalData) {
    const item = modalData;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-emerald-900/10 animate-fadeIn relative">
          
          <div className="bg-gradient-to-r from-utrujjah-green-950 via-emerald-900 to-utrujjah-green-950 text-white p-6 sm:p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-utrujjah-gold-500 text-slate-950">
                {item.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </span>
            </div>

            <h3 className="text-2xl font-black font-alexandria text-white leading-tight">
              {item.title}
            </h3>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 italic">
              وصف المشهد التوثيقي: {item.imageText}
            </div>

            <div className="text-slate-800 text-sm leading-relaxed font-tajawal space-y-3">
              <p>{item.content || item.summary}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100"
              >
                إغلاق
              </button>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('تم نسخ رابط الخبر للمشاركة');
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>مشاركة</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
