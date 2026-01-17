import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Trophy, Award, Flag, Target, MapPin, Clock, 
  Zap, Gauge, Route, Timer, Activity, Percent 
} from 'lucide-react';

gsap.registerPlugin(Draggable, ScrollTrigger);

const StatsCards = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);

const stats = [
  { 
    icon: <Trophy className="w-6 h-6" />, 
    value: "3x", 
    label: "Titoli Vinti", 
    detail: "Campione Siciliano Assoluto 2023, 2024 e Titolo 2022" 
  },
  { 
    icon: <Award className="w-6 h-6" />, 
    value: "Vice-Campione", 
    label: "F4 Italian Series", 
    detail: "Vice-Campione Formula 4 FX Italian Series 2025" 
  },
  { 
    icon: <Zap className="w-6 h-6" />, 
    value: "19", 
    label: "Pole Positions", 
    detail: "Partenze al palo documentate tra Kart e Monoposto" 
  },
  { 
    icon: <Flag className="w-6 h-6" />, 
    value: "22", 
    label: "Vittorie Totali", 
    detail: "Successi ottenuti in circuiti cittadini e autodromi" 
  },
  { 
    icon: <Gauge className="w-6 h-6" />, 
    value: "14", 
    label: "Giri Veloci", 
    detail: "Best laps siglati in gara nelle ultime 3 stagioni" 
  },
  { 
    icon: <Target className="w-6 h-6" />, 
    value: "38", 
    label: "Podi Totali", 
    detail: "Risultati nella top 3 basati sul career log fornito" 
  },
  { 
    icon: <Activity className="w-6 h-6" />, 
    value: "96", 
    label: "Eventi Disputati", 
    detail: "Somma di Round di campionato e Trofei Nazionali" 
  },
  { 
    icon: <Route className="w-6 h-6" />, 
    value: "+3500", 
    label: "Km in Pista", 
    detail: "Percorrenza stimata tra weekend di gara e test F4" 
  },
  { 
    icon: <Timer className="w-6 h-6" />, 
    value: "260h", 
    label: "Simulatore", 
    detail: "Sessioni di allenamento su Tatuus F4-T014" 
  },
  { 
    icon: <MapPin className="w-6 h-6" />, 
    value: "18", 
    label: "Circuiti", 
    detail: "Tracciati nazionali (Mugello, Imola, Misano) e Kartodromi" 
  },
  { 
    icon: <Percent className="w-6 h-6" />, 
    value: "91%", 
    label: "Affidabilità", 
    detail: "Rapporto tra partenze e gare portate a termine" 
  },
  { 
    icon: <Clock className="w-6 h-6" />, 
    value: "4 anni", 
    label: "Carriera", 
    detail: "Dal debutto nel 2022 al successo in Formula 4" 
  }
];


  useEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    const ctx = gsap.context(() => {
      // Funzione per aggiornare i limiti di trascinamento
      const updateBounds = () => {
        const totalSliderWidth = slider.offsetWidth;
        const windowWidth = window.innerWidth;
        const maxDrag = -(totalSliderWidth - windowWidth);
        
        // Applichiamo i limiti (maxX: 0 significa che non può andare più a destra dell'inizio)
        draggableInstance[0].applyBounds({ minX: maxDrag, maxX: 0 });
      };

      const draggableInstance = Draggable.create(slider, {
        type: 'x',
        inertia: true,
        bounds: { minX: 0, maxX: 0 },
        edgeResistance: 0.65,
        cursor: 'grab',
        activeCursor: 'grabbing',
        onPress: updateBounds, // Ricalcola quando l'utente clicca
      });

      // Animazione ingresso card
      gsap.fromTo(cardsRef.current,
        { opacity: 0, scale: 0.8, x: 50 },
        {
          opacity: 1, scale: 1, x: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          }
        }
      );

      // Esegui updateBounds all'avvio e al resize
      updateBounds();
      window.addEventListener('resize', updateBounds);
    });

    return () => {
      ctx.revert();
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <section className="w-full py-24 bg-zinc-950 border-y border-zinc-900 select-none overflow-hidden">
      
      {/* Header fisso nel max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">
              The <span className="text-red-600">Numbers</span>
            </h2>
            <div className="h-1.5 w-24 bg-red-600 mt-4 shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
          </div>
          <p className="text-zinc-500 text-xs md:text-sm italic font-bold uppercase tracking-[0.3em]">
            Career Statistics & Data
          </p>
        </div>
      </div>

      {/* Area Slider: w-full e overflow visibile per Draggable */}
      <div ref={containerRef} className="relative w-full overflow-visible">
        <div 
          ref={sliderRef} 
          className="inline-flex gap-6 px-6 md:pl-[calc((100vw-1280px)/2+24px)] md:pr-24"
          /* md:pl allinea la prima card al titolo sopra, md:pr dà spazio alla fine dello scroll */
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-zinc-900/30 rounded-3xl p-8 border border-zinc-800/50 hover:border-red-600/50 transition-all duration-500 shrink-0 shadow-2xl overflow-hidden"
              style={{ width: '280px' }}
            >
              {/* Overlay rosso soft al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 text-red-600 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(stat.icon, { size: 30, strokeWidth: 1.5 })}
                </div>
                
                <div className="text-5xl font-black italic text-white mb-1 tracking-tighter">
                  {stat.value}
                </div>
                
                <div className="text-xs font-black uppercase italic text-red-600 mb-6 tracking-widest">
                  {stat.label}
                </div>
                
                <p className="text-sm font-medium text-zinc-500 leading-relaxed border-t border-zinc-800/80 pt-6 group-hover:text-zinc-300 transition-colors">
                  {stat.detail}
                </p>
              </div>

              {/* Numero sfondo decorativo */}
              <span className="absolute -bottom-2 -right-2 text-8xl font-black italic text-white/5 group-hover:text-red-600/10 transition-colors duration-500 pointer-events-none">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Drag Indicator */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex items-center gap-4 opacity-20">
          <div className="h-[1px] flex-1 bg-zinc-800"></div>
          <p className="text-white text-[10px] font-bold uppercase tracking-[0.5em] italic">Drag to slide</p>
          <div className="h-[1px] flex-1 bg-zinc-800"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;