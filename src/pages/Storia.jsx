import React from 'react';
import { Zap, Shield, Target, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const Storia = () => {
  
  const coreValues = [
    { icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, title: 'Resilienza', description: 'Cadere e rialzarsi, soprattutto dopo un incidente. La pista insegna a non mollare mai.' },
    { icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, title: 'Passione', description: "Il Kart non era solo un hobby, era la mia ossessione. Quella fiamma brucia ancora oggi." },
    { icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, title: 'Focus', description: 'La telemetria non perdona. Ho imparato a essere chirurgico in ogni millimetro di pista.' },
    { icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, title: 'Teamwork', description: 'La fiducia reciproca tra pilota, meccanici e sponsor è la vera chiave della velocità.' },
  ];

  // Ho aggiunto i marcatori ** per far funzionare la tua logica di evidenziazione
  const myStoryText = {
    part1: "Non è iniziato tutto con un sedile in carbonio e un motore ibrido. La mia storia cominciava in un piccolo Kart, sporco di olio e con un telaio che cigolava. La prima volta che ho superato i 50 km/h, ho capito che non avrei più voluto fare altro nella vita. Quella sensazione, quel mix di paura e adrenalina pura, è diventata la mia bussola.",
    part2: "Già dalle prime gare, le mie prestazioni erano chiare: il successo arrivava. Negli anni mi hanno detto che ho una **capacità di adattamento** fuori dal normale. In quei momenti ho avuto la certezza che sarei arrivato in **Formula 1**. La mia vera sfida è sempre stata la ricerca dei fondi. In questo, i miei **genitori** hanno giocato un ruolo insostituibile. Mi hanno sostenuto con sacrifici enormi. Ho imparato che la vera gara si vince anche fuori dalla pista, lavorando con **sponsor e partner**.",
    part3: "Arrivare in **F4** è stata una vertigine, un traguardo raggiunto a prezzo di innumerevoli sacrifici: notti insonni, giornate intere tra palestra e simulatore. Maggiore velocità, maggiore responsabilità. Oggi, la mia storia testimonia che la passione e la **disciplina** possono colmare il divario con chi ha avuto percorsi più facili. La mia prossima sfida non è solo il **Formula Regional**, ma ispirare chiunque abbia un sogno grande quanto la velocità.",
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <PageBanner 
        title="La Mia Storia"
        subtitle="Dalle prime curve in Kart al sogno della Formula 4"
        imageUrl="/img/fotoimolaesultanza.webp"
        path="Home / Storia"
      />
      
      {/* SEZIONE CONTENUTO */}
      <section className="py-12 md:py-24 bg-zinc-900 text-white relative overflow-hidden">
        {/* Texture sfondo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          
          {/* Titolo Sezione */}
          <div className="text-left mb-10 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-white mb-4 md:mb-6 leading-none">
              Il Viaggio: <span className="text-red-600 block md:inline">DNA Racing</span>
            </h2>
            <div className="h-1 md:h-1.5 w-24 md:w-32 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            
            {/* SIDEBAR VALORI (Sticky su Desktop) */}
            <div className="lg:col-span-1 h-fit lg:sticky lg:top-24">
              <div className="space-y-6 md:space-y-8 p-6 md:p-8 bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tight text-white mb-4 border-b border-zinc-800 pb-4">
                  Core <span className="text-red-600">Values</span>
                </h3>
                {coreValues.map((value, index) => (
                  <div key={index} className="flex space-x-4 group">
                    <div className="flex-shrink-0 p-2 md:p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 h-fit">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white uppercase italic tracking-wide">{value.title}</h4>
                      <p className="text-zinc-500 text-xs md:text-sm mt-1 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TESTO STORIA */}
            <div className="lg:col-span-2 space-y-8 md:space-y-10">
              
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed italic font-medium">
                <span className="text-red-600 text-3xl md:text-4xl leading-none mr-2">“</span>
                {myStoryText.part1}
              </p>

              {/* Blocco 2 con bordo rosso */}
              <div className="text-base md:text-lg text-zinc-400 leading-relaxed border-l-2 border-red-600/50 pl-4 md:pl-8 py-2 bg-zinc-950/30 rounded-r-xl">
                {myStoryText.part2.split('**').map((part, i) => 
                  i % 2 === 1 ? <span key={i} className="text-white font-bold italic border-b border-red-600/30">{part}</span> : part
                )}
              </div>

              {/* Blocco 3 Gradiente */}
              <div className="text-base md:text-lg text-zinc-300 leading-relaxed font-medium bg-gradient-to-r from-zinc-800/50 to-transparent p-5 md:p-6 rounded-xl border border-zinc-800">
                {myStoryText.part3.split('**').map((part, i) => 
                  i % 2 === 1 ? <span key={i} className="text-red-600 font-black italic uppercase text-sm md:text-base">{part}</span> : part
                )}
              </div>
              
              {/* CTA Box Responsive */}
              <div className="mt-10 md:mt-16 p-6 md:p-10 bg-zinc-950 rounded-3xl border border-zinc-800 relative overflow-hidden group text-center md:text-left">
                  {/* Bagliore background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px]"></div>
                  
                  <h4 className="text-2xl md:text-3xl font-black italic text-white uppercase mb-4 tracking-tighter relative z-10">
                    La Storia <span className="text-red-600">Continua.</span>
                  </h4>
                  <p className="text-zinc-500 text-sm md:text-base mb-8 max-w-md mx-auto md:mx-0 relative z-10">
                    Ogni tuo supporto è un giro veloce nel nostro prossimo capitolo. Corriamo insieme verso il traguardo.
                  </p>
                  
                  <Link to="/sponsor" className="relative z-10 block w-full md:inline-block md:w-auto text-center overflow-hidden bg-red-600 text-white font-black italic uppercase tracking-widest py-4 px-10 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 shadow-xl">
                      Diventa Partner
                  </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Storia;