import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Download,
  Share2,
  Copy,
  Check,
  Eye,
  X,
  Smartphone,
  BookOpen,
  Heart,
  Quote,
  Filter,
  Search,
  ExternalLink
} from 'lucide-react';

export default function DesignsPage() {
  const { designs, showToast, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewDesign, setPreviewDesign] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  // Categories list
  const categories = [
    { id: 'all', label: 'جميع التصاميم' },
    { id: 'القرآن والذكر', label: 'القرآن والذكر' },
    { id: 'الهوية والحديث', label: 'الهوية والحديث' },
    { id: 'الصدقة والإحسان', label: 'الصدقة والإحسان' },
    { id: 'مكارم الأخلاق', label: 'مكارم الأخلاق' },
    { id: 'أقوال السلف الصالح', label: 'أقوال السلف' },
    { id: 'رعاية الأيتام', label: 'رعاية الأيتام' },
    { id: 'الصلاة والعبادة', label: 'الصلاة والعبادة' },
  ];

  // Filtered designs
  const filteredDesigns = (designs || []).filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  // Copy text to clipboard
  const handleCopyText = (item, e) => {
    e?.stopPropagation();
    const fullText = `${item.title}\n\n${item.text}\n\n[المصدر: ${item.source}]\n— فريق أترجة`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(item.id);
    showToast('تم نسخ نص التصميم والمصدر المعتمد بنجاح!');
    setTimeout(() => setCopiedId(null), 3000);
  };

  // Share action
  const handleShare = async (item, e) => {
    e?.stopPropagation();
    const shareData = {
      title: item.title,
      text: `${item.text}\n[المصدر: ${item.source}] — فريق أترجة`,
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to copy
        handleCopyText(item, e);
      }
    } else {
      handleCopyText(item, e);
    }
  };

  // Client-side Canvas Image Generation & Download
  const handleDownloadCard = (item, e) => {
    e?.stopPropagation();
    setDownloadingId(item.id);

    try {
      const canvas = document.createElement('canvas');
      // Standard mobile phone story resolution (1080 x 1920)
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext('2d');

      // 1. Theme-based Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
      if (item.colorTheme === 'ruby') {
        bgGrad.addColorStop(0, '#2d0710');
        bgGrad.addColorStop(0.5, '#4f1422');
        bgGrad.addColorStop(1, '#1a0409');
      } else if (item.colorTheme === 'navy') {
        bgGrad.addColorStop(0, '#061726');
        bgGrad.addColorStop(0.5, '#0e2b45');
        bgGrad.addColorStop(1, '#040d16');
      } else if (item.colorTheme === 'gold') {
        bgGrad.addColorStop(0, '#261b07');
        bgGrad.addColorStop(0.5, '#42300f');
        bgGrad.addColorStop(1, '#140e03');
      } else {
        // Default Emerald
        bgGrad.addColorStop(0, '#062014');
        bgGrad.addColorStop(0.5, '#0c3522');
        bgGrad.addColorStop(1, '#03120b');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1080, 1920);

      // 2. Elegant Border Frame
      ctx.strokeStyle = '#c59b27';
      ctx.lineWidth = 8;
      ctx.strokeRect(60, 60, 960, 1800);

      ctx.strokeStyle = '#ddb75388';
      ctx.lineWidth = 2;
      ctx.strokeRect(80, 80, 920, 1760);

      // 3. Top Header: Team Utrujjah Branding
      ctx.textAlign = 'center';
      ctx.fillStyle = '#c59b27';
      ctx.font = 'bold 42px Alexandria, sans-serif';
      ctx.fillText('فريق أُتْرُجَّة', 540, 190);

      ctx.fillStyle = '#ddb753';
      ctx.font = '28px Tajawal, sans-serif';
      ctx.fillText('عطاءٌ يمتد.. وأثرٌ يبقى', 540, 240);

      // 4. Badge Pill
      ctx.fillStyle = '#c59b2733';
      ctx.beginPath();
      ctx.roundRect(380, 310, 320, 60, 30);
      ctx.fill();
      ctx.strokeStyle = '#c59b2788';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#f8e7b9';
      ctx.font = 'bold 26px Alexandria, sans-serif';
      ctx.fillText(item.category, 540, 350);

      // 5. Quran/Hadith Type Subhead
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 36px Alexandria, sans-serif';
      ctx.fillText(`【 ${item.type} 】`, 540, 520);

      // 6. Main Text (Wrapped cleanly)
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 50px Tajawal, sans-serif';
      const words = item.text.split(' ');
      let line = '';
      let y = 680;
      const lineHeight = 80;
      const maxWidth = 800;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, 540, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 540, y);

      // 7. Authentic Source Reference Box
      const sourceY = Math.max(y + 120, 1380);
      ctx.fillStyle = '#ffffff10';
      ctx.beginPath();
      ctx.roundRect(160, sourceY, 760, 100, 20);
      ctx.fill();
      ctx.strokeStyle = '#c59b2766';
      ctx.stroke();

      ctx.fillStyle = '#ddb753';
      ctx.font = 'bold 32px Tajawal, sans-serif';
      ctx.fillText(`المصدر: ${item.source}`, 540, sourceY + 62);

      // 8. Footer: Sunni Verification & Website
      ctx.fillStyle = '#94a3b8';
      ctx.font = '24px Tajawal, sans-serif';
      ctx.fillText('مصدر سني موثق ومعتمد • منصة أترجة الرسمية', 540, 1720);

      // 9. Download trigger
      const link = document.createElement('a');
      link.download = `utrujjah-design-${item.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      showToast('تم تحميل بطاقة التصميم بجودة عالية لشاشة هاتفك!');
    } catch (err) {
      showToast('جاري تحضير البطاقة...');
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="animate-fadeIn py-10 space-y-12">
      
      {/* Top Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-utrujjah-green-950 via-[#0a2f1c] to-black py-16 px-4 sm:px-6 lg:px-8 text-white border-b border-utrujjah-gold-500/20">
        <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-utrujjah-gold-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-utrujjah-gold-500/20 text-utrujjah-gold-300 text-xs font-bold border border-utrujjah-gold-400/30">
            <Smartphone className="w-4 h-4 text-utrujjah-gold-400" />
            <span>بطاقات وتصاميم الهواتف والستوري (9:16)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-alexandria text-white">
            تصاميم أترجة الدعوية والتذكيرية
          </h1>

          <p className="text-sm sm:text-base text-slate-200 font-tajawal max-w-2xl mx-auto leading-relaxed">
            تصاميم إسلامية وتوعوية طولية راقية مهيأة لشاشات الهواتف المحمولة وحالات واتساب وستوري إنستغرام وتيك توك، تضم آيات بينات وأحاديث صحيحة وأقوالاً مأثورة من مصادر سنية موثوقة.
          </p>

          {/* Quick Stats Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-tajawal text-slate-300">
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              أحاديث وآثار صحيحة 100%
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              <Smartphone className="w-3.5 h-3.5 text-sky-400" />
              مقاس طولي لجميع الهواتف
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              <Download className="w-3.5 h-3.5 text-utrujjah-gold-400" />
              تحميل مباشر ومجاني
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0c2417] p-4 sm:p-6 rounded-2xl border border-emerald-900/10 dark:border-emerald-800/40 shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في الآيات، الأحاديث، أو العناوين..."
                className="w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-utrujjah-gold-500 font-tajawal"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results count */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-tajawal self-start md:self-auto">
              عدد التصاميم المتوفرة: <span className="font-bold text-utrujjah-green-800 dark:text-utrujjah-gold-400">{filteredDesigns.length}</span> تصميم
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-white/10">
            {categories.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    active
                      ? 'bg-utrujjah-green-800 dark:bg-utrujjah-gold-500 text-white dark:text-slate-950 shadow-sm'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Designs Grid: Vertical Phone Story Cards (9:16 Aspect Ratio) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredDesigns.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#0c2417] rounded-3xl border border-emerald-900/10 p-8 space-y-3">
            <Quote className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 font-alexandria">
              لا توجد تصاميم مطابقة لبحثك
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-tajawal">
              جرّب تغيير فئة التصنيف أو البحث بكلمات أخرى.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDesigns.map((item) => {
              // Card Color Theme Styling
              let cardBgGradient = 'from-[#072418] via-[#093524] to-[#04140d]';
              let accentColor = 'border-emerald-500/30 hover:border-utrujjah-gold-400';
              let badgeBg = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

              if (item.colorTheme === 'ruby') {
                cardBgGradient = 'from-[#2a0710] via-[#48121f] to-[#1a0409]';
                accentColor = 'border-rose-500/30 hover:border-amber-400';
                badgeBg = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
              } else if (item.colorTheme === 'navy') {
                cardBgGradient = 'from-[#081d2e] via-[#0f2e46] to-[#040f18]';
                accentColor = 'border-sky-500/30 hover:border-utrujjah-gold-400';
                badgeBg = 'bg-sky-500/20 text-sky-300 border-sky-500/40';
              } else if (item.colorTheme === 'gold') {
                cardBgGradient = 'from-[#241a06] via-[#3d2b09] to-[#140e03]';
                accentColor = 'border-amber-500/30 hover:border-utrujjah-gold-300';
                badgeBg = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setPreviewDesign(item)}
                  className={`group relative rounded-[28px] overflow-hidden bg-gradient-to-b ${cardBgGradient} border-2 ${accentColor} shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-[9/16] p-5 text-white select-none`}
                >
                  {/* Subtle Arabesque Motif Overlay or Custom Uploaded Image */}
                  {item.customImage ? (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={item.customImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/70" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
                  )}
                  
                  {/* Top Bar of the Phone Story Card */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeBg}`}>
                        {item.category}
                      </span>
                      
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-utrujjah-gold-400" />
                        <span className="text-[10px] text-utrujjah-gold-300 font-mono">9:16</span>
                      </div>
                    </div>

                    <p className="text-[11px] font-bold text-utrujjah-gold-300/90 font-alexandria truncate">
                      {item.type}
                    </p>
                  </div>

                  {/* Center: The Core Sacred Quran/Hadith/Athar Text */}
                  <div className="relative z-10 my-auto text-center px-1 space-y-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center text-utrujjah-gold-400 mb-1">
                      <Quote className="w-4 h-4 fill-current opacity-70" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold font-tajawal leading-relaxed text-slate-100 line-clamp-6 group-hover:text-white transition-colors">
                      {item.text}
                    </h3>

                    {/* Source citation */}
                    <div className="inline-block bg-black/40 border border-white/10 px-3 py-1 rounded-xl text-[10px] text-utrujjah-gold-300 font-tajawal">
                      {item.source}
                    </div>
                  </div>

                  {/* Bottom: Branding & Interactive Quick Actions */}
                  <div className="relative z-10 pt-3 border-t border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-slate-300 font-tajawal">
                      <span className="font-bold text-utrujjah-gold-400">فريق أترجة</span>
                      <span className="opacity-75">مصدر سني موثق</span>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                      <button
                        onClick={(e) => handleDownloadCard(item, e)}
                        className="py-1.5 px-2 rounded-lg bg-white/10 hover:bg-utrujjah-gold-500 hover:text-slate-950 text-white text-[11px] font-bold flex items-center justify-center gap-1 transition-all"
                        title="تحميل الصورة للهاتف"
                      >
                        <Download className="w-3 h-3" />
                        <span>تحميل</span>
                      </button>

                      <button
                        onClick={(e) => handleCopyText(item, e)}
                        className="py-1.5 px-2 rounded-lg bg-white/10 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center gap-1 transition-all"
                        title="نسخ النص والمصدر"
                      >
                        {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === item.id ? 'تم' : 'نسخ'}</span>
                      </button>

                      <button
                        onClick={(e) => handleShare(item, e)}
                        className="py-1.5 px-2 rounded-lg bg-white/10 hover:bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center gap-1 transition-all"
                        title="مشاركة التصميم"
                      >
                        <Share2 className="w-3 h-3" />
                        <span>نشر</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Eye indicator */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-black/80 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border border-utrujjah-gold-500/50 shadow-xl">
                      <Eye className="w-4 h-4 text-utrujjah-gold-400" />
                      <span>معاينة وتكبير</span>
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* Full Screen Interactive Phone Mockup Modal */}
      {previewDesign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative max-w-sm w-full bg-slate-950 rounded-[36px] border-4 border-slate-700 shadow-2xl p-4 text-white overflow-hidden">
            
            {/* Top Phone Speaker Notch */}
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

            {/* Close Button */}
            <button
              onClick={() => setPreviewDesign(null)}
              className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Phone Screen Mockup Content */}
            <div className="rounded-[28px] overflow-hidden bg-gradient-to-b from-[#072418] via-[#093524] to-[#04140d] border border-utrujjah-gold-500/40 p-6 flex flex-col justify-between aspect-[9/16] relative">
              {previewDesign.customImage ? (
                <div className="absolute inset-0 z-0">
                  <img
                    src={previewDesign.customImage}
                    alt={previewDesign.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/70" />
                </div>
              ) : (
                <div className="absolute inset-0 bg-islamic-stars opacity-15 pointer-events-none" />
              )}

              <div className="relative z-10 text-center space-y-1">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-utrujjah-gold-500/20 text-utrujjah-gold-300 border border-utrujjah-gold-400/30">
                  {previewDesign.category}
                </span>
                <p className="text-xs font-black text-utrujjah-gold-400 mt-2 font-alexandria">
                  {previewDesign.title}
                </p>
                <p className="text-[11px] text-slate-300">【 {previewDesign.type} 】</p>
              </div>

              <div className="relative z-10 my-auto text-center space-y-4 px-2">
                <Quote className="w-6 h-6 text-utrujjah-gold-400 mx-auto opacity-70" />
                <p className="text-sm sm:text-base font-bold font-tajawal leading-relaxed text-white">
                  {previewDesign.text}
                </p>
                <div className="inline-block bg-black/50 border border-utrujjah-gold-500/30 px-3 py-1.5 rounded-xl text-xs text-utrujjah-gold-200">
                  المصدر: {previewDesign.source}
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15 text-center space-y-1">
                <p className="text-xs font-bold text-utrujjah-gold-400 font-alexandria">فريق أترجة التطوعي</p>
                <p className="text-[10px] text-slate-400">عطاء يمتد وأثر يبقى • مصدر سني موثق</p>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                onClick={(e) => handleDownloadCard(previewDesign, e)}
                disabled={downloadingId === previewDesign.id}
                className="py-3 rounded-xl bg-gradient-to-r from-utrujjah-gold-500 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{downloadingId === previewDesign.id ? 'جاري التحميل...' : 'تحميل للهاتف (PNG)'}</span>
              </button>

              <button
                onClick={(e) => handleCopyText(previewDesign, e)}
                className="py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                {copiedId === previewDesign.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === previewDesign.id ? 'تم نسخ النص' : 'نسخ النص والمصدر'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}