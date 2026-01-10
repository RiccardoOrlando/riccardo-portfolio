import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Flag, Target, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(Draggable, ScrollTrigger);

const StatsCards = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);

  const stats = [
    { icon: <Trophy className="w-6 h-6" />, value: "3x", label: "Campione Siciliano", detail: "Kart 2022/23, 2023/24, 2024/25" },
    { icon: <Award className="w-6 h-6" />, value: "Vice-Campione", label: "Formula 4 FX", detail: "Italian Series" },
    { icon: <Flag className="w-6 h-6" />, value: "24", label: "Vittorie Totali", detail: "In tutta la carriera" },
    { icon: <Target className="w-6 h-6" />, value: "58", label: "Podi Totali", detail: "Kart + Formula 4" },
    { icon: <MapPin className="w-6 h-6" />, value: "15", label: "Circuiti", detail: "Tracciati internazionali" },
    { icon: <Clock className="w-6 h-6" />, value: "8 anni", label: "Esperienza", detail: "Dal 2017 in competizione" }
  ];

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container || cards.length === 0) return;

    const cardWidth = 240; 
    const gap = 20;
    const totalWidth = (cardWidth + gap) * stats.length;
    const containerWidth = container.offsetWidth;
    const maxDrag = -(totalWidth - containerWidth + gap);

    gsap.set(slider, { width: totalWidth, x: 0 });

    const ctx = gsap.context(() => {
      gsap.fromTo(cards,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    const draggableInstance = Draggable.create(slider, {
      type: 'x',
      bounds: { minX: maxDrag, maxX: 0 },
      inertia: true,
      edgeResistance: 0.65,
      cursor: 'grab',
      activeCursor: 'grabbing'
    });

    return () => {
      ctx.revert();
      if (draggableInstance && draggableInstance[0]) draggableInstance[0].kill();
    };
  }, [stats.length]);

  return (
    /* SFONDO: Zinc-800 - Il grigio che cercavi */
    <div className="w-full py-24 bg-zinc-800 border-y border-zinc-700/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
              The <span className="text-red-600">Numbers</span>
            </h2>
            <div className="h-1.5 w-16 bg-red-600 mt-3 shadow-[0_0_15px_rgba(220,38,38,0.4)]"></div>
          </div>
          <p className="text-zinc-300 text-sm italic font-bold uppercase tracking-[0.2em]">
            Career Statistics
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden py-6">
          <div ref={sliderRef} className="flex gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                /* CARD: Zinc-950 (Molto scure) per farle risaltare sul grigio dello sfondo */
                className="group relative bg-zinc-950 rounded-2xl p-6 border border-zinc-700 hover:border-red-600/50 transition-all duration-500 shrink-0 opacity-0 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                style={{ width: '240px' }}
              >
                {/* Glow interno */}
                <div className="absolute -inset-px bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icona */}
                <div className="inline-flex p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-red-600 group-hover:text-white group-hover:bg-red-600 transition-all duration-300 mb-6 relative z-10">
                  {stat.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="text-4xl font-black italic text-white mb-1 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black uppercase italic text-red-600 mb-4 tracking-widest leading-none">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-medium text-zinc-500 leading-snug border-t border-zinc-800 pt-4">
                    {stat.detail}
                  </div>
                </div>

                {/* Linea rossa sotto */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-red-600 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8 opacity-40">
          <div className="h-[1px] flex-1 bg-zinc-700"></div>
          <p className="text-zinc-400 text-[9px] uppercase font-bold tracking-[0.4em]">Slide to Explore</p>
          <div className="h-[1px] flex-1 bg-zinc-700"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;