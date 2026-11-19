import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
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
  ChevronLeft
} from 'lucide-react';

export default function AdminDashboard() {
  const {
    adminAuth,
    loginAdmin,
    logoutAdmin,
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
    teamData,
    setTeamData,
    openModal,
    showToast
  } = useApp();

  // Login Form States
  const [username, setUsername] = useState('admin@utrujjah.org.sa');
  const [password, setPassword] = useState('admin123');

  // Active Tab in Dashboard
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'projects', 'donations', 'messages', 'media', 'settings'

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
          { id: 'overview', label: 'نظرة عامة وإحصائيات', icon: LayoutDashboard },
          { id: 'projects', label: `إدارة المشاريع (${projects.length})`, icon: Target },
          { id: 'donations', label: `سجل التبرعات (${donations.length})`, icon: DollarSign },
          { id: 'messages', label: `رسائل التواصل (${contactMessages.length})`, icon: MessageSquare },
          { id: 'media', label: `المركز الإعلامي (${media.length})`, icon: Newspaper },
          { id: 'settings', label: 'إعدادات المنصة', icon: Settings },
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
              <label className="block font-bold text-slate-700 mb-1">رقم الترخيص والتسجيل المعتمد:</label>
              <input
                type="text"
                value={teamData.licenseNumber}
                onChange={(e) => setTeamData({ ...teamData, licenseNumber: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300"
              />
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
        </div>
      )}

    </div>
  );
}
