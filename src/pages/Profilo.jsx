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
    { label: "Hobby", value: "Sim Racing, Sports, Videogames" },
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
    <>
      <Header />
      <PageBanner 
        title="Profilo"
        subtitle="Dati tecnici e caratteristiche"
        imageUrl="/img/fotoimolapitlane.webp"
        path="Home / Profilo"
      />

      <div className="min-h-screen bg-black text-white pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* BIOGRAFIA PILOTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
            <div className="relative group">
              <div className="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img 
                  src={getCloudinaryUrl(profile.mainPhoto, 'full')} 
                  alt="Riccardo Orlando" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div>
              <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-2 leading-none">
                Riccardo <span className="text-red-600">Orlando</span>
              </h1>
              <p className="text-2xl font-bold italic text-zinc-500 mb-10 uppercase tracking-[0.2em]">Racing Driver</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {stats.map((s, i) => (
                  <div key={i} className="bg-zinc-900/40 p-5 border-l-4 border-red-600 rounded-r-lg">
                    <p className="text-[10px] uppercase text-zinc-500 font-black tracking-widest mb-1">{s.label}</p>
                    <p className="text-xl font-black italic uppercase text-zinc-200">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <div key={i} className="bg-zinc-900/20 p-4 rounded-xl border border-zinc-800/50">
                    <div className="mb-3">{skill.icon}</div>
                    <h3 className="font-bold uppercase italic text-sm">{skill.label}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SCHEDA TECNICA MACCHINA */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-2 bg-red-600"></div>
              <h2 className="text-4xl font-black italic uppercase tracking-tight">The Machine: <span className="text-red-600">Tatuus F4-T014</span></h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800/50 shadow-2xl">
              <div className="space-y-6">
                {carSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-3 bg-red-600/10 rounded-lg text-red-600">{spec.icon}</div>
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 font-bold">{spec.label}</p>
                      <p className="font-black italic uppercase text-lg">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2 relative group">
                <img 
                  src={getCloudinaryUrl(profile.carPhoto, 'full')} 
                  alt="Tatuus F4-T014" 
                  className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute -bottom-4 -right-4 bg-red-600 px-6 py-2 skew-x-[-12deg] font-black italic text-sm">
                  FIA FORMULA 4 SPEC
                </div>
              </div>
            </div>
          </div>

          {/* BEST OF GALLERY */}
          <div>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-black italic uppercase tracking-tight">Media <span className="text-red-600">Gallery</span></h2>
                <div className="h-1 w-20 bg-red-600 mt-2"></div>
              </div>
              <a href="/galleria" className="text-zinc-500 hover:text-white transition-colors uppercase font-black italic text-sm border-b border-zinc-800 pb-1 flex items-center gap-2">
                Vedi tutti gli album <Award size={16} />
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {profile.bestOf.map((id) => (
                <div 
                  key={id}
                  onClick={() => setSelectedImg(id)}
                  className="group relative aspect-square overflow-hidden rounded-md cursor-pointer bg-zinc-900 border border-white/5"
                >
                  <img 
                    src={getCloudinaryUrl(id, 'thumb')} 
                    alt="Gallery Best Of"
                    className="w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:scale-110"
                    onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-60')}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* LIGHTBOX */}
          {selectedImg && (
            <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-8 right-8 p-3 bg-red-600 text-white rounded-full hover:scale-110 transition-transform"
              >
                <X size={32} />
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
    </>
  );
};

export default ProfiloPage;