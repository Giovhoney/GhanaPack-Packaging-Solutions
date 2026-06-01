import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { categories, categoryImages } from '../data';
import { useStore } from '../store';

export const Categories = () => {
  const { products } = useStore();

  return (
    <>
      <Helmet>
        <title>Packaging Categories | GhanaPack Store</title>
        <meta name="description" content="Explore GhanaPack Store categories including food packs, paper bags, bottles, jars, disposables, event supplies, and custom packaging." />
      </Helmet>
      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-black tracking-tight text-ink md:text-6xl">Product categories</h1>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">Browse GhanaPack’s packaging categories and jump straight into the product catalog.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category} to={`/products?category=${encodeURIComponent(category)}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img src={categoryImages[category]} alt={category} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="p-6">
                  <p className="text-sm font-black uppercase tracking-wide text-brand">{products.filter((product) => product.category === category).length} products</p>
                  <h2 className="mt-2 text-2xl font-black text-ink">{category}</h2>
                  <p className="mt-4 inline-flex items-center gap-2 font-black text-slate-600">
                    Shop now <ArrowRight size={17} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
