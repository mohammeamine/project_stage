import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import PricingSection from './components/PricingSection';
import HowItWorks from './components/HowItWorks';
import ResourceShowcase from './components/ResourceShowcase';
import Testimonials from './components/Testimonials';
import AIFeatures from './components/AIFeatures';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import DashboardSidebar from "./components/DashboardSidebar";
import BrowsePage from "./pages/BrowsePage";
import DashboardPage from "./pages/DashboardPage";
import UpgradePage from "./pages/UpgradePage";
import SupportPage from './pages/SupportPage';
import SettingsPage from './pages/SettingsPage';
import { SidebarContext } from './components/DashboardSidebar';
import SubjectDetailPage from './pages/SubjectDetailPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isDashboard = location.pathname === '/dashboard';
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {!isAuthPage && !isDashboard && <Header />}
      <main>{children}</main>
      {!isAuthPage && !isDashboard && <Footer />}
      {!isAuthPage && !isDashboard && <StickyCTA />}
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <Router>
      <Routes>
        {/* Landing page SANS sidebar */}
        <Route path="/" element={
          <>
            <Header />
            <HeroSection />
            <ValueProposition />
            <HowItWorks />
            <ResourceShowcase />
            <PricingSection />
            <Testimonials />
            <AIFeatures />
            <Contact />
            <CTA />
            <Footer />
            <StickyCTA />
          </>
        } />
        {/* Auth pages SANS sidebar */}
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        {/* Pages AVEC sidebar */}
        <Route path="/*" element={
          <SidebarContext.Provider value={{ open: sidebarOpen, setOpen: setSidebarOpen }}>
            <div className="flex min-h-screen bg-gray-50">
              <DashboardSidebar />
              <main className="flex-1">
                <Routes>
                  <Route path="browse" element={<BrowsePage />} />
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="upgrade" element={<UpgradePage />} />
                  <Route path="support" element={<SupportPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="subject/:subjectName" element={<SubjectDetailPage />} />
                </Routes>
              </main>
            </div>
          </SidebarContext.Provider>
        } />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;