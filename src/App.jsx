import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PlanDetails } from './pages/PlanDetails';
import { CalendarPage } from './pages/CalendarPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ContactPage } from './pages/ContactPage';
import { HistorySection } from './components/sections/HistorySection';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative overflow-hidden bg-ivory">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<PlanDetails />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/plan-details" element={<PlanDetails />} />
        </Routes>
        <HistorySection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
