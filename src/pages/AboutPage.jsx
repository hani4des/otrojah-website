import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Users,
  BookOpen,
  Award,
  Target,
  Eye,
  CheckCircle2,
  Calendar,
  Heart,
  ArrowLeft
} from 'lucide-react';

const valueIcons = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Users: Users,
  BookOpen: BookOpen
};

export default function AboutPage() {
  const { teamData, navigateTo } = useApp();

  return (
    <div className="animate-fadeIn py-12 space-y-16">
      
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <Sparkles className="w-4 h-4 text-utrujjah-gold-400" />
            <span>الهوية والرسالة والمبادئ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-alexandria text-white tracking-tight">
            عن فريق أترجة
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            {teamData.aboutText || "منظومة عمل تطوعي ومؤسسي تسعى إلى ترك بصمة إيمانية وإنسانية مضيئة في مجتمعنا، تأسست وفق رؤية عصرية ترتكز على إتقان العطاء وخدمة كتاب الله."}
          </p>

          <div className="pt-2">
            <span className="text-xs text-utrujjah-gold-400 bg-black/30 px-3.5 py-1.5 rounded-full border border-utrujjah-gold-500/30 inline-block font-mono">
              {teamData.licenseNumber}
            </span>
          </div>
        </div>
      </section>

      {/* Origin of Name: Hadith of Utrujjah */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="card-luxury p-8 sm:p-10 bg-gradient-to-br from-white via-emerald-50/40 to-utrujjah-gold-50/30 border-utrujjah-gold-500/30 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-utrujjah-gold-500 to-utrujjah-green-700 shadow-xl flex-shrink-0">
              <img
                src="/logo-circle.png"
                alt="شعار فريق أترجة"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>

            <div className="space-y-3 text-right">
              <span className="text-xs font-bold text-utrujjah-gold-700 tracking-wider block">
                دلالة الاسم وسر الاختيار
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-utrujjah-green-950">
                لماذا «أترجة»؟
              </h2>
              <p className="text-slate-700 leading-relaxed font-tajawal text-base">
                استلهمنا اسم الفريق من الحديث النبوي الشريف:
                <br />
                <span className="font-bold text-utrujjah-green-900 text-lg block my-1">
                  «مَثَلُ الْمُؤْمِنِ الَّذِي يَقْرَأُ الْقُرْآنَ كَمَثَلِ الأُتْرُجَّةِ؛ رِيحُهَا طَيِّبٌ وَطَعْمُهَا طَيِّبٌ»
                </span>
                فالأترجة تجمع بين طيب الباطن وحسن الظاهر، وهذا تماماً ما نرجوه في مسيرتنا: أن يكون عملنا خالصاً لوجه الله، وأن يفيض أثره خيراً ورحمة وجمالاً يلمسه كل محتاج ومتعلم في مجتمعنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="card-luxury p-8 sm:p-10 bg-gradient-to-br from-emerald-950 to-utrujjah-green-900 text-white relative overflow-hidden border-utrujjah-gold-500/30">
            <div className="w-14 h-14 rounded-2xl bg-utrujjah-gold-500/20 text-utrujjah-gold-400 flex items-center justify-center mb-6 border border-utrujjah-gold-500/30">
              <Eye className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-black font-alexandria text-white mb-4">
              رؤيتنا المستقبلية
            </h3>

            <p className="text-slate-200 text-base leading-relaxed font-tajawal">
              {teamData.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="card-luxury p-8 sm:p-10 bg-gradient-to-br from-[#0c2e1b] to-emerald-950 text-white relative overflow-hidden border-utrujjah-gold-500/30">
            <div className="w-14 h-14 rounded-2xl bg-utrujjah-gold-500/20 text-utrujjah-gold-400 flex items-center justify-center mb-6 border border-utrujjah-gold-500/30">
              <Target className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-black font-alexandria text-white mb-4">
              رسالتنا المؤسسية
            </h3>

            <p className="text-slate-200 text-base leading-relaxed font-tajawal">
              {teamData.mission}
            </p>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-utrujjah-gold-700 bg-utrujjah-gold-100 px-3 py-1 rounded-full">
            المبادئ الحاكمة
          </span>
          <h2 className="text-3xl font-black font-alexandria text-utrujjah-green-950">
            قيمنا الجوهرية
          </h2>
          <p className="text-slate-600 text-sm font-tajawal">
            منظومة القيم التي تحكم تعاملاتنا مع المانحين، والمستفيدين، وفريق العمل، والشركاء.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.values.map((val) => {
            const Icon = valueIcons[val.icon] || Sparkles;

            return (
              <div key={val.id} className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-utrujjah-green-900 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-utrujjah-green-800" />
                  </div>
                  <h3 className="text-lg font-bold font-alexandria text-utrujjah-green-950 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-tajawal">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-utrujjah-green-950 mb-6 text-center">
            أهدافنا الاستراتيجية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamData.goals.map((goal, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-utrujjah-green-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-slate-800 text-sm leading-relaxed font-tajawal font-medium">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-black font-alexandria text-utrujjah-green-950">
            أبرز محطات الإنجاز
          </h2>
          <p className="text-slate-600 text-sm font-tajawal">
            ثمار سنوات من العطاء بفضل الله وتوفيقه ثم بدعم المحسنين
          </p>
        </div>

        <div className="space-y-4">
          {teamData.achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-emerald-900/10 shadow-xs flex items-center gap-4 hover:border-utrujjah-gold-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-utrujjah-gold-100 text-utrujjah-gold-700 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-slate-800 text-sm sm:text-base font-tajawal font-medium">
                {ach}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-r from-utrujjah-green-950 to-emerald-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black font-alexandria text-white">
            كن شريكاً في هذا الأثر المبارك
          </h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-tajawal">
            مساهمتك مهما كانت تصنع فارقاً حقيقياً في حياة يتيم، أو طالب قرآن، أو أسرة متعففة.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigateTo('donate')}
              className="btn-gold px-8 py-3.5 text-base"
            >
              <Heart className="w-5 h-5 fill-slate-950" />
              <span>ساهم معنا الآن</span>
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className="px-6 py-3.5 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
            >
              استعرض المشاريع
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
