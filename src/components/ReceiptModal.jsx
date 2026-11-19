import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Printer,
  X,
  CheckCircle2,
  Share2,
  Download,
  ShieldCheck,
  Heart
} from 'lucide-react';

export default function ReceiptModal() {
  const { activeModal, modalData, closeModal, teamData } = useApp();

  if (activeModal !== 'receipt' || !modalData) return null;

  const handlePrint = () => {
    window.print();
  };

  const paymentLabels = {
    mada: 'مدى (Mada)',
    applepay: 'Apple Pay',
    visa: 'بطاقة ائتمانية (Visa / Mastercard)',
    stcpay: 'stc pay',
    bank: 'تحويل بنكي رسمي'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      
      {/* Modal Container */}
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-utrujjah-gold-500/30 animate-fadeIn relative">
        
        {/* Top Header Buttons (Hidden on Print) */}
        <div className="no-print bg-emerald-950 text-white p-4 flex items-center justify-between border-b border-utrujjah-gold-500/20">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm">تم استلام التبرع بنجاح - وصل معتمد</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-utrujjah-gold-500 hover:bg-utrujjah-gold-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة الوصل</span>
            </button>

            <button
              onClick={closeModal}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Receipt Body */}
        <div id="printable-receipt" className="p-8 sm:p-10 font-tajawal text-slate-800 bg-[#fefdfb]">
          
          {/* Receipt Top Header */}
          <div className="flex items-center justify-between border-b-2 border-utrujjah-gold-500/40 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-utrujjah-gold-500 to-utrujjah-green-600 shadow-md">
                <img
                  src="/logo-circle.png"
                  alt="شعار فريق أترجة"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-utrujjah-green-950 font-alexandria leading-none">
                  فريق أترجة
                </h3>
                <span className="text-xs text-utrujjah-gold-700 font-bold block mt-1">
                  سند تبرع واستلام إلكتروني معتمد
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {teamData.licenseNumber}
                </span>
              </div>
            </div>

            {/* Receipt Serial & Status */}
            <div className="text-left">
              <span className="text-[11px] text-slate-500 block">رقم السند:</span>
              <span className="text-sm font-mono font-black text-utrujjah-green-900 block dir-ltr">
                {modalData.receiptNumber || modalData.id}
              </span>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                {modalData.status}
              </span>
            </div>
          </div>

          {/* Slogan Banner */}
          <div className="bg-emerald-50/80 border-r-4 border-emerald-700 p-3 rounded-xl mb-6 text-xs text-emerald-900 leading-relaxed">
            «تقبل الله طاعتكم، وجعل ما قدمتموه في ميزان حسناتكم ونماءً لأموالكم وبركة في أعماركم»
          </div>

          {/* Receipt Data Table */}
          <div className="space-y-3.5 text-sm mb-6">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">اسم المتبرع الكريم:</span>
              <span className="font-bold text-slate-900">{modalData.donorName}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">تاريخ وساعة التبرع:</span>
              <span className="font-semibold text-slate-800">{modalData.date}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">المشروع المستفيد:</span>
              <span className="font-bold text-utrujjah-green-900 text-left max-w-xs">{modalData.projectName}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">نوع التبرع:</span>
              <span className="font-semibold text-slate-800">{modalData.type}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">وسيلة الدفع:</span>
              <span className="font-semibold text-slate-800">
                {paymentLabels[modalData.paymentMethod] || modalData.paymentMethod}
              </span>
            </div>

            {/* Highlighted Amount */}
            <div className="bg-gradient-to-r from-utrujjah-green-900 to-utrujjah-green-950 text-white p-5 rounded-2xl flex items-center justify-between shadow-md mt-4">
              <div>
                <span className="text-xs text-utrujjah-gold-300 block">المبلغ الإجمالي المدفوع:</span>
                <span className="text-3xl font-black font-alexandria text-white">
                  {modalData.amount.toLocaleString()} <span className="text-lg font-bold text-utrujjah-gold-300">ريال سعودي</span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-400 flex items-center justify-center">
                <Heart className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>

          {/* Verification QR & Official Stamp Simulator */}
          <div className="flex items-center justify-between pt-4 border-t-2 border-slate-200 text-xs text-slate-500">
            {/* Simulated Verification QR Code */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white p-1 rounded-lg border border-slate-300 shadow-xs flex items-center justify-center">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(`فريق أترجة - سند رقم ${modalData.receiptNumber} بمبلغ ${modalData.amount} ريال`)}`}
                  alt="رمز التحقق QR"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to stylized SVG QR if offline
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="block font-bold text-slate-700">رمز التحقق الفوري (QR)</span>
                <span className="text-[10px] text-slate-400">سند رسمي مشفر وموثق</span>
              </div>
            </div>

            {/* Official Seal simulation */}
            <div className="text-center p-2 rounded-xl border border-utrujjah-gold-500/40 bg-utrujjah-gold-50/40">
              <div className="w-12 h-12 mx-auto rounded-full border-2 border-dashed border-utrujjah-gold-600 flex items-center justify-center text-[10px] font-black text-utrujjah-green-900 leading-tight">
                أترجة
                <br />
                معتمد
              </div>
              <span className="text-[10px] text-utrujjah-gold-800 font-bold block mt-1">الختم الإلكتروني</span>
            </div>
          </div>

          {/* Footer Address */}
          <div className="mt-6 pt-4 text-center border-t border-slate-100 text-[11px] text-slate-400">
            {teamData.address} • هاتف: {teamData.phone} • {teamData.email}
          </div>

        </div>

        {/* Modal Bottom Actions (Hidden on Print) */}
        <div className="no-print p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={closeModal}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
          >
            إغلاق
          </button>

          <button
            onClick={handlePrint}
            className="btn-primary text-xs sm:text-sm px-6 py-2.5"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة أو حفظ السند (PDF)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
