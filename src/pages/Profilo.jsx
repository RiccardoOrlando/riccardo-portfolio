import React, { useState, useEffect } from 'react';
import { Zap, Target, Gauge, X, Award, Cpu, Settings, Activity, Shield } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import { galleryData } from '../data/galleryData';

const ProfiloPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { profile } = galleryData;

  const stats = [
    { label: "Data di Nascita", value: "04/05/2005" },
    { label: "Nazionalità", value: "Italiana" },
    { label: "Residenza", value: "Monza, IT" },
    { label: "Peso / Altezza", value: "68kg / 178cm" },
    { label: "Hobby", value: "Sim Racing, Sports, Games" },
  ];

  const skills = [
    { icon: <Target className="text-red-600" />, label: "Precisione", desc: "Costanza millimetrica sul giro" },
    { icon: <Zap className="text-red-600" />, label: "Riflessi", desc: "Partenze e corpo a corpo" },
    { icon: <Gauge className="text-red-600" />, label: "Telemetria", desc: "Analisi dati avanzata" },
  ];

  const carSpecs = [
    { label: "Telaio", value: "Monoscocca in carbonio FIA F4", icon: <Shield size={20} /> },
    { label: "Motore", value: "Abarth 1.4L Turbo (160 CV)", icon: <Cpu size={20} /> },
    { label: "Cambio", value: "Sadev sequenziale 6 marce", icon: <Settings size={20} /> },
    { label: "Peso", value: "570 kg (incluso pilota)", icon: <Activity size={20} /> },
  ];

  const getCloudinaryUrl = (publicId, type = 'thumb') => {
    const cloudName = "ddbmmjpal"; 
    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
    const transformations = type === 'thumb' 
      ? 'w_600,h_600,c_fill,g_auto,q_auto,f_auto' 
      : 'w_1600,q_auto,f_auto'; 
    return `${baseUrl}/${transformations}/${publicId}`;
  };

  useEffect(() => {
    if (selectedImg) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedImg]);

  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      {/* HEADER FIX: z-index massimo per l'hamburger */}
      <div className="fixed top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <PageBanner 
        title="Profilo"
        subtitle="Dati tecnici e caratteristiche"
        imageUrl="/img/fotoimolapitlane.webp"
        path="Home / Profilo"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-24">
        
        {/* BIOGRAFIA PILOTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-20 md:mb-32">
          
          {/* FOTO: SOPRA SU MOBILE, SINISTRA SU DESKTOP */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img 
                src={getCloudinaryUrl(profile.mainPhoto, 'full')} 
                alt="Riccardo Orlando" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* DATI: SOTTO SU MOBILE, DESTRA SU DESKTOP */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-2 leading-none">
              Riccardo <span className="text-red-600">Orlando</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold italic text-zinc-500 mb-8 md:mb-10 uppercase tracking-[0.2em]">Racing Driver</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="bg-zinc-900/40 p-4 md:p-5 border-l-4 border-red-600 rounded-r-lg">
                  <p className="text-[9px] md:text-[10px] uppercase text-zinc-500 font-black tracking-widest mb-1">{s.label}</p>
                  <p className="text-lg md:text-xl font-black italic uppercase text-zinc-200">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="bg-zinc-900/20 p-4 rounded-xl border border-zinc-800/50 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="shrink-0 md:mb-3">{skill.icon}</div>
                  <div>
                    <h3 className="font-bold uppercase italic text-sm">{skill.label}</h3>
                    <p className="text-[11px] text-zinc-500 leading-tight">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SCHEDA TECNICA MACCHINA */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="h-8 md:h-10 w-2 bg-red-600"></div>
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tight">The Machine: <span className="text-red-600">Tatuus F4</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center bg-zinc-900/20 p-5 md:p-10 rounded-2xl md:rounded-3xl border border-zinc-800/50 shadow-2xl">
            {/* IMMAGINE MACCHINA: PRIMA SU MOBILE */}
            <div className="lg:col-span-2 lg:order-2 relative group">
              <img 
                src={getCloudinaryUrl(profile.carPhoto, 'full')} 
                alt="Tatuus F4-T014" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-red-600 px-4 md:px-6 py-1 md:py-2 skew-x-[-12deg] font-black italic text-[10px] md:text-sm">
                FIA FORMULA 4 SPEC
              </div>
            </div>

            {/* SPECS MACCHINA: DOPO SU MOBILE */}
            <div className="space-y-5 md:space-y-6 lg:order-1">
              {carSpecs.map((spec, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2.5 md:p-3 bg-red-600/10 rounded-lg text-red-600 shrink-0">{spec.icon}</div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[10px] uppercase text-zinc-500 font-bold">{spec.label}</p>
                    <p className="font-black italic uppercase text-base md:text-lg leading-tight">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MEDIA GALLERY */}
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight">Media <span className="text-red-600">Gallery</span></h2>
              <div className="h-1 w-20 bg-red-600 mt-2"></div>
            </div>
            <a href="/galleria" className="text-zinc-500 hover:text-white transition-colors uppercase font-black italic text-xs border-b border-zinc-800 pb-1 flex items-center gap-2 w-fit">
              Vedi album completi <Award size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {profile.bestOf.map((id) => (
              <div 
                key={id}
                onClick={() => setSelectedImg(id)}
                className="group relative aspect-square overflow-hidden rounded-md cursor-pointer bg-zinc-900 border border-white/5"
              >
                <img 
                  src={getCloudinaryUrl(id, 'thumb')} 
                  alt="Gallery"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX */}
        {selectedImg && (
          <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-2 bg-red-600 text-white rounded-full z-[1010]"
            >
              <X size={24} />
            </button>
            <img 
              src={getCloudinaryUrl(selectedImg, 'full')} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              alt="Ingrandimento"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfiloPage;