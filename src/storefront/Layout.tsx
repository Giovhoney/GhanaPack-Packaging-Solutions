import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, ShoppingBag, ShieldCheck, X } from 'lucide-react';
import { useStore } from './store';
import { CartDrawer } from './CartDrawer';
import { FloatingWhatsApp, Logo } from './ui';

const nav = [
  { label: 'Shop', path: '/products' },
  { label: 'Categories', path: '/categories' },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useStore();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-warm text-ink">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-black uppercase tracking-wide transition ${isActive ? 'text-brand' : 'text-slate-600 hover:text-ink'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Link to="/products" className="hidden rounded-full border border-slate-200 p-3 text-slate-700 hover:bg-slate-50 sm:inline-flex" aria-label="Search products">
              <Search size={20} />
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative rounded-full bg-ink p-2.5 text-white shadow-soft sm:p-3"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-xs font-black">
                  {count}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(true)} className="rounded-full border border-slate-200 p-2.5 md:hidden" aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 bg-white px-4 py-5 transition md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <Logo />
          <button onClick={() => setMenuOpen(false)} className="rounded-full border border-slate-200 p-2.5" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className="mt-8 grid gap-2.5">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `group flex min-h-14 items-center gap-3 rounded-full px-4 text-base font-black uppercase tracking-wide transition ${
                  isActive ? 'bg-brand/10 text-brand' : 'text-ink hover:bg-slate-100 hover:text-brand'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`h-2 w-2 rounded-full transition ${isActive ? 'bg-brand' : 'bg-slate-300 group-hover:bg-brand'}`} />
                  <span className="min-w-0">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <main>{children}</main>

      <footer className="relative overflow-hidden bg-ink px-4 py-16 text-white md:px-6">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm leading-7 text-white/70">
              GhanaPack supplies food packs, paper bags, bottles, jars, disposables, branded packaging, and event packaging support from Kumasi to businesses across Ghana.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-bold text-brand">
              <ShieldCheck size={16} /> Trusted packaging supplier in Kumasi
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-wide text-brand">Company</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <Link to="/products">All products</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/custom-packaging">Custom Packaging</Link>
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-wide text-accent">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <a href="mailto:info@ghanapack.com">info@ghanapack.com</a>
              <a href="tel:+233540645292">+233 540 645 292</a>
              <span>Kumasi, Ghana</span>
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-wide text-yellow">Social</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GhanaPack Packaging Solutions. All rights reserved.</p>
          <p>Affordable packaging solutions for businesses and events.</p>
        </div>
      </footer>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
};
