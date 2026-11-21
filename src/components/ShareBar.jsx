import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Share2,
  Copy,
  CheckCircle2,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import {
  WhatsAppIcon,
  TelegramIcon,
  XIcon,
  GmailIcon
} from './SocialIcons';

export default function ShareBar() {
  const { teamData } = useApp();
  const [copied, setCopied] = useState(false);

  // If globally disabled from Admin Dashboard
  if (teamData?.shareBar?.enabled === false) return null;

  const enabledChannels = teamData?.shareBar?.channels || {
    whatsapp: true,
    telegram: true,
    x: true,
    gmail: true,
    copy: true
  };

  const getShareData = () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://utrujjah.org.sa';
    const title = typeof document !== 'undefined' ? document.title : 'فريق أترجة | عطاء يمتد وأثر يبقى';
    const text = `${teamData?.name || 'فريق أترجة'} - ${teamData?.tagline || 'عطاءٌ يمتد.. وأثرٌ يبقى'}\nساهم معنا في نشر الخير ودعم مشاريع كتاب الله والإحسان:`;
    return { url, title, text };
  };

  const handleCopyLink = async () => {
    const { url } = getShareData();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const { url, title, text } = getShareData();

  const shareOptions = [
    {
      id: 'whatsapp',
      name: 'واتساب',
      icon: WhatsAppIcon,
      color: 'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[#25D366]/20',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + '\n' + url)}`,
    },
    {
      id: 'telegram',
      name: 'تليجرام',
      icon: TelegramIcon,
      color: 'bg-[#229ED9] hover:bg-[#1d8cc2] text-white shadow-[#229ED9]/20',
      href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    },
    {
      id: 'x',
      name: 'منصة X',
      icon: XIcon,
      color: 'bg-black hover:bg-neutral-800 text-white shadow-black/20 dark:bg-white dark:text-black dark:hover:bg-slate-200',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    },
    {
      id: 'gmail',
      name: 'جيميل',
      icon: GmailIcon,
      color: 'bg-[#EA4335] hover:bg-[#d33426] text-white shadow-[#EA4335]/20',
      href: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`,
    },
  ].filter(opt => enabledChannels[opt.id] !== false);

  return (
    <section className="w-full py-8 sm:py-10 bg-gradient-to-b from-transparent via-emerald-50/40 to-emerald-100/30 dark:via-emerald-950/20 dark:to-emerald-950/40 border-t border-emerald-900/10 dark:border-emerald-800/30 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
        
        {/* Header Call to Action */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/15 border border-utrujjah-gold-500/30 text-utrujjah-green-950 dark:text-utrujjah-gold-300 text-xs sm:text-sm font-bold shadow-sm">
          <HeartHandshake className="w-4 h-4 text-utrujjah-gold-600 dark:text-utrujjah-gold-400" />
          <span>{teamData?.shareBar?.badge || 'الدال على الخير كفاعله • انشر تؤجر بإذن الله'}</span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold font-alexandria text-utrujjah-green-950 dark:text-white">
          {teamData?.shareBar?.headline || 'شارك الصفحة مع أحبابك وكن شريكاً في صناعة الأثر'}
        </h3>
        
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-tajawal">
          بمشاركتك لهذه الصفحة قد تكون سبباً في كفالة يتيم، أو رعاية حلقة قرآنية، أو تفريج كربة أسرة متعففة.
        </p>

        {/* Share Buttons Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
          
          {/* WhatsApp, Telegram, X, Gmail */}
          {shareOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <a
                key={opt.id}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${opt.color}`}
                title={`مشاركة عبر ${opt.name}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{opt.name}</span>
              </a>
            );
          })}

          {/* Copy Link Button with Live Tooltip / Toast Feedback */}
          {enabledChannels.copy !== false && (
            <button
              type="button"
              onClick={handleCopyLink}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95 border ${
                copied
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-slate-300 dark:border-slate-700 hover:border-utrujjah-gold-500 hover:text-utrujjah-gold-600 dark:hover:text-utrujjah-gold-400'
              }`}
              title="نسخ رابط الصفحة لمشاركته"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white animate-bounce shrink-0" />
                  <span>تم نسخ الرابط بنجاح!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-utrujjah-gold-600 dark:text-utrujjah-gold-400 shrink-0" />
                  <span>نسخ الرابط</span>
                </>
              )}
            </button>
          )}

        </div>

      </div>
    </section>
  );
}
