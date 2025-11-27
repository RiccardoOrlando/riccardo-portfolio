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
    {
      icon: <Trophy className="w-10 h-10" />,
      value: "3x",
      label: "Campione Siciliano",
      color: "from-yellow-500 to-orange-500",
      detail: "Kart 2022/23, 2023/24, 2024/25"
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: "Vice-Campione",
      label: "Formula 4 FX",
      color: "from-gray-300 to-gray-500",
      detail: "Italian Series"
    },
    {
      icon: <Flag className="w-10 h-10" />,
      value: "24",
      label: "Vittorie Totali",
      color: "from-green-500 to-emerald-500",
      detail: "In tutta la carriera"
    },
    {
      icon: <Target className="w-10 h-10" />,
      value: "58",
      label: "Podi Totali",
      color: "from-orange-500 to-red-500",
      detail: "Kart + Formula 4"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      value: "15",
      label: "Circuiti",
      color: "from-blue-500 to-cyan-500",
      detail: "Tracciati internazionali"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      value: "8 anni",
      label: "Esperienza",
      color: "from-purple-500 to-pink-500",
      detail: "Dal 2017 in competizione"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const slider = sliderRef.current;
    const container = containerRef.current;

    if (!slider || !container || cards.length === 0) return;

    // Calcola le dimensioni
    const cardWidth = 280;
    const gap = 24;
    const totalWidth = (cardWidth + gap) * stats.length;
    const containerWidth = container.offsetWidth;
    const maxDrag = -(totalWidth - containerWidth + gap);

    // Imposta la larghezza del slider
    gsap.set(slider, {
      width: totalWidth,
      x: 0
    });

    // Animazione di entrata con ScrollTrigger
    gsap.fromTo(cards,
      {
        y: 50,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    // Crea il Draggable
    const draggableInstance = Draggable.create(slider, {
      type: 'x',
      bounds: {
        minX: maxDrag,
        maxX: 0
      },
      inertia: true,
      edgeResistance: 0.65,
      dragResistance: 0,
      throwResistance: 3000,
      cursor: 'grab',
      activeCursor: 'grabbing'
    });

    // Cleanup
    return () => {
      if (draggableInstance && draggableInstance[0]) {
        draggableInstance[0].kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full py-16 bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Chi Sono</h2>
          <div className="h-1 w-32 bg-linear-to-r from-red-600 to-red-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numeri, titoli e dedizione che mi definiscono come pilota
          </p>
        </div>

        {/* Draggable Carousel */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ cursor: 'grab' }}
        >
          <div 
            ref={sliderRef}
            className="flex gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:scale-105 transition-all duration-300 overflow-hidden shrink-0 opacity-0"
                style={{ 
                  width: '280px',
                  transform: 'translateY(50px) scale(0.9)'
                }}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${stat.color} text-white shadow-lg mb-4 relative z-10`}>
                  {stat.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.detail}</div>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r ${stat.color} group-hover:w-full transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicatore di drag */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">← Trascina per scorrere →</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;