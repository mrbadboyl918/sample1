import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import ErrorBoundary from '@/components/ErrorBoundary';
import AuthModal from '@/components/AuthModal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Technologies from '@/components/Technologies';
import Automation from '@/components/Automation';
import HRMS from '@/components/HRMS';
import CRM from '@/components/CRM';
import SoftwareSolutions from '@/components/SoftwareSolutions';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import TelecomEngineeringPage from '@/pages/TelecomEngineeringPage';
import ProjectsPage from '@/pages/ProjectsPage';

function ScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function AdminRoute() {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-2 border-violet-300 border-t-violet-700 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
        <div className="max-w-md text-center">
          <h1 className="font-poppins font-bold text-2xl text-gray-900 mb-3">Access Denied</h1>
          <p className="text-gray-500 text-sm mb-1">You must be signed in as an administrator to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <AdminPanel />
    </>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Industries />
      <Technologies />
      <Automation />
      <HRMS />
      <CRM />
      <SoftwareSolutions />
      <Careers />
      <Clients />
      <Contact />
    </main>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  return (
    <>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/telecom-engineering" element={<TelecomEngineeringPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/admin" element={<AdminRoute />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      <AuthModal />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
