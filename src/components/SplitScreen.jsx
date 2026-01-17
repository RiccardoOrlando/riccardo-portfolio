import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitScreen = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleStart = (e) => {
    setIsDragging(true);
  };

  const handleEnd = () => setIsDragging(false);

  const handleMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
      document.body.style.cursor = 'ew-resize';
    } else {
      document.body.style.cursor = 'default';
    }
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <section className="relative z-0 w-full py-16 md:py-24 bg-black border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">
              The <span className="text-red-600">Evolution</span>
            </h2>
            <div className="h-1 md:h-1.5 w-16 md:w-24 bg-red-600 mt-4 shadow-[0_0_15px_rgba(220,38,38,0.3)]"></div>
          </div>
          <p className="relative z-10 text-zinc-500 text-sm md:text-lg italic font-bold uppercase tracking-widest border-l-2 border-red-600 pl-4">
            Road to Professionalism
          </p>
        </div>

        {/* Split Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[450px] md:h-[600px] md:w-[1200px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl select-none bg-zinc-900"
        >
          {/* Layer Destra (Base) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/img/fotomisanointervista.webp"
              alt="Formula Oggi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-end z-10">
              <span className="text-red-600 font-black italic text-4xl md:text-7xl tracking-tighter leading-none">2025</span>
              <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm bg-black/40 backdrop-blur-sm px-4 py-1 mt-2 border border-white/10">Formula 4</span>
            </div>
          </div>

          {/* Layer Sinistra (Overlay) */}
          <div
            className="absolute inset-0 z-20 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div style={{ width: containerWidth }} className="h-full relative">
              <img
                src="/img/fotomisano.webp"
                alt="Karting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col items-start z-10">
                <span className="text-white font-black italic text-4xl md:text-7xl tracking-tighter leading-none">2023</span>
                <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm bg-red-600 px-4 py-1 mt-2">Karting</span>
              </div>
            </div>
          </div>

          {/* AREA DI TRASCINAMENTO (Handle) */}
          <div
            className="absolute top-0 bottom-0 z-50 flex items-center justify-center"
            style={{ 
              left: `${sliderPosition}%`,
              width: '60px', 
              marginLeft: '-30px', 
              cursor: 'ew-resize'
            }}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            <div className="absolute top-0 bottom-0 w-[2px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
            
            {/* Cerchio richiesto */}
            <div className="relative w-12 h-12 bg-black rounded-full border-2 border-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] pointer-events-none">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-red-600"></div>
                <div className="w-1 h-4 bg-white"></div>
                <div className="w-1 h-4 bg-red-600"></div>
              </div>
            </div>
          </div>

          {/* Badge Centrale (Evolution History) */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 pointer-events-none z-30">
            <div className="bg-black/80 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-800 shadow-xl">
              <span className="text-white font-black italic uppercase tracking-tighter text-lg md:text-xl">
                Evolution <span className="text-red-600">History</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 relative z-10">
          {[
            { label: "Ore in pista", val: "1200+" },
            { label: "Titoli Regionali", val: "3" },
            { label: "Obiettivo", val: "F1" }
          ].map((s, i) => (
            <div key={i} className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 text-center hover:border-red-600/30 transition-all duration-500">
              <div className="text-4xl font-black italic text-white mb-1">{s.val}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplitScreen;