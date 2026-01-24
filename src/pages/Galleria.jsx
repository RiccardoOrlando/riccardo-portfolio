import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, Camera, X } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import { galleryData } from '../data/galleryData'; 

const getImg = (publicId, type = 'thumb') => {
  const cloudName = "ddbmmjpal"; 
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  const transformations = type === 'cover' 
    ? 'w_800,h_1000,c_fill,g_auto,f_auto,q_auto' 
    : 'w_1400,f_auto,q_auto'; 

  return `${baseUrl}/${transformations}/${publicId}`;
};

const GalleriaMotorsport = () => {
  const [activeYear, setActiveYear] = useState("2026");
  const [openEvent, setOpenEvent] = useState(null);
  const gridRef = useRef(null);
  const years = ["2026", "2025", "2024", "2023"];

  // Blocca lo scroll quando la modale è aperta
  useEffect(() => {
    if (openEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openEvent]);

  useEffect(() => {
    gsap.fromTo(".event-card", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  }, [activeYear]);

  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      {/* HEADER FIX */}
      <div className="fixed top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <PageBanner 
        title="Galleria"
        subtitle="Le immagini più belle"
        imageUrl="/img/fotoimolavariantealta.webp" 
        path="Home / Galleria"
      />
      
      <div className="min-h-screen py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* TITOLO SEZIONE - Font Responsivo */}
          <div className="mb-10 md:mb-16">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 text-white">
              Galleria
            </h1>
            <div className="h-1.5 w-20 bg-red-600"></div>
          </div>

          {/* SELETTORE ANNI - Scrollabile orizzontalmente su mobile */}
          <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-4 mb-12 md:mb-16 scrollbar-hide no-scrollbar">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-8 md:px-10 py-3 md:py-4 italic font-black text-xl md:text-2xl transition-all duration-300 transform -skew-x-12 border-2 shrink-0
                  ${activeYear === year 
                    ? "bg-red-600 border-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]" 
                    : "border-zinc-800 text-zinc-600 hover:border-zinc-500 hover:text-white"}`}
              >
                <span className="inline-block skew-x-12">{year}</span>
              </button>
            ))}
          </div>

          {/* GRIGLIA EVENTI */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryData[activeYear]?.length > 0 ? (
              galleryData[activeYear].map((event) => (
                <div 
                  key={event.id}
                  onClick={() => setOpenEvent(event)}
                  className="event-card group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl bg-zinc-900 border border-white/5"
                >
                  <img 
                    src={getImg(event.coverId, 'cover')} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    alt={event.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <p className="text-red-600 font-bold tracking-widest text-[10px] uppercase mb-1 md:mb-2">Race Event</p>
                    <h3 className="text-2xl md:text-3xl font-black italic uppercase leading-tight mb-4 md:mb-6">{event.title}</h3>
                    <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                      <Camera size={16}/> 
                      <span>{event.photos.length} scatti</span>
                      <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 md:py-24 border-2 border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-center bg-zinc-900/20 px-6">
                <div className="mb-6 p-5 bg-zinc-900 rounded-full text-zinc-700">
                   <Camera size={40} strokeWidth={1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black italic uppercase text-zinc-400 mb-3">
                   Stagione {activeYear} in arrivo
                </h3>
                <p className="text-zinc-600 max-w-sm mx-auto text-sm leading-relaxed">
                  I media ufficiali sono in fase di post-produzione. Aggiorneremo la gallery a breve.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* MODALE FULLSCREEN */}
        {openEvent && (
          <div className="fixed inset-0 z-[1000] bg-black overflow-y-auto">
            {/* Header Modale Sticky */}
            <div className="sticky top-0 z-[1100] flex justify-between items-center p-4 md:p-6 bg-black/90 backdrop-blur-xl border-b border-white/10">
              <div className="min-w-0">
                <h2 className="text-lg md:text-2xl font-black italic uppercase text-white truncate">{openEvent.title}</h2>
                <p className="text-red-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">{activeYear} Official Gallery</p>
              </div>
              <button 
                onClick={() => setOpenEvent(null)}
                className="ml-4 p-3 md:p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all active:scale-95"
              >
                <X size={20} md:size={28} />
              </button>
            </div>
            
            {/* Griglia Foto Masonry */}
            <div className="p-4 md:p-8 columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {openEvent.photos.map((photoId) => (
                  <div key={photoId} className="overflow-hidden rounded-lg bg-zinc-900 border border-white/5 shadow-xl">
                    <img 
                      src={getImg(photoId, 'thumb')} 
                      className="w-full h-auto hover:brightness-110 transition-all duration-500 cursor-zoom-in" 
                      alt="Motorsport Session"
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
            
            <div className="flex justify-center pb-20 pt-10">
                <button 
                  onClick={() => setOpenEvent(null)}
                  className="px-10 py-4 bg-zinc-900 text-white font-black italic uppercase tracking-widest border border-zinc-800 hover:bg-red-600 transition-all transform -skew-x-12"
                >
                   <span className="inline-block skew-x-12">Chiudi Galleria</span>
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleriaMotorsport;