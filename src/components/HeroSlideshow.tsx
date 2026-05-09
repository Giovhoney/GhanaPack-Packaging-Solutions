import React, { useState, useEffect } from 'react';

interface HeroSlideshowProps {
  images: string[];
  titles?: string[];
  descriptions?: string[];
  eyebrow?: string;
  actions?: React.ReactNode;
  interval?: number;
  opacity?: number;
  grayscale?: boolean;
  overlayColor?: string;
}

export const HeroSlideshow = ({ 
  images = [], 
  titles = [],
  descriptions = [],
  eyebrow,
  actions,
  interval = 5000, 
  opacity = 1, 
  grayscale = false,
  overlayColor = "rgba(255, 255, 255, 0.05)"
}: HeroSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {images.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
            transition: 'opacity 2s ease-in-out'
          }}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
            style={{ 
              opacity: opacity,
              filter: grayscale ? 'grayscale(100%)' : 'none',
            }}
          />
          
          {/* Text Content Overlay - Aligned with Home.tsx Grid */}
          {(titles[index] || descriptions[index]) && (
            <div className="absolute inset-0 z-20 px-6 pt-36 pb-12 md:pt-32 lg:pt-0 flex items-start lg:items-center">
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="max-w-[42rem]">
                    {eyebrow && (
                      <div className="inline-flex max-w-full items-center gap-2 border border-gps-black/10 px-4 py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em] sm:tracking-[0.3em] mb-6 bg-white shadow-sm">
                        <span className="w-2 h-2 bg-gps-orange rounded-full animate-pulse shrink-0" />
                        <span className="truncate">{eyebrow}</span>
                      </div>
                    )}
                    {titles[index] && (
                      <h2 
                        className="text-[clamp(2.75rem,10vw,5.25rem)] lg:text-[clamp(4.8rem,7vw,7.4rem)] font-black text-gps-black uppercase tracking-tight leading-[0.88] mb-6 transition-all duration-1000 max-w-full"
                        style={{ 
                          transform: index === currentIndex ? 'translateY(0)' : 'translateY(40px)',
                          opacity: index === currentIndex ? 1 : 0,
                          transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
                          transitionDelay: '0.8s'
                        }}
                      >
                        {titles[index].split(' ').map((word, i) => (
                          <span key={i} className={word.includes('SELLS') || word.includes('ORANGE') || word.includes('PREMIUM') || i % 3 === 2 ? 'text-gps-orange' : ''}>
                            {word}{' '}
                          </span>
                        ))}
                      </h2>
                    )}
                    {descriptions[index] && (
                      <p 
                        className="text-xl md:text-2xl text-gray-500 font-medium max-w-xl leading-relaxed transition-all duration-1000 mb-8 lg:mb-10"
                        style={{ 
                          transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                          opacity: index === currentIndex ? 1 : 0,
                          transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
                          transitionDelay: '1.2s'
                        }}
                      >
                        {descriptions[index]}
                      </p>
                    )}
                    {actions && (
                      <div 
                        className="transition-all duration-1000"
                        style={{ 
                          transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                          opacity: index === currentIndex ? 1 : 0,
                          transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
                          transitionDelay: '1.4s'
                        }}
                      >
                        {actions}
                      </div>
                    )}
                  </div>
                  {/* Empty right column to match Home.tsx grid */}
                  <div className="hidden lg:block" />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Minimal overlay for text contrast */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(to bottom, ${overlayColor}, rgba(255,255,255,0.2))`,
          zIndex: 2 
        }}
      />
    </div>
  );
};
