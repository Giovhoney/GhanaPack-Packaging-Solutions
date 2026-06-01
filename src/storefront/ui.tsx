import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from './data';

export const Logo = ({ inverse = false }: { inverse?: boolean }) => (
  <Link to="/" className="flex items-center gap-3" aria-label="GhanaPack Store home">
    <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white shadow-soft">
      <img src="/images/logo1-transparent-cropped.png" alt="" className="h-10 w-10 object-contain" />
    </span>
    <span className="leading-none">
      <span className={`block text-lg font-black tracking-tight ${inverse ? 'text-white' : 'text-ink'}`}>GhanaPack</span>
      <span className="block text-xs font-bold uppercase tracking-[0.22em] text-brand">Store</span>
    </span>
  </Link>
);

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const FloatingWhatsApp = () => (
  <a
    href={whatsappUrl('Hello GhanaPack, I would like help with a packaging order.')}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-1"
    aria-label="Chat with GhanaPack on WhatsApp"
  >
    <MessageCircle size={25} />
  </a>
);

export const SectionTitle = ({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-brand">{eyebrow}</p>}
    <h2 className="text-3xl font-black tracking-tight text-ink md:text-5xl">{title}</h2>
    {copy && <p className="mt-4 text-base leading-8 text-slate-600">{copy}</p>}
  </div>
);

export const EmptyState = ({ title, copy }: { title: string; copy: string }) => (
  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
    <h3 className="text-xl font-black text-ink">{title}</h3>
    <p className="mt-2 text-slate-600">{copy}</p>
  </div>
);
