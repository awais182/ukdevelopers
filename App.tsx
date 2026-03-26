import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppChat from './components/common/WhatsAppChat';
import Home from './pages/home/Home';
import About from './pages/about/About';
import VisionValues from './pages/visionValues/VisionValues';
import Projects from './pages/projects/Projects';
import ProjectDetail from './pages/projects/ProjectDetail';
import PaymentPlans from './pages/paymentPlans/PaymentPlans';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Admin from './pages/admin/Admin';
import ShariahCompliance from './pages/shariah/ShariahCompliance';
import Coordinates from './pages/Coordinates/Coordinates';
import Leadership from './pages/team/Leadership';
import ExecutiveDetail from './pages/team/ExecutiveDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const AppRoutes: React.FC<{ isAdminEnabled: boolean }> = ({ isAdminEnabled }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-gold selection:text-white">
      <Navbar />
      <WhatsAppChat />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
              <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
              <Route path="/vision" element={<AnimatedPage><VisionValues /></AnimatedPage>} />
              <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
              <Route path="/projects/:id" element={<AnimatedPage><ProjectDetail /></AnimatedPage>} />
              <Route path="/payment-plans" element={<AnimatedPage><PaymentPlans /></AnimatedPage>} />
              <Route path="/coordinates" element={<AnimatedPage><Coordinates /></AnimatedPage>} />
              <Route path="/team" element={<AnimatedPage><Leadership /></AnimatedPage>} />
              <Route path="/team/:id" element={<AnimatedPage><ExecutiveDetail /></AnimatedPage>} />
              <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
              <Route path="/shariah" element={<AnimatedPage><ShariahCompliance /></AnimatedPage>} />
              <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
              {isAdminEnabled && (
                <Route path="/admin" element={<AnimatedPage><Admin /></AnimatedPage>} />
              )}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    );
};

const App: React.FC = () => {
  const isAdminEnabled = (import.meta as any).env.MODE === 'development' || (import.meta as any).env.VITE_ENABLE_ADMIN === 'true';

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes isAdminEnabled={isAdminEnabled} />
    </Router>
  );
};

export default App;
