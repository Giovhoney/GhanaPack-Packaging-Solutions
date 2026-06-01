import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { Edit3, Eye, EyeOff, ImagePlus, Lock, Plus, Save, Trash2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { categories, formatPrice } from '../data';
import { useStore } from '../store';
import type { Product } from '../types';

const ADMIN_KEY = 'ghanapack.admin.auth';
const ADMIN_PASSWORD = 'GhanaPackStore2026!';

const blankProduct: Product = {
  id: '',
  title: '',
  slug: '',
  description: '',
  category: 'Food Packs',
  images: ['/images/IMG_0502.jpeg'],
  basePrice: 0,
  sizes: [{ label: 'Standard', price: 0 }],
  colors: ['Full color'],
  available: true,
  featured: false,
  rating: 4.8,
  reviews: 0,
  turnaround: '2-5 working days',
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const Admin = () => {
  const { products, setProducts, inquiries } = useStore();
  const [authenticated, setAuthenticated] = useState(() => window.localStorage.getItem(ADMIN_KEY) === 'true');
  const [password, setPassword] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Product>(blankProduct);
  const [error, setError] = useState('');

  const visibleCount = useMemo(() => products.filter((product) => product.available).length, [products]);

  const login = (event: FormEvent) => {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      window.localStorage.setItem(ADMIN_KEY, 'true');
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect admin password.');
    }
  };

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setDraft(product);
  };

  const startAdd = () => {
    setEditingId(null);
    setDraft({ ...blankProduct, id: crypto.randomUUID() });
  };

  const saveProduct = () => {
    const normalized = {
      ...draft,
      slug: draft.slug || slugify(draft.title),
      basePrice: Number(draft.basePrice),
      sizes: draft.sizes.map((entry) => ({ ...entry, price: Number(entry.price) })),
    };
    setProducts((current) => {
      const exists = current.some((product) => product.id === normalized.id);
      return exists ? current.map((product) => (product.id === normalized.id ? normalized : product)) : [normalized, ...current];
    });
    setEditingId(normalized.id);
  };

  const deleteProduct = (id: string) => {
    setProducts((current) => current.filter((product) => product.id !== id));
    if (editingId === id) startAdd();
  };

  const uploadImages = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const images = await Promise.all(files.map(fileToDataUrl));
    setDraft((current) => ({ ...current, images: [...current.images, ...images] }));
  };

  if (!authenticated) {
    return (
      <>
        <Helmet>
          <title>Secure Admin | GhanaPack Store</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <section className="grid min-h-[70vh] place-items-center px-4 py-16">
          <form onSubmit={login} className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white">
              <Lock />
            </div>
            <h1 className="text-3xl font-black text-ink">Admin dashboard</h1>
            <p className="mt-3 leading-7 text-slate-600">This area is locked for GhanaPack staff. Production deployments should connect this route to server-side authentication.</p>
            <label className="mt-6 block">
              <span className="text-sm font-black text-ink">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 font-bold outline-none focus:border-brand"
                placeholder="Enter admin password"
              />
            </label>
            {error && <p className="mt-3 text-sm font-bold text-rose-600">{error}</p>}
            <button className="mt-6 w-full rounded-full bg-brand px-6 py-4 font-black text-ink">Unlock dashboard</button>
          </form>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | GhanaPack Store</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-brand">Secure workspace</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-ink md:text-6xl">Admin dashboard</h1>
            </div>
            <button onClick={startAdd} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white">
              <Plus size={18} /> Add product
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['Products', products.length],
              ['Visible', visibleCount],
              ['Featured', products.filter((product) => product.featured).length],
              ['Inquiries', inquiries.length],
            ].map(([label, value]) => (
              <div key={String(label)} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-black text-ink">{String(value)}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="mb-4 text-xl font-black text-ink">Products</h2>
              <div className="grid max-h-[720px] gap-3 overflow-y-auto pr-1">
                {products.map((product) => (
                  <div key={product.id} className="flex gap-3 rounded-2xl border border-slate-200 p-3">
                    <img src={product.images[0]} alt={product.title} className="h-16 w-16 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-black text-ink">{product.title}</h3>
                      <p className="text-sm text-slate-500">{product.category} · {formatPrice(product.basePrice)}</p>
                      <div className="mt-2 flex gap-2">
                        <button onClick={() => startEdit(product)} className="rounded-full bg-slate-100 p-2" aria-label="Edit product">
                          <Edit3 size={15} />
                        </button>
                        <button
                          onClick={() => setProducts((current) => current.map((entry) => (entry.id === product.id ? { ...entry, available: !entry.available } : entry)))}
                          className="rounded-full bg-slate-100 p-2"
                          aria-label="Toggle visibility"
                        >
                          {product.available ? <Eye size={15} /> : <EyeOff size={15} />}
                        </button>
                        <button onClick={() => deleteProduct(product.id)} className="rounded-full bg-rose-50 p-2 text-rose-600" aria-label="Delete product">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-black text-ink">Product editor</h2>
                <button onClick={saveProduct} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-black text-ink">
                  <Save size={17} /> Save
                </button>
              </div>
              <div className="grid gap-4">
                <input value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value, slug: slugify(event.target.value) })} className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none" placeholder="Product title" />
                <textarea value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} className="min-h-28 rounded-xl border border-slate-200 p-4 font-medium outline-none" placeholder="Product description" />
                <div className="grid gap-4 md:grid-cols-2">
                  <select value={draft.category} onChange={(event) => setDraft({ ...draft, category: event.target.value as Product['category'] })} className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none">
                    {categories.map((category) => <option key={category}>{category}</option>)}
                  </select>
                  <input type="number" value={draft.basePrice} onChange={(event) => setDraft({ ...draft, basePrice: Number(event.target.value) })} className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none" placeholder="Base price" />
                </div>
                <input value={draft.turnaround} onChange={(event) => setDraft({ ...draft, turnaround: event.target.value })} className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none" placeholder="Turnaround" />
                <input value={draft.colors.join(', ')} onChange={(event) => setDraft({ ...draft, colors: event.target.value.split(',').map((item) => item.trim()).filter(Boolean) })} className="h-12 rounded-xl border border-slate-200 px-4 font-bold outline-none" placeholder="Colors / finishes comma separated" />
                <div className="rounded-2xl bg-warm p-4">
                  <p className="mb-3 font-black text-ink">Variant prices</p>
                  <div className="grid gap-3">
                    {draft.sizes.map((entry, index) => (
                      <div key={index} className="grid grid-cols-[1fr_120px_44px] gap-2">
                        <input value={entry.label} onChange={(event) => setDraft({ ...draft, sizes: draft.sizes.map((size, sizeIndex) => (sizeIndex === index ? { ...size, label: event.target.value } : size)) })} className="h-11 rounded-xl border border-slate-200 px-3 font-bold outline-none" />
                        <input type="number" value={entry.price} onChange={(event) => setDraft({ ...draft, sizes: draft.sizes.map((size, sizeIndex) => (sizeIndex === index ? { ...size, price: Number(event.target.value) } : size)) })} className="h-11 rounded-xl border border-slate-200 px-3 font-bold outline-none" />
                        <button onClick={() => setDraft({ ...draft, sizes: draft.sizes.filter((_, sizeIndex) => sizeIndex !== index) })} className="rounded-xl bg-white text-rose-500">
                          <Trash2 size={16} className="mx-auto" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setDraft({ ...draft, sizes: [...draft.sizes, { label: 'New option', price: draft.basePrice }] })} className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-black text-ink">
                    Add variant
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-100 px-4 py-3 font-black text-ink">
                    <ImagePlus size={18} /> Upload images
                    <input type="file" multiple accept="image/*" onChange={uploadImages} className="hidden" />
                  </label>
                  <label className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 font-black">
                    <input type="checkbox" checked={draft.available} onChange={(event) => setDraft({ ...draft, available: event.target.checked })} /> Visible
                  </label>
                  <label className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 font-black">
                    <input type="checkbox" checked={draft.featured} onChange={(event) => setDraft({ ...draft, featured: event.target.checked })} /> Featured
                  </label>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {draft.images.map((image, index) => (
                    <button key={`${image}-${index}`} onClick={() => setDraft({ ...draft, images: draft.images.filter((_, imageIndex) => imageIndex !== index) })} className="overflow-hidden rounded-xl border border-slate-200">
                      <img src={image} alt="" className="aspect-square object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-ink">Customer inquiries / orders</h2>
            <div className="mt-4 grid gap-3">
              {inquiries.length === 0 ? (
                <p className="text-slate-600">No stored inquiries yet. WhatsApp checkout opens directly in WhatsApp for now.</p>
              ) : (
                inquiries.map((inquiry) => (
                  <div key={inquiry.id} className="rounded-xl bg-warm p-4">
                    <p className="font-black">{inquiry.customerName} · {inquiry.phone}</p>
                    <p className="mt-1 text-sm text-slate-600">{inquiry.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
