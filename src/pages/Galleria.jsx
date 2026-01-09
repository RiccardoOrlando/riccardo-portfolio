import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, Camera, X } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import { galleryData } from '../data/galleryData'; 

// --- HELPER PER CLOUDINARY ---
const getImg = (publicId, type = 'thumb') => {
  const cloudName = "ddbmmjpal"; 
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // f_auto: sceglie il formato migliore (webp/avif)
  // q_auto: ottimizza il peso senza perdere qualità visibile
  const transformations = type === 'cover' 
    ? 'w_800,h_1000,c_fill,g_auto,f_auto,q_auto' 
    : 'w_1400,f_auto,q_auto'; 

  return `${baseUrl}/${transformations}/${publicId}`;
};

const GalleriaMotorsport = () => {
  // Impostiamo l'anno più recente disponibile come default
  const [activeYear, setActiveYear] = useState("2025");
  const [openEvent, setOpenEvent] = useState(null);
  const gridRef = useRef(null);

  const years = Object.keys(galleryData).sort((a, b) => b - a);

  // Animazione GSAP all'apertura della pagina o cambio anno
  useEffect(() => {
    gsap.fromTo(".event-card", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  }, [activeYear]);

  return (
    <>
      <Header />
      <PageBanner 
        title="Galleria"
        subtitle="Le immagini più belle della mia carriera in pista"
        imageUrl="/img/fotoimolavariantealta.webp" 
        path="Home / Galleria"
      />
      
      <div className="min-h-screen bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* TITOLO SEZIONE */}
          <div className="mb-16">
            <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-4 text-white">Galleria</h1>
            <div className="h-1 w-24 bg-red-600"></div>
          </div>

          {/* SELETTORE ANNI */}
          <div className="flex flex-wrap gap-4 mb-16">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-10 py-4 italic font-black text-2xl transition-all duration-300 transform -skew-x-12 border-2
                  ${activeYear === year 
                    ? "bg-red-600 border-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.4)]" 
                    : "border-zinc-800 text-zinc-600 hover:border-zinc-500 hover:text-white"}`}
              >
                <span className="inline-block skew-x-12">{year}</span>
              </button>
            ))}
          </div>

          {/* GRIGLIA EVENTI (CARD) */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData[activeYear]?.length > 0 ? (
              galleryData[activeYear].map((event) => (
                <div 
                  key={event.id}
                  onClick={() => setOpenEvent(event)}
                  className="event-card group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl bg-zinc-900 shadow-2xl"
                >
                  <img 
                    src={getImg(event.coverId, 'cover')} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    alt={event.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <p className="text-red-600 font-bold tracking-widest text-xs uppercase mb-2">Race Event</p>
                    <h3 className="text-3xl font-black italic uppercase leading-tight mb-6">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                      <Camera size={18}/> 
                      <span>Guarda {event.photos.length} foto</span>
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform"/>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 italic">Nessun evento registrato per questo anno.</p>
            )}
          </div>
        </div>

        {/* MODALE FULLSCREEN (DETTAGLIO FOTO) */}
        {openEvent && (
          <div className="fixed inset-0 z-[100] bg-black overflow-y-auto">
            {/* Header Modale Sticky */}
            <div className="sticky top-0 z-[110] flex justify-between items-center p-6 bg-black/90 backdrop-blur-xl border-b border-white/10">
              <div>
                <h2 className="text-2xl font-black italic uppercase text-white">{openEvent.title}</h2>
                <p className="text-zinc-400 text-sm uppercase tracking-widest">{activeYear}</p>
              </div>
              <button 
                onClick={() => setOpenEvent(null)}
                className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 hover:scale-110 transition-all shadow-lg"
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Griglia Foto Masonry-style */}
            <div className="p-6 md:p-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
               {openEvent.photos.map((photoId, index) => (
                 <div key={photoId} className="overflow-hidden rounded-lg bg-zinc-900 group border border-white/5">
                   <img 
                     src={getImg(photoId, 'thumb')} 
                     className="w-full h-auto hover:scale-105 transition-transform duration-700 cursor-zoom-in" 
                     // Estraiamo il numero dal publicId (es: 2025_mugello_22 -> Foto 22)
                     alt={`Foto ${photoId.split('_').pop()}`}
                     loading="lazy"
                   />
                 </div>
               ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleriaMotorsport;