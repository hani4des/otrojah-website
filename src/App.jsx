import React from 'react';
import { useApp } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ShareBar from './components/ShareBar';
import ReceiptModal from './components/ReceiptModal';
import DetailModals from './components/DetailModals';
import WelcomeModal from './components/WelcomeModal';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import TelegramPage from './pages/TelegramPage';
import ProgramsPage from './pages/ProgramsPage';
import ProjectsPage from './pages/ProjectsPage';
import DonatePage from './pages/DonatePage';
import ZakatPage from './pages/ZakatPage';
import MediaPage from './pages/MediaPage';
import DesignsPage from './pages/DesignsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'activities':
        return <ActivitiesPage />;
      case 'telegram':
        return <TelegramPage />;
      case 'designs':
        return <DesignsPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'donate':
        return <DonatePage />;
      case 'zakat':
        return <ZakatPage />;
      case 'media':
        return <MediaPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfc] dark:bg-[#06150d] font-tajawal text-slate-800 dark:text-slate-100 antialiased selection:bg-utrujjah-gold-500 selection:text-slate-950 transition-colors duration-300">
      {/* Top Header */}
      <Header />

      {/* Main Content View */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Share Bar: Helping visitors share the good work at bottom of pages */}
      {currentPage !== 'admin' && <ShareBar />}

      {/* Footer */}
      <Footer />

      {/* Official Interactive Modals */}
      <WelcomeModal />
      <ReceiptModal />
      <DetailModals />

      {/* Global Toast Alerts */}
      <Toast />
    </div>
  );
}
