import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  const { teamData, submitContactMessage, showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      showToast('يرجى ملء الحقول الإلزامية (الاسم، الجوال، والرسالة)', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      submitContactMessage({
        name,
        email,
        phone,
        subject: subject || 'استفسار عام',
        message
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="animate-fadeIn py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <MessageSquare className="w-4 h-4 text-utrujjah-gold-400" />
            <span>قنوات التواصل المعتمدة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-alexandria text-white">
            تواصل مع فريق أترجة
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            نسعد باستقبال استفساراتكم واقتراحاتكم وشراكاتكم الكريمة، وفريقنا على أتم الاستعداد لخدمتكم.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form (Col 1-7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-emerald-900/10 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-black font-alexandria text-utrujjah-green-950 mb-1">
                أرسل لنا رسالة مباشرة
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-tajawal">
                املأ النموذج أدناه وسيتم تحويل رسالتكم إلى القسم المختص للرد خلال 24 ساعة عمل.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-2xl text-center space-y-3 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
                  تم استلام رسالتكم بنجاح!
                </h3>
                <p className="text-sm text-slate-700 font-tajawal leading-relaxed">
                  شكراً لتواصلكم مع فريق أترجة، سيقوم ممثل خدمة المستفيدين والشركاء بالتواصل معكم قريباً عبر رقم الجوال أو البريد الإلكتروني المسجل.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-utrujjah-green-800 text-white text-xs font-bold"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      الاسم الكامل <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="اسمك الكريم..."
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      رقم الجوال <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal dir-ltr text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal dir-ltr text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      موضوع الرسالة
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="مثال: استفسار عن كفالة حلقة قرآنية"
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    نص الرسالة والاستفسار <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب رسالتك أو استفسارك بالتفصيل هنا..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3.5 text-base shadow-green-glow disabled:opacity-50"
                >
                  <Send className="w-4 h-4 ml-1" />
                  <span>{isSubmitting ? 'جارٍ الإرسال...' : 'إرسال الرسالة الآن'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Official Info Side (Col 8-12) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-utrujjah-green-950 to-emerald-900 text-white p-6 sm:p-8 rounded-3xl border border-utrujjah-gold-500/30 shadow-xl space-y-6">
            
            <div className="border-b border-emerald-800/80 pb-4">
              <span className="text-xs text-utrujjah-gold-300 font-bold block mb-1">
                بيانات التواصل الرسمية
              </span>
              <h3 className="text-2xl font-black font-alexandria text-white">
                مقر وفريق أترجة
              </h3>
            </div>

            <div className="space-y-4 text-sm font-tajawal">
              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                <MapPin className="w-5 h-5 text-utrujjah-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-bold text-utrujjah-gold-300 mb-0.5">العنوان الرسمي:</span>
                  <span className="text-slate-200">{teamData.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                <Phone className="w-5 h-5 text-utrujjah-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-bold text-utrujjah-gold-300 mb-0.5">الهاتف الموحد:</span>
                  <a href={`tel:${teamData.phone}`} className="text-slate-200 hover:text-white dir-ltr block">
                    {teamData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                <Mail className="w-5 h-5 text-utrujjah-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-bold text-utrujjah-gold-300 mb-0.5">البريد الإلكتروني المعتمد:</span>
                  <a href={`mailto:${teamData.email}`} className="text-slate-200 hover:text-white">
                    {teamData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                <Clock className="w-5 h-5 text-utrujjah-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-bold text-utrujjah-gold-300 mb-0.5">أوقات العمل المكتبي:</span>
                  <span className="text-slate-200">الأحد – الخميس: 8:00 صباحاً حتى 4:00 مساءً</span>
                </div>
              </div>
            </div>

            {/* Official Registration License Note */}
            <div className="p-3.5 bg-utrujjah-gold-500/20 rounded-2xl border border-utrujjah-gold-400/30 flex items-center gap-2.5 text-xs text-utrujjah-gold-200">
              <ShieldCheck className="w-5 h-5 text-utrujjah-gold-400 flex-shrink-0" />
              <span>{teamData.licenseNumber}</span>
            </div>

            {/* Google Map Link Button */}
            <div className="pt-2">
              <a
                href={teamData.coordinates.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-white text-utrujjah-green-950 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>فتح المقر في خرائط Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
