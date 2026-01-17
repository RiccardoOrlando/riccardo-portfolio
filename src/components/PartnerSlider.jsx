import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; 
import '@splidejs/react-splide/css';

const PARTNERS = [
  { 
    name: 'Technorace Competition', 
    logo: 'https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518257/logo_technorace_competition.png', 
    type: 'F4 Official Team',
    isInverted: false // Logo già visibile
  },
  { 
    name: 'GP Racing', 
    logo: 'https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518258/logo_gp_racing.png', 
    type: 'Karting Team',
    isInverted: false 
  },
  { 
    name: 'La Villetta', 
    logo: 'https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518256/logo_la_villetta.png', 
    type: 'Official Sponsor',
    isInverted: false 
  },
  { 
    name: 'Sparco', 
    logo: 'https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518257/sparco-1.png', 
    type: 'Racing Equipment',
    isInverted: true // QUESTO DIVENTERÀ BIANCO
  },
  { 
    name: 'Arai', 
    logo: 'https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518255/arai-helmet.png', 
    type: 'Safety Technology',
    isInverted: false 
  },
];

const PartnerSlider = () => {
  const options = {
    type: 'loop',
    drag: 'free',
    autoWidth: true,
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 0.8,
      pauseOnHover: true,
      pauseOnFocus: false,
    },
    breakpoints: {
      768: {
        autoScroll: { speed: 0.6 },
      }
    }
  };

  return (
    <div className="relative z-10 w-full py-16 md:py-24 bg-black border-t border-zinc-900 overflow-hidden">
      
      {/* Header Racing */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-white">
              Technical & <span className="text-red-600">Partners</span>
            </h3>
            <div className="flex items-center gap-2 mt-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <div className="h-1 w-2 bg-zinc-700"></div>
              <div className="h-1 w-2 bg-zinc-800"></div>
            </div>
          </div>
      </div>
      
      {/* Slider */}
      <div className="relative cursor-grab active:cursor-grabbing">
        {/* Sfumature laterali */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-black via-black/60 to-transparent z-20 pointer-events-none"></div>

        <Splide 
            options={options} 
            extensions={{ AutoScroll }} 
            aria-label="Partner Logos Slider"
        >
          {PARTNERS.map((partner, index) => (
            <SplideSlide key={index}>
              <div className="px-8 md:px-16 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center group" style={{ minWidth: '180px' }}>
                  
                  {/* Container Logo */}
                  <div className="h-16 md:h-20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className={`
                        h-full w-auto object-contain transition-all duration-500
                        opacity-100 brightness-110
                        ${partner.isInverted ? 'invert' : ''} 
                        group-hover:brightness-150 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
                      `}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Testo Partner */}
                  <div className="text-center">
                    <p className="text-white text-[10px] md:text-xs font-black italic uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {partner.name}
                    </p>
                    <p className="text-zinc-500 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] transition-colors group-hover:text-red-600">
                      {partner.type}
                    </p>
                  </div>

                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
        
      {/* Footer Minimal */}
      <div className="text-center mt-16">
        <p className="text-zinc-500 text-[9px] md:text-[11px] uppercase font-bold tracking-[0.5em] opacity-30 italic">
          Driven by excellence & passion
        </p>
      </div>
    </div>
  );
};

export default PartnerSlider;