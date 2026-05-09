import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GPSHeader, GPSFooter } from '../../components/GPSLayout';
import { Reveal } from '../../components/Reveal';
import Hero3D from '../../components/Hero3D';
import SEO from '../../components/SEO';
import { MessageCircle, ArrowRight, CheckCircle2, Package, Truck, ShieldCheck, Zap, Users, Heart, PartyPopper, Building2, UtensilsCrossed, Rocket, Plus, Minus } from 'lucide-react';
import { HeroSlideshow } from '../../components/HeroSlideshow';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gps-black/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left group"
      >
        <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-gps-orange transition-colors">{question}</h4>
        <div className={`w-8 h-8 rounded-full border border-gps-black/10 flex items-center justify-center transition-all ${isOpen ? 'bg-gps-orange border-gps-orange text-white rotate-180' : ''}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-500 font-medium leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GPSHome = () => {
  const heroImages = [
    "/images/honey-jars.png",
    "/images/luxury-bags.png",
    "/images/food-packaging.png",
    "/images/paper-bags.png",
    "/images/plastic-packaging.png",
    "/images/IMG_0502.jpeg"
  ];

  const heroTitles = [
    "PACKAGING THAT FITS YOUR BUSINESS.",
    "LUXURY BOUTIQUE BAGS.",
    "FOOD PACKS & PIZZA BOXES.",
    "PHARMACY & HOSPITAL BAGS.",
    "DURABLE PLASTIC SOLUTIONS.",
    "WE HELP YOUR PRODUCT SELL."
  ];

  const heroDescriptions = [
    "Affordable packaging solutions for businesses in Kumasi. We supply food packs, paper bags, and bottles Ghana-wide.",
    "Elevate your brand with premium retail packaging. Perfect for boutique shops, gifts, and high-end presentation.",
    "Durable takeaway boxes, pizza boxes, and disposable plates for restaurants, funerals, weddings, and events.",
    "From pharmacy bags to hospital packaging, we provide eco-friendly paper solutions for every professional need.",
    "Reliable bottles and containers for industrial and domestic use. Bulk supplies available for Kumasi businesses.",
    "Stand out with custom branded stickers and professional packaging advice that makes every order look ready to sell."
  ];

  const services = [
    { 
      title: "Food Packaging", 
      image: "/images/food-packaging.png",
      desc: "Takeaway packs, disposable plates, and cutlery for restaurants and vendors.",
      alt: "Professional food packaging supplies in Ghana including takeaway boxes and disposable plates"
    },
    { 
      title: "Paper Bags", 
      image: "/images/paper-bags.png",
      desc: "Eco-friendly kraft bags for retail shops and boutique brands.",
      alt: "Eco-friendly kraft paper bags for retail and boutique shops in Kumasi"
    },
    { 
      title: "Plastic Packaging", 
      image: "/images/plastic-packaging.png",
      desc: "Durable plastic containers and bottles for liquids and dry goods.",
      alt: "Durable plastic packaging containers and bottles for Ghanaian businesses"
    },
    { 
      title: "Custom Branded", 
      image: "/images/IMG_0503.jpeg",
      desc: "Make your brand stand out with custom stickers and logo placement.",
      alt: "Custom branded packaging with logo stickers for startups in Ghana"
    }
  ];

  const whoWeServe = [
    { icon: <Rocket size={32} />, title: "Startups", desc: "Affordable packaging for new food brands and online sellers." },
    { icon: <UtensilsCrossed size={32} />, title: "Restaurants", desc: "Daily supply for takeaway orders and catering services." },
    { icon: <Heart size={32} />, title: "Funerals", desc: "Bulk disposables and food packs for family gatherings." },
    { icon: <PartyPopper size={32} />, title: "Weddings", desc: "Clean packaging for favors, drinks, and takeaway meals." },
    { icon: <Users size={32} />, title: "Parties", desc: "Party packs and containers for birthdays and celebrations." },
    { icon: <Building2 size={32} />, title: "Corporate", desc: "Bulk supplies for conferences and community events." }
  ];

  const faqs = [
    { q: "Do you supply packaging in Kumasi?", a: "Yes. GhanaPack Packaging Solutions is based in Kumasi and supplies affordable packaging for startups, food vendors, restaurants, caterers, shops, and events." },
    { q: "Do you serve customers outside Kumasi?", a: "Yes. We focus strongly on Kumasi, but we also support customers across Ghana depending on the product, quantity, and delivery arrangement." },
    { q: "Can I order for funerals and weddings?", a: "Absolutely. We supply food packs, disposable plates, cutlery, cups, and containers for funerals, weddings, birthdays, and church programs." },
    { q: "Do you work with small startups?", a: "Yes. We are built for small businesses and home food brands that need professional packaging without high costs." },
    { q: "Can you help with branded packaging?", a: "Yes. We support branded packaging with sticker ideas, logo placement guidance, and options that help your product look ready to sell." },
    { q: "How do I request prices?", a: "Send your product type, quantity, and location to us on WhatsApp. We'll provide a quick quote for pricing and availability." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="GhanaPack Packaging Solutions"
        description="GhanaPack Packaging Solutions supplies affordable food packs, paper bags, bottles, jars, disposables, and custom branded packaging in Kumasi with delivery across Ghana."
        canonical="/"
        ogImage="/images/IMG_0502.jpeg"
        ogImageAlt="Wide display of custom GhanaPack paper bags and branded packaging samples"
      />
      <GPSHeader />

      {/* Hero Section */}
      <section className="relative min-h-[980px] sm:min-h-[900px] lg:min-h-screen flex items-center overflow-hidden">
        <HeroSlideshow 
          images={heroImages} 
          titles={heroTitles}
          descriptions={heroDescriptions}
          eyebrow="Packaging in Kumasi & Ghana-wide"
          actions={
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <a href="https://wa.me/233540645292" className="btn-primary flex items-center justify-center gap-3 text-center">
                Order on WhatsApp <MessageCircle size={20} />
              </a>
              <Link to="/products" className="btn-outline inline-flex items-center justify-center text-center">
                View Products
              </Link>
            </div>
          }
          opacity={0.6} 
          grayscale={false}
          overlayColor="rgba(255, 255, 255, 0.3)"
        />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full relative z-10 pointer-events-none">
          <div className="hidden lg:block" />
          <div className="relative hidden lg:block h-[700px] xl:h-[800px] w-full">
            <Reveal delay={0.4} y={0} width="100%">
              <div className="w-full h-full relative z-10">
                <Hero3D />
              </div>
            </Reveal>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-1/4 right-0 bg-white p-6 shadow-2xl border border-black/5 hidden md:block"
            >
              <div className="text-3xl font-black text-gps-orange">500+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Clients Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Strip */}
      <section className="py-12 border-y border-gps-black/5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 text-center mb-8">Trusted By Businesses Across Ghana</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            {/* Placeholder Logos */}
            <div className="text-2xl font-black tracking-tighter">FOODHUB</div>
            <div className="text-2xl font-black tracking-tighter">GLAMOUR</div>
            <div className="text-2xl font-black tracking-tighter">K-TOWN</div>
            <div className="text-2xl font-black tracking-tighter">STARTUP</div>
            <div className="text-2xl font-black tracking-tighter">EVENTPRO</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-gps-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Packaging <br /> <span className="text-gps-orange">Solutions.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-gray-400 max-w-md text-lg font-medium">
                Choose practical packaging supplies for daily business, bulk event needs, or a branded look.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="group relative aspect-[3/4] overflow-hidden bg-white/5 card-hover">
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gps-black via-gps-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                    <h3 className="text-lg md:text-2xl font-black mb-2 md:mb-4 uppercase tracking-tight">{service.title}</h3>
                    <p className="text-[10px] md:text-sm text-gray-400 mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                      {service.desc}
                    </p>
                    <button className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gps-orange group-hover:translate-x-2 transition-transform">
                      Explore <ArrowRight size={12} className="md:w-[14px] md:h-[14px]" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-gps-gray/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Who We <span className="text-gps-orange">Serve.</span></h2>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Packaging for every occasion in Ghana</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoWeServe.map((item, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="bg-white p-10 border border-gps-black/5 card-hover group">
                  <div className="w-16 h-16 bg-gps-gray flex items-center justify-center mb-8 group-hover:bg-gps-orange group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <Reveal y={0}>
                <div className="aspect-[4/3] bg-gps-gray relative overflow-hidden">
                  <img 
                    src="/images/IMG_0502.jpeg" 
                    alt="Wide display of custom paper bags supplied by GhanaPack Packaging Solutions" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/20" />
                </div>
              </Reveal>
              <div className="absolute -bottom-12 -right-12 bg-gps-orange p-12 hidden md:block shadow-2xl">
                <Zap size={48} className="text-white mb-4" />
                <div className="text-white font-black uppercase tracking-widest text-sm">Fast <br /> Supply</div>
              </div>
            </div>

            <div>
              <Reveal>
                <h2 className="text-5xl md:text-7xl font-black mb-12 leading-none">
                  RELIABLE SUPPLY <br /> FOR <span className="text-gps-orange">GHANA.</span>
                </h2>
              </Reveal>
              
              <div className="space-y-12">
                {[
                  { t: 'Affordable Pricing', d: 'Get packaging that looks professional without putting pressure on your margins.', i: <Package className="text-gps-orange" /> },
                  { t: 'Fast Supply', d: 'Source the essentials your team needs to serve customers and keep orders moving.', i: <Truck className="text-gps-orange" /> },
                  { t: 'Reliable Service', d: 'Work with a partner that understands daily business demands in Kumasi.', i: <ShieldCheck className="text-gps-orange" /> }
                ].map((item, i) => (
                  <Reveal key={i} delay={0.2 * i}>
                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-gps-gray flex items-center justify-center shrink-0 group-hover:bg-gps-orange group-hover:text-white transition-colors duration-500">
                        {item.i}
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item.t}</h4>
                        <p className="text-gray-500 leading-relaxed font-medium">{item.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section-padding bg-gps-black text-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Simple <span className="text-gps-orange">Ordering.</span></h2>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Get your packaging in 3 easy steps</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Choose Product", desc: "Browse our catalog and pick the packaging that fits your business or event needs." },
              { step: "02", title: "WhatsApp Us", desc: "Send us your requirements, quantity, and location for a quick quote and MoMo payment details." },
              { step: "03", title: "Delivery", desc: "Once confirmed, we process your order and deliver via standard dispatch or private ride (Bolt/Uber)." }
            ].map((item, i) => (
              <Reveal key={i} delay={0.2 * i}>
                <div className="relative p-12 border border-white/10 card-hover h-full group">
                  <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 select-none group-hover:text-gps-orange/10 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6 relative z-10">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium relative z-10">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">FAQ<span className="text-gps-orange">.</span></h2>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Common questions about our services</p>
            </div>
          </Reveal>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <FAQItem question={faq.q} answer={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gps-orange text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 leading-none">
              READY TO <br /> <span className="text-gps-black">STAND OUT?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-2xl mb-16 font-medium text-white/90">
              Join 500+ businesses in Ghana using GhanaPack for their daily packaging needs.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://wa.me/233540645292" className="bg-gps-black text-white px-12 py-6 text-lg font-black uppercase tracking-widest hover:bg-white hover:text-gps-black transition-all duration-300 shadow-2xl">
                WhatsApp Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Trusted by <br /> <span className="text-gps-orange">Startups.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-12">
                {[
                  { name: "Ama Serwaa", role: "Restaurant Owner", quote: "GhanaPack changed how we serve our customers. The branded stickers made our takeaway packs look so professional!" },
                  { name: "Kofi Mensah", role: "Startup Founder", quote: "Fastest supply in Kumasi. I never have to worry about running out of paper bags for my shop." }
                ].map((t, i) => (
                  <div key={i} className="border-l-4 border-gps-orange pl-8">
                    <p className="text-xl font-medium italic text-gray-600 mb-4">"{t.quote}"</p>
                    <div className="font-black uppercase tracking-widest text-sm">{t.name}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t.role}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GPSFooter />
    </div>
  );
};

export default GPSHome;
