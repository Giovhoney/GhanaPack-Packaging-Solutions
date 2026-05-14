import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MessageCircle, Search, ShoppingBag } from 'lucide-react';
import { GPSHeader, GPSFooter } from '../../components/GPSLayout';
import { HeroSlideshow } from '../../components/HeroSlideshow';
import { Reveal } from '../../components/Reveal';
import SEO from '../../components/SEO';

type ProductImage = {
  src: string;
  label: string;
  alt: string;
};

type ProductItem = {
  name: string;
  price: string;
  description: string;
  images: ProductImage[];
};

type ProductCategory = {
  title: string;
  items: ProductItem[];
};

const img = (src: string, label: string, alt: string): ProductImage => ({ src, label, alt });

const productCategories: ProductCategory[] = [
  {
    title: 'Food Boxes & Takeaway Packs',
    items: [
      {
        name: 'Kraft Food Packs',
        price: 'Ask for quote',
        description: 'Brown kraft clamshell and fold-up packs for takeaway meals, events, and restaurant service.',
        images: [
          img('/images/food-packaging.png', 'Food packaging showcase', 'Eco-friendly takeaway food boxes for restaurants in Ghana'),
          img('/images/IMG_0488.jpeg', 'Kraft packs on display', 'Stacked brown kraft takeaway food packs on a shop display'),
          img('/images/IMG_0489.jpeg', 'Takeaway box sizes', 'Multiple sizes of kraft food boxes arranged on a counter'),
          img('/images/IMG_8792.jpeg', 'Rectangular kraft tray', 'Rectangular kraft tray for food service'),
          img('/images/IMG_8793.jpeg', 'Kraft trays and lids', 'Kraft food trays with lids and cup packaging behind them')
        ]
      },
      {
        name: 'Paper Bowls, Cups & Lids',
        price: 'Ask for quote',
        description: 'Soup bowls, paper cups, round lids, and mixed food-service disposables for high-volume service.',
        images: [
          img('/images/disposable-plates.png', 'Disposable plates set', 'High-quality disposable plates for events and catering in Kumasi'),
          img('/images/IMG_0491.jpeg', 'Bowls and paper cups', 'Paper bowls, lids, and cups arranged on a counter'),
          img('/images/IMG_0492.jpeg', 'Stacked paper bowls', 'Stacks of kraft bowls and white disposable bowls'),
          img('/images/IMG_0493.jpeg', 'Kraft bowl range', 'Kraft bowl options with white bowl stacks in the background'),
          img('/images/IMG_0494.jpeg', 'Bowls and food packs', 'Round bowls, lids, and rectangular food packs on display'),
          img('/images/IMG_0497.jpeg', 'Paper cups display', 'White paper cups and lids in multiple sizes'),
          img('/images/IMG_0498.jpeg', 'Cup size range', 'Paper cups in several heights and diameters'),
          img('/images/IMG_0507.jpeg', 'Food packs and cups', 'White food packs, cups, and lids on shelving')
        ]
      },
      {
        name: 'Clear Food Containers',
        price: 'Ask for quote',
        description: 'Clear deli cups, hinged containers, sauce cups, and plastic meal packs for ready-to-serve foods.',
        images: [
          img('/images/plasticfoodpack.jpeg', 'Catalog food containers', 'Clear and black plastic food containers with lids'),
          img('/images/IMG_0490.jpeg', 'Compostable packs and cups', 'Food packs, cups, and kraft bags on a shelf'),
          img('/images/IMG_0495.jpeg', 'Utensils and deli cups', 'Wrapped utensils, plates, and clear deli cups on a display'),
          img('/images/IMG_0496.jpeg', 'Translucent cups', 'Stacked translucent plastic cups with size notes'),
          img('/images/IMG_0499.jpeg', 'Clear sauce containers', 'Clear cups, lids, napkins, and small food containers'),
          img('/images/IMG_8794.jpeg', 'Compartment container', 'Clear compartment food container with hinged lid')
        ]
      }
    ]
  },
  {
    title: 'Paper Bags & Retail Carry Bags',
    items: [
      {
        name: 'Kraft Paper Bags',
        price: 'Ask for quote',
        description: 'Plain kraft paper bags for retail shops, food service, gifting, and delivery orders.',
        images: [
          img('/images/paper-bags.png', 'Kraft paper bag hero', 'Brown kraft paper bags for retail and boutique branding in Ghana'),
          img('/images/paperbags.jpeg', 'Plain kraft paper bags', 'Plain brown kraft paper bags in different sizes'),
          img('/images/luxury-bags.png', 'Luxury paper bag option', 'Premium boutique paper bags for retail packaging')
        ]
      },
      {
        name: 'Custom Branded Bags',
        price: 'Bulk quotes available',
        description: 'Printed paper bags and branded retail carry bags for boutiques, events, and growing brands.',
        images: [
          img('/images/IMG_0500.jpeg', 'Branded bag wall', 'Custom printed bags hanging on a display wall'),
          img('/images/IMG_0501.jpeg', 'Retail paper bag samples', 'Retail paper bag samples displayed on a grid wall'),
          img('/images/IMG_0502.jpeg', 'Large branded bag display', 'Assorted branded paper bags arranged on a shop display'),
          img('/images/IMG_0503.jpeg', 'Premium branded bags', 'Premium branded paper bags in white, kraft, and teal finishes'),
          img('/images/wovenbags.jpeg', 'Colored woven shopping bags', 'Reusable colorful woven shopping bags')
        ]
      }
    ]
  },
  {
    title: 'Custom Cartons & Branded Packaging',
    items: [
      {
        name: 'Custom Carton Samples',
        price: 'Ask for quote',
        description: 'Flat-fold cartons, sample box layouts, and branded packaging options for product launches.',
        images: [
          img('/images/IMG_0503.jpeg', 'Premium branded bags', 'Premium branded paper bags in white, kraft, and teal finishes'),
          img('/images/unboxing-showcase.png', 'Unboxing packaging set', 'Premium unboxing packaging display'),
          img('/images/IMG_0508.jpeg', 'Flat carton samples', 'Flat kraft carton samples mounted on a wall'),
          img('/images/IMG_0509.jpeg', 'Carton sample wall', 'Wall display of custom carton templates and sizes'),
          img('/images/IMG_0510.jpeg', 'Folded carton range', 'Assorted folded carton packaging samples')
        ]
      }
    ]
  },
  {
    title: 'Bottles & Jars',
    items: [
      {
        name: 'Juice & Sauce Bottles',
        price: 'Ask for quote',
        description: 'Clear bottles for juices, sauces, samples, and small-batch beverage brands.',
        images: [
          img('/images/plastic-packaging.png', 'Plastic bottle packaging', 'Clear plastic juice bottles for beverage startups in Ghana'),
          img('/images/smalltransbottles.jpeg', 'Small transparent bottles', 'Small clear bottles with black caps')
        ]
      },
      {
        name: 'Jars & Specialty Containers',
        price: 'Ask for quote',
        description: 'Jars and secure-lid containers for honey, spices, condiments, and shelf-ready foods.',
        images: [
          img('/images/honey-jars.png', 'Honey jar packaging', 'Glass honey jars with secure lids for food packaging'),
          img('/images/plastic-packaging.png', 'Container and jar range', 'Plastic jars and containers for retail use')
        ]
      }
    ]
  }
];

