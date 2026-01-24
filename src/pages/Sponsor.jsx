import React from 'react';
import { Download, Rocket, Users, Target, Globe, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const SponsorPage = () => {
  const currentSponsors = [
    { 
      name: "Technorace", 
      logo: "https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518257/logo_technorace_competition.png",
      type: "Official Team",
      isInverted: false 
    },
    { 
      name: "GP Racing", 
      logo: "https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518258/logo_gp_racing.png",
      type: "Technical Partner",
      isInverted: false 
    },
    { 
      name: "Sparco", 
      logo: "https://res.cloudinary.com/ddbmmjpal/image/upload/f_auto,q_auto/v1768518257/sparco-1.png",
      type: "Technical partner",
      isInverted: true 
    },
  ];

  const metrics = [
    { label: "Reach Mensile", value: "250K+", icon: <Users size={20} /> },
    { label: "Gare Trasmesse", value: "Live TV", icon: <Globe size={20} /> },
    { label: "Fan Engagement", value: "12.5%", icon: <Zap size={20} /> },
    { label: "Partner Attivi", value: "15+", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[#020202] text-white">
      {/* HEADER FIX */}
      <div className="fixed top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <PageBanner
        title="Sponsor"
        subtitle="I partner del mio percorso"
        imageUrl="/img/fotomisanointervista.webp"
        path="Home / Sponsor"
      />

      {/* BACKGROUND GRADIENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[300 md:500px] h-[300 md:500px] bg-rose-600/10 rounded-full blur-[100 md:120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[250 md:400px] h-[250 md:400px] bg-blue-600/10 rounded-full blur-[100 md:120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="w-full lg:w-1/2">
            <h1 className="text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-rose-600 mb-4 px-4 py-1 border border-rose-600/30 rounded-full inline-block">
              Business & Racing
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black italic uppercase leading-[1] md:leading-[0.9] mb-6 md:mb-8">
              Accelera il tuo <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">Brand</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
              Sponsorizzare un pilota è unirsi a un percorso di eccellenza, portando il tuo marchio davanti a migliaia di appassionati e creando opportunità B2B uniche.
            </p>
            
            {/* METRICS GRID */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-rose-600/50 transition-colors">
                  <div className="text-rose-600 mb-1">{m.icon}</div>
                  <div className="text-xl md:text-2xl font-black italic">{m.value}</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-video bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                <img 
                  src="/img/fotomisanointervista.webp" 
                  alt="Racing Action" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2">
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-red-600 rounded-full animate-pulse" />
                   <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">On Track Excellence</span>
                </div>
             </div>
          </div>
        </div>

        {/* WHY COLLABORATE? */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-40">
          {[
            { icon: <Globe />, title: "Visibility", desc: "Esposizione globale sui circuiti e copertura media televisiva internazionale." },
            { icon: <Users />, title: "Community", desc: "Accesso a una fan base giovane e appassionata tramite i canali social." },
            { icon: <Target />, title: "B2B Hosting", desc: "Porta i tuoi clienti nel paddock: hospitality e grid walk esclusivi." },
            { icon: <Rocket />, title: "Innovation", desc: "Associazione ai valori di velocità, precisione e alta tecnologia." }
          ].map((item, i) => (
            <div key={i} className="p-6 md:p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-rose-600 transition-all group">
              <div className="text-rose-600 mb-4 md:mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase italic mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* LOGO GRID */}
        <div className="mb-20 md:mb-40 text-center">
          <h3 className="text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-zinc-600 mb-8">
            I Partner che mi sostengono
          </h3>
          
          <div className="bg-white/5 backdrop-blur-sm border-y border-white/5 py-10 md:py-16">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-20 px-4">
              {currentSponsors.map((s, i) => (
                <div key={i} className="group flex flex-col items-center gap-3 md:gap-5 w-[40%] sm:w-auto">
                  <div className="h-10 md:h-14 flex items-center justify-center">
                    <img 
                      src={s.logo} 
                      alt={s.name}
                      className={`
                        h-full w-auto object-contain transition-all duration-500
                        brightness-125 contrast-125 
                        ${s.isInverted ? 'invert brightness-200' : ''}
                        md:group-hover:brightness-200 md:group-hover:scale-110
                      `}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-[9px] font-black italic uppercase tracking-widest opacity-60">
                      {s.name}
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-rose-600 transition-colors">
                      {s.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA (Scommentata e sistemata) */}
        {/* <div className="relative group overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-800 transition-transform duration-700 group-hover:scale-105" />
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-4 leading-tight">
                Pronto a scendere <br /> <span className="text-black bg-white px-3 mt-2 inline-block -skew-x-12">In Pista?</span>
              </h3>
              <p className="text-rose-100 text-sm md:text-lg opacity-80 max-w-md mx-auto lg:mx-0">
                Contattami per scoprire come possiamo costruire insieme un progetto di partnership vincente per il 2025.
              </p>
            </div>
            <button className="w-full lg:w-auto flex items-center justify-center gap-4 bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl transform active:scale-95">
              <Download size={20} className="md:size-24" />
              Partnership Deck
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default SponsorPage;