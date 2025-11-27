import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// 🟢 IMPORTA IL MODULO AutoScroll
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; 

// Assicurati che il CSS di Splide sia importato nel tuo file principale!

const PARTNERS = [
  { name: 'Red Bull Racing', color: 'bg-blue-600', text: 'text-white' },
  { name: 'Ferrari', color: 'bg-red-600', text: 'text-white' },
  { name: 'Mercedes-AMG', color: 'bg-gray-400', text: 'text-gray-900' },
  { name: 'McLaren', color: 'bg-orange-500', text: 'text-white' },
  { name: 'Alpine F1', color: 'bg-pink-500', text: 'text-white' },
  { name: 'Pirelli', color: 'bg-red-900', text: 'text-white' },
  { name: 'Honda', color: 'bg-red-700', text: 'text-white' },
  { name: 'Aston Martin', color: 'bg-green-600', text: 'text-white' },
];

const PartnerSlider = () => {

  // Opzioni di Splide con AutoScroll
  const options = {
    type: 'loop',            
    drag: 'free',            
    autoWidth: true,         
    arrows: false,           
    pagination: false,       
    
    // 🟢 NUOVA CONFIGURAZIONE AUTOSCROLL
    autoScroll: {
        speed: 0.5,           // Velocità di scorrimento (regola questo valore, 0.5 è medio)
        pauseOnHover: true,   // Si ferma quando il mouse è sopra
        pauseOnFocus: true,   // Si ferma quando è a fuoco (per accessibilità)
    },
  };

  return (
    <div className="w-full py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
          <h3 className="text-3xl font-bold text-white text-center">I Nostri Partner Ufficiali</h3>
      </div>
      
      {/* Implementazione Splide - Usa l'array dei moduli [AutoScroll] */}
      <div className="cursor-grab active:cursor-grabbing">
        <Splide 
            options={options} 
            extensions={{ AutoScroll }} // ⬅️ Attiva l'estensione qui
            aria-label="Partner Logos Slider"
        >
          {PARTNERS.map((partner, index) => (
            <SplideSlide key={index}>
              <div className="flex-shrink-0 w-[200px] h-[100px] p-4 flex items-center justify-center">
                <div 
                  className={`w-full h-full rounded-lg shadow-lg flex items-center justify-center border border-gray-700 ${partner.color}`}
                >
                  <span className={`text-lg font-bold ${partner.text}`}>
                    {partner.name}
                  </span>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
        
      {/* Sfumature laterali (Fade) */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none -mt-[100px]"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none -mt-[100px]"></div>
      </div>
    </div>
  );
};

export default PartnerSlider;