import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Coins,
  ArrowLeft,
  Sparkles,
  Info
} from 'lucide-react';

export default function ZakatPage() {
  const { navigateTo } = useApp();

  // Inputs
  const [cashBalance, setCashBalance] = useState('');
  const [gold24kGrams, setGold24kGrams] = useState('');
  const [gold21kGrams, setGold21kGrams] = useState('');
  const [gold18kGrams, setGold18kGrams] = useState('');
  const [silverGrams, setSilverGrams] = useState('');
  const [tradeMerchandise, setTradeMerchandise] = useState('');
  const [debtsToDeduct, setDebtsToDeduct] = useState('');
  const [passedHawl, setPassedHawl] = useState(true);

  // Default Gold/Silver Market Prices in SAR (realistic Saudi prices)
  const [goldPrice24k, setGoldPrice24k] = useState(315); // SAR per gram
  const [silverPricePerGram, setSilverPricePerGram] = useState(3.8); // SAR per gram

  // Nisab threshold: 85 grams of 24k gold
  const goldNisabThreshold = 85 * goldPrice24k; // in SAR (~26,775 SAR)
  const silverNisabThreshold = 595 * silverPricePerGram; // ~2,261 SAR

  // Price calculations for gold carats:
  // 21k = 24k * (21/24)
  // 18k = 24k * (18/24)
  const gold24kValue = (parseFloat(gold24kGrams) || 0) * goldPrice24k;
  const gold21kValue = (parseFloat(gold21kGrams) || 0) * (goldPrice24k * (21 / 24));
  const gold18kValue = (parseFloat(gold18kGrams) || 0) * (goldPrice24k * (18 / 24));
  const totalGoldValue = gold24kValue + gold21kValue + gold18kValue;

  const totalSilverValue = (parseFloat(silverGrams) || 0) * silverPricePerGram;
  const totalCash = parseFloat(cashBalance) || 0;
  const totalTrade = parseFloat(tradeMerchandise) || 0;
  const totalDebts = parseFloat(debtsToDeduct) || 0;

  // Gross Zakatable Assets
  const grossAssets = totalCash + totalGoldValue + totalSilverValue + totalTrade;

  // Net Zakatable Assets
  const netZakatableAssets = Math.max(0, grossAssets - totalDebts);

  // Is Nisab Reached? (using gold nisab standard as commonly adopted in Saudi fatwas for monetary wealth)
  const isNisabReached = netZakatableAssets >= goldNisabThreshold;

  // Zakat Amount (2.5% = 1/40)
  const zakatDue = isNisabReached && passedHawl ? netZakatableAssets * 0.025 : 0;

  const handlePayZakat = () => {
    navigateTo('donate', {
      amount: Math.round(zakatDue),
      programName: 'زكاة المال - مصارف الزكاة الشرعية'
    });
  };

  return (
    <div className="animate-fadeIn py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-amber-950 via-emerald-950 to-utrujjah-green-950 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <Calculator className="w-4 h-4 text-utrujjah-gold-400" />
            <span>متوافقة مع الضوابط الشرعية المعتمدة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-alexandria text-white">
            حاسبة الزكاة الشرعية
          </h1>

          <p className="text-base sm:text-lg text-amber-100 font-tajawal max-w-2xl mx-auto leading-relaxed">
            احسب زكاة أموالك ومدخراتك والذهب وعروض التجارة بكل دقة وسهولة، وأدِّ فريضتك بطمأنينة عبر توجيهها لمصارفها الشرعية الثمانية.
          </p>
        </div>
      </section>

      {/* Main Grid: Calculator Inputs + Live Results */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section (Col 1-8) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-emerald-900/10 shadow-sm space-y-8">
            
            {/* Introductory Note */}
            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-slate-700 font-tajawal flex items-start gap-3">
              <Info className="w-5 h-5 text-utrujjah-green-800 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-utrujjah-green-900 block mb-0.5">ضوابط وجوب الزكاة:</span>
                تجب الزكاة إذا بلغ المال النصاب (ما يعادل قيمة 85 جراماً من الذهب عيار 24)، وحال عليه الحول الهجري (مرور عام كامل وهو بالغ للنصاب)، وكان فاضلاً عن الحاجات الأصلية.
              </div>
            </div>

            {/* Field 1: Cash & Bank Accounts */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-base font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-utrujjah-gold-600" />
                  <span>السيولة النقدية والأرصدة البنكية:</span>
                </label>
                <span className="text-xs text-slate-400">ريال سعودي</span>
              </div>
              <input
                type="number"
                min="0"
                placeholder="أدخل إجمالي النقد في يدك أو في حساباتك البنكية..."
                value={cashBalance}
                onChange={(e) => setCashBalance(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 focus:ring-2 focus:ring-utrujjah-gold-500/20 text-base font-bold text-slate-900 bg-slate-50/50"
              />
            </div>

            {/* Field 2: Gold Holdings */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <label className="text-base font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-utrujjah-gold-600" />
                  <span>الذهب المقتنى للتجارة أو الادخار:</span>
                </label>
                <span className="text-xs text-utrujjah-gold-700 font-bold">
                  سعر عيار 24: {goldPrice24k} ر.س / جرام
                </span>
              </div>

              <p className="text-xs text-slate-500 font-tajawal">
                * الذهب المخصص للاستعمال الشخصي المعتاد للمرأة لا زكاة فيه عند جمهور الفقهاء، والزكاة في الذهب المدخر أو المعد للتجارة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">عيار 24 (بالجرام):</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="جرامات 24"
                    value={gold24kGrams}
                    onChange={(e) => setGold24kGrams(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-bold"
                  />
                  {gold24kValue > 0 && (
                    <span className="text-[11px] text-emerald-800 font-bold block mt-1">
                      القيمة: {Math.round(gold24kValue).toLocaleString()} ر.س
                    </span>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">عيار 21 (بالجرام):</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="جرامات 21"
                    value={gold21kGrams}
                    onChange={(e) => setGold21kGrams(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-bold"
                  />
                  {gold21kValue > 0 && (
                    <span className="text-[11px] text-emerald-800 font-bold block mt-1">
                      القيمة: {Math.round(gold21kValue).toLocaleString()} ر.س
                    </span>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">عيار 18 (بالجرام):</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="جرامات 18"
                    value={gold18kGrams}
                    onChange={(e) => setGold18kGrams(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-bold"
                  />
                  {gold18kValue > 0 && (
                    <span className="text-[11px] text-emerald-800 font-bold block mt-1">
                      القيمة: {Math.round(gold18kValue).toLocaleString()} ر.س
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Field 3: Silver Holdings */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <label className="text-base font-bold font-alexandria text-utrujjah-green-950">
                  الفضة المدخرة أو المعدة للتجارة:
                </label>
                <span className="text-xs text-slate-500">سعر الفضة: {silverPricePerGram} ر.س / جرام</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  placeholder="أدخل وزن الفضة بالجرام..."
                  value={silverGrams}
                  onChange={(e) => setSilverGrams(e.target.value)}
                  className="w-full pr-4 pl-16 py-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-bold bg-slate-50/50"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">جرام</span>
              </div>
            </div>

            {/* Field 4: Trade Merchandise */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="text-base font-bold font-alexandria text-utrujjah-green-950 block">
                عروض التجارة (البضائع والسلع المعدة للبيع):
              </label>
              <p className="text-xs text-slate-500 font-tajawal">
                تُقوّم البضائع المعروضة للبيع بسعر بيعها الحالي في السوق يوم وجوب الزكاة، ولا تُحسب الأصول الثابتة كالمعدات والمباني والسيارات المستخدمة في النشاط.
              </p>
              <input
                type="number"
                min="0"
                placeholder="قيمة البضائع والسلع المعدة للبيع بالريال..."
                value={tradeMerchandise}
                onChange={(e) => setTradeMerchandise(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-bold bg-slate-50/50"
              />
            </div>

            {/* Field 5: Deductible Debts */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="text-base font-bold font-alexandria text-rose-950 block">
                الديون والالتزامات المستحقة الخصم:
              </label>
              <p className="text-xs text-slate-500 font-tajawal">
                الديون الحالة المستحقة عليك التي يلزم سدادها فوراً من هذه الأموال، تخصم من إجمالي الوعاء الزكوي وفق الضوابط الشرعية.
              </p>
              <input
                type="number"
                min="0"
                placeholder="مبلغ الديون الحالة المستحقة عليك..."
                value={debtsToDeduct}
                onChange={(e) => setDebtsToDeduct(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-rose-400 text-sm font-bold bg-slate-50/50"
              />
            </div>

            {/* Hawl Checkbox */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50/60 border border-amber-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={passedHawl}
                  onChange={(e) => setPassedHawl(e.target.checked)}
                  className="w-5 h-5 text-utrujjah-gold-600 rounded border-amber-300 focus:ring-utrujjah-gold-500"
                />
                <div>
                  <span className="font-bold text-sm text-amber-950 block">
                    تحقق شرط مرور الحول (مضى عام هجري كامل على بلوغ المال النصاب)
                  </span>
                  <span className="text-xs text-amber-800/80 font-tajawal">
                    إذا لم يمضِ حول كامل فالزكاة لا تجب حتى يكتمل الحول، إلا إذا أردت تعجيل إخراجها للمصلحة الشرعية.
                  </span>
                </div>
              </label>
            </div>

          </div>

          {/* Side Results Panel (Col 9-12) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white p-6 sm:p-8 rounded-3xl border border-utrujjah-gold-500/30 shadow-xl space-y-6 sticky top-28">
            
            <div className="border-b border-emerald-800/80 pb-4">
              <span className="text-xs text-utrujjah-gold-300 font-bold block mb-1">
                تقرير الحساب الفوري
              </span>
              <h3 className="text-xl font-black font-alexandria text-white">
                نتيجة وعاء الزكاة
              </h3>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 text-xs sm:text-sm font-tajawal">
              <div className="flex justify-between items-center text-slate-300">
                <span>إجمالي الأصول المدخلة:</span>
                <span className="font-bold text-white">
                  {Math.round(grossAssets).toLocaleString()} ر.س
                </span>
              </div>

              {totalDebts > 0 && (
                <div className="flex justify-between items-center text-rose-300">
                  <span>الديون المخصومة:</span>
                  <span className="font-bold">- {totalDebts.toLocaleString()} ر.س</span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-300 pt-1 border-t border-emerald-800/60">
                <span>صافي الوعاء الخاضع للزكاة:</span>
                <span className="font-bold text-utrujjah-gold-300 text-base">
                  {Math.round(netZakatableAssets).toLocaleString()} ر.س
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-400 text-xs">
                <span>حد النصاب الشرعي المعتمد:</span>
                <span>{Math.round(goldNisabThreshold).toLocaleString()} ر.س</span>
              </div>
            </div>

            {/* Nisab Status Badge */}
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-tajawal ${
              isNisabReached
                ? 'bg-emerald-900/60 border-emerald-400/40 text-emerald-200'
                : 'bg-amber-950/60 border-amber-500/40 text-amber-200'
            }`}>
              <div className="flex items-center gap-2 font-bold mb-1">
                {isNisabReached ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>بلغ المال النصاب الشرعي</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>المال لم يبلغ النصاب بعد</span>
                  </>
                )}
              </div>
              <p className="text-[11px] opacity-80 leading-relaxed">
                {isNisabReached
                  ? 'تجب الزكاة بنسبة ربع العشر (2.5%) عند اكتمال الحول.'
                  : `يلزم أن يبلغ صافي المال ${Math.round(goldNisabThreshold).toLocaleString()} ريال ليتحقق النصاب.`}
              </p>
            </div>

            {/* Resulting Zakat Due */}
            <div className="bg-black/40 p-5 rounded-2xl border border-utrujjah-gold-500/40 text-center space-y-1">
              <span className="text-xs text-utrujjah-gold-300 font-bold block">
                مقدار الزكاة الواجبة (2.5%):
              </span>
              <span className="text-3xl sm:text-4xl font-black font-alexandria text-white block">
                {Math.round(zakatDue).toLocaleString()}
                <span className="text-base text-utrujjah-gold-400 mr-2 font-bold">ريال سعودي</span>
              </span>
            </div>

            {/* Action Button: Pay Zakat Now */}
            <button
              onClick={handlePayZakat}
              disabled={zakatDue <= 0}
              className="w-full btn-gold text-base py-3.5 shadow-gold-glow disabled:opacity-50"
            >
              <span>أخرج زكاتك الآن ({Math.round(zakatDue).toLocaleString()} ريال)</span>
              <ArrowLeft className="w-4 h-4 text-slate-950" />
            </button>

            {/* Religious Disclaimer */}
            <p className="text-[11px] text-slate-300/70 text-center leading-relaxed font-tajawal pt-2 border-t border-emerald-800/60">
              * هذه الحاسبة أداة إرشادية وتيسيرية مبنية على المعتمد في الفقه الإسلامي، ولا تغني عن سؤال أهل العلم الثقات في الحالات الدقيقة كأموال الأسهم والصناديق الاستثمارية.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}
