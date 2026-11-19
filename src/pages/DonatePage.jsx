import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Lock,
  CreditCard,
  Building,
  Smartphone,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

export default function DonatePage() {
  const { projects, pageParam, processDonation, showToast } = useApp();

  // Form State
  const [selectedProjectId, setSelectedProjectId] = useState(() => {
    if (pageParam && pageParam.projectId) return pageParam.projectId;
    return projects[0]?.id || 'general';
  });

  const [donationType, setDonationType] = useState('صدقة جارية');
  const [selectedAmount, setSelectedAmount] = useState(pageParam?.amount || 100);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mada');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preset quick amounts
  const presetAmounts = [50, 100, 200, 500, 1000, 2500];

  useEffect(() => {
    if (pageParam && pageParam.projectId) {
      setSelectedProjectId(pageParam.projectId);
    }
    if (pageParam && pageParam.amount) {
      setSelectedAmount(pageParam.amount);
      setCustomAmount('');
    }
  }, [pageParam]);

  const activeProject = projects.find(p => p.id === selectedProjectId);

  const finalAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!finalAmount || finalAmount <= 0) {
      showToast('يرجى تحديد أو إدخال مبلغ تبرع صحيح', 'error');
      return;
    }

    if (!isAnonymous && !donorName.trim()) {
      showToast('يرجى كتابة اسم المتبرع أو اختيار "فاعل خير (تبرع خفي)"', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      processDonation({
        amount: finalAmount,
        projectId: selectedProjectId,
        projectName: activeProject ? activeProject.title : 'تبرع عام - دعم مسيرة فريق أترجة',
        type: donationType,
        donorName: isAnonymous ? 'فاعل خير (تبرع خفي)' : donorName,
        isAnonymous,
        email,
        phone,
        paymentMethod
      });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <div className="animate-fadeIn py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <Heart className="w-4 h-4 fill-utrujjah-gold-400" />
            <span>بوابة التبرع الإلكتروني الآمن</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-alexandria text-white">
            ساهم في صناعة الأثر
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            «مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ»؛ مساهمتكم الكريمة تساند حفظة كتاب الله، وتكفل الأيتام، وتفرج كرب الأسر المتعففة في وطننا الغالي.
          </p>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Donation Steps (Col 1-8) */}
          <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
            
            {/* Step 1: Select Project */}
            <div className="space-y-3">
              <label className="block text-base font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-utrujjah-green-800 text-white text-xs flex items-center justify-center">1</span>
                <span>اختر المشروع أو المبادرة المراد دعمها:</span>
              </label>

              <select
                value={selectedProjectId}
                onChange={(e) => setSelectedProjectId(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 focus:ring-2 focus:ring-utrujjah-gold-500/20 text-sm font-tajawal font-medium bg-slate-50/50"
              >
                <option value="general">✨ مساهمة عامة - دعم كافة برامج ومشاريع فريق أترجة</option>
                {projects.map((proj) => (
                  <option key={proj.id} value={proj.id}>
                    [{proj.category}] {proj.title}
                  </option>
                ))}
              </select>

              {activeProject && (
                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200 text-xs font-tajawal text-slate-700 space-y-2">
                  <div className="flex justify-between items-center font-bold text-utrujjah-green-900">
                    <span>{activeProject.title}</span>
                    <span>كود: {activeProject.code}</span>
                  </div>
                  <p>{activeProject.summary}</p>
                </div>
              )}
            </div>

            {/* Step 2: Donation Type */}
            <div className="space-y-3">
              <label className="block text-base font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-utrujjah-green-800 text-white text-xs flex items-center justify-center">2</span>
                <span>تحديد نوع النية والمصرف:</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  'صدقة جارية',
                  'زكاة مال واجبة',
                  'كفالة ورعاية',
                  'وقف قرآني مستمر'
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setDonationType(type)}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      donationType === type
                        ? 'bg-utrujjah-green-800 text-white border-utrujjah-green-800 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Choose Amount */}
            <div className="space-y-4">
              <label className="block text-base font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-utrujjah-green-800 text-white text-xs flex items-center justify-center">3</span>
                <span>اختر أو أدخل مبلغ التبرع (بالريال السعودي):</span>
              </label>

              {/* Preset buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleAmountSelect(amt)}
                    className={`py-3 rounded-xl font-black text-sm sm:text-base border transition-all ${
                      selectedAmount === amt && !customAmount
                        ? 'bg-gradient-to-r from-utrujjah-gold-500 to-amber-500 text-slate-950 border-amber-500 shadow-md scale-102'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-utrujjah-gold-400'
                    }`}
                  >
                    {amt} ر.س
                  </button>
                ))}
              </div>

              {/* Custom input */}
              <div className="pt-2">
                <span className="text-xs text-slate-500 block mb-1.5 font-medium">أو أدخل مبلغاً مخصصاً من اختيارك:</span>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    placeholder="مبلغ مخصص..."
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pr-4 pl-16 py-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 focus:ring-2 focus:ring-utrujjah-gold-500/20 text-base font-bold text-slate-900 bg-slate-50/50"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 pointer-events-none">
                    ريال سعودي
                  </span>
                </div>
              </div>
            </div>

            {/* Step 4: Donor Information */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="block text-base font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-utrujjah-green-800 text-white text-xs flex items-center justify-center">4</span>
                  <span>بيانات المتبرع الكريم:</span>
                </label>

                {/* Anonymous Toggle */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 text-utrujjah-green-700 rounded border-slate-300 focus:ring-utrujjah-gold-500"
                  />
                  <span className="text-xs font-bold text-utrujjah-gold-700">
                    فاعل خير (تبرع خفي دون ذكر الاسم)
                  </span>
                </label>
              </div>

              {!isAnonymous && (
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">الاسم الكريم:</label>
                  <input
                    type="text"
                    required={!isAnonymous}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="مثال: عبد الله بن محمد"
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">رقم الجوال (اختياري لاستلام الوصل):</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XXXXXXXX"
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal dir-ltr text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">البريد الإلكتروني (اختياري):</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="donor@example.com"
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal dir-ltr text-right"
                  />
                </div>
              </div>
            </div>

            {/* Step 5: Payment Gateway Simulation */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-base font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-utrujjah-green-800 text-white text-xs flex items-center justify-center">5</span>
                <span>وسيلة الدفع المعتمدة:</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'mada', label: 'مدى (Mada)', icon: CreditCard },
                  { id: 'applepay', label: 'Apple Pay', icon: Smartphone },
                  { id: 'visa', label: 'Visa / MasterCard', icon: CreditCard },
                  { id: 'stcpay', label: 'stc pay', icon: Smartphone },
                  { id: 'bank', label: 'تحويل بنكي رسمي', icon: Building },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id)}
                      className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all text-xs sm:text-sm font-bold ${
                        paymentMethod === m.id
                          ? 'border-utrujjah-gold-500 bg-amber-50/70 text-slate-950 ring-2 ring-utrujjah-gold-400'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-utrujjah-green-800" />
                      <span>{m.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Side Summary & Confirmation Card (Col 9-12) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white p-6 sm:p-8 rounded-3xl border border-utrujjah-gold-500/30 shadow-xl space-y-6 sticky top-28">
            
            <div className="border-b border-emerald-800/80 pb-4">
              <span className="text-xs text-utrujjah-gold-300 font-bold block mb-1">
                ملخص عملية المساهمة
              </span>
              <h3 className="text-xl font-black font-alexandria text-white">
                تفاصيل التبرع الفوري
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm font-tajawal">
              <div className="flex justify-between items-center text-slate-300">
                <span>المشروع المستفيد:</span>
                <span className="font-bold text-white text-left max-w-[170px] truncate">
                  {activeProject ? activeProject.title : 'دعم عام لكافة المشاريع'}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>نوع التبرع:</span>
                <span className="font-bold text-utrujjah-gold-300">{donationType}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>اسم المتبرع:</span>
                <span className="font-bold text-white">
                  {isAnonymous ? 'فاعل خير (خفي)' : (donorName || 'فاعل خير')}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>وسيلة الدفع:</span>
                <span className="font-bold text-white uppercase">{paymentMethod}</span>
              </div>
            </div>

            {/* Total Amount Box */}
            <div className="bg-black/30 p-4 rounded-2xl border border-utrujjah-gold-500/30 text-center space-y-1">
              <span className="text-xs text-utrujjah-gold-300 font-bold block">إجمالي مبلغ التبرع:</span>
              <span className="text-3xl font-black font-alexandria text-white block">
                {finalAmount ? finalAmount.toLocaleString() : 0}
                <span className="text-base text-utrujjah-gold-400 mr-1.5 font-bold">ريال</span>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !finalAmount || finalAmount <= 0}
              className="w-full btn-gold text-base py-3.5 shadow-gold-glow disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>جارٍ معالجة التبرع وتوليد الوصل...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-slate-950" />
                  <span>انتقل لإتمام التبرع الآمن</span>
                </>
              )}
            </button>

            {/* Security Guarantee Note */}
            <div className="flex items-center gap-2 text-[11px] text-slate-300/80 pt-2 border-t border-emerald-800/60 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-utrujjah-gold-400 flex-shrink-0" />
              <span>
                عملية مشفرة وآمنة 100%. يصدر سند استلام معتمد فور الدفع متوافق مع معايير الحوكمة السعودية.
              </span>
            </div>

          </div>

        </form>
      </section>

    </div>
  );
}
