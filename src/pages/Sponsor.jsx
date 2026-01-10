import React from 'react';
import { Download, Rocket, Users, Target, Globe, BarChart3, ShieldCheck, Zap, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const SponsorPage = () => {
  const currentSponsors = [
    { name: "Sponsor 1", logo: "/logos/sponsor1.png" },
    { name: "Sponsor 2", logo: "/logos/sponsor2.png" },
    { name: "Sponsor 3", logo: "/logos/sponsor3.png" },
  ];

  const metrics = [
    { label: "Reach Mensile", value: "250K+", icon: <Users size={20} /> },
    { label: "Gare Trasmesse", value: "Live TV", icon: <Globe size={20} /> },
    { label: "Fan Engagement", value: "12.5%", icon: <Zap size={20} /> },
    { label: "Partner Attivi", value: "15+", icon: <ShieldCheck size={20} /> },
  ];

  const packages = [
    {
      tier: "Silver",
      price: "Entry Level",
      features: ["Logo su tuta (braccio)", "2 Post social dedicati", "Accesso Paddock Pass"],
      color: "from-zinc-400 to-zinc-600"
    },
    {
      tier: "Gold",
      price: "Most Popular",
      features: ["Logo su auto (fiancata)", "Logo su casco", "Content creation mensile", "Esperienza VIP ai box"],
      color: "from-rose-600 to-orange-500",
      featured: true
    },
    {
      tier: "Title",
      price: "Exclusive",
      features: ["Main Sponsor livrea", "Logo su interviste ufficiali", "Brand Ambassador", "Eventi B2B privati"],
      color: "from-blue-600 to-purple-600"
    }
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
        
        {/* HERO SECTION - Intro professionale */}
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
            
            {/* Metriche Rapide */}
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

        {/* PERCHÉ COLLABORARE? - Grid modernizzata */}
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
              <h3 className="text-xl font-black uppercase italic mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

{/* SEZIONE OPPORTUNITÀ SARTORIALI (Sostituisce i pacchetti) */}
<div className="mb-40">
  <div className="text-center mb-16">
    <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-rose-600 mb-4">Tailor-Made Partnerships</h3>
    <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-6 leading-tight">Soluzioni su misura per i tuoi <span className="text-white">Obiettivi</span></h2>
    <p className="text-zinc-500 max-w-2xl mx-auto">
      Non credo nei pacchetti standard. Ogni azienda ha obiettivi diversi: lavoriamo insieme per costruire un progetto che massimizzi il tuo ROI.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Card 1: Brand Awareness */}
    <div className="group relative bg-zinc-900/30 border border-white/5 rounded-[2rem] p-10 overflow-hidden hover:border-rose-600/40 transition-all duration-500">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Zap size={140} />
      </div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-rose-600/20">
          <BarChart3 size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-black uppercase italic mb-4">Brand Awareness & Media</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          Posizionamento premium del logo sulla <strong>livrea dell'auto</strong>, tuta e casco. Copertura garantita durante i weekend di gara con dirette TV e streaming globale, assicurando milioni di contatti visivi stagionali.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Livery Design', 'TV Coverage', 'Social Media Storytelling'].map((tag) => (
            <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Card 2: B2B & Networking */}
    <div className="group relative bg-zinc-900/30 border border-white/5 rounded-[2rem] p-10 overflow-hidden hover:border-blue-600/40 transition-all duration-500">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Target size={140} />
      </div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
          <Users size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-black uppercase italic mb-4">B2B & Corporate Experiences</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          Trasforma il paddock nel tuo ufficio marketing. <strong>Hospitality VIP</strong>, accesso esclusivo alla griglia di partenza e meet-and-greet privati per consolidare il rapporto con i tuoi partner e top client.
        </p>
        <div className="flex flex-wrap gap-2">
          {['VIP Hospitality', 'Grid Walk', 'Networking Events'].map((tag) => (
            <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Card 3: Content Creation */}
    <div className="group relative bg-zinc-900/30 border border-white/5 rounded-[2rem] p-10 overflow-hidden hover:border-purple-600/40 transition-all duration-500">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Rocket size={140} />
      </div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-600/20">
          <Zap size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-black uppercase italic mb-4">Content & Digital Strategy</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          Produzione di contenuti video e fotografici professionali durante i test e le gare. Creiamo <strong>storytelling emozionale</strong> per i canali social del tuo brand, collegando l'innovazione della tua azienda alla performance in pista.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Custom Video', 'Product Placement', 'Brand Ambassador'].map((tag) => (
            <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Card 4: Corporate Incentive */}
    <div className="group relative bg-zinc-900/30 border border-white/5 rounded-[2rem] p-10 overflow-hidden hover:border-orange-500/40 transition-all duration-500">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Globe size={140} />
      </div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
          <Target size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-black uppercase italic mb-4">Incentive & Team Building</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          Utilizza la mia immagine e la vettura per eventi aziendali, convention e fiere. Possibilità di organizzare <strong>Driving Experiences</strong> in pista o simulatori professionali per i dipendenti e la forza vendita.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Corporate Events', 'Driver Coaching', 'Simulator Sessions'].map((tag) => (
            <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

        {/* LOGO GRID - Sezione Partner Attuali */}
        <div className="mb-40 text-center">
          <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600 mb-12">I Partner che mi sostengono</h3>
          <div className="bg-white/5 backdrop-blur-sm border-y border-white/5 py-16">
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
              {currentSponsors.map((s, i) => (
                <div key={i} className="flex items-center justify-center">
                   <span className="text-3xl font-black text-white italic tracking-tighter uppercase opacity-50">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CALL TO ACTION - Download Pitch Deck */}
        <div className="relative group overflow-hidden rounded-[2.5rem]">
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
          {/* Grafica decorativa scacchi */}
          <div className="absolute top-0 right-0 w-32 h-full bg-white/5 -skew-x-12 translate-x-16" />
        </div>

      </div>
    </div>
  );
};

export default SponsorPage;