import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scale: 0.98,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">
              The <span className="text-red-600">Evolution</span>
            </h2>
            <div className="h-1.5 w-24 bg-red-600 mt-4"></div>
          </div>
          <p className="text-zinc-500 text-lg italic font-medium uppercase tracking-widest">
            Road to Professionalism
          </p>
        </div>

        {/* Split Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl select-none"
        >
          {/* Destra: Formula (2025) - COLORI ORIGINALI */}
          <div className="absolute inset-0">
            <img
              src="/img/fotomisanointervista.webp"
              alt="Formula Oggi"
              className="w-full h-full object-cover" // Rimosso grayscale
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            <div className="absolute bottom-10 right-10 flex flex-col items-end">
              <span className="text-red-600 font-black italic text-4xl md:text-6xl tracking-tighter leading-none">2025</span>
              <span className="text-white font-bold uppercase tracking-widest text-sm bg-black/60 backdrop-blur-md px-4 py-1 mt-2 border border-white/10">Formula</span>
            </div>
          </div>

          {/* Sinistra: Karting (2023) */}
          <div
            className="absolute inset-0 border-r-2 border-red-600 z-10 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="/img/fotomisano.webp"
              alt="Karting"
              className="absolute inset-0 object-cover max-w-none" 
              style={{ width: `${containerRef.current ? containerRef.current.offsetWidth : '100%'}px` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            <div className="absolute bottom-10 left-10 flex flex-col items-start">
              <span className="text-white font-black italic text-4xl md:text-6xl tracking-tighter leading-none">2023</span>
              <span className="text-white font-bold uppercase tracking-widest text-sm bg-red-600 px-4 py-1 mt-2">Karting</span>
            </div>
          </div>

          {/* Handle Slider */}
          <div
            ref={handleRef} 
            className="absolute top-0 bottom-0 w-1 bg-red-600 cursor-ew-resize z-30 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full border-2 border-red-600 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-red-600"></div>
                <div className="w-1 h-4 bg-white"></div>
                <div className="w-1 h-4 bg-red-600"></div>
              </div>
            </div>
          </div>

          {/* Badge DNA - Personalizzabile col tuo vero logo */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 pointer-events-none z-20">
            <div className="bg-black/80 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-800">
              <span className="text-white font-black italic uppercase tracking-tighter text-xl">
                Riccardo <span className="text-red-600">Orlando</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { label: "Ore in pista", val: "1200+" },
            { label: "Titoli Regionali", val: "3" },
            { label: "Obiettivo", val: "F1" }
          ].map((s, i) => (
            <div key={i} className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800 text-center hover:border-red-600/30 transition-colors">
              <div className="text-4xl font-black italic text-white mb-1">{s.val}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;