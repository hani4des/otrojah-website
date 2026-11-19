import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Users,
  BookOpen,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const valueIcons = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Users: Users,
  BookOpen: BookOpen
};

export default function AboutOverviewSection() {
  const { teamData, navigateTo } = useApp();

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Info + Emblem & Hadith */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Side (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-utrujjah-green-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-utrujjah-gold-500" />
              <span>نبذة تعريفية عن الفريق</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-utrujjah-green-950 dark:text-white font-alexandria leading-tight">
              فريق أترجة.. غرسٌ طيّبٌ وأثرٌ مستدام
            </h2>

            {/* Hadith Highlight Box */}
            <div className="bg-gradient-to-r from-emerald-50 via-utrujjah-gold-50/40 to-emerald-50 border-r-4 border-utrujjah-gold-500 p-5 rounded-2xl shadow-sm">
              <p className="text-base md:text-lg font-bold text-utrujjah-green-900 leading-relaxed font-tajawal">
                قال رسول الله ﷺ:
                <br />
                <span className="text-utrujjah-gold-700 font-extrabold text-lg md:text-xl">
                  «مَثَلُ الْمُؤْمِنِ الَّذِي يَقْرَأُ الْقُرْآنَ كَمَثَلِ الأُتْرُجَّةِ؛ رِيحُهَا طَيِّبٌ وَطَعْمُهَا طَيِّبٌ»
                </span>
              </p>
              <span className="text-xs text-slate-500 block mt-2 font-tajawal">
                [صحيح البخاري ومسلم] – ومن هذا التوجيه النبوي استمد فريقنا اسمه ومنهجه في نشر الخير والبركة.
              </span>
            </div>

            {/* Mission & Vision summary */}
            <div className="space-y-3 text-slate-700 text-base leading-relaxed font-tajawal">
              <p>
                <strong>فريق أترجة</strong> منظومة خيرية وتعليمية وإنسانية رائدة تأسست في مدينة جدة بالمملكة العربية السعودية، تُعنى برعاية حفظة كتاب الله، وكفالة الأيتام، ومد يد العون للأسر المتعففة بأعلى معايير الحوكمة والتحول الرقمي.
              </p>
              <p>
                نؤمن بأن العمل الخيري رسالة سامية تُبنى على الإتقان والكرامة، لذلك نسعى لابتكار حلول تنموية متكاملة تضمن استدامة الأثر وتعزز التكافل الاجتماعي في وطننا المعطاء.
              </p>
            </div>

            {/* Values Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {teamData.values.slice(0, 3).map((val) => {
                const Icon = valueIcons[val.icon] || Sparkles;
                return (
                  <div
                    key={val.id}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-utrujjah-gold-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{val.title}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA to About Page */}
            <div className="pt-4">
              <button
                onClick={() => navigateTo('about')}
                className="btn-primary text-sm md:text-base px-7 py-3.5"
              >
                <span>تعرف علينا واكتشف رؤيتنا ورسالتنا</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Visual Side (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 rounded-3xl p-8 text-white shadow-luxury relative overflow-hidden border border-utrujjah-gold-500/30">
              <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                
                {/* Logo Frame */}
                <div className="w-32 h-32 rounded-full p-2 bg-gradient-to-tr from-utrujjah-gold-400 via-emerald-600 to-utrujjah-gold-500 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src="/logo-circle.png"
                      alt="فريق أترجة"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black font-alexandria text-white">
                    رؤيتنا ورسالتنا المؤسسية
                  </h3>
                  <p className="text-xs text-utrujjah-gold-300 font-semibold font-tajawal">
                    {teamData.licenseNumber}
                  </p>
                </div>

                {/* Goals checklist */}
                <div className="w-full space-y-3 text-right text-xs sm:text-sm text-slate-200 font-tajawal">
                  <div className="flex items-start gap-2.5 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-utrujjah-gold-400 flex-shrink-0 mt-0.5" />
                    <span>رعاية الحلقات والمجمعات القرآنية وتخريج الحفاظ المجازين.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-utrujjah-gold-400 flex-shrink-0 mt-0.5" />
                    <span>كفالة وتمكين الأيتام وأسرهم تعليمياً وصحياً ومعيشياً.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-utrujjah-gold-400 flex-shrink-0 mt-0.5" />
                    <span>تفريج الكرب العاجلة والمساعدات الطبية والغذائية للمتعففين.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
