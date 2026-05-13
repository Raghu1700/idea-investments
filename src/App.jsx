import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PlanDetails } from './pages/PlanDetails';

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
          <Route path="/plan-details" element={<PlanDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
