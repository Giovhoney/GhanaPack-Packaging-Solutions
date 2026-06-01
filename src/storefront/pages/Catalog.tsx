import { useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { categories } from '../data';
import { ProductCard } from '../ProductCard';
import { useStore } from '../store';
import { EmptyState } from '../ui';

export const Catalog = () => {
  const { products } = useStore();
  const galleryRef = useRef<HTMLDivElement>(null);
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const selectedCategory = params.get('category') || 'All';
  const galleryImages = useMemo(
    () =>
      products.flatMap((product) =>
        product.images.map((image) => ({
          src: image,
          productName: product.title,
          category: product.category,
        })),
      ),
    [products],
  );

  const scrollGallery = (direction: number) => {
    galleryRef.current?.scrollBy({
      left: direction * Math.min(galleryRef.current.clientWidth * 0.85, 720),
      behavior: 'smooth',
    });
  };

  const filtered = useMemo(() => {
    const visible = products.filter((product) => product.available);
    const searched = visible.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesQuery = `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    return [...searched].sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating;
      return Number(b.featured) - Number(a.featured);
    });
  }, [products, query, selectedCategory, sort]);

  return (
    <>
      <Helmet>
        <title>Shop Packaging Products | GhanaPack Store</title>
        <meta name="description" content="Browse GhanaPack packaging products by category, size, quantity, and finish." />
        <link rel="canonical" href="https://ghanapack.com/products" />
      </Helmet>

      <section className="bg-white px-4 py-12 md:px-6">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 text-sm font-bold text-slate-500">
            <Link to="/" className="hover:text-brand">Home</Link> / <span className="text-ink">Products</span>
          </nav>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-brand">Catalog</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-ink md:text-6xl">Shop GhanaPack Store</h1>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">Search packaging products, filter by category, compare options, and send a detailed order through WhatsApp.</p>
            </div>
            <div className="rounded-2xl bg-warm px-5 py-4 text-sm font-bold text-slate-600">
              {filtered.length} products available
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
          <button
            type="button"
            onClick={() => setFiltersOpen((open) => !open)}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 font-black text-ink shadow-sm lg:hidden"
            aria-expanded={filtersOpen}
            aria-controls="catalog-filters"
          >
            <span className="inline-flex items-center gap-2">
              <Filter size={18} /> Filters
            </span>
            <span className="text-sm text-brand">{selectedCategory}</span>
          </button>

          <aside
            id="catalog-filters"
            className={`h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${filtersOpen ? 'block' : 'hidden'} lg:block`}
          >
            <div className="mb-4 flex items-center gap-2 font-black text-ink">
              <Filter size={18} /> Filters
            </div>
            <div className="grid gap-2">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    category === 'All' ? setParams({}) : setParams({ category });
                    setFiltersOpen(false);
                  }}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-bold transition ${selectedCategory === category ? 'bg-ink text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
              <label className="flex items-center gap-3 rounded-xl bg-slate-50 px-4">
                <Search size={19} className="text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search food packs, bags, bottles..."
                  className="h-12 w-full bg-transparent text-sm font-bold outline-none"
                />
              </label>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-12 rounded-xl border border-slate-200 px-4 text-sm font-bold outline-none">
                <option value="featured">Featured first</option>
                <option value="rating">Top rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <EmptyState title="No products found" copy="Try another category or search term." />
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-brand">Product Image Library</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink md:text-6xl">Swipe Every Product Photo.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-600">Every uploaded image is named here so customers can browse the full range left or right.</p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollGallery(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-brand hover:text-white"
              aria-label="Previous product photos"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery(1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-brand hover:text-white"
              aria-label="Next product photos"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8"
          aria-label="Product image library"
        >
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative aspect-[4/3] min-w-[82vw] snap-center overflow-hidden bg-warm shadow-2xl sm:min-w-[520px] lg:min-w-[650px]"
            >
              <img src={image.src} alt={image.productName} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/75 to-transparent p-5 text-white md:p-8">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand md:text-xs">{image.category}</p>
                <h3 className="mb-2 text-2xl font-black uppercase tracking-tight md:text-4xl">{image.productName}</h3>
                <p className="text-sm font-semibold text-white/80 md:text-base">Product photo {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
