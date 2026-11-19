import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Navigation, ExternalLink, Clock, Phone, Mail } from 'lucide-react';

export default function MapSection() {
  const { teamData } = useApp();

  return (
    <section className="py-16 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Frame */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-emerald-900/10 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Address & Working Hours Info (Col 1-5) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-white to-emerald-50/40">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-utrujjah-green-800 text-xs font-bold mb-4">
                <MapPin className="w-3.5 h-3.5 text-utrujjah-gold-500" />
                <span>المقر الرئيسي المعتمد</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-utrujjah-green-950 font-alexandria mb-4">
                موقع فريق أترجة
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-tajawal mb-6">
                يسعدنا استقبالكم واستفساراتكم في مقرنا الرسمي بمدينة جدة، أو التواصل المباشر عبر قنواتنا المعتمدة.
              </p>

              <div className="space-y-4 text-sm font-tajawal">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-utrujjah-green-800" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800">العنوان الجغرافي:</span>
                    <span className="text-slate-600 text-xs sm:text-sm">{teamData.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-utrujjah-green-800" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800">أوقات العمل الرسمية:</span>
                    <span className="text-slate-600 text-xs sm:text-sm">الأحد – الخميس: 8:00 صباحاً – 4:00 مساءً</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-utrujjah-green-800" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800">الهاتف والاتصال:</span>
                    <a href={`tel:${teamData.phone}`} className="text-utrujjah-green-800 hover:underline text-xs sm:text-sm dir-ltr">
                      {teamData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={teamData.coordinates.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-5 rounded-xl font-bold text-sm bg-utrujjah-green-800 hover:bg-utrujjah-green-700 text-white transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <Navigation className="w-4 h-4 text-utrujjah-gold-400" />
                <span>فتح في خرائط Google والتوجيه الملاحي</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed (Col 6-12) */}
          <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px] w-full relative bg-slate-200">
            <iframe
              title="خريطة مقر فريق أترجة - جدة حي الشاطئ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14841.517871676837!2d39.112200!3d21.583300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0b2f56b19a1%3A0x6b4f727c08a4128!2sAsh%20Shati%2C%20Jeddah!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />

            {/* Custom Location Overlay Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-emerald-900/10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
              <div>
                <span className="block text-xs font-bold text-slate-900">مقر فريق أترجة</span>
                <span className="text-[11px] text-slate-500">حي الشاطئ، جدة</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
