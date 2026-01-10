import React from 'react';
import { Zap, Shield, Target, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const Storia = () => {
  
  const coreValues = [
    { icon: <Shield className="w-8 h-8 text-red-600" />, title: 'Resilienza', description: 'Cadere e rialzarsi, soprattutto dopo un incidente o una gara storta. La pista insegna a non mollare mai.' },
    { icon: <Zap className="w-8 h-8 text-red-600" />, title: 'Passione Inarrestabile', description: "Il Kart non era solo un hobby, era la mia ossessione. Quella fiamma brucia ancora oggi, guidandomi in ogni curva." },
    { icon: <Target className="w-8 h-8 text-red-600" />, title: 'Focus e Precisione', description: 'La telemetria non perdona. Ogni millisecondo e ogni millimetro contano. Ho imparato a essere chirurgico nella mia guida.' },
    { icon: <HeartHandshake className="w-8 h-8 text-red-600" />, title: 'Sacrificio e Teamwork', description: 'Dietro al volante c’è il team: meccanici, ingegneri, sponsor. La fiducia reciproca è la vera chiave della velocità.' },
  ];

  const myStoryText = {
    part1: "Non è iniziato tutto con un sedile in carbonio e un motore ibrido. La mia storia cominciava in un piccolo Kart, sporco di olio e con un telaio che cigolava. La prima volta che ho superato i 50 km/h, ho capito che non avrei più voluto fare altro nella vita. Quella sensazione, quel mix di paura e adrenalina pura, è diventata la mia bussola. Ma non è stato facile.",
    part2: "Già dalle prime gare, le mie prestazioni erano subito chiare: il successo arrivava. negli anni ho visto e mi dissero la maggior parte delle persone con cui ho lavorato che ho una capacità di adattamento ed apprensione fuori dal normale. In quei momenti ho avuto la certezza che sarei arrivato in Formula 1. La mia vera sfida, e il maggiore ostacolo, è sempre stata la ricerca dei fondi necessari per poter correre e avanzare nelle categorie. In questo, i miei genitori hanno giocato un ruolo insostituibile. Mi hanno sostenuto fin dall'inizio, con sacrifici enormi, e sono le persone a cui devo tutto. Ho imparato che la vera gara si vince anche fuori dalla pista, lavorando con sponsor e partner. Sono stati gli anni del Kart, anni di duro lavoro e dedizione, a gettare le basi per la transizione alla Formula 4.",
    part3: "Arrivare in F4 è stata una vertigine, un traguardo raggiunto a prezzo di innumerevoli sacrifici: notti insonni passate a creare contenuti per sponsor, il più delle volte fallimentari, ma so che dopo tanti no presto arriverà il si che mi farà svoltare la carriera. giornate intere tra palestra e simulatore. Maggiore velocità, maggiore responsabilità e sponsor da onorare. Oggi, la mia storia è una testimonianza che la passione, unita a una meticolosa disciplina, può colmare il divario con i piloti che hanno avuto percorsi più facili. Questo non è un punto di arrivo, è solo l'inizio. La mia prossima sfida non è solo il Formula Regional, ma ispirare chiunque abbia un sogno grande quanto la velocità a non fermarsi mai davanti alle difficoltà.",
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <PageBanner 
        title="La Mia Storia"
        subtitle="Il percorso che mi ha portato a diventare pilota di Formula 4"
        imageUrl="/img/fotoimolaesultanza.webp"
        path="Home / Storia"
      />
      
      {/* 1. SFONDO: Passaggio a Zinc-900 (Grigio Asfalto) */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        {/* Effetto texture asfalto/carbonio leggero sullo sfondo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-left mb-20">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6">
              Il Viaggio: <span className="text-red-600">DNA Racing</span>
            </h2>
            <div className="h-1.5 w-32 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Sidebar Valori: Più moderna, Zinc-950 */}
            <div className="lg:col-span-1 space-y-10 p-8 bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl h-fit">
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-white mb-8 border-b border-zinc-800 pb-4">
                Core <span className="text-red-600">Values</span>
              </h3>
              {coreValues.map((value, index) => (
                <div key={index} className="flex space-x-5 group">
                  <div className="flex-shrink-0 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase italic tracking-wide">{value.title}</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testo Storia: Pulito e Professionale */}
            <div className="lg:col-span-2 space-y-10">
              
              <p className="text-xl text-zinc-300 leading-relaxed italic font-medium">
                <span className="text-red-600 text-4xl leading-none">“</span> {myStoryText.part1}
              </p>

              <div className="text-lg text-zinc-400 leading-relaxed border-l-2 border-red-600/50 pl-8 py-2 bg-zinc-950/30 rounded-r-xl">
                {/* Riconoscimento Genitori evidenziato con stile */}
                {myStoryText.part2.split('**').map((part, i) => 
                  i % 2 === 1 ? <span key={i} className="text-white font-bold italic">{part}</span> : part
                )}
              </div>

              <div className="text-lg text-zinc-300 leading-relaxed font-medium bg-gradient-to-r from-zinc-800/50 to-transparent p-6 rounded-xl border border-zinc-800">
                {myStoryText.part3.split('**').map((part, i) => 
                  i % 2 === 1 ? <span key={i} className="text-red-600 font-black italic">{part}</span> : part
                )}
              </div>
              
              <div className="mt-16 p-10 bg-zinc-950 rounded-3xl border border-zinc-800 relative overflow-hidden group">
                  {/* Bagliore rosso dietro la CTA */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px]"></div>
                  
                  <h4 className="text-3xl font-black italic text-white uppercase mb-4 tracking-tighter">
                    La Storia <span className="text-red-600">Continua.</span>
                  </h4>
                  <p className="text-zinc-500 mb-8 max-w-md">Ogni tuo supporto è un giro veloce nel nostro prossimo capitolo. Corriamo insieme.</p>
                  
                  <Link to="/sponsor" className="relative overflow-hidden bg-red-600 text-white font-black italic uppercase tracking-widest py-4 px-10 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 shadow-xl inline-block">
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