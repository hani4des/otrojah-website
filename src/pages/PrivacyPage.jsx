import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Lock, FileText, CheckCircle2, Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
  const { teamData } = useApp();

  return (
    <div className="animate-fadeIn py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <ShieldCheck className="w-4 h-4 text-utrujjah-gold-400" />
            <span>الامتثال للأنظمة واللوائح السعودية</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-alexandria text-white">
            سياسة الخصوصية وحماية البيانات
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            وفقاً لنظام حماية البيانات الشخصية (PDPL) الصادر بالمرسوم الملكي في المملكة العربية السعودية.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-emerald-900/10 shadow-sm space-y-10 text-slate-800 font-tajawal leading-relaxed">
          
          {/* Intro */}
          <div className="space-y-3">
            <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              1. مقدمة والتزام عام
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              يولي «فريق أترجة» أهمية قصوى لحماية خصوصية وسرية بيانات المتبرعين، والمستفيدين، وزوار منصتنا الإلكترونية. وتوضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها بما يتوافق بالكامل مع نظام حماية البيانات الشخصية ولائحته التنفيذية المعمول بها في المملكة العربية السعودية، ومعايير الهيئة الوطنية للأمن السيبراني.
            </p>
          </div>

          {/* Data Collected */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              2. البيانات التي يتم جمعها
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              نقوم بجمع الحد الأدنى والضروري فقط من البيانات لتمكين تقديم خدمات التبرع والتواصل:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pr-2">
              <li><strong>بيانات المتبرع:</strong> الاسم (اختياري، مع إتاحة خيار التبرع كفاعل خير)، رقم الجوال، والبريد الإلكتروني لإرسال سندات الاستلام والتقارير.</li>
              <li><strong>بيانات المعاملات المالية:</strong> مبالغ التبرع، والمشروع المستهدف، وتاريخ ووقت العملية. (ملاحظة: لا نقوم بتخزين أي أرقام بطاقات بنكية أو أرقام سرية على خوادمنا نهائياً، بل تتم معالجتها عبر بوابات دفع بنكية معتمدة ومصرحة من البنك المركزي السعودي "ساما").</li>
              <li><strong>بيانات التواصل:</strong> البيانات المدخلة في نماذج الاستفسار والتطوع.</li>
              <li><strong>بيانات التصفح التقنية:</strong> عنوان البروتوكول (IP)، ونوع المتصفح لتحسين تجربة التصفح والأمان الرقمي.</li>
            </ul>
          </div>

          {/* Usage */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              3. أوجه استخدام البيانات
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pr-2">
              <li>إصدار سندات التبرع الإلكترونية الرسمية والموثقة.</li>
              <li>تخصيص مبالغ التبرعات للمشاريع والبرامج المصرحة وفق رغبة المتبرع.</li>
              <li>إرسال إشعارات بتقارير الإنجاز والأثر الميداني للمشاريع المدعومة.</li>
              <li>الرد على الاستفسارات والتواصل مع المتبرعين والشركاء.</li>
              <li>الامتثال للمتطلبات النظامية والرقابية للجهات الحكومية المشرفة على القطاع غير الربحي.</li>
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              4. حماية وأمن المعلومات
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              نطبق تدابير أمنية وإدارية وتقنية متقدمة لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو التعديل، بما في ذلك:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs font-bold text-utrujjah-green-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>تشفير كامل لكافة الاتصالات والبيانات (SSL/TLS)</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs font-bold text-utrujjah-green-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>خوادم آمنة ومحمية بجدران نارية متطورة</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs font-bold text-utrujjah-green-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>صلاحيات وصول مقيدة بدقة للعاملين المخولين</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs font-bold text-utrujjah-green-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>عدم تخزين بيانات البطاقات البنكية الحساسة</span>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              5. ملفات تعريف الارتباط (Cookies)
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              تستخدم المنصة ملفات تعريف الارتباط الأساسية لتمكين وظائف التصفح، وحفظ تفضيلات الجلسة، وتأمين تدفق عمليات التبرع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك في أي وقت.
            </p>
          </div>

          {/* Third Parties */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              6. مشاركة البيانات مع أطراف خارجية
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              نلتزم بعدم بيع أو تأجير أو مشاركة بياناتك الشخصية مع أي جهات تجارية أو تسويقية خارجية. لا تتم مشاركة البيانات إلا في الحالات المحددة نظاماً:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pr-2">
              <li>بوابات الدفع الإلكتروني المعتمدة من البنك المركزي السعودي لتنفيذ عمليات الدفع المصرفية.</li>
              <li>الجهات القضائية أو الرقابية الحكومية المختصة عند وجود طلب رسمي بموجب الأنظمة السعودية.</li>
            </ul>
          </div>

          {/* User Rights */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              7. حقوق صاحب البيانات الشخصية
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              بموجب نظام حماية البيانات الشخصية، يحق لك:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pr-2">
              <li>الحق في العلم ومعرفة المسوغ النظامي لجمع بياناتك.</li>
              <li>الحق في الوصول إلى بياناتك الشخصية ومراجعتها.</li>
              <li>الحق في طلب تصحيح أو تحديث بياناتك غير الدقيقة.</li>
              <li>الحق في طلب إتلاف أو حذف بياناتك الشخصية التي لم تعد هناك حاجة نظامية للاحتفاظ بها.</li>
            </ul>
          </div>

          {/* Contact Officer */}
          <div className="space-y-3 pt-4 border-t border-slate-100 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
              8. التواصل بخصوص حماية البيانات والخصوصية
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-tajawal">
              لأي استفسارات أو لممارسة حقوقك المتعلقة ببياناتك الشخصية، يمكنك التواصل مع مسؤول حماية البيانات بفريق أترجة:
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-bold text-utrujjah-green-900">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-utrujjah-gold-600" />
                privacy@utrujjah.org.sa
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-utrujjah-gold-600" />
                {teamData.phone}
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
