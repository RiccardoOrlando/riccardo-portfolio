import React from 'react';
import { Download, Rocket, Users, Target, Globe, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const SponsorPage = () => {
  // Integrazione Sponsor Reali da Cloudinary
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
      isInverted: true // Diventa bianco per contrasto sul nero
    },
  ];

  const metrics = [
    { label: "Reach Mensile", value: "250K+", icon: <Users size={20} /> },
    { label: "Gare Trasmesse", value: "Live TV", icon: <Globe size={20} /> },
    { label: "Fan Engagement", value: "12.5%", icon: <Zap size={20} /> },
    { label: "Partner Attivi", value: "15+", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <Header />
      <PageBanner
        title="Sponsor"
        subtitle="I partner che supportano il mio percorso sportivo"
        imageUrl="/img/fotomisanointervista.webp"
        path="Home / Sponsor"
      />

      {/* BACKGROUND GRADIENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <h1 className="text-sm font-black tracking-[0.4em] uppercase text-rose-600 mb-4 px-4 py-1 border border-rose-600/30 rounded-full inline-block">
              Business & Racing
            </h1>
            <h2 className="text-6xl md:text-7xl font-black italic uppercase leading-[0.9] mb-8">
              Accelera il tuo <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">Brand</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              Sponsorizzare un pilota non è solo mettere un adesivo sull'auto. È unirsi a un percorso di eccellenza, 
              portando il tuo marchio davanti a migliaia di appassionati e creando opportunità B2B uniche nel paddock.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="text-rose-600 mb-1">{m.icon}</div>
                  <div className="text-2xl font-black italic">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                <img 
                  src="/img/fotomisanointervista.webp" 
                  alt="Racing Action" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                   <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                   <span className="text-xs font-bold uppercase tracking-widest">On Track Excellence</span>
                </div>
             </div>
          </div>
        </div>

        {/* PERCHÉ COLLABORARE? */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {[
            { icon: <Globe />, title: "Visibility", desc: "Esposizione globale sui circuiti e copertura media televisiva internazionale." },
            { icon: <Users />, title: "Community", desc: "Accesso a una fan base giovane e appassionata tramite i canali social." },
            { icon: <Target />, title: "B2B Hosting", desc: "Porta i tuoi clienti nel paddock: hospitality e grid walk esclusivi." },
            { icon: <Rocket />, title: "Innovation", desc: "Associazione ai valori di velocità, precisione e alta tecnologia." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-rose-600 transition-all group">
              <div className="text-rose-600 mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                {React.cloneElement(item.icon, { size: 40 })}
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* LOGO GRID - Ottimizzata per Mobile e Desktop */}
        <div className="mb-24 md:mb-40 text-center">
          <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600 mb-8 md:12">
            I Partner che mi sostengono
          </h3>
          
          <div className="bg-white/5 backdrop-blur-sm border-y border-white/5 py-12 md:py-16">
            {/* Su mobile usiamo grid-cols-2 per non affollare lo schermo, su desktop flex */}
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-10 md:gap-24 px-6">
              {currentSponsors.map((s, i) => (
                <div key={i} className="group flex flex-col items-center gap-4 md:gap-6">
                  <div className="h-10 md:h-16 flex items-center justify-center">
                    <img 
                      src={s.logo} 
                      alt={s.name}
                      className={`
                        h-full w-auto object-contain transition-all duration-500
                        /* LUMINOSITÀ: Su mobile è già alta di base, su desktop aumenta al passaggio */
                        brightness-150 contrast-125 
                        drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]
                        md:brightness-125 md:group-hover:brightness-200 
                        md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]
                        ${s.isInverted ? 'invert brightness-200 md:group-hover:brightness-[500%]' : ''}
                      `}
                    />
                  </div>
                  
                  <div className="flex flex-col items-center">
                    {/* Nome sponsor: visibile su mobile, compare al passaggio su desktop */}
                    <span className="text-white text-[9px] md:text-[10px] font-black italic uppercase tracking-widest opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 mb-1">
                      {s.name}
                    </span>
                    <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 group-hover:text-rose-600 transition-colors">
                      {s.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        {/* <div className="relative group overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-800 transition-transform duration-700 group-hover:scale-105" />
          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black italic uppercase text-white mb-4 leading-none">
                Pronto a scendere <br /> <span className="text-black bg-white px-3 mt-2 inline-block -skew-x-12">In Pista?</span>
              </h3>
              <p className="text-rose-100 text-lg opacity-80 max-w-md">
                Scarica la presentazione completa in PDF per scoprire tutti i vantaggi e i numeri dettagliati del progetto 2025.
              </p>
            </div>
            <button className="flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl transform active:scale-95">
              <Download size={24} />
              Partnership Deck (PDF)
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-full bg-white/5 -skew-x-12 translate-x-16" />
        </div> */}

      </div>
    </div>
  );
};

export default SponsorPage;