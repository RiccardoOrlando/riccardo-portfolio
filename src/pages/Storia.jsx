import React from 'react';
// Icone per i valori (lucide-react)
import { Zap, Shield, Target, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
// Componenti Layout
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const Storia = () => {
  
  // Array dei Valori che definiscono la tua storia
  const coreValues = [
    { icon: <Shield className="w-8 h-8 text-red-600" />, title: 'Resilienza', description: 'Cadere e rialzarsi, soprattutto dopo un incidente o una gara storta. La pista insegna a non mollare mai.' },
    { icon: <Zap className="w-8 h-8 text-red-600" />, title: 'Passione Inarrestabile', description: "Il Kart non era solo un hobby, era la mia ossessione. Quella fiamma brucia ancora oggi, guidandomi in ogni curva." },
    { icon: <Target className="w-8 h-8 text-red-600" />, title: 'Focus e Precisione', description: 'La telemetria non perdona. Ogni millisecondo e ogni millimetro contano. Ho imparato a essere chirurgico nella mia guida.' },
    { icon: <HeartHandshake className="w-8 h-8 text-red-600" />, title: 'Sacrificio e Teamwork', description: 'Dietro al volante c’è il team: meccanici, ingegneri, sponsor. La fiducia reciproca è la vera chiave della velocità.' },
  ];

  // Testo Placeholder AGGIORNATO CON IL RICONOSCIMENTO AI GENITORI
  const myStoryText = {
    part1: "Non è iniziato tutto con un sedile in carbonio e un motore ibrido. La mia storia cominciava in un piccolo Kart, sporco di olio e con un telaio che cigolava. La prima volta che ho superato i 50 km/h, ho capito che non avrei più voluto fare altro nella vita. Quella sensazione, quel mix di paura e adrenalina pura, è diventata la mia bussola. Ma non è stato facile.",
    
    // TESTO CORRETTO E POTENZIATO
    part2: "Già dalle prime gare, le mie prestazioni erano subito chiare: il successo arrivava. negli anni ho visto e mi dissero la maggior parte delle persone con cui ho lavorato che ho una capacità di adattamento ed apprensione fuori dal normale. In quei momenti ho avuto la certezza che sarei arrivato in Formula 1. La mia vera sfida, e il maggiore ostacolo, è sempre stata la ricerca dei fondi necessari per poter correre e avanzare nelle categorie. In questo, **i miei genitori hanno giocato un ruolo insostituibile**. Mi hanno sostenuto fin dall'inizio, con sacrifici enormi, e sono le persone a cui devo tutto. Ho imparato che la vera gara si vince anche fuori dalla pista, lavorando con sponsor e partner. Sono stati gli anni del Kart, anni di duro lavoro e dedizione, a gettare le basi per la transizione alla Formula 4.",
    
    part3: "**Arrivare in F4 è stata una vertigine**, un traguardo raggiunto a prezzo di innumerevoli sacrifici: notti insonni passate a creare contenuti per sponsor, il più delle volte fallimentari, ma so che dopo tanti no presto arriverà il si che mi farà svoltare la carriera. giornate intere tra palestra e simulatore. Maggiore velocità, maggiore responsabilità e sponsor da onorare. Oggi, la mia storia è una testimonianza che la passione, unita a una meticolosa disciplina, può colmare il divario con i piloti che hanno avuto percorsi più facili. **Questo non è un punto di arrivo, è solo l'inizio**. La mia prossima sfida non è solo il Formula Regional, ma ispirare chiunque abbia un sogno grande quanto la velocità a non fermarsi mai davanti alle difficoltà.",
  };

  return (
    <>
      <Header />
      <PageBanner 
        title="La Mia Storia"
        subtitle="Il percorso che mi ha portato a diventare pilota di Formula 4"
        imageUrl="/img/fotoimolaesultanza.jpg"
        path="Home / Storia"
      />
      <section className="py-24 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-6xl font-extrabold text-white mb-4">
              Il Viaggio: Passione, Sfide e Crescita
            </h2>
            <p className="text-red-500 text-xl font-medium">
              Dalle prime curve nel Kart al sedile della F4.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-8 p-6 bg-gray-900 rounded-lg shadow-xl border-l-4 border-red-600 h-fit">
              <h3 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">I Pilastri della Mia Carriera</h3>
              {coreValues.map((value, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 p-2 bg-red-600/10 rounded-full">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 space-y-8">
              
              <p className="text-lg text-gray-300 leading-relaxed italic">
                — {myStoryText.part1}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-red-600 pl-4">
                {myStoryText.part2}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                {myStoryText.part3}
              </p>
              
              <div className="mt-10 pt-6 border-t border-gray-700">
                  <h4 className="text-2xl font-bold text-red-600 mb-3">La Storia Continua.</h4>
                  <p className="text-gray-400 mb-5">Ogni tuo supporto è un giro veloce nel nostro prossimo capitolo.</p>
                  <Link to="/sponsor" className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-600/50 inline-block text-center">
                      Sostienimi Qui
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Storia;