import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  initialTeamData,
  initialStats,
  initialHeroSlides,
  initialBanners,
  initialPrograms,
  initialProjects,
  initialMedia,
  initialDonations,
  initialContactMessages,
  initialDesigns,
  initialAdmins
} from '../data/initialData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParam, setPageParam] = useState(null);

  // Persistent States in LocalStorage
  const [teamData, setTeamData] = useState(() => {
    const saved = localStorage.getItem('utrujjah_team_data');
    if (!saved) return initialTeamData;
    try {
      const parsed = JSON.parse(saved);
      return {
        ...initialTeamData,
        ...parsed,
        aboutText: parsed.aboutText || initialTeamData.aboutText,
        footerDesc: parsed.footerDesc || initialTeamData.footerDesc,
        privacyPolicy: parsed.privacyPolicy || initialTeamData.privacyPolicy,
        socialEnabled: parsed.socialEnabled || initialTeamData.socialEnabled,
        showDonateButton: parsed.showDonateButton !== undefined ? parsed.showDonateButton : initialTeamData.showDonateButton,
        headerSectionsEnabled: {
          ...initialTeamData.headerSectionsEnabled,
          ...(parsed.headerSectionsEnabled || {})
        },
        ticker: {
          ...initialTeamData.ticker,
          ...(parsed.ticker || {})
        },
        liveBroadcast: {
          ...initialTeamData.liveBroadcast,
          ...(parsed.liveBroadcast || {})
        },
        shareBar: {
          ...initialTeamData.shareBar,
          ...(parsed.shareBar || {}),
          channels: {
            ...(initialTeamData.shareBar?.channels || {}),
            ...(parsed.shareBar?.channels || {})
          }
        },
        welcomeModal: {
          ...initialTeamData.welcomeModal,
          ...(parsed.welcomeModal || {})
        }
      };
    } catch (e) {
      return initialTeamData;
    }
  });

  // Admin Users List (Item 2: Control & Add Admins)
  const [admins, setAdmins] = useState(() => {
    const saved = localStorage.getItem('utrujjah_admins');
    return saved ? JSON.parse(saved) : initialAdmins;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('utrujjah_projects');
    if (!saved) return initialProjects;
    try {
      const parsed = JSON.parse(saved);
      return parsed.map(p => {
        if (!p.iconType) {
          const init = initialProjects.find(ip => ip.id === p.id);
          if (init) return { ...p, iconType: init.iconType };
          if (p.category === 'كفالة أيتام') return { ...p, iconType: 'orphan' };
          if (p.category === 'قرآني') return { ...p, iconType: 'quran' };
          if (p.category === 'صحي') return { ...p, iconType: 'medical' };
          if (p.category === 'تعليمي') return { ...p, iconType: 'education' };
          if (p.title && p.title.includes('سلة')) return { ...p, iconType: 'food' };
          return { ...p, iconType: 'home' };
        }
        return p;
      });
    } catch (e) {
      return initialProjects;
    }
  });

  const [programs, setPrograms] = useState(() => {
    const saved = localStorage.getItem('utrujjah_programs');
    return saved ? JSON.parse(saved) : initialPrograms;
  });

  const [media, setMedia] = useState(() => {
    const saved = localStorage.getItem('utrujjah_media');
    return saved ? JSON.parse(saved) : initialMedia;
  });

  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('utrujjah_donations');
    return saved ? JSON.parse(saved) : initialDonations;
  });

  const [contactMessages, setContactMessages] = useState(() => {
    const saved = localStorage.getItem('utrujjah_messages');
    return saved ? JSON.parse(saved) : initialContactMessages;
  });

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('utrujjah_stats');
    return saved ? JSON.parse(saved) : initialStats;
  });

  // Islamic Reminder Designs (Item 3)
  const [designs, setDesigns] = useState(() => {
    const saved = localStorage.getItem('utrujjah_designs');
    return saved ? JSON.parse(saved) : initialDesigns;
  });

  // Color Theme (Item 11: emerald, navy, ruby)
  const [colorTheme, setColorTheme] = useState(() => {
    const saved = localStorage.getItem('utrujjah_color_theme');
    return saved || 'emerald';
  });

  // Modals & Popups
  const [activeModal, setActiveModal] = useState(null); // 'receipt', 'project-details', 'program-details', 'quick-donate'
  const [modalData, setModalData] = useState(null);

  // Toast Notification
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Theme (Dark / Light Mode)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('utrujjah_theme');
    return saved ? saved : 'light';
  });

  // Font Size Zoom Level (-1: small, 0: default, 1: large, 2: extra large)
  const [fontZoom, setFontZoom] = useState(() => {
    const saved = localStorage.getItem('utrujjah_font_zoom');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  // Admin Auth State
  const [adminAuth, setAdminAuth] = useState(() => {
    const saved = localStorage.getItem('utrujjah_admin_auth');
    return saved ? JSON.parse(saved) : { isAuthenticated: false, user: null };
  });

  // Apply Dark Mode & Font Zoom to document root
  useEffect(() => {
    localStorage.setItem('utrujjah_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('utrujjah_font_zoom', fontZoom.toString());
    // Remove existing zoom classes
    document.documentElement.classList.remove('font-zoom--1', 'font-zoom-0', 'font-zoom-1', 'font-zoom-2');
    document.documentElement.classList.add(`font-zoom-${fontZoom}`);
  }, [fontZoom]);

  // Apply Brand Color Theme to document root
  useEffect(() => {
    localStorage.setItem('utrujjah_color_theme', colorTheme);
    document.documentElement.classList.remove('color-theme-emerald', 'color-theme-navy', 'color-theme-ruby');
    document.documentElement.classList.add(`color-theme-${colorTheme}`);
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem('utrujjah_designs', JSON.stringify(designs));
  }, [designs]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const changeColorTheme = (themeName) => {
    setColorTheme(themeName);
    showToast(`تم تغيير مظهر ألوان الموقع إلى: ${themeName === 'emerald' ? 'الأخضر الزمردي' : themeName === 'navy' ? 'الكحلي الملكي' : 'العنابي الياقوتي'}`);
  };

  const increaseFontSize = () => {
    setFontZoom(prev => Math.min(2, prev + 1));
  };

  const decreaseFontSize = () => {
    setFontZoom(prev => Math.max(-1, prev - 1));
  };

  const resetFontSize = () => {
    setFontZoom(0);
  };

  // Save to LocalStorage effects
  useEffect(() => {
    localStorage.setItem('utrujjah_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('utrujjah_donations', JSON.stringify(donations));
  }, [donations]);

  useEffect(() => {
    localStorage.setItem('utrujjah_messages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  useEffect(() => {
    localStorage.setItem('utrujjah_media', JSON.stringify(media));
  }, [media]);

  useEffect(() => {
    localStorage.setItem('utrujjah_admin_auth', JSON.stringify(adminAuth));
  }, [adminAuth]);

  useEffect(() => {
    localStorage.setItem('utrujjah_admins', JSON.stringify(admins));
  }, [admins]);

  useEffect(() => {
    localStorage.setItem('utrujjah_team_data', JSON.stringify(teamData));
  }, [teamData]);

  // Toast helper
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4500);
  };

  // Navigation helper
  const navigateTo = (page, param = null) => {
    setCurrentPage(page);
    setPageParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open & Close Modals
  const openModal = (type, data = null) => {
    setActiveModal(type);
    setModalData(data);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  // Handle New Donation
  const processDonation = (donationInput) => {
    const newDonationId = `DON-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newDonation = {
      id: newDonationId,
      donorName: donationInput.isAnonymous ? 'فاعل خير (تبرع خفي)' : (donationInput.donorName || 'فاعل خير'),
      email: donationInput.email || 'غير معلن',
      phone: donationInput.phone || 'غير معلن',
      amount: parseFloat(donationInput.amount),
      projectId: donationInput.projectId || 'general',
      projectName: donationInput.projectName || 'تبرع عام - دعم مسيرة فريق أترجة',
      paymentMethod: donationInput.paymentMethod || 'mada',
      date: new Date().toLocaleString('ar-SA', { dateStyle: 'short', timeStyle: 'short' }),
      status: 'مكتمل بنجاح',
      type: donationInput.type || 'صدقة جارية',
      receiptNumber: `UTR-REC-${Math.floor(100000 + Math.random() * 900000)}`
    };

    // Update donations list
    setDonations(prev => [newDonation, ...prev]);

    // Update project raised amount if tied to a project
    if (donationInput.projectId && donationInput.projectId !== 'general') {
      setProjects(prev => prev.map(p => {
        if (p.id === donationInput.projectId) {
          return {
            ...p,
            raisedAmount: p.raisedAmount + parseFloat(donationInput.amount),
            donorsCount: (p.donorsCount || 0) + 1
          };
        }
        return p;
      }));
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#165b33', '#c59b27', '#22754c', '#ddb753', '#ffffff']
      });
    } catch (e) {
      // safe fallback
    }

    showToast(`بارك الله فيكم! تم استلام مساهمتكم الكريمة بمبلغ ${newDonation.amount.toLocaleString()} ريال بنجاح.`, 'success');
    
    // Automatically open the official receipt modal
    openModal('receipt', newDonation);
    return newDonation;
  };

  // Handle Contact Message Submission
  const submitContactMessage = (msgInput) => {
    const newMsg = {
      id: `MSG-${Math.floor(100 + Math.random() * 900)}`,
      name: msgInput.name,
      email: msgInput.email,
      phone: msgInput.phone,
      subject: msgInput.subject,
      message: msgInput.message,
      date: new Date().toLocaleString('ar-SA', { dateStyle: 'short', timeStyle: 'short' }),
      status: 'جديدة',
      replied: false
    };

    setContactMessages(prev => [newMsg, ...prev]);
    showToast('شكراً لتواصلكم، تم استلام رسالتكم وسيتواصل معكم فريق أترجة في أقرب وقت.', 'success');
    return newMsg;
  };

  // Admin Functions (Item 2: Control & Add Admins)
  const loginAdmin = (usernameOrEmail, password) => {
    // Check against dynamic admins list or master fallback
    const matched = (admins || []).find(
      a => (a.username.toLowerCase() === usernameOrEmail.toLowerCase() || (a.email && a.email.toLowerCase() === usernameOrEmail.toLowerCase())) && a.password === password
    );

    if (matched) {
      const auth = { isAuthenticated: true, user: matched };
      setAdminAuth(auth);
      showToast(`مرحباً بك يا ${matched.name}، تم تسجيل الدخول بنجاح`, 'success');
      return true;
    } else if (
      (usernameOrEmail === 'admin@utrujjah.org.sa' || usernameOrEmail === 'admin') &&
      password === 'admin123'
    ) {
      const auth = { isAuthenticated: true, user: { name: 'المشرف العام لفريق أترجة', role: 'مدير عام النظام', username: 'admin@utrujjah.org.sa' } };
      setAdminAuth(auth);
      showToast('مرحباً بك في لوحة تحكم فريق أترجة', 'success');
      return true;
    } else {
      showToast('بيانات الدخول غير صحيحة، يرجى التحقق من اسم المستخدم وكلمة المرور', 'error');
      return false;
    }
  };

  const addAdmin = (adminData) => {
    const newAdmin = {
      id: `admin-${Date.now()}`,
      name: adminData.name || 'مشرف جديد',
      username: adminData.username || `admin_${Date.now()}`,
      password: adminData.password || '123456',
      role: adminData.role || 'مشرف محتوى',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setAdmins(prev => [...prev, newAdmin]);
    showToast(`تمت إضافة المشرف "${newAdmin.name}" بنجاح!`);
    return newAdmin;
  };

  const deleteAdmin = (adminId) => {
    if ((admins || []).length <= 1) {
      showToast('لا يمكن حذف المشرف الأخير في النظام.', 'error');
      return false;
    }
    setAdmins(prev => prev.filter(a => a.id !== adminId));
    showToast('تم حذف المشرف بنجاح.');
    return true;
  };

  const logoutAdmin = () => {
    setAdminAuth({ isAuthenticated: false, user: null });
    showToast('تم تسجيل الخروج بنجاح', 'info');
    navigateTo('home');
  };

  // Project Management
  const addProject = (project) => {
    const newP = {
      ...project,
      id: `project-${Date.now()}`,
      code: `UTR-${Math.floor(10 + Math.random() * 90)}`,
      raisedAmount: 0,
      donorsCount: 0,
      active: true
    };
    setProjects(prev => [newP, ...prev]);
    showToast('تمت إضافة المشروع الجديد بنجاح');
  };

  const updateProject = (id, updatedFields) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
    showToast('تم تحديث بيانات المشروع بنجاح');
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    showToast('تم حذف المشروع بنجاح', 'info');
  };

  // Media Management
  const addMediaItem = (item) => {
    const newM = {
      ...item,
      id: `m-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setMedia(prev => [newM, ...prev]);
    showToast('تم نشر المادة الإعلامية بنجاح');
  };

  const deleteMediaItem = (id) => {
    setMedia(prev => prev.filter(m => m.id !== id));
    showToast('تم حذف المادة الإعلامية');
  };

  // Designs Management (Item 3 & Item 10)
  const addDesign = (designInput) => {
    const newDesign = {
      id: `design-${Date.now()}`,
      title: designInput.title || 'تصميم إسلامي تذكيري',
      category: designInput.category || 'القرآن والذكر',
      type: designInput.type || 'حديث نبوي شريف',
      text: designInput.text || '',
      source: designInput.source || 'مصدر معتمد',
      colorTheme: designInput.colorTheme || 'emerald',
      tags: designInput.tags ? (Array.isArray(designInput.tags) ? designInput.tags : designInput.tags.split(',')) : ['دعوة', 'تذكير'],
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setDesigns(prev => [newDesign, ...prev]);
    showToast('تمت إضافة التصميم الإسلامي الجديد بنجاح!');
  };

  const deleteDesign = (id) => {
    setDesigns(prev => prev.filter(d => d.id !== id));
    showToast('تم حذف التصميم بنجاح');
  };

  // Mark message replied
  const toggleMessageStatus = (id) => {
    setContactMessages(prev => prev.map(msg => {
      if (msg.id === id) {
        return {
          ...msg,
          replied: !msg.replied,
          status: !msg.replied ? 'تم الرد' : 'قيد المتابعة'
        };
      }
      return msg;
    }));
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        pageParam,
        navigateTo,
        teamData,
        setTeamData,
        projects,
        programs,
        media,
        designs,
        addDesign,
        deleteDesign,
        colorTheme,
        setColorTheme,
        changeColorTheme,
        donations,
        contactMessages,
        stats,
        setStats,
        heroSlides: initialHeroSlides,
        banners: initialBanners,
        activeModal,
        modalData,
        openModal,
        closeModal,
        processDonation,
        submitContactMessage,
        adminAuth,
        loginAdmin,
        logoutAdmin,
        admins,
        addAdmin,
        deleteAdmin,
        addProject,
        updateProject,
        deleteProject,
        addMediaItem,
        deleteMediaItem,
        toggleMessageStatus,
        theme,
        toggleTheme,
        fontZoom,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
