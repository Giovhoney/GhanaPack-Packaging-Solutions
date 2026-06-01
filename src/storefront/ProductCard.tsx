import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Product } from './types';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:rounded-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-1 text-[10px] font-black uppercase tracking-wide text-ink shadow sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wide text-slate-500 sm:mb-3 sm:text-xs">
          <span className="truncate">{product.category}</span>
          <span className="inline-flex items-center gap-1 text-amber-500">
            <Star size={12} fill="currentColor" className="sm:h-3.5 sm:w-3.5" /> {product.rating}
          </span>
        </div>
        <h3 className="line-clamp-2 min-h-10 text-sm font-black leading-tight text-ink sm:min-h-14 sm:text-lg">{product.title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">{product.description}</p>
        <div className="mt-4 flex items-end justify-between gap-2 sm:mt-5 sm:gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500 sm:text-xs">Pricing</p>
            <p className="text-sm font-black text-ink sm:text-xl">Request quote</p>
          </div>
          <span className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-black text-brand sm:px-4 sm:py-2 sm:text-sm">View</span>
        </div>
      </div>
    </Link>
  );
};
