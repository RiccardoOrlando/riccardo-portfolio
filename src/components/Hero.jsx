import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([contentRef.current, imageRef.current], 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out" }
      );

      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-zinc-950 p-4 md:p-8 pt-20 md:pt-24 xl:pt-24 xl:px-14 2xl:pt-24">
      
      <div className="relative w-full max-w-7xl min-h-[85vh] flex flex-col rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-red-600/30 shadow-2xl">
        
        {/* BACKGROUND */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/fotomisano.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 md:bg-black/30 backdrop-blur-[1px]"></div>
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-between px-6 py-10 md:px-16 lg:px-20 gap-10 xl:gap-0">
          
          {/* IMAGE CONTENT */}
          <div 
            ref={imageRef} 
            className="w-full xl:w-1/2 flex justify-center items-center order-1 xl:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
              
              <img
                src="/img/immaginevittoriamugello.webp"
                alt="Riccardo Orlando"
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[24rem] lg:h-[24rem] xl:w-[30rem] xl:h-[30rem] 2xl:w-[34rem] 2xl:h-[34rem] rounded-full border-4 border-red-600 object-cover shadow-[0_0_50px_rgba(220,38,38,0.3)] z-10"
              />
              
              {/* FIX BADGE RO15: Range 768px - 1024px */}
              <div className="absolute z-20 bg-red-600 text-white font-black italic rounded-lg rotate-12 shadow-xl border-2 border-black
                              /* Mobile */
                              -bottom-2 -right-2 px-4 py-2 text-sm scale-90
                              /* TABLET FIX (768px - 1024px) */
                              md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 md:px-5 md:py-2.5 
                              /* DESKTOP (Sopra 1280px) */
                              xl:bottom-10 xl:right-10 xl:px-6 xl:py-3 xl:scale-100">
                RO15
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div 
            ref={contentRef} 
            className="w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left space-y-4 md:space-y-6 order-2 xl:order-1"
          >
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.8] block">
                Riccardo
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter text-red-600 leading-[0.8] block">
                Orlando
              </h1>
            </div>

            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <span className="h-[2px] w-12 bg-red-600"></span>
              <p className="text-lg md:text-2xl font-black italic tracking-widest text-zinc-300 uppercase">
                FORMULA 4 FIA
              </p>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm md:text-lg max-w-md font-medium leading-relaxed italic opacity-90 px-4 md:px-0">
              Pilota italiano che unisce aggressività e precisione in pista. 
              Non aspetto la vittoria. <span className="text-white font-bold uppercase underline decoration-red-600 underline-offset-4">Me la prendo.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2 md:pt-4 px-6 sm:px-0">
              <button className="px-8 py-3 md:px-10 md:py-4 bg-red-600 hover:bg-white hover:text-black text-white font-black uppercase italic tracking-widest transition-all duration-300 rounded-xl shadow-[0_10px_20px_rgba(220,38,38,0.3)]">
                Contattami
              </button>
              <button className="px-8 py-3 md:px-10 md:py-4 border-2 border-white/20 hover:border-red-600 text-white font-black uppercase italic tracking-widest transition-all duration-300 rounded-xl backdrop-blur-sm">
                Progetti
              </button>
            </div>
          </div>

        </div>

        {/* MARQUEE */}
        <div className="relative z-10 w-full bg-red-600 py-3 md:py-4 overflow-hidden border-t border-black/20 mt-auto">
          <div ref={marqueeRef} className="flex whitespace-nowrap gap-10">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-white font-black text-xl md:text-4xl uppercase italic tracking-tighter">
                Riccardo Orlando • 
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}