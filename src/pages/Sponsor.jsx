import React from 'react';
import { Download, Rocket, Users, Target, Globe } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const SponsorPage = () => {
  // Esempio loghi (Sostituisci con i tuoi)
  const currentSponsors = [
    { name: "Sponsor 1", logo: "/logos/sponsor1.png" },
    { name: "Sponsor 2", logo: "/logos/sponsor2.png" },
    { name: "Sponsor 3", logo: "/logos/sponsor3.png" },
  ];

  return (
    <>
    <Header />
      <PageBanner
        title="Sponsor"
        subtitle="I partner che supportano il mio percorso sportivo"
        imageUrl="/img/fotomisanointervista.webp"
        path="Home / Sponsor"
      />
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION SPONSOR */}
        <div className="relative mb-24 py-16 border-b border-zinc-800">
          <h1 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter opacity-10 absolute -top-4 left-0">
            Partnership
          </h1>
          <div className="relative z-10">
            <h2 className="text-5xl font-black italic uppercase mb-6">Diventa parte del <span className="text-red-600">Team</span></h2>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Correre ai massimi livelli richiede precisione, dedizione e partner che credano nell'eccellenza. 
              Scopri come il tuo brand può scendere in pista insieme a me.
            </p>
          </div>
        </div>

        {/* VALORE PER IL BRAND (4 Colonne) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <Globe />, title: "Visibility", desc: "Esposizione globale sui circuiti e copertura media televisiva." },
            { icon: <Users />, title: "Community", desc: "Accesso a una fan base giovane e appassionata sui canali social." },
            { icon: <Target />, title: "B2B Events", desc: "Esperienze VIP nel paddock per i tuoi migliori clienti." },
            { icon: <Rocket />, title: "Innovation", desc: "Associazione con i valori di velocità, tecnologia e performance." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-red-600 transition-colors group">
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(item.icon, { size: 40 })}
              </div>
              <h3 className="text-xl font-bold uppercase mb-3 italic">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* LOGO GRID (Partner Attuali) */}
        <div className="mb-32 text-center">
          <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-600 mb-12">I Partner che mi sostengono</h3>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60 hover:opacity-100 transition-all">
            {/* Qui manderai i loghi degli sponsor attuali */}
            {currentSponsors.map((s, i) => (
              <div key={i} className="h-16 md:h-20 w-40 flex items-center justify-center">
                <span className="text-2xl font-bold text-zinc-700">{s.name}</span> {/* Sostituisci con <img /> */}
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION (Download Pitch Deck) */}
        <div className="bg-red-600 p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 transform -skew-x-2">
          <div className="skew-x-2">
            <h3 className="text-4xl font-black italic uppercase mb-2">Pronto a scendere in pista?</h3>
            <p className="text-red-100 font-medium">Scarica la presentazione completa dei pacchetti sponsorship.</p>
          </div>
          <button className="skew-x-2 bg-white text-black px-10 py-5 rounded-full font-black uppercase flex items-center gap-3 hover:bg-zinc-100 transition-all shadow-xl">
            <Download size={20} />
            Sponsorship Deck (PDF)
          </button>
        </div>

      </div>
    </div>
    </>
  );
};

export default SponsorPage;