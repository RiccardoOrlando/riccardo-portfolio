// Versione corretta dei due componenti
// - RIMOSSA ogni chiamata a ScrollTrigger.getAll().forEach(... kill())
// - AGGIUNTO gsap.context() per isolare le animazioni
// - Draggable disattivato (come nel tuo codice), ma senza conflitti
// - ScrollTrigger e animazioni ora non si cancellano a vicenda


import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// -----------------------------------------------------
// COMPONENTE 1 — SplitScreen
// -----------------------------------------------------
const SplitScreen = () => {
const [sliderPosition, setSliderPosition] = useState(50);
const [isDragging, setIsDragging] = useState(false);
const containerRef = useRef(null);
const handleRef = useRef(null);


const handleMouseDown = (e) => {
if (handleRef.current && handleRef.current.contains(e.target)) {
setIsDragging(true);
}
};


const handleMouseUp = () => setIsDragging(false);


const handlePointerMove = (e) => {
if (!isDragging || !containerRef.current) return;


const clientX = e.touches ? e.touches[0].clientX : e.clientX;
const rect = containerRef.current.getBoundingClientRect();
const x = clientX - rect.left;
const percentage = (x / rect.width) * 100;


setSliderPosition(Math.max(0, Math.min(100, percentage)));
};


useEffect(() => {
if (isDragging) {
document.addEventListener('mousemove', handlePointerMove);
document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('touchmove', handlePointerMove);
document.addEventListener('touchend', handleMouseUp);
}


return () => {
document.removeEventListener('mousemove', handlePointerMove);
document.removeEventListener('mouseup', handleMouseUp);
document.removeEventListener('touchmove', handlePointerMove);
document.removeEventListener('touchend', handleMouseUp);
};
}, [isDragging]);


// Animazione GSAP corretta con context()
useEffect(() => {
const ctx = gsap.context(() => {
gsap.from(containerRef.current, {
scale: 0.9,
opacity: 0,
duration: 1,
ease: 'power2.out',
scrollTrigger: {
trigger: containerRef.current,
start: 'top 70%',
toggleActions: 'play none none none'
}
});
});


return () => ctx.revert();
}, []);

  return (
    <div className="w-full py-16 bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Il Mio Percorso</h3>
          <p className="text-gray-400 text-lg">Trascina lo slider per vedere l'evoluzione</p>
        </div>

        <div
          ref={containerRef}
          className="split-container relative w-full h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl select-none"
        >
          {/* Immagine Destra (F4) - Copre l'intero spazio e definisce la scala */}
          <div className="absolute inset-0">
            <img
              src="/img/fotomisanointervista.webp"
              alt="Formula 4 Oggi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 right-8 bg-red-600 px-6 py-3 rounded-full">
              <span className="text-white font-bold text-xl">2024 - Formula 4</span>
            </div>
          </div>

          {/* Immagine Sinistra (Karting) - Adesso a scala unificata */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* L'immagine usa `absolute inset-0` e `object-cover` per riempire il contenitore genitore (split-container)
                e la larghezza esatta impostata via style.
                L'uso di `containerRef.current.offsetWidth` è necessario per avere la larghezza in pixel e 
                sincronizzarla con l'immagine di destra, che usa w-full (del genitore).
                Siccome React potrebbe non avere containerRef subito, usiamo '100%' come fallback (per il primo render).
             */}
            <img
              src="/img/fotomisano.webp"
              alt="Karting Inizio"
              className="absolute inset-0 object-cover max-w-none" 
              style={{ width: `${containerRef.current ? containerRef.current.offsetWidth : '100%'}px` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 bg-blue-600 px-6 py-3 rounded-full">
              <span className="text-white font-bold text-xl">2017 - Karting</span>
            </div>
          </div>

          {/* Slider */}
          <div
            ref={handleRef} 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-800">
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-gray-800 rounded"></div>
                <div className="w-1 h-6 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>

          {/* Testo Centrale */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
            <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white/20">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">8 Anni</div>
                <div className="text-lg md:text-xl text-gray-300">di crescita continua</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bottom */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
          <div className="text-center bg-gray-800 rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">1200+</div>
            <div className="text-xs md:text-sm text-gray-400">Ore in pista</div>
          </div>
          <div className="text-center bg-gray-800 rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">3</div>
            <div className="text-xs md:text-sm text-gray-400">Titoli Regionali</div>
          </div>
          <div className="text-center bg-gray-800 rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">1</div>
            <div className="text-xs md:text-sm text-gray-400">Obiettivo: F1</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-linear-to-r from-red-600 to-red-500 rounded-2xl p-8 shadow-2xl max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              "Non aspetto la vittoria. Me la prendo."
            </h3>
            <p className="text-red-100 text-base md:text-lg mb-6">
              Pilota italiano che unisce aggressività e precisione in pista
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                Contattami
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all shadow-lg">
                Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;