import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; 

// IMPORTANTE: Assicurati che il CSS sia nel main o qui
// import '@splidejs/react-splide/css';

const PARTNERS = [
  { name: 'Red Bull Racing' },
  { name: 'Ferrari' },
  { name: 'Mercedes-AMG' },
  { name: 'McLaren' },
  { name: 'Alpine F1' },
  { name: 'Pirelli' },
  { name: 'Honda' },
  { name: 'Aston Martin' },
];

const PartnerSlider = () => {
  const options = {
    type: 'loop',            
    drag: 'free',            
    autoWidth: true,         
    arrows: false,           
    pagination: false,       
    autoScroll: {
        speed: 0.8,           // Leggermente più veloce per dare dinamismo
        pauseOnHover: true,   
        pauseOnFocus: false,   
    },
  };

  return (
    <div className="w-full py-20 bg-black border-t border-zinc-900 overflow-hidden">
      {/* Header coerente con Stats e Profilo */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
              Official <span className="text-red-600">Partners</span>
            </h3>
            <div className="h-1 w-20 bg-red-600 mt-4"></div>
          </div>
      </div>
      
      {/* Container Slider */}
      <div className="relative cursor-grab active:cursor-grabbing">
        {/* Overlay sfumati ai bordi per l'effetto "fade" (aggiornati a Nero) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <Splide 
            options={options} 
            extensions={{ AutoScroll }} 
            aria-label="Partner Logos Slider"
        >
          {PARTNERS.map((partner, index) => (
            <SplideSlide key={index}>
              <div className="px-8 flex items-center justify-center">
                <div 
                  className="h-24 px-10 flex items-center justify-center bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-red-600/50 hover:bg-zinc-900/60 transition-all duration-500 group"
                  style={{ minWidth: '220px' }}
                >
                  <span className="text-xl font-black italic uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors duration-500">
                    {partner.name}
                  </span>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
        
      {/* Sottotitolo Minimal */}
      <div className="text-center mt-8">
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.4em] opacity-50">
          Driven by excellence
        </p>
      </div>
    </div>
  );
};

export default PartnerSlider;