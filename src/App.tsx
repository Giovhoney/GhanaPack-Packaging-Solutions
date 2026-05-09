import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// GPS Pages (Wireframes)
import GPSHome from './pages/gps/Home';
import GPSCustom from './pages/gps/CustomPackaging';
import GPSContact from './pages/gps/Contact';
import GPSProducts from './pages/gps/Products';

// Force re-bundle: 2026-05-08 15:50
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GPSHome />} />
        <Route path="/products" element={<GPSProducts />} />
        <Route path="/custom-packaging" element={<GPSCustom />} />
        <Route path="/contact" element={<GPSContact />} />
      </Routes>
    </Router>
  );
};

export default App;
