import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import GPSHome from './pages/gps/Home';
import GPSCustom from './pages/gps/CustomPackaging';
import GPSContact from './pages/gps/Contact';
import { StoreProvider } from './storefront/store';
import { Layout as StoreLayout } from './storefront/Layout';
import { Catalog } from './storefront/pages/Catalog';
import { ProductDetail } from './storefront/pages/ProductDetail';
import { Categories } from './storefront/pages/Categories';
import { Admin } from './storefront/pages/Admin';

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<GPSHome />} />
          <Route path="/custom-packaging" element={<GPSCustom />} />
          <Route path="/contact" element={<GPSContact />} />
          <Route path="/products" element={<StoreLayout><Catalog /></StoreLayout>} />
          <Route path="/products/:slug" element={<StoreLayout><ProductDetail /></StoreLayout>} />
          <Route path="/categories" element={<StoreLayout><Categories /></StoreLayout>} />
          <Route path="/admin" element={<StoreLayout><Admin /></StoreLayout>} />
          <Route path="*" element={<GPSHome />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