const extraGalleryImages: ProductImage[] = [
  img('/images/contact-hero.png', 'Customer support and packaging planning', 'Packaging consultation and support image')
];

const galleryImages = [
  ...productCategories.flatMap(category =>
    category.items.flatMap(item =>
      item.images.map(image => ({
        ...image,
        productName: item.name,
        category: category.title
      }))
    )
  ),
  ...extraGalleryImages.map(image => ({
    ...image,
    productName: 'Packaging Support',
    category: 'Service'
  }))
].filter((image, index, images) => images.findIndex(item => item.src === image.src) === index);

const heroImages = [
  '/images/IMG_0488.jpeg',
  '/images/IMG_0491.jpeg',
  '/images/IMG_0502.jpeg',
  '/images/IMG_0508.jpeg',
  '/images/plasticfoodpack.jpeg',
  '/images/smalltransbottles.jpeg'
];

const ProductCard = ({ item }: { item: ProductItem }) => {
  const [activeImage, setActiveImage] = React.useState(0);
  const galleryRef = React.useRef<HTMLDivElement>(null);
  const hasGallery = item.images.length > 1;

  const showImage = (nextIndex: number) => {
    const wrappedIndex = (nextIndex + item.images.length) % item.images.length;
    setActiveImage(wrappedIndex);
    galleryRef.current?.children[wrappedIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  const updateActiveFromScroll = () => {
    if (!galleryRef.current) return;
    const { clientWidth, scrollLeft } = galleryRef.current;
    if (!clientWidth) return;
    const nextImage = Math.max(0, Math.min(item.images.length - 1, Math.round(scrollLeft / clientWidth)));
    setActiveImage(nextImage);
  };

  return (
    <div className="group card-hover w-full min-w-0 bg-white border border-gps-black/5 p-2 md:p-4 h-full flex flex-col">
      <div className="aspect-square overflow-hidden bg-gps-gray mb-4 md:mb-8 relative">
        <div
          ref={galleryRef}
          onScroll={updateActiveFromScroll}
          className="h-full flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
          aria-label={`${item.name} product photos`}
        >
          {item.images.map(image => (
            <div key={image.src} className="min-w-full h-full snap-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gps-orange text-white px-2 py-1 md:px-4 md:py-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.14em] md:tracking-widest shadow-lg">
          {item.price}
        </div>

        <div className="absolute left-2 bottom-2 right-2 md:left-4 md:right-4 md:bottom-4 bg-white/95 px-3 py-2 shadow-lg">
          <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-gps-black line-clamp-1">
            {item.images[activeImage]?.label}
          </p>
        </div>

        {hasGallery && (
          <>
            <button
              type="button"
              onClick={() => showImage(activeImage - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 size-9 md:size-11 bg-white text-gps-black shadow-lg grid place-items-center hover:bg-gps-orange hover:text-white transition-colors"
              aria-label={`Previous photo for ${item.name}`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => showImage(activeImage + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-9 md:size-11 bg-white text-gps-black shadow-lg grid place-items-center hover:bg-gps-orange hover:text-white transition-colors"
              aria-label={`Next photo for ${item.name}`}
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-gps-black text-white px-2.5 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
              {activeImage + 1}/{item.images.length}
            </div>
          </>
        )}
      </div>

      {hasGallery && (
        <div className="flex gap-2 mb-5 overflow-x-auto hide-scrollbar" aria-label={`${item.name} thumbnails`}>
          {item.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => showImage(index)}
              className={`h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden border-2 transition-colors ${
                activeImage === index ? 'border-gps-orange' : 'border-transparent'
              }`}
              aria-label={`Show ${image.label}`}
            >
              <img src={image.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-sm md:text-2xl font-black uppercase tracking-tight mb-2 line-clamp-2">{item.name}</h3>
        <p className="text-[10px] md:text-sm text-gray-500 font-semibold leading-relaxed mb-4 md:mb-8">
          {item.description}
        </p>
      </div>

      <a
        href={`https://wa.me/233540645292?text=${encodeURIComponent(`I'm interested in ${item.name}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 md:py-4 border-2 border-gps-black font-black uppercase tracking-widest text-[8px] md:text-xs group-hover:bg-gps-black group-hover:text-white transition-all duration-300"
      >
        <span className="hidden md:inline">Order on WhatsApp</span>
        <span className="md:hidden">Order</span>
        <MessageCircle size={12} className="md:w-4 md:h-4" />
      </a>
    </div>
  );
};

const GPSProducts = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Product Catalog"
        description="Browse GhanaPack packaging products including kraft food boxes, paper bowls, disposable cups, clear food containers, custom paper bags, bottles, jars, and carton samples for Kumasi and Ghana-wide delivery."
        canonical="/products"
        ogImage="/images/IMG_0488.jpeg"
        ogImageAlt="Kraft takeaway food packs and packaging products available from GhanaPack"
      />
      <GPSHeader />

      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <HeroSlideshow
          images={heroImages}
          opacity={0.5}
          grayscale={false}
          overlayColor="rgba(255, 255, 255, 0.45)"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal y={20}>
            <div className="inline-block border border-gps-black/10 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-gps-black rounded-full shadow-sm">
              Our Catalog
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
              PACKAGING <br /> <span className="text-gps-orange">CATALOG.</span>
            </h1>
          </Reveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <Reveal delay={0.5}>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
                Browse real product photos from our shelves, sample walls, and catalog. Swipe each product card to compare available options.
              </p>
            </Reveal>

            <Reveal delay={0.6} x={20}>
              <div className="relative w-full md:w-96">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="SEARCH PRODUCTS..."
                  className="w-full bg-white border-2 border-gps-black/5 py-6 pl-16 pr-6 font-black uppercase tracking-widest text-xs focus:border-gps-orange outline-none transition-colors shadow-xl"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {productCategories.map((category, catIdx) => {
            const query = searchQuery.toLowerCase();
            const filteredItems = category.items.filter(item =>
              [item.name, item.description, category.title, ...item.images.map(image => image.label)]
                .join(' ')
                .toLowerCase()
                .includes(query)
            );

            if (filteredItems.length === 0 && searchQuery !== '') return null;

            return (
              <div key={category.title} className="mb-32 last:mb-0">
                <Reveal>
                  <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{category.title}</h2>
                    <div className="h-px bg-gps-black/10 flex-grow" />
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                  {filteredItems.map((item, itemIdx) => (
                    <Reveal key={item.name} delay={0.1 * itemIdx + catIdx * 0.03} width="100%">
                      <ProductCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-gps-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <ShoppingBag className="mx-auto mb-12 text-gps-orange" size={64} />
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-none tracking-tighter uppercase">
              Need Bulk <br /> <span className="text-gps-orange">Quantities?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="text-2xl mb-16 font-medium text-white/80">
              We offer special pricing for large orders, events, and long-term business partnerships.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <Link to="/contact" className="btn-primary inline-block">
              Request Bulk Quote
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <Reveal>
            <p className="text-gps-orange font-black uppercase tracking-[0.35em] text-xs mb-4">Product Image Library</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
              Swipe Every Product Photo.
            </h2>
            <p className="text-gray-500 max-w-2xl font-medium">
              Every uploaded image is named here so customers can browse the full range left or right.
            </p>
          </Reveal>
        </div>

        <div className="flex overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory px-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="min-w-[82vw] sm:min-w-[520px] lg:min-w-[650px] aspect-[4/3] snap-center relative overflow-hidden shadow-2xl bg-gps-gray"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gps-black via-gps-black/75 to-transparent p-5 md:p-8 text-white">
                <p className="text-[10px] md:text-xs text-gps-orange font-black uppercase tracking-[0.3em] mb-2">
                  {image.category}
                </p>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">
                  {image.productName}
                </h3>
                <p className="text-sm md:text-base text-white/80 font-semibold">{image.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GPSFooter />
    </div>
  );
};

export default GPSProducts;
