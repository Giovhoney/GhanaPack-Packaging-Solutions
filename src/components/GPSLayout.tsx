import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const GPSHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Custom Packaging', path: '/custom-packaging' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="GhanaPack Packaging Solutions home">
            <img
              src="/images/logo1-transparent-cropped.png"
              alt=""
              className="h-12 w-auto md:h-14"
            />
            <span className="leading-none">
              <span className="block text-lg md:text-xl font-black uppercase tracking-widest text-gps-black">GhanaPack</span>
              <span className="block text-[9px] md:text-[10px] font-black uppercase tracking-[0.22em] text-gps-orange">Packaging Solutions</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-gps-orange ${
                  location.pathname === link.path ? 'text-gps-orange' : 'text-gps-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/233540645292"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gps-black text-white px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-gps-orange transition-all duration-300 transform hover:-translate-y-1"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-gps-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav - Moved outside header to avoid clipping/stacking issues */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-6 overflow-y-auto animate-in fade-in zoom-in duration-300">
          <button className="absolute top-6 right-6 text-gps-black" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center space-y-8 my-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-gps-orange transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/233540645292"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gps-orange text-white px-12 py-5 text-lg font-black uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export const GPSFooter = () => (
  <footer className="bg-gps-black text-white pt-32 pb-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
      <div className="space-y-8">
        <Link to="/" className="inline-flex flex-col items-start gap-5" aria-label="GhanaPack Packaging Solutions home">
          <img
            src="/images/logo1-transparent-cropped.png"
            alt=""
            className="h-28 w-auto md:h-36"
          />
          <span className="leading-none">
            <span className="block text-3xl md:text-4xl font-black uppercase tracking-tight text-white">GhanaPack</span>
            <span className="block mt-2 text-xs md:text-sm font-black uppercase tracking-[0.22em] text-gps-orange">Packaging Solutions</span>
          </span>
        </Link>
        <p className="text-gray-400 leading-relaxed">
          The leading provider of affordable, professional packaging solutions in Kumasi and across Ghana. We help your products stand out.
        </p>
        <div className="flex gap-4">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-gps-orange hover:border-gps-orange transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gps-orange mb-10">Payment & Delivery</h4>
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Payment Methods</p>
            <p className="text-sm text-gray-300 font-bold">MTN MoMo, Telecel Cash, Bank Transfer</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Delivery Options</p>
            <p className="text-sm text-gray-300 font-bold">Standard Dispatch, Private Ride (Bolt/Uber/Yango)</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gps-orange mb-10">Quick Links</h4>
        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
          <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
          <li><Link to="/custom-packaging" className="text-gray-400 hover:text-white transition-colors">Custom Packaging</Link></li>
          <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gps-orange mb-10">Contact</h4>
        <ul className="space-y-6 text-gray-400">
          <li className="flex items-start gap-4">
            <Phone className="text-gps-orange shrink-0" size={20} />
            <span className="font-bold">+233 540645292</span>
          </li>
          <li className="flex items-start gap-4">
            <Mail className="text-gps-orange shrink-0" size={20} />
            <span className="font-bold">info@ghanapack.com</span>
          </li>
          <li className="flex items-start gap-4">
            <MapPin className="text-gps-orange shrink-0" size={20} />
            <span className="font-bold">Kumasi, Ashanti Region, Ghana</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
        © {new Date().getFullYear()} GhanaPack Packaging Solutions. All Rights Reserved.
      </p>
      <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
      </div>
    </div>

    {/* Floating WhatsApp Button */}
    <a 
      href="https://wa.me/233540645292" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
    >
      <MessageCircle size={32} fill="currentColor" className="text-white" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Order on WhatsApp
      </span>
    </a>
  </footer>
);
