import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import StatsCharts from '../components/StatsCharts';
import { TikTokIcon } from '../components/SocialIcons';
import {
  Lock,
  LogOut,
  LayoutDashboard,
  Heart,
  FolderPlus,
  Newspaper,
  MessageSquare,
  Settings,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Clock,
  Printer,
  Search,
  Download,
  Users,
  Target,
  FileText,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  ChevronLeft,
  Smartphone,
  Palette,
  ExternalLink,
  Image,
  Upload,
  UserPlus,
  UserCheck,
  Eye,
  Sliders,
  Share2,
  BookOpen,
  Radio,
  Sparkles,
  Send,
  Bell
} from 'lucide-react';

export default function AdminDashboard() {
  const {
    adminAuth,
    loginAdmin,
    logoutAdmin,
    admins,
    addAdmin,
    deleteAdmin,
    projects,
    addProject,
    updateProject,
    deleteProject,
    donations,
    contactMessages,
    toggleMessageStatus,
    media,
    addMediaItem,
    deleteMediaItem,
    designs,
    addDesign,
    deleteDesign,
    colorTheme,
    changeColorTheme,
    teamData,
    setTeamData,
    openModal,
    showToast
  } = useApp();

  // Login Form States
  const [username, setUsername] = useState('admin@utrujjah.org.sa');
  const [password, setPassword] = useState('admin123');

  // Active Tab in Dashboard
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'projects', 'designs', 'content', 'admins', 'donations', 'messages', 'media', 'settings'

  // New Design Form Modal/State (Item 3, 5 & 10)
  const [showAddDesignModal, setShowAddDesignModal] = useState(false);
  const [newDesign, setNewDesign] = useState({
    title: '',
    category: 'القرآن والذكر',
    type: 'حديث نبوي شريف',
    text: '',
    source: '',
    colorTheme: 'emerald',
    tags: 'دعوة, تذكير',
    customImage: ''
  });

  // Direct Image File Upload Handler (Item 5)
  const handleDesignImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert('حجم الصورة كبير، يرجى اختيار صورة أقل من 3 ميغابايت');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewDesign(prev => ({
          ...prev,
          customImage: reader.result
        }));
        showToast('تم تحميل الصورة بنجاح للمعاينة!');
      };
      reader.readAsDataURL(file);
    }
  };

  // Admins Management Modal/State (Item 2)
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    username: '',
    password: '',
    role: 'مشرف محتوى'
  });

  // New Project Form Modal/State
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'قرآني',
    targetAmount: 100000,
    summary: '',
    details: '',
    imageDesc: 'مصحف شريف وزخارف إسلامية بدون وجوه'
  });

  // New Media Form Modal/State
  const [showAddMediaModal, setShowAddMediaModal] = useState(false);
  const [newMedia, setNewMedia] = useState({
    title: '',
    type: 'news',
    category: 'أخبار الفريق',
    summary: '',
    content: '',
    imageText: 'لقطة توثيقية لأنشطة أترجة المعتمدة'
  });

  // Donations search
  const [donationsSearch, setDonationsSearch] = useState('');

  // If not logged in, show secure login screen
  if (!adminAuth.isAuthenticated) {
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      loginAdmin(username, password);
    };

    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4 py-16 animate-fadeIn">
        <div className="bg-white rounded-3xl max-w-md w-full p-8 sm:p-10 border border-emerald-900/10 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto p-1 bg-gradient-to-tr from-utrujjah-gold-500 to-utrujjah-green-700 shadow-md">
              <img
                src="/logo-circle.png"
                alt="فريق أترجة"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <h1 className="text-2xl font-black font-alexandria text-utrujjah-green-950">
              تسجيل دخول إدارة المنصة
            </h1>
            <p className="text-xs text-slate-500 font-tajawal">
              لوحة التحكم المركزية المشفرة لمسؤولي ومشرفي فريق أترجة
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">اسم المستخدم أو البريد الإلكتروني:</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal dir-ltr text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">كلمة المرور:</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:border-utrujjah-gold-500 text-sm font-tajawal dir-ltr text-right"
              />
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 font-tajawal">
              <strong>بيانات الدخول الافتراضية للمعاينة:</strong>
              <div className="mt-1 flex justify-between">
                <span>المستخدم: <code className="bg-white px-1.5 py-0.5 rounded border">admin@utrujjah.org.sa</code></span>
                <span>الرمز: <code className="bg-white px-1.5 py-0.5 rounded border">admin123</code></span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3.5 text-sm font-bold shadow-green-glow"
            >
              <Lock className="w-4 h-4 ml-1" />
              <span>تسجيل الدخول الآمن</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Calculate Metrics
  const totalDonationsAmount = donations.reduce((sum, d) => sum + (parseFloat(d.amount) || 0), 0);
  const totalDonationsCount = donations.length;
  const activeProjectsCount = projects.filter(p => p.active).length;
  const unreadMessagesCount = contactMessages.filter(m => !m.replied).length;

  const filteredDonations = donations.filter(d =>
    d.id.toLowerCase().includes(donationsSearch.toLowerCase()) ||
    d.donorName.toLowerCase().includes(donationsSearch.toLowerCase()) ||
    d.projectName.toLowerCase().includes(donationsSearch.toLowerCase())
  );

  return (
    <div className="animate-fadeIn py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Admin Header Bar */}
      <div className="bg-gradient-to-r from-utrujjah-green-950 via-emerald-900 to-utrujjah-green-950 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center md:text-right">
          <div className="w-14 h-14 rounded-2xl bg-white/10 p-1 backdrop-blur-md border border-white/20 flex-shrink-0">
            <img src="/logo-circle.png" alt="أترجة" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xl font-black font-alexandria text-white">لوحة تحكم فريق أترجة</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-utrujjah-gold-500 text-slate-950">
                مشرف عام
              </span>
            </div>
            <p className="text-xs text-slate-300 font-tajawal mt-0.5">
              إدارة المحتوى، المشاريع، التبرعات، والرسائل الواردة دون تعديل في الكود.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={logoutAdmin}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-rose-600 text-white transition-colors flex items-center gap-1.5 border border-white/20"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
        {[
          { id: 'overview', label: 'نظرة عامة ورسوم بيانية', icon: LayoutDashboard },
          { id: 'projects', label: `إدارة المشاريع (${projects.length})`, icon: Target },
          { id: 'designs', label: `التصاميم الدعوية (${(designs || []).length})`, icon: Smartphone },
          { id: 'content', label: 'إدارة المحتوى والنصوص', icon: FileText },
          { id: 'admins', label: `المشرفون وصلاحيات الدخول (${(admins || []).length})`, icon: Users },
          { id: 'donations', label: `سجل التبرعات (${donations.length})`, icon: DollarSign },
          { id: 'messages', label: `رسائل التواصل (${contactMessages.length})`, icon: MessageSquare },
          { id: 'media', label: `المركز الإعلامي (${media.length})`, icon: Newspaper },
          { id: 'settings', label: 'إعدادات المنصة والهوية', icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-utrujjah-green-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.id === 'messages' && unreadMessagesCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {unreadMessagesCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Key KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-emerald-900/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-1">إجمالي التبرعات المسجلة:</span>
                <span className="text-2xl font-black font-alexandria text-utrujjah-green-950">
                  {totalDonationsAmount.toLocaleString()} <span className="text-sm font-bold text-utrujjah-gold-600">ريال</span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-utrujjah-green-800 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-emerald-900/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-1">عدد عمليات التبرع:</span>
                <span className="text-2xl font-black font-alexandria text-utrujjah-green-950">
                  {totalDonationsCount} عملية
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-emerald-900/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-1">المشاريع النشطة:</span>
                <span className="text-2xl font-black font-alexandria text-utrujjah-green-950">
                  {activeProjectsCount} مشاريع
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-emerald-900/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-1">رسائل جديدة بانتظار الرد:</span>
                <span className="text-2xl font-black font-alexandria text-rose-700">
                  {unreadMessagesCount} رسالة
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Recent Donations Table */}
          <div className="bg-white rounded-3xl p-6 border border-emerald-900/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-alexandria text-utrujjah-green-950">
                آخر عمليات التبرع المسجلة
              </h3>
              <button
                onClick={() => setActiveTab('donations')}
                className="text-xs font-bold text-utrujjah-green-800 hover:underline"
              >
                عرض كافة السجلات
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs sm:text-sm font-tajawal">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="py-3 px-3">رقم السند</th>
                    <th className="py-3 px-3">المتبرع</th>
                    <th className="py-3 px-3">المشروع</th>
                    <th className="py-3 px-3">المبلغ</th>
                    <th className="py-3 px-3">الوسيلة</th>
                    <th className="py-3 px-3">التاريخ</th>
                    <th className="py-3 px-3">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {donations.slice(0, 5).map((d) => (
                    <tr key={d.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-mono font-bold text-slate-700">{d.id}</td>
                      <td className="py-3 px-3 font-bold text-utrujjah-green-900">{d.donorName}</td>
                      <td className="py-3 px-3 text-slate-700 max-w-xs truncate">{d.projectName}</td>
                      <td className="py-3 px-3 font-black text-emerald-800">{d.amount.toLocaleString()} ر.س</td>
                      <td className="py-3 px-3 uppercase text-slate-500">{d.paymentMethod}</td>
                      <td className="py-3 px-3 text-slate-400 text-xs">{d.date}</td>
                      <td className="py-3 px-3">
                        <button
                          onClick={() => openModal('receipt', d)}
                          className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-xs"
                        >
                          معاينة السند
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Visual Analytics & Charts (Item 6) */}
          <StatsCharts isDarkBg={false} />
        </div>
      )}

      {/* TAB 2: PROJECTS MANAGEMENT */}
      {activeTab === 'projects' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
              قائمة المشاريع والمبادرات
            </h3>

            <button
              onClick={() => setShowAddProjectModal(true)}
              className="btn-primary text-xs sm:text-sm px-4 py-2.5"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة مشروع جديد</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => {
              const percentage = Math.min(100, Math.round((proj.raisedAmount / proj.targetAmount) * 100));

              return (
                <div key={proj.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {proj.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{proj.code}</span>
                    </div>

                    <h4 className="text-lg font-bold font-alexandria text-utrujjah-green-950 mb-2">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-tajawal mb-4 line-clamp-2">
                      {proj.summary}
                    </p>

                    <div className="space-y-1 bg-slate-50 p-3 rounded-xl text-xs font-tajawal">
                      <div className="flex justify-between">
                        <span>المحصل:</span>
                        <span className="font-bold text-emerald-800">{proj.raisedAmount.toLocaleString()} ر.س</span>
                      </div>
                      <div className="flex justify-between">
                        <span>المستهدف:</span>
                        <span className="font-medium text-slate-600">{proj.targetAmount.toLocaleString()} ر.س</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-utrujjah-gold-500 rounded-full" style={{ width: `${percentage}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        const newTarget = prompt('أدخل المستهدف الجديد بالريال:', proj.targetAmount);
                        if (newTarget && !isNaN(newTarget)) {
                          updateProject(proj.id, { targetAmount: parseFloat(newTarget) });
                        }
                      }}
                      className="text-xs font-bold text-utrujjah-green-800 hover:underline flex items-center gap-1"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>تعديل المستهدف</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`هل أنت متأكد من حذف مشروع "${proj.title}"؟`)) {
                          deleteProject(proj.id);
                        }
                      }}
                      className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>حذف</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Project Modal */}
          {showAddProjectModal && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
                  إضافة مشروع خيري جديد
                </h3>

                <div className="space-y-3 font-tajawal text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold mb-1">اسم المشروع:</label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      placeholder="اسم المشروع..."
                      className="w-full p-2.5 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">التصنيف:</label>
                      <select
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300"
                      >
                        <option value="قرآني">قرآني</option>
                        <option value="كفالة أيتام">كفالة أيتام</option>
                        <option value="إغاثي">إغاثي</option>
                        <option value="صحي">صحي</option>
                        <option value="تعليمي">تعليمي</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">المبلغ المستهدف (ر.س):</label>
                      <input
                        type="number"
                        value={newProject.targetAmount}
                        onChange={(e) => setNewProject({ ...newProject, targetAmount: parseFloat(e.target.value) || 0 })}
                        className="w-full p-2.5 rounded-xl border border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">نبذة مختصرة:</label>
                    <textarea
                      rows="2"
                      value={newProject.summary}
                      onChange={(e) => setNewProject({ ...newProject, summary: e.target.value })}
                      placeholder="وصف موجز للمشروع..."
                      className="w-full p-2.5 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">تفاصيل ومبررات المشروع:</label>
                    <textarea
                      rows="3"
                      value={newProject.details}
                      onChange={(e) => setNewProject({ ...newProject, details: e.target.value })}
                      placeholder="التفاصيل الكاملة..."
                      className="w-full p-2.5 rounded-xl border border-slate-300"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setShowAddProjectModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    إلغاء
                  </button>

                  <button
                    onClick={() => {
                      if (!newProject.title.trim()) {
                        alert('يرجى إدخال اسم المشروع');
                        return;
                      }
                      addProject(newProject);
                      setShowAddProjectModal(false);
                      setNewProject({
                        title: '',
                        category: 'قرآني',
                        targetAmount: 100000,
                        summary: '',
                        details: '',
                        imageDesc: 'مصحف شريف وزخارف إسلامية بدون وجوه'
                      });
                    }}
                    className="btn-primary text-xs px-5 py-2"
                  >
                    حفظ وإضافة المشروع
                  </button>
                </div>
              </div>
            </div>


          )}
        </div>
      )}

      {/* TAB 3: DONATIONS LEDGER */}
      {activeTab === 'donations' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
              سجل التبرعات والمعاملات المالية
            </h3>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={donationsSearch}
                onChange={(e) => setDonationsSearch(e.target.value)}
                placeholder="بحث برقم السند أو اسم المتبرع..."
                className="w-full pr-9 pl-3 py-2 rounded-xl border border-slate-200 text-xs font-tajawal"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs sm:text-sm font-tajawal">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <tr>
                    <th className="py-3 px-4">رقم السند</th>
                    <th className="py-3 px-4">المتبرع</th>
                    <th className="py-3 px-4">المشروع</th>
                    <th className="py-3 px-4">نوع المساهمة</th>
                    <th className="py-3 px-4">المبلغ</th>
                    <th className="py-3 px-4">بوابة الدفع</th>
                    <th className="py-3 px-4">التاريخ والوقت</th>
                    <th className="py-3 px-4">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredDonations.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono font-bold text-slate-800">{d.id}</td>
                      <td className="py-3 px-4 font-bold text-utrujjah-green-900">{d.donorName}</td>
                      <td className="py-3 px-4 text-slate-700">{d.projectName}</td>
                      <td className="py-3 px-4 text-slate-600">{d.type}</td>
                      <td className="py-3 px-4 font-black text-emerald-800">{d.amount.toLocaleString()} ر.س</td>
                      <td className="py-3 px-4 uppercase text-slate-500 text-xs">{d.paymentMethod}</td>
                      <td className="py-3 px-4 text-slate-400 text-xs">{d.date}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => openModal('receipt', d)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs flex items-center gap-1"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>السند</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Visual Analytics & Charts (Item 6) */}
          <StatsCharts isDarkBg={false} />
        </div>
      )}

      {/* TAB 4: MESSAGES INBOX */}
      {activeTab === 'messages' && (
        <div className="space-y-6 animate-fadeIn">
          <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
            صندوق استفسارات ورسائل الزوار ({contactMessages.length})
          </h3>

          <div className="space-y-4">
            {contactMessages.map((msg) => (
              <div
                key={msg.id}
                className={`bg-white rounded-2xl p-6 border transition-all ${
                  !msg.replied ? 'border-amber-400 shadow-md bg-amber-50/20' : 'border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-utrujjah-green-950 font-alexandria">{msg.name}</span>
                    <span className="text-xs text-slate-500 dir-ltr">{msg.phone}</span>
                    {msg.email && <span className="text-xs text-slate-500 dir-ltr">• {msg.email}</span>}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 font-tajawal">{msg.date}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      msg.replied ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {msg.status}
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-800 mb-1">{msg.subject}</h4>
                <p className="text-xs sm:text-sm text-slate-700 font-tajawal leading-relaxed mb-4">
                  {msg.message}
                </p>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => toggleMessageStatus(msg.id)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100"
                  >
                    {msg.replied ? 'تحديد كغير مردود عليه' : 'تحديد كتم الرد بنجاح'}
                  </button>
                  <a
                    href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold"
                  >
                    الرد عبر واتساب
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: MEDIA MANAGEMENT */}
      {activeTab === 'media' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
              إدارة الأخبار والمواد الإعلامية
            </h3>

            <button
              onClick={() => setShowAddMediaModal(true)}
              className="btn-primary text-xs sm:text-sm px-4 py-2.5"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة مادة إعلامية</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="font-bold text-base text-utrujjah-green-950 mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-tajawal line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-400">النوع: {item.type}</span>
                  <button
                    onClick={() => {
                      if (confirm(`هل ترغب بحذف "${item.title}"؟`)) {
                        deleteMediaItem(item.id);
                      }
                    }}
                    className="text-xs font-bold text-rose-600 hover:underline"
                  >
                    حذف المادة
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Media Modal */}
          {showAddMediaModal && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
                  إضافة مادة إعلامية جديدة
                </h3>

                <div className="space-y-3 font-tajawal text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold mb-1">عنوان المادة:</label>
                    <input
                      type="text"
                      value={newMedia.title}
                      onChange={(e) => setNewMedia({ ...newMedia, title: e.target.value })}
                      placeholder="عنوان الخبر أو المقال..."
                      className="w-full p-2.5 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">القسم:</label>
                      <select
                        value={newMedia.type}
                        onChange={(e) => setNewMedia({ ...newMedia, type: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300"
                      >
                        <option value="news">أخبار</option>
                        <option value="articles">مقالات</option>
                        <option value="announcements">إعلانات</option>
                        <option value="reports">تقارير</option>
                        <option value="photos">صور</option>
                        <option value="videos">فيديوهات</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">التصنيف النصي:</label>
                      <input
                        type="text"
                        value={newMedia.category}
                        onChange={(e) => setNewMedia({ ...newMedia, category: e.target.value })}
                        placeholder="مثال: أخبار الفريق"
                        className="w-full p-2.5 rounded-xl border border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">ملخص قصير:</label>
                    <textarea
                      rows="2"
                      value={newMedia.summary}
                      onChange={(e) => setNewMedia({ ...newMedia, summary: e.target.value })}
                      placeholder="الملخص..."
                      className="w-full p-2.5 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">المحتوى الكامل:</label>
                    <textarea
                      rows="3"
                      value={newMedia.content}
                      onChange={(e) => setNewMedia({ ...newMedia, content: e.target.value })}
                      placeholder="النص الكامل..."
                      className="w-full p-2.5 rounded-xl border border-slate-300"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setShowAddMediaModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    إلغاء
                  </button>

                  <button
                    onClick={() => {
                      if (!newMedia.title.trim()) {
                        alert('يرجى كتابة العنوان');
                        return;
                      }
                      addMediaItem(newMedia);
                      setShowAddMediaModal(false);
                      setNewMedia({
                        title: '',
                        type: 'news',
                        category: 'أخبار الفريق',
                        summary: '',
                        content: '',
                        imageText: 'لقطة توثيقية لأنشطة أترجة المعتمدة'
                      });
                    }}
                    className="btn-primary text-xs px-5 py-2"
                  >
                    نشر المادة
                  </button>
                </div>
              </div>
            </div>


          )}
        </div>
      )}

      {/* TAB: DESIGNS MANAGEMENT (Item 3 & Item 10) */}
      {activeTab === 'designs' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-utrujjah-gold-500" />
                <span>إدارة التصاميم الإسلامية والتوعوية للهواتف (9:16)</span>
              </h3>
              <p className="text-xs text-slate-500 font-tajawal mt-1">
                إضافة وحذف التصاميم الدعوية الطولية المتوافقة مع حالات واتساب وستوري المنصات بمصادر سنية معتمدة.
              </p>
            </div>

            <button
              onClick={() => setShowAddDesignModal(true)}
              className="btn-primary text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2 self-start sm:self-auto shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة تصميم إسلامي جديد</span>
            </button>
          </div>

          {/* Designs List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(designs || []).map((design) => (
              <div
                key={design.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4 hover:border-utrujjah-gold-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-utrujjah-gold-500/15 text-utrujjah-gold-800 border border-utrujjah-gold-500/30">
                      {design.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      【 {design.type} 】
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 font-alexandria mb-2">
                    {design.title}
                  </h4>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs font-tajawal text-slate-700 leading-relaxed max-h-32 overflow-y-auto mb-2">
                    {design.text}
                  </div>

                  <div className="text-[11px] text-utrujjah-green-800 font-bold font-tajawal">
                    المصدر: {design.source}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">
                    النمط: {design.colorTheme === 'ruby' ? 'عنابي' : design.colorTheme === 'navy' ? 'كحلي' : design.colorTheme === 'gold' ? 'ذهبي' : 'زمردي'}
                  </span>

                  <button
                    onClick={() => {
                      if (window.confirm(`هل أنت متأكد من حذف تصميم: "${design.title}"؟`)) {
                        deleteDesign(design.id);
                      }
                    }}
                    className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-colors flex items-center gap-1 text-xs font-bold"
                    title="حذف التصميم"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>حذف</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal: Add New Design */}
          {showAddDesignModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-utrujjah-gold-500" />
                    <span>إضافة تصميم إسلامي تذكيري جديد (9:16)</span>
                  </h3>
                  <button
                    onClick={() => setShowAddDesignModal(false)}
                    className="p-1 text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 font-tajawal text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">عنوان التصميم:</label>
                    <input
                      type="text"
                      value={newDesign.title}
                      onChange={(e) => setNewDesign({ ...newDesign, title: e.target.value })}
                      placeholder="مثال: فضل صلة الرحم والبركة"
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">تصنيف المحتوى:</label>
                      <select
                        value={newDesign.category}
                        onChange={(e) => setNewDesign({ ...newDesign, category: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500 bg-white"
                      >
                        <option value="القرآن والذكر">القرآن والذكر</option>
                        <option value="الهوية والحديث">الهوية والحديث</option>
                        <option value="الصدقة والإحسان">الصدقة والإحسان</option>
                        <option value="مكارم الأخلاق">مكارم الأخلاق</option>
                        <option value="أقوال السلف الصالح">أقوال السلف الصالح</option>
                        <option value="رعاية الأيتام">رعاية الأيتام</option>
                        <option value="الصلاة والعبادة">الصلاة والعبادة</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">نوع النص الشرعي:</label>
                      <select
                        value={newDesign.type}
                        onChange={(e) => setNewDesign({ ...newDesign, type: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500 bg-white"
                      >
                        <option value="آية قرآنية">آية قرآنية</option>
                        <option value="حديث نبوي شريف">حديث نبوي شريف</option>
                        <option value="أثر من أقوال السلف">أثر من أقوال السلف</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">النص الشرعي (الآية أو الحديث أو الأثر):</label>
                    <textarea
                      rows={4}
                      value={newDesign.text}
                      onChange={(e) => setNewDesign({ ...newDesign, text: e.target.value })}
                      placeholder="اكتب النص الشرعي مضبوطاً ومحققاً..."
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">المصدر السني الموثق:</label>
                    <input
                      type="text"
                      value={newDesign.source}
                      onChange={(e) => setNewDesign({ ...newDesign, source: e.target.value })}
                      placeholder="مثال: صحيح البخاري: 5427 أو سورة البقرة: 195"
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">لون خلفية التصميم:</label>
                      <select
                        value={newDesign.colorTheme}
                        onChange={(e) => setNewDesign({ ...newDesign, colorTheme: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500 bg-white"
                      >
                        <option value="emerald">أخضر زمردي</option>
                        <option value="navy">أزرق كحلي</option>
                        <option value="ruby">عنابي ياقوتي</option>
                        <option value="gold">ذهبي ملكي</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">الكلمات المفتاحية (Tags):</label>
                      <input
                        type="text"
                        value={newDesign.tags}
                        onChange={(e) => setNewDesign({ ...newDesign, tags: e.target.value })}
                        placeholder="دعوة, تذكير, قرآن"
                        className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                      />
                    </div>
                  </div>

                  {/* Image Upload & Image URL (Item 5: رفع صورة مباشرة أو إضافة رابط) */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-3">
                    <label className="block font-bold text-slate-800 text-xs">
                      صورة التصميم المخصصة (اختياري - رفع مباشر أو رابط):
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Option A: Direct File Upload */}
                      <div>
                        <span className="text-[11px] text-slate-600 block mb-1">1. رفع صورة من جهازك:</span>
                        <label className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-dashed border-emerald-600 bg-white hover:bg-emerald-50 text-emerald-800 cursor-pointer transition-all">
                          <Upload className="w-4 h-4 text-emerald-600" />
                          <span className="text-xs font-bold">اختيار ملف صورة...</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleDesignImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* Option B: Direct URL */}
                      <div>
                        <span className="text-[11px] text-slate-600 block mb-1">2. أو إدخال رابط الصورة:</span>
                        <input
                          type="url"
                          value={newDesign.customImage?.startsWith('data:') ? '' : (newDesign.customImage || '')}
                          onChange={(e) => setNewDesign({ ...newDesign, customImage: e.target.value })}
                          placeholder="https://example.com/image.jpg"
                          className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500 text-xs dir-ltr text-right"
                        />
                      </div>
                    </div>

                    {/* Image Thumbnail Preview */}
                    {newDesign.customImage && (
                      <div className="flex items-center gap-3 pt-1">
                        <div className="relative w-16 h-24 rounded-xl overflow-hidden border-2 border-emerald-500 shadow-md">
                          <img
                            src={newDesign.customImage}
                            alt="معاينة الصورة"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => setNewDesign({ ...newDesign, customImage: '' })}
                            className="absolute top-1 right-1 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]"
                            title="إزالة الصورة"
                          >
                            ✕
                          </button>
                        </div>
                        <span className="text-xs text-emerald-700 font-bold">✓ تم إرفاق الصورة وجاهزة للنشر</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setShowAddDesignModal(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-bold"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={() => {
                      if (!newDesign.title || !newDesign.text || !newDesign.source) {
                        alert('يرجى تعبئة كافة الحقول المطلوبة بما في ذلك المصدر المعتمد.');
                        return;
                      }
                      addDesign(newDesign);
                      setShowAddDesignModal(false);
                      setNewDesign({
                        title: '',
                        category: 'القرآن والذكر',
                        type: 'حديث نبوي شريف',
                        text: '',
                        source: '',
                        colorTheme: 'emerald',
                        tags: 'دعوة, تذكير',
                        customImage: ''
                      });
                    }}
                    className="btn-primary text-xs px-5 py-2.5"
                  >
                    نشر التصميم في الموقع
                  </button>
                </div>
              </div>
            </div>


          )}
        </div>
      )}

      {/* TAB: CONTENT & TEXT CONTROL (Item 1) */}
      {activeTab === 'content' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8 animate-fadeIn max-w-4xl">
          <div>
            <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
              <FileText className="w-5 h-5 text-utrujjah-gold-500" />
              <span>إدارة المحتوى والنصوص وسياسة الخصوصية والفوتر</span>
            </h3>
            <p className="text-xs text-slate-500 font-tajawal mt-1">
              تحكم كامل في كافة النصوص التعريفية، رسالة ورؤية الفريق، نصوص سياسة الخصوصية، محتوى الفوتر، وإعدادات أيقونات التواصل.
            </p>
          </div>

          <div className="space-y-6 font-tajawal text-xs sm:text-sm">
            
            {/* Section 1: About & Mission */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-sm text-slate-800 font-alexandria border-b border-slate-200 pb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-utrujjah-green-800" />
                <span>1. نبذة عن أترجة ورسالتنا ورؤيتنا</span>
              </h4>

              <div>
                <label className="block font-bold text-slate-700 mb-1">النبذة التعريفية (عن أترجة):</label>
                <textarea
                  rows={3}
                  value={teamData.aboutText || ''}
                  onChange={(e) => setTeamData({ ...teamData, aboutText: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">رسالة الفريق (Mission):</label>
                  <textarea
                    rows={4}
                    value={teamData.mission || ''}
                    onChange={(e) => setTeamData({ ...teamData, mission: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">رؤية الفريق (Vision):</label>
                  <textarea
                    rows={4}
                    value={teamData.vision || ''}
                    onChange={(e) => setTeamData({ ...teamData, vision: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                  />
                </div>
              </div>
            </div>



            {/* Section 2: Privacy Policy */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-sm text-slate-800 font-alexandria border-b border-slate-200 pb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>2. نصوص سياسة الخصوصية وحماية البيانات</span>
              </h4>

              <div>
                <label className="block font-bold text-slate-700 mb-1">مقدمة سياسة الخصوصية والالتزام العام:</label>
                <textarea
                  rows={3}
                  value={teamData.privacyPolicy?.intro || ''}
                  onChange={(e) => setTeamData({
                    ...teamData,
                    privacyPolicy: { ...(teamData.privacyPolicy || {}), intro: e.target.value }
                  })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">البيانات التي يتم جمعها:</label>
                <textarea
                  rows={3}
                  value={teamData.privacyPolicy?.dataCollected || ''}
                  onChange={(e) => setTeamData({
                    ...teamData,
                    privacyPolicy: { ...(teamData.privacyPolicy || {}), dataCollected: e.target.value }
                  })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">أوجه استخدام البيانات:</label>
                  <textarea
                    rows={3}
                    value={teamData.privacyPolicy?.usage || ''}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      privacyPolicy: { ...(teamData.privacyPolicy || {}), usage: e.target.value }
                    })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">حقوق المتبرع والمستفيد:</label>
                  <textarea
                    rows={3}
                    value={teamData.privacyPolicy?.rights || ''}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      privacyPolicy: { ...(teamData.privacyPolicy || {}), rights: e.target.value }
                    })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                  />
                </div>
              </div>
            </div>



            {/* Section 3: Footer Content */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-sm text-slate-800 font-alexandria border-b border-slate-200 pb-2 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-utrujjah-gold-600" />
                <span>3. التحكم في محتوى الفوتر ومعلومات التواصل</span>
              </h4>

              <div>
                <label className="block font-bold text-slate-700 mb-1">الوصف التعريفي في الفوتر (أسفل الشعار):</label>
                <textarea
                  rows={3}
                  value={teamData.footerDesc || ''}
                  onChange={(e) => setTeamData({ ...teamData, footerDesc: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">وصف الفريق / الصفة الرسمية:</label>
                  <input
                    type="text"
                    value={teamData.licenseNumber || ''}
                    onChange={(e) => setTeamData({ ...teamData, licenseNumber: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">العنوان الجغرافي المعروض في الفوتر:</label>
                  <input
                    type="text"
                    value={teamData.address || ''}
                    onChange={(e) => setTeamData({ ...teamData, address: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>
            </div>



            {/* Section 4: Social Icons & Channels */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-sm text-slate-800 font-alexandria border-b border-slate-200 pb-2 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-rose-500" />
                <span>4. أيقونات صفحات تابعنا (روابط وتفعيل المنصات)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">منصة TikTok:</span>
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={teamData.socialEnabled?.tiktok !== false}
                        onChange={(e) => setTeamData({
                          ...teamData,
                          socialEnabled: { ...(teamData.socialEnabled || {}), tiktok: e.target.checked }
                        })}
                        className="rounded text-emerald-600"
                      />
                      <span>مفعل</span>
                    </label>
                  </div>
                  <input
                    type="url"
                    value={teamData.social?.tiktok || ''}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      social: { ...(teamData.social || {}), tiktok: e.target.value }
                    })}
                    placeholder="https://www.tiktok.com/@..."
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs dir-ltr text-right"
                  />
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">قناة Telegram:</span>
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={teamData.socialEnabled?.telegram !== false}
                        onChange={(e) => setTeamData({
                          ...teamData,
                          socialEnabled: { ...(teamData.socialEnabled || {}), telegram: e.target.checked }
                        })}
                        className="rounded text-emerald-600"
                      />
                      <span>مفعل</span>
                    </label>
                  </div>
                  <input
                    type="url"
                    value={teamData.social?.telegram || ''}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      social: { ...(teamData.social || {}), telegram: e.target.value }
                    })}
                    placeholder="https://t.me/..."
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs dir-ltr text-right"
                  />
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">منصة X:</span>
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={teamData.socialEnabled?.x !== false}
                        onChange={(e) => setTeamData({
                          ...teamData,
                          socialEnabled: { ...(teamData.socialEnabled || {}), x: e.target.checked }
                        })}
                        className="rounded text-emerald-600"
                      />
                      <span>مفعل</span>
                    </label>
                  </div>
                  <input
                    type="url"
                    value={teamData.social?.x || ''}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      social: { ...(teamData.social || {}), x: e.target.value }
                    })}
                    placeholder="https://x.com/..."
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs dir-ltr text-right"
                  />
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">منصة Instagram:</span>
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={teamData.socialEnabled?.instagram !== false}
                        onChange={(e) => setTeamData({
                          ...teamData,
                          socialEnabled: { ...(teamData.socialEnabled || {}), instagram: e.target.checked }
                        })}
                        className="rounded text-emerald-600"
                      />
                      <span>مفعل</span>
                    </label>
                  </div>
                  <input
                    type="url"
                    value={teamData.social?.instagram || ''}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      social: { ...(teamData.social || {}), instagram: e.target.value }
                    })}
                    placeholder="https://instagram.com/..."
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs dir-ltr text-right"
                  />
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">قناة YouTube:</span>
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={teamData.socialEnabled?.youtube !== false}
                        onChange={(e) => setTeamData({
                          ...teamData,
                          socialEnabled: { ...(teamData.socialEnabled || {}), youtube: e.target.checked }
                        })}
                        className="rounded text-emerald-600"
                      />
                      <span>مفعل</span>
                    </label>
                  </div>
                  <input
                    type="url"
                    value={teamData.social?.youtube || ''}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      social: { ...(teamData.social || {}), youtube: e.target.value }
                    })}
                    placeholder="https://youtube.com/@..."
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs dir-ltr text-right"
                  />
                </div>
              </div>
            </div>



            {/* Section 5: Donate CTA Button Visibility in Header (User Req 1) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <h4 className="font-bold text-sm text-slate-800 font-alexandria flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <span>5. التحكم في ظهور زر «تبرع الآن» في هيدر الموقع</span>
                </h4>
                <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  <input
                    type="checkbox"
                    checked={teamData.showDonateButton !== false}
                    onChange={(e) => setTeamData({ ...teamData, showDonateButton: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-bold text-slate-700">
                    {teamData.showDonateButton !== false ? 'مُفعّل (ظاهر في الهيدر)' : 'مُعطّل (مخفي من الهيدر)'}
                  </span>
                </label>
              </div>
              <p className="text-xs text-slate-600">
                يمكنك إظهار أو إخفاء زر «تبرع الآن» البارز من شريط التنقل العلوي في الهيدر والقائمة المتنقلة عند الحاجة (مثلاً في حال اكتمال أهداف التبرعات أو عند التوقف المؤقت).
              </p>
            </div>

            {/* Section 6: Header Navigation Sections Visibility (User Req 2) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h4 className="font-bold text-sm text-slate-800 font-alexandria flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-utrujjah-green-800" />
                  <span>6. التحكم في إظهار وإخفاء أقسام الهيدر الرئيسية</span>
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  حدد الأقسام التي ترغب في ظهورها أو إخفائها من شريط التنقل العلوي والقائمة المتنقلة بمرونة تامة:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { id: 'about', label: 'عن أترجة', icon: Sparkles, iconColor: 'text-utrujjah-gold-500' },
                  { id: 'activities', label: 'الأنشطة', icon: Radio, iconColor: 'text-rose-500' },
                  { id: 'telegram', label: 'قناة التليجرام', icon: Send, iconColor: 'text-sky-500' },
                  { id: 'designs', label: 'تصاميم', icon: Palette, iconColor: 'text-amber-500' },
                  { id: 'programs', label: 'برامجنا', icon: BookOpen, iconColor: 'text-emerald-500' },
                  { id: 'projects', label: 'المشاريع', icon: Target, iconColor: 'text-teal-500' },
                  { id: 'media', label: 'المركز الإعلامي', icon: Newspaper, iconColor: 'text-utrujjah-gold-500' },
                ].map((sec) => {
                  const Icon = sec.icon;
                  const isEnabled = teamData.headerSectionsEnabled?.[sec.id] !== false;
                  return (
                    <div
                      key={sec.id}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                        isEnabled
                          ? 'bg-white border-emerald-300 shadow-sm'
                          : 'bg-slate-100/70 border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${sec.iconColor}`} />
                        <span className="font-bold text-xs text-slate-800">{sec.label}</span>
                      </div>
                      <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                        <input
                          type="checkbox"
                          checked={isEnabled}
                          onChange={(e) => setTeamData({
                            ...teamData,
                            headerSectionsEnabled: {
                              ...(teamData.headerSectionsEnabled || {}),
                              [sec.id]: e.target.checked
                            }
                          })}
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className={isEnabled ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                          {isEnabled ? 'ظاهر' : 'مخفي'}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 7: News Ticker Control Under Hero Slider (User Req 3) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 font-alexandria flex items-center gap-2">
                    <Radio className="w-4 h-4 text-utrujjah-gold-600" />
                    <span>7. شريط الأخبار والإعلانات المتحرك (أسفل السلايدر الكبير)</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    شريط إخباري متحرك يستوعب من 4 إلى 6 أخبار ويفصل بين كل خبر أيقونة فاصلة مناسبة.
                  </p>
                </div>

                <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  <input
                    type="checkbox"
                    checked={teamData.ticker?.enabled !== false}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      ticker: {
                        ...(teamData.ticker || {}),
                        enabled: e.target.checked
                      }
                    })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-bold text-slate-700">
                    {teamData.ticker?.enabled !== false ? 'مُفعّل (ظاهر)' : 'مُعطّل (مخفي)'}
                  </span>
                </label>
              </div>

              {/* Ticker Title Badge & Direction */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">عنوان وسام الشريط (Badge Title):</label>
                  <input
                    type="text"
                    value={teamData.ticker?.title || 'شريط الأخبار والإعلانات'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      ticker: {
                        ...(teamData.ticker || {}),
                        title: e.target.value
                      }
                    })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold"
                    placeholder="مثال: شريط الأخبار والإعلانات"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">اتجاه حركة وانسياب الشريط:</label>
                  <select
                    value={teamData.ticker?.direction || 'rtl'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      ticker: {
                        ...(teamData.ticker || {}),
                        direction: e.target.value
                      }
                    })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                  >
                    <option value="rtl">انسياب متوافق مع القراءة العربية (من اليمين إلى اليسار)</option>
                    <option value="ltr">الاتجاه المعاكس (نحو اليسار)</option>
                  </select>
                </div>
              </div>

              {/* News Items List (4 to 6 items) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-700 text-xs">
                    قائمة الأخبار المتحركة (الحالية: {(teamData.ticker?.items || []).length} أخبار):
                  </label>
                  {(teamData.ticker?.items || []).length < 8 && (
                    <button
                      type="button"
                      onClick={() => {
                        const cur = [...(teamData.ticker?.items || [])];
                        cur.push('إعلان أو خبر جديد لفريق أترجة...');
                        setTeamData({
                          ...teamData,
                          ticker: {
                            ...(teamData.ticker || {}),
                            items: cur
                          }
                        });
                      }}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 flex items-center gap-1 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>إضافة خبر</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2.5">
                  {(teamData.ticker?.items || []).map((newsText, nIdx) => (
                    <div key={nIdx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                        {nIdx + 1}
                      </span>
                      <input
                        type="text"
                        value={newsText}
                        onChange={(e) => {
                          const cur = [...(teamData.ticker?.items || [])];
                          cur[nIdx] = e.target.value;
                          setTeamData({
                            ...teamData,
                            ticker: {
                              ...(teamData.ticker || {}),
                              items: cur
                            }
                          });
                        }}
                        placeholder={`نص الخبر رقم ${nIdx + 1}...`}
                        className="flex-1 p-1.5 text-xs text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-utrujjah-gold-500 rounded"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const cur = [...(teamData.ticker?.items || [])];
                          if (cur.length <= 1) {
                            alert('يجب الإبقاء على خبر واحد على الأقل في شريط الأخبار.');
                            return;
                          }
                          cur.splice(nIdx, 1);
                          setTeamData({
                            ...teamData,
                            ticker: {
                              ...(teamData.ticker || {}),
                              items: cur
                            }
                          });
                        }}
                        className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
                        title="حذف هذا الخبر"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>



            {/* Section 8: Live Broadcast Badge Control in Hero Slider (User Request) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 font-alexandria flex items-center gap-2">
                    <Radio className="w-4 h-4 text-rose-600 animate-pulse" />
                    <span>8. التحكم في وسام وأيقونة البث المباشر (في سلايدر الهيدر بجانب الشعار)</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    إظهار أو إخفاء أيقونة وسام «البث المباشر يعمل» ذات النبض التفاعلي بجانب شعار أترجة في السلايدر العلوي، والتحكم بنصها ورابط البث.
                  </p>
                </div>

                <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  <input
                    type="checkbox"
                    checked={teamData.liveBroadcast?.enabled !== false}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      liveBroadcast: {
                        ...(teamData.liveBroadcast || {}),
                        enabled: e.target.checked
                      }
                    })}
                    className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500"
                  />
                  <span className="text-xs font-bold text-slate-700">
                    {teamData.liveBroadcast?.enabled !== false ? 'مُفعّل (البث يعمل وظاهر)' : 'مُعطّل (مخفي)'}
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">عنوان وسام البث المباشر:</label>
                  <input
                    type="text"
                    value={teamData.liveBroadcast?.title || 'البث المباشر يعمل الآن'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      liveBroadcast: {
                        ...(teamData.liveBroadcast || {}),
                        title: e.target.value
                      }
                    })}
                    placeholder="مثال: البث المباشر يعمل الآن"
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-rose-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">رابط صفحة أو غرفة البث المباشر:</label>
                  <input
                    type="url"
                    value={teamData.liveBroadcast?.url || 'https://www.tiktok.com/@otrojah3'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      liveBroadcast: {
                        ...(teamData.liveBroadcast || {}),
                        url: e.target.value
                      }
                    })}
                    placeholder="https://www.tiktok.com/@otrojah3"
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-rose-500 text-xs sm:text-sm dir-ltr text-right"
                  />
                </div>
              </div>

              {/* Preview Badge Sample */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">معاينة شكل الوسام في السلايدر العلوي:</span>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-md text-xs font-bold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                  <Radio className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span>{teamData.liveBroadcast?.title || 'البث المباشر يعمل الآن'}</span>
                  <span className="inline-flex items-center gap-1 bg-black/45 px-2 py-0.5 rounded-full border border-white/20 text-[10px] font-bold text-white">
                    <TikTokIcon className="w-2.5 h-2.5 text-white fill-white" />
                    <span>TikTok</span>
                  </span>
                </div>
              </div>
            </div>



            {/* Section 9: Share Bar Control (User Request) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 font-alexandria flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-emerald-600" />
                    <span>9. التحكم في شريط مشاركة الموقع «الدال على الخير كفاعله»</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    إظهار أو إخفاء شريط المشاركة أسفل الصفحات، وتحديد القنوات المفعلة (واتساب، تليجرام، منصة X، جيميل، نسخ الرابط).
                  </p>
                </div>

                <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  <input
                    type="checkbox"
                    checked={teamData.shareBar?.enabled !== false}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      shareBar: {
                        ...(teamData.shareBar || {}),
                        enabled: e.target.checked
                      }
                    })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-bold text-slate-700">
                    {teamData.shareBar?.enabled !== false ? 'مُفعّل (ظاهر أسفل الصفحات)' : 'مُعطّل (مخفي)'}
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">وسام الشريط (Hadith Badge):</label>
                  <input
                    type="text"
                    value={teamData.shareBar?.badge || 'الدال على الخير كفاعله • انشر تؤجر بإذن الله'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      shareBar: {
                        ...(teamData.shareBar || {}),
                        badge: e.target.value
                      }
                    })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">العنوان الرئيسي للشريط:</label>
                  <input
                    type="text"
                    value={teamData.shareBar?.headline || 'شارك الصفحة مع أحبابك وكن شريكاً في صناعة الأثر'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      shareBar: {
                        ...(teamData.shareBar || {}),
                        headline: e.target.value
                      }
                    })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Channels checkboxes */}
              <div>
                <label className="block font-bold text-slate-700 mb-2">أيقونات المشاركة المتاحة:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {[
                    { id: 'whatsapp', label: 'واتساب (WhatsApp)' },
                    { id: 'telegram', label: 'تليجرام (Telegram)' },
                    { id: 'x', label: 'منصة X' },
                    { id: 'gmail', label: 'جيميل (Gmail)' },
                    { id: 'copy', label: 'زر نسخ الرابط' },
                  ].map((ch) => {
                    const isChEnabled = teamData.shareBar?.channels?.[ch.id] !== false;
                    return (
                      <label
                        key={ch.id}
                        className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer text-xs font-bold transition-all ${
                          isChEnabled ? 'bg-white border-emerald-400 text-emerald-800 shadow-sm' : 'bg-slate-100 border-slate-200 text-slate-400'
                        }`}
                      >
                        <span>{ch.label}</span>
                        <input
                          type="checkbox"
                          checked={isChEnabled}
                          onChange={(e) => setTeamData({
                            ...teamData,
                            shareBar: {
                              ...(teamData.shareBar || {}),
                              channels: {
                                ...(teamData.shareBar?.channels || {}),
                                [ch.id]: e.target.checked
                              }
                            }
                          })}
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Section 10: Welcome Pop-up Modal Control (User Request) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 font-alexandria flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>10. التحكم في الرسالة الترحيبية المنبثقة (Pop-up Welcome Modal)</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    الرسالة الترحيبية الفاخرة التي تظهر للزوار عند الدخول إلى الموقع بشعار أترجة والدعاء وزر الدخول الأنيق.
                  </p>
                </div>

                <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  <input
                    type="checkbox"
                    checked={teamData.welcomeModal?.enabled !== false}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      welcomeModal: {
                        ...(teamData.welcomeModal || {}),
                        enabled: e.target.checked
                      }
                    })}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span className="text-xs font-bold text-slate-700">
                    {teamData.welcomeModal?.enabled !== false ? 'مُفعّل (تظهر للزوار)' : 'مُعطّل (مخفية)'}
                  </span>
                </label>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">نص الترحيب الرئيسي:</label>
                  <input
                    type="text"
                    value={teamData.welcomeModal?.title || 'أهلاً ومرحباً بكم في الموقع الرسمي لفريق أُترُجة'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      welcomeModal: {
                        ...(teamData.welcomeModal || {}),
                        title: e.target.value
                      }
                    })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">الدعاء المبارك في الرسالة:</label>
                  <input
                    type="text"
                    value={teamData.welcomeModal?.dua || 'نسأل الله لنا ولكم القبول والإخلاص في القول والعمل'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      welcomeModal: {
                        ...(teamData.welcomeModal || {}),
                        dua: e.target.value
                      }
                    })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">نص زر الدخول إلى الموقع:</label>
                  <input
                    type="text"
                    value={teamData.welcomeModal?.buttonText || 'الدخول إلى الموقع'}
                    onChange={(e) => setTeamData({
                      ...teamData,
                      welcomeModal: {
                        ...(teamData.welcomeModal || {}),
                        buttonText: e.target.value
                      }
                    })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Reset Session / Re-test Welcome Modal */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  هل ترغب في إعادة إظهار الرسالة الترحيبية على جهازك لمعاينتها الآن؟
                </span>
                <button
                  type="button"
                  onClick={() => {
                    sessionStorage.removeItem('utrujjah_welcome_dismissed');
                    showToast('تمت إعادة ضبط الرسالة الترحيبية! ستظهر عند زيارة الصفحة الرئيسية.');
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition-colors"
                >
                  إعادة تفعيل ظهور الرسالة الآن
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem('utrujjah_team_data', JSON.stringify(teamData));
                  showToast('تم حفظ كافة التعديلات على المحتوى والنصوص بنجاح!');
                }}
                className="btn-primary text-xs sm:text-sm px-8 py-3"
              >
                حفظ كافة التغييرات
              </button>
            </div>

          </div>
        </div>
      )}

      {/* TAB: ADMINS MANAGEMENT (Item 2) */}
      {activeTab === 'admins' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-utrujjah-gold-500" />
                <span>إدارة المشرفين وصلاحيات الدخول للوحة التحكم</span>
              </h3>
              <p className="text-xs text-slate-500 font-tajawal mt-1">
                إضافة مشرفين جدد، تحديد الصلاحيات والأدوار، وإدارة حسابات الدخول للوحة الإدارة.
              </p>
            </div>

            <button
              onClick={() => setShowAddAdminModal(true)}
              className="btn-primary text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2 self-start sm:self-auto shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              <span>إضافة مشرف جديد</span>
            </button>
          </div>

          {/* Admins Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs sm:text-sm font-tajawal">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <th className="py-3.5 px-4">اسم المشرف</th>
                    <th className="py-3.5 px-4">اسم المستخدم / البريد</th>
                    <th className="py-3.5 px-4">الصلاحية / الدور</th>
                    <th className="py-3.5 px-4">تاريخ الإضافة</th>
                    <th className="py-3.5 px-4 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {(admins || []).map((admin) => (
                    <tr key={admin.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-utrujjah-green-950 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                          {admin.name.charAt(0)}
                        </div>
                        <span>{admin.name}</span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-600 dir-ltr text-right">{admin.username}</td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-utrujjah-gold-500/15 text-utrujjah-gold-800 border border-utrujjah-gold-500/30">
                          {admin.role || 'مشرف'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 font-mono text-xs">{admin.createdAt || '2026-01-01'}</td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => {
                            if (window.confirm(`هل أنت متأكد من حذف المشرف: "${admin.name}"؟`)) {
                              deleteAdmin(admin.id);
                            }
                          }}
                          disabled={(admins || []).length <= 1}
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 hover:text-rose-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          title="حذف المشرف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal: Add New Admin */}
          {showAddAdminModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
              <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-alexandria text-utrujjah-green-950 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-utrujjah-gold-500" />
                    <span>إضافة مشرف جديد للوحة التحكم</span>
                  </h3>
                  <button
                    onClick={() => setShowAddAdminModal(false)}
                    className="p-1 text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 font-tajawal text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">اسم المشرف بالكامل:</label>
                    <input
                      type="text"
                      value={newAdmin.name}
                      onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                      placeholder="مثال: أ. عبدالله بن محمد"
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">اسم المستخدم أو البريد الإلكتروني للولوج:</label>
                    <input
                      type="text"
                      value={newAdmin.username}
                      onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
                      placeholder="user@utrujjah.org.sa"
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500 dir-ltr text-right"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">كلمة المرور:</label>
                    <input
                      type="password"
                      value={newAdmin.password}
                      onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500 dir-ltr text-right"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">الدور / الصلاحية:</label>
                    <select
                      value={newAdmin.role}
                      onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-utrujjah-gold-500 bg-white"
                    >
                      <option value="مدير عام النظام">مدير عام النظام (صلاحيات كاملة)</option>
                      <option value="مشرف محتوى وتصاميم">مشرف محتوى وتصاميم</option>
                      <option value="مشرف مشاريع وتبرعات">مشرف مشاريع وتبرعات</option>
                      <option value="مشرف متابعة واستفسارات">مشرف متابعة واستفسارات</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setShowAddAdminModal(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-bold"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={() => {
                      if (!newAdmin.name || !newAdmin.username || !newAdmin.password) {
                        alert('يرجى تعبئة كافة الحقول المطلوبة (الاسم، اسم المستخدم، كلمة المرور).');
                        return;
                      }
                      addAdmin(newAdmin);
                      setShowAddAdminModal(false);
                      setNewAdmin({
                        name: '',
                        username: '',
                        password: '',
                        role: 'مشرف محتوى'
                      });
                    }}
                    className="btn-primary text-xs px-5 py-2.5"
                  >
                    إضافة المشرف
                  </button>
                </div>
              </div>
            </div>


          )}
        </div>
      )}

      {/* TAB 6: SETTINGS */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn max-w-3xl">
          <h3 className="text-xl font-bold font-alexandria text-utrujjah-green-950">
            إعدادات المنصة وبيانات التواصل الرسمية
          </h3>

          <div className="space-y-4 font-tajawal text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1">اسم الفريق الرسمي:</label>
              <input
                type="text"
                value={teamData.name}
                onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">الشعار اللفظي (Slogan):</label>
              <input
                type="text"
                value={teamData.tagline}
                onChange={(e) => setTeamData({ ...teamData, tagline: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">وصف الفريق / الصفة الرسمية (بدلاً من الترخيص):</label>
              <input
                type="text"
                value={teamData.licenseNumber}
                onChange={(e) => setTeamData({ ...teamData, licenseNumber: e.target.value })}
                placeholder="مثال: فريق تطوعي طموح"
                className="w-full p-3 rounded-xl border border-slate-300"
              />
            </div>

            {/* Color Theme Preference (Item 11 & Item 10) */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <label className="block font-bold text-slate-800">هوية ألوان الموقع المختارة:</label>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => changeColorTheme('emerald')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                    colorTheme === 'emerald' ? 'bg-[#1b633e] text-white border-emerald-700 shadow-md ring-2 ring-utrujjah-gold-400' : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span>الأخضر الزمردي (الرسمي)</span>
                </button>

                <button
                  type="button"
                  onClick={() => changeColorTheme('navy')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                    colorTheme === 'navy' ? 'bg-[#18466d] text-white border-sky-700 shadow-md ring-2 ring-utrujjah-gold-400' : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-sky-400" />
                  <span>الكحلي الملكي</span>
                </button>

                <button
                  type="button"
                  onClick={() => changeColorTheme('ruby')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                    colorTheme === 'ruby' ? 'bg-[#771a2e] text-white border-rose-700 shadow-md ring-2 ring-utrujjah-gold-400' : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span>العنابي الياقوتي</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">العنوان الجغرافي المعتمد:</label>
              <input
                type="text"
                value={teamData.address}
                onChange={(e) => setTeamData({ ...teamData, address: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">رقم الهاتف الرسمي:</label>
                <input
                  type="text"
                  value={teamData.phone}
                  onChange={(e) => setTeamData({ ...teamData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 dir-ltr text-right"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">البريد الإلكتروني المعتمد:</label>
                <input
                  type="email"
                  value={teamData.email}
                  onChange={(e) => setTeamData({ ...teamData, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 dir-ltr text-right"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="block font-bold text-slate-700 mb-2">روابط صفحات التواصل الاجتماعي:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">رابط TikTok:</span>
                  <input
                    type="text"
                    value={teamData.social?.tiktok || ''}
                    onChange={(e) => setTeamData({ ...teamData, social: { ...teamData.social, tiktok: e.target.value } })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dir-ltr text-right text-xs"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">رابط قناة Telegram:</span>
                  <input
                    type="text"
                    value={teamData.social?.telegram || ''}
                    onChange={(e) => setTeamData({ ...teamData, social: { ...teamData.social, telegram: e.target.value } })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dir-ltr text-right text-xs"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">رابط منصة X:</span>
                  <input
                    type="text"
                    value={teamData.social?.x || ''}
                    onChange={(e) => setTeamData({ ...teamData, social: { ...teamData.social, x: e.target.value } })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dir-ltr text-right text-xs"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">رابط Instagram:</span>
                  <input
                    type="text"
                    value={teamData.social?.instagram || ''}
                    onChange={(e) => setTeamData({ ...teamData, social: { ...teamData.social, instagram: e.target.value } })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dir-ltr text-right text-xs"
                  />
                </div>
              </div>
            </div>



            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => {
                  localStorage.setItem('utrujjah_team_data', JSON.stringify(teamData));
                  showToast('تم حفظ إعدادات وبيانات الفريق بنجاح');
                }}
                className="btn-primary text-xs sm:text-sm px-6 py-2.5"
              >
                حفظ التغييرات
              </button>
            </div>
          </div>

          {/* Interactive Visual Analytics & Charts (Item 6) */}
          <StatsCharts isDarkBg={false} />
        </div>
      )}

    </div>
  );
}
