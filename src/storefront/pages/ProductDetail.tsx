import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ProductCard } from '../ProductCard';
import { useStore } from '../store';
import { whatsappUrl } from '../ui';

export const ProductDetail = () => {
  const { slug } = useParams();
  const { products, addToCart } = useStore();
  const product = products.find((entry) => entry.slug === slug);
  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState(product?.sizes[0]?.label || '');
  const [color, setColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setImageIndex(0);
    setSize(product?.sizes[0]?.label || '');
    setColor(product?.colors[0] || '');
    setQuantity(1);
  }, [product?.id]);

  const selectedVariant = product?.sizes.find((entry) => entry.label === size) || product?.sizes[0];
  const unitPrice = selectedVariant?.price || product?.basePrice || 0;
  const related = useMemo(
    () => products.filter((entry) => product && entry.category === product.category && entry.id !== product.id).slice(0, 3),
    [products, product],
  );

  if (!product) {
    return (
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 text-center">
          <h1 className="text-3xl font-black">Product not found</h1>
          <Link to="/products" className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 font-black text-white">
            Back to catalog
          </Link>
        </div>
      </section>
    );
  }

  const selectedImage = product.images[Math.min(imageIndex, product.images.length - 1)] || product.images[0];

  const orderMessage = [
    'Hello GhanaPack, I would like to order:',
    `Product: ${product.title}`,
    `Variant: ${size}`,
    `Color/Finish: ${color}`,
    `Quantity: ${quantity}`,
    'Please confirm current pricing for this item.',
  ].join('\n');

  return (
    <>
      <Helmet>
        <title>{product.title} | GhanaPack Store</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://ghanapack.com/products/${product.slug}`} />
      </Helmet>

      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex min-w-0 flex-wrap items-center gap-2 text-sm font-bold text-slate-500">
            <Link to="/" className="hover:text-brand">Home</Link>
            <ChevronRight size={15} />
            <Link to="/products" className="hover:text-brand">Products</Link>
            <ChevronRight size={15} />
            <span className="max-w-[220px] truncate text-ink sm:max-w-none">{product.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="aspect-square w-full cursor-zoom-in object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setImageIndex(index)}
                    className={`overflow-hidden rounded-2xl border-2 ${imageIndex === index ? 'border-brand' : 'border-transparent'}`}
                  >
                    <img src={image} alt="" className="aspect-square w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-brand">
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-black text-amber-500">
                  <Star size={16} fill="currentColor" /> {product.rating} ({product.reviews})
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-ink md:text-5xl">{product.title}</h1>
              <p className="mt-5 leading-8 text-slate-600">{product.description}</p>

              <div className="mt-8 rounded-2xl bg-warm p-5">
                <p className="text-sm font-black uppercase tracking-wide text-slate-500">Pricing</p>
                <p className="mt-1 text-4xl font-black text-ink">Request quote</p>
                <p className="mt-2 text-sm font-bold text-slate-500">Turnaround: {product.turnaround}</p>
              </div>

              <div className="mt-8">
                <p className="mb-3 font-black text-ink">Size / quantity option</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.sizes.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setSize(option.label)}
                      className={`rounded-2xl border px-4 py-4 text-left transition ${size === option.label ? 'border-brand bg-brand text-white' : 'border-slate-200 bg-white hover:border-brand'}`}
                    >
                      <span className="block font-black">{option.label}</span>
                      <span className={`text-sm ${size === option.label ? 'text-white/80' : 'text-slate-500'}`}>Pricing on request</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 font-black text-ink">Color / finish</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((option) => (
                    <button
                      key={option}
                      onClick={() => setColor(option)}
                      className={`rounded-full border px-4 py-2 text-sm font-black ${color === option ? 'border-ink bg-ink text-white' : 'border-slate-200 text-slate-700'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center rounded-full border border-slate-200">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4" aria-label="Decrease quantity">
                    <Minus size={17} />
                  </button>
                  <span className="w-10 text-center font-black">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-4" aria-label="Increase quantity">
                    <Plus size={17} />
                  </button>
                </div>
                <p className="font-black text-ink">Quote will be confirmed on WhatsApp</p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() =>
                    addToCart({
                      productId: product.id,
                      title: product.title,
                      slug: product.slug,
                      image: product.images[0],
                      size,
                      color,
                      quantity,
                      unitPrice,
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white transition hover:bg-brand"
                >
                  <ShoppingBag size={19} /> Add to cart
                </button>
                <a
                  href={whatsappUrl(orderMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-4 font-black text-ink transition hover:bg-ink hover:text-white"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-3xl font-black text-ink">Related products</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                {related.map((entry) => (
                  <ProductCard key={entry.id} product={entry} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
