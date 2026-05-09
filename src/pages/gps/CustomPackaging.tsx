import React from 'react';
import { Link } from 'react-router-dom';
import { GPSHeader, GPSFooter } from '../../components/GPSLayout';
import { Reveal } from '../../components/Reveal';
import SEO from '../../components/SEO';
import { MessageCircle, ArrowRight, Sparkles, Gift, Package, CheckCircle2 } from 'lucide-react';
import { HeroSlideshow } from '../../components/HeroSlideshow';

const GPSCustom = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Custom Branded Packaging"
        description="Create custom branded packaging with GhanaPack, including printed paper bags, logo stickers, label placement guidance, and packaging advice for shops, startups, weddings, funerals, and events in Ghana."
        canonical="/custom-packaging"
        ogImage="/images/IMG_0503.jpeg"
        ogImageAlt="Custom branded paper bags displayed for GhanaPack packaging clients"
      />
      <GPSHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-gps-black/5 relative overflow-hidden">
        <HeroSlideshow 
          images={[
            "/images/unboxing-showcase.png",
            "/images/IMG_0502.jpeg",
            "/images/luxury-bags.png"
          ]} 
          opacity={0.15}
          grayscale={false}
          overlayColor="rgba(255, 255, 255, 0.85)"
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Reveal y={20}>
            <div className="inline-block border border-gps-orange/20 bg-gps-orange/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-gps-orange rounded-full">
              Branding & Customization
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
              CUSTOM <br /> <span className="text-gps-orange">PACKAGING.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.5}>
            <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              Turn plain packaging into a stronger customer experience with stickers, branding support, and practical packaging advice.
            </p>
          </Reveal>
          
          {/* 3D Showcase Placeholder Area */}
          <Reveal delay={0.7} y={0}>
            <div className="max-w-5xl mx-auto aspect-video bg-gps-gray relative overflow-hidden group shadow-2xl">
              {/* 
                REPLACE IMAGE: 
                This is a placeholder for a branded packaging showcase.
                Replace with a high-quality photo of your branded boxes or bags.
                Recommended: 1200x800px.
              */}
              <img 
                src="/images/unboxing-showcase.png" 
                alt="Custom Branded Packaging unboxing experience for Ghanaian startups" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gps-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-24 h-24 border-4 border-gps-orange rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Sparkles size={40} className="text-gps-orange" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">Interactive Showcase</h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-gps-orange mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Branding Support */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <Reveal>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-none">
                  BRANDING <br /> <span className="text-gps-orange">SUPPORT.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-gray-500 leading-relaxed mb-12 font-medium">
                  We help you make smart decisions about how your logo, colors, and labels should appear on your packaging. The goal is simple: make your product look trustworthy and easy to remember.
                </p>
              </Reveal>
              
              <div className="space-y-8">
                {[
                  { t: 'Custom Branded Stickers', d: 'Add your logo to any box, bag, or bottle instantly.', i: <CheckCircle2 className="text-gps-orange" /> },
                  { t: 'Logo Placement Guidance', d: 'We advise on the best position for maximum brand visibility.', i: <CheckCircle2 className="text-gps-orange" /> },
                  { t: 'Packaging Format Advice', d: 'Choosing the right material that suits your product and budget.', i: <CheckCircle2 className="text-gps-orange" /> }
                ].map((item, i) => (
                  <Reveal key={i} delay={0.4 + (i * 0.1)}>
                    <div className="flex gap-6 items-start group">
                      <div className="mt-1 group-hover:scale-125 transition-transform duration-300">{item.i}</div>
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-lg mb-1">{item.t}</h4>
                        <p className="text-gray-500 font-medium">{item.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { img: "/images/luxury-bags.png", alt: "Custom branded luxury boutique paper bags with logo" },
                { img: "/images/IMG_0503.jpeg", alt: "Wide display of custom branded paper bags" },
                { img: "/images/paper-bags.png", alt: "Eco-friendly branded kraft paper bags for retail" },
                { img: "/images/food-packaging.png", alt: "Custom printed disposable food containers for catering" }
              ].map((item, i) => (
                <Reveal key={i} delay={0.2 * i} y={20}>
                  <div className="aspect-square bg-gps-gray overflow-hidden card-hover relative group">
                    <img src={item.img} alt={item.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gps-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gps-gray/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">THE <span className="text-gps-orange">PROCESS.</span></h2>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">How we bring your brand to life</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gps-black/5 -z-10" />
            {[
              { step: "01", title: "Consult", desc: "We discuss your product and branding needs." },
              { step: "02", title: "Design", desc: "We help finalize your logo and label placement." },
              { step: "03", title: "Sample", desc: "We provide a sample for your approval." },
              { step: "04", title: "Produce", desc: "Bulk production and delivery to your doorstep." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="bg-white p-10 border border-gps-black/5 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="text-5xl font-black text-gps-orange/20 group-hover:text-gps-orange transition-colors mb-8">{item.step}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it Helps */}
      <section className="section-padding bg-gps-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-20 text-center">
              WHY <span className="text-gps-orange">CUSTOMIZE?</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: 'Creates Recognition', d: 'Consistent packaging helps customers remember where they bought from.', i: <Sparkles size={40} /> },
              { t: 'Builds Trust', d: 'Professional packaging makes even a small brand feel more established.', i: <Gift size={40} /> },
              { t: 'Encourages Repeat Sales', d: 'A better unboxing experience keeps your product in the customer\'s mind.', i: <Package size={40} /> }
            ].map((item, i) => (
              <Reveal key={i} delay={0.2 * i}>
                <div className="p-12 border border-white/10 hover:border-gps-orange transition-all duration-500 group h-full">
                  <div className="w-20 h-20 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-gps-orange group-hover:text-white transition-colors duration-500">
                    {item.i}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6">{item.t}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center bg-gps-gray">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 leading-none">
              READY TO <br /> <span className="text-gps-orange">STAND OUT?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://wa.me/233540645292" className="btn-primary flex items-center gap-3">
                WhatsApp Us <MessageCircle size={20} />
              </a>
              <Link to="/contact" className="btn-outline">
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <GPSFooter />
    </div>
  );
};

export default GPSCustom;
