import React from 'react';
import { GPSHeader, GPSFooter } from '../../components/GPSLayout';
import { Reveal } from '../../components/Reveal';
import SEO from '../../components/SEO';
import { HeroSlideshow } from '../../components/HeroSlideshow';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const GPSContact = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact GhanaPack"
        description="Contact GhanaPack Packaging Solutions for packaging prices, bulk orders, custom branded paper bags, food packs, bottles, jars, and event packaging in Kumasi with Ghana-wide delivery options."
        canonical="/contact"
        ogImage="/images/contact-hero.png"
        ogImageAlt="GhanaPack contact and packaging support for customers in Kumasi and Ghana"
      />
      <GPSHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <HeroSlideshow 
          images={[
            "/images/contact-hero.png",
            "/images/food-packaging.png",
            "/images/paper-bags.png"
          ]} 
          opacity={0.15}
          grayscale={false}
          overlayColor="rgba(255, 255, 255, 0.85)"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal y={20}>
            <div className="inline-block border border-gps-black/10 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-gps-black rounded-full shadow-sm">
              Get in Touch
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
              LET'S <br /> <span className="text-gps-orange">TALK.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.5}>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
              Tell us what you need, your quantity, and whether you are ordering for a business, funeral, wedding, or event. We're here to help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding border-b border-gps-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          {/* Info Column */}
          <div className="space-y-16">
            <div>
              <Reveal>
                <h2 className="text-4xl font-black tracking-tighter uppercase mb-12">Contact Info</h2>
              </Reveal>
              
              <div className="grid gap-8">
                {[
                  { icon: <Phone className="text-gps-orange" />, title: 'Phone', detail: '+233 540645292', link: 'tel:+233540645292', sub: 'Available Mon-Sat, 8am - 6pm' },
                  { icon: <MessageCircle className="text-gps-orange" />, title: 'WhatsApp', detail: 'Message GhanaPack', link: 'https://wa.me/233540645292', sub: 'Fastest for quick questions' },
                  { icon: <Mail className="text-gps-orange" />, title: 'Email', detail: 'info@ghanapack.com', link: 'mailto:info@ghanapack.com', sub: 'For detailed project briefs' },
                  { icon: <MapPin className="text-gps-orange" />, title: 'Location', detail: 'Kumasi, Ghana', link: '#', sub: 'Serving Kumasi & Ghana-wide' }
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 * i}>
                    <a href={item.link} className="flex gap-8 group p-6 border border-gps-black/5 hover:border-gps-orange transition-all duration-500 card-hover bg-white">
                      <div className="w-16 h-16 bg-gps-gray flex items-center justify-center shrink-0 group-hover:bg-gps-orange group-hover:text-white transition-colors duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-widest text-[10px] text-gray-400 mb-1">{item.title}</h4>
                        <p className="text-2xl font-black uppercase tracking-tight group-hover:text-gps-orange transition-colors">{item.detail}</p>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{item.sub}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
            
            <Reveal delay={0.5}>
              <div className="bg-gps-black text-white p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Clock size={120} />
                </div>
                <h3 className="font-black uppercase tracking-widest text-xs text-gps-orange mb-6">Business Hours</h3>
                <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-2">Monday - Saturday</p>
                <p className="text-4xl font-black uppercase tracking-tight">8:00 AM - 6:00 PM</p>
                
                <div className="mt-12 pt-12 border-t border-white/10">
                  <h3 className="font-black uppercase tracking-widest text-xs text-gps-orange mb-6">Payment & Delivery</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Payment Methods</p>
                      <p className="text-lg font-black uppercase tracking-tight">MTN MoMo, Telecel Cash</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Delivery Options</p>
                      <p className="text-lg font-black uppercase tracking-tight">Standard Dispatch, Bolt/Uber</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Map Placeholder */}
            <Reveal delay={0.6}>
              <div className="aspect-video bg-gps-gray border border-gps-black/5 relative overflow-hidden group">
                {/* 
                  REPLACE IMAGE: 
                  Replace this with a screenshot of your location on Google Maps 
                  or embed a real Google Map iframe here.
                */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" 
                  alt="Kumasi Map" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-8 py-4 border-2 border-gps-black font-black uppercase tracking-widest text-xs shadow-2xl">
                    Find us in Kumasi
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <div className="relative">
            <Reveal delay={0.2}>
              <div className="bg-white border-2 border-gps-black p-10 md:p-16 shadow-[20px_20px_0px_0px_rgba(255,95,0,1)]">
                <h2 className="text-4xl font-black tracking-tighter uppercase mb-12">Request a Quote</h2>
                <form className="space-y-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Full Name</label>
                    <input type="text" className="w-full border-b-2 border-gps-black/10 py-4 focus:outline-none focus:border-gps-orange transition-colors bg-transparent font-bold text-lg" placeholder="Your Name" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Phone / WhatsApp</label>
                      <input type="tel" className="w-full border-b-2 border-gps-black/10 py-4 focus:outline-none focus:border-gps-orange transition-colors bg-transparent font-bold text-lg" placeholder="+233..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Business Name</label>
                      <input type="text" className="w-full border-b-2 border-gps-black/10 py-4 focus:outline-none focus:border-gps-orange transition-colors bg-transparent font-bold text-lg" placeholder="Optional" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Packaging Needed</label>
                    <div className="relative">
                      <select className="w-full border-b-2 border-gps-black/10 py-4 focus:outline-none focus:border-gps-orange transition-colors appearance-none bg-transparent font-bold text-lg cursor-pointer">
                        <option>Food Packaging</option>
                        <option>Paper Bags</option>
                        <option>Plastic Packaging</option>
                        <option>Custom Branded</option>
                        <option>Other / Bulk Event Order</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Send size={16} className="text-gps-orange rotate-45" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Details & Quantity</label>
                    <textarea rows={4} className="w-full border-b-2 border-gps-black/10 py-4 focus:outline-none focus:border-gps-orange transition-colors resize-none bg-transparent font-bold text-lg" placeholder="Tell us what you need..."></textarea>
                  </div>

                  <button className="w-full btn-primary py-8 text-xl flex items-center justify-center gap-4 group">
                    Send Request <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GPSFooter />
    </div>
  );
};

export default GPSContact;
