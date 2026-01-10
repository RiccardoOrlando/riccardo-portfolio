import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icone per il design
import { ChevronDown, ChevronUp, Trophy, Flag, Clock, Car, Award, Zap } from 'lucide-react'; 

// Componenti Layout (Assumi che Header e PageBanner siano disponibili)
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

// Dati della Carriera (COMPLETI, REVISIONATI e PROFESSIONALI)
const careerData = [
    // BLOCCO 2025 (Formula 4 e KZ2) - AGGIORNATO CON RISULTATI F4
    {
        year: '2025',
        category: 'Focus Formula 4 & Campionato KZ2',
        team: 'Il tuo Team F4/KZ2',
        engine: 'TM Racing / Motore F4',
        summary: [
            { icon: <Zap className="w-6 h-6" />, label: 'Vittorie F4 (Parziali)', value: '4' }, 
            { icon: <Award className="w-6 h-6" />, label: 'Obiettivo', value: 'Formula Regional' },
            { icon: <Trophy className="w-6 h-6" />, label: 'Statistiche', value: 'Top 3 Finale' }, 
        ],
        championships: [
            {
                championshipName: 'Formula 4 FX Italian Series',
                categoryDetail: '6 Round disputati | Categoria Monoposto Tatuus F.4',
                events: [
                    { 
                        eventName: 'Round 1 - Mugello (FI)', 
                        date: '28-30/03/2025',
                        results: [
                            { session: 'Qualifying Practice', position: 'P3' },
                            { session: 'Race 1', position: 'P4' },
                            { session: 'Race 2', position: 'P1' },
                        ]
                    },
                    { 
                        eventName: 'Round 2 - Magione (PG)', 
                        date: '09-11/05/2025',
                        results: [
                            { session: 'Qualifying Practice', position: 'P3' },
                            { session: 'Race 1', position: 'P1' },
                            { session: 'Race 2', position: 'P6' },
                        ]
                    },
                    { 
                        eventName: 'Round 3 - Varano (PR)', 
                        date: '30/05-01/06/2025',
                        results: [
                            { session: 'Qualifying Practice', position: 'P4' },
                            { session: 'Race 1', position: 'P3' },
                            { session: 'Race 2', position: 'P2' },
                        ]
                    },
                    { 
                        eventName: 'Round 4 - Imola (BO)', 
                        date: '04-06/07/2025',
                        results: [
                            { session: 'Qualifying Practice', position: 'P1' },
                            { session: 'Race 1', position: 'P1' },
                            { session: 'Race 2', position: 'P3' },
                        ]
                    },
                    { 
                        eventName: 'Round 5 - Vallelunga (RM)', 
                        date: '19-21/09/2025',
                        results: [
                            { session: 'Qualifying Practice', position: 'P4' },
                            { session: 'Race 1', position: 'P2' },
                            { session: 'Race 2', position: 'DNF' },
                        ]
                    },
                    { 
                        eventName: 'Round 6 - Misano (RN)', 
                        date: '14-16/11/2025',
                        results: [
                            { session: 'Qualifying Practice', position: 'P3' },
                            { session: 'Race 1', position: 'P1' },
                            { session: 'Race 2', position: 'P2' },
                        ]
                    },
                ]
            },
            {
                championshipName: 'TEST F4 (Preparazione Campionato)',
                categoryDetail: 'Test ufficiali pre-stagionali F4',
                events: [
                    { 
                        eventName: 'Test Ufficiale - Mugello (FI)', 
                        date: '09/03/2025',
                        results: [
                            { session: 'Dettaglio', position: 'Primo Test su Autodromo' },
                            { session: 'Ultima Sessione', position: 'P1' },
                        ]
                    },
                ]
            },
            
        ]
    },
    // BLOCCO 2024 (COMPLETO)
    {
        year: '2024',
        category: 'Campione Siciliano Assoluto Karting Sicilia',
        team: 'Il tuo Team Kart 2024',
        engine: 'TM Racing (125cc) / F4 Testing',
        summary: [
            { icon: <Trophy className="w-6 h-6" />, label: 'Titolo Vinto', value: 'Campione Siciliano Assoluto' },
            { icon: <Award className="w-6 h-6" />, label: 'Podi Totali', value: 'Alto Numero' },
            { icon: <Clock className="w-6 h-6" />, label: 'Focus Principale', value: 'KZ2 & F4 Testing' }, 
        ],
        championships: [
            {
                championshipName: 'CAMPIONATO COPPA ITALIA 8° ZONA ACI 2024',
                categoryDetail: '8 Round + Final Cup',
                events: [
                    { eventName: 'Melilli (SR)', date: '28/01/2024', results: [ { session: 'Qualifying Practice', position: 'P3' }, { session: 'Prefinale', position: 'P2' }, { session: 'Finale', position: 'P2' } ] },
                    { eventName: 'Triscina (TP) - Round 2', date: '25/02/2024', results: [ { session: 'Qualifying Practice', position: 'P5' }, { session: 'Prefinale', position: 'P3' }, { session: 'Finale', position: 'P2' } ] },
                    { eventName: 'Triscina (TP) - Round 3', date: '07/04/2024', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Prefinale', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                    { eventName: 'Ispica (RG)', date: '16/06/2024', results: [ { session: 'Qualifying Practice', position: 'P2' }, { session: 'Prefinale', position: 'P2' }, { session: 'Finale', position: 'P5' } ] },
                    { eventName: 'Favara (AG)', date: '07/07/2024', results: [ { session: 'Qualifying Practice', position: 'P2' }, { session: 'Prefinale', position: 'P1' }, { session: 'Finale', position: 'P6' } ] },
                    { eventName: 'Villarosa (EN)', date: '01/09/2024', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Prefinale', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                    { eventName: 'Melilli (SR) - Round 7', date: '20/10/2024', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Prefinale', position: 'P2' }, { session: 'Finale', position: 'P1' } ] },
                    { eventName: 'FINAL CUP - Triscina (TP)', date: '22/12/2024', results: [ { session: 'Qualifying Practice', position: 'P3' }, { session: 'Finale', position: 'P6' } ] },
                ]
            },
            {
                championshipName: 'COPPA DEI CAMPIONI ACI KARTING',
                categoryDetail: 'Evento Unico | DOPPIO PODIO NAZIONALE',
                events: [
                    { 
                        eventName: 'Battipaglia (SA)', 
                        date: '01-03/11/2024',
                        results: [
                            { session: 'Qualifying Practice 1', position: 'P1' },
                            { session: 'Race 1', position: 'P1' },
                            { session: 'Qualifying Practice 2', position: 'P2' },
                            { session: 'Race 2', position: 'P2' },
                        ]
                    },
                ]
            },
            {
                championshipName: 'COPPA DI ZONA AREA SICILIA (ACI KARTING)',
                categoryDetail: 'Evento Unico',
                events: [
                    { 
                        eventName: 'Triscina (TP)', 
                        date: '29/09/2024',
                        results: [
                            { session: 'Qualifying Practice', position: 'P1' },
                            { session: 'Prefinale', position: 'P1' },
                            { session: 'Finale', position: 'P1' },
                        ]
                    },
                ]
            },
            {
                championshipName: 'CAMPIONATO ITALIANO CIRCUITI CITTADINI 2024',
                categoryDetail: '4 Round disputati (su 8 totali) + Finale a Marsala',
                events: [
                    { eventName: 'Custonaci (TP)', date: '30/06/2024', results: [ { session: 'Qualifying Practice', position: 'P2' }, { session: 'Finale', position: 'P1' } ] },
                    { eventName: 'Bagheria (PA)', date: '27/10/2024', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                    { eventName: 'Caltanissetta (CL)', date: '24/11/2024', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P3' } ] },
                    { eventName: 'Marsala (TP) - Finale', date: '15/12/2024', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                ]
            },
            {
                championshipName: 'CAMPIONATO ITALIANO ACI KARTING',
                categoryDetail: '2 Tappe disputate di 5 (KZ2, Problemi Tecnici Rilevanti)',
                events: [
                    { 
                        eventName: 'Round 1 - Triscina (TP) | Problemi Tecnici', date: '19-21/04/2024',
                        results: [
                            { session: 'Official Practice (Dispari)', position: 'P13' },
                            { session: 'Qualifying Practice', position: 'P22' },
                            { session: 'Eliminatory B-C', position: 'DNF (Problema Tecnico)' },
                            { session: 'Eliminatory A-C', position: 'DNF (Problema Tecnico)' },
                            { session: 'Eliminatory C-D', position: 'DNF (Problema Tecnico)' },
                            { session: 'Race 1', position: 'Not Qualified' },
                            { session: 'Race 2', position: 'Not Qualified' },
                        ]
                    },
                    { 
                        eventName: 'Round 3 - Sarno (SA) | Problemi al Motore', date: '19-21/07/2024',
                        results: [
                            { session: 'Practice', position: 'P28' },
                            { session: 'Official Practice', position: 'P31' },
                            { session: 'Qualifying Practice', position: 'P28' },
                            { session: 'Manche 1', position: 'P28' },
                            { session: 'Manche 2', position: 'P23' },
                            { session: 'Race 1', position: 'DNF (Problema Motore)' },
                            { session: 'Race 2', position: 'DNF (Problema Motore)' },
                        ]
                    },
                ]
            },
            {
                championshipName: 'TEST F4 (Preparazione 2025)',
                categoryDetail: 'Sessioni di test ufficiali (Inizio)',
                events: [
                    { 
                        eventName: 'Primo Test F4 - Sarno (SA)', 
                        date: '04/10/2024',
                        results: [
                            { session: 'Dettaglio', position: 'Molto Bene' },
                            { session: 'Focus', position: 'Prima presa di contatto' },
                        ]
                    },
                ]
            },
        ]
    },
    // BLOCCO 2023 (COMPLETO)
    {
        year: '2023',
        category: 'Campione Assoluto Karting Sicilia',
        team: 'Il tuo Team Kart 2023',
        engine: '125cc (KZ2/KZN)',
        summary: [
            { icon: <Trophy className="w-6 h-6" />, label: 'Titolo Vinto', value: 'Campione Assoluto' }, 
            { icon: <Award className="w-6 h-6" />, label: 'Round Totali', value: '16+' },
            { icon: <Clock className="w-6 h-6" />, label: 'Categoria Principale', value: 'KZN Rookie' }, 
        ],
        championships: [
            {
                championshipName: 'CAMPIONATO COPPA ITALIA 8° ZONA ACI 2023',
                categoryDetail: '7 Round KZN Rookie, 1 Round KZ2',
                events: [
                    { eventName: 'Melilli (SR) - KZN Rookie', date: '26/02/2023', results: [ { session: 'Qualifying Practice', position: 'P2' }, { session: 'Prefinale', position: 'DNS' }, { session: 'Finale', position: 'P10' } ] },
                    { eventName: 'Triscina (TP) - KZ2', date: '26/03/2023', results: [ { session: 'Qualifying Practice', position: 'P13' }, { session: 'Prefinale', position: 'P10' }, { session: 'Finale', position: 'P13' } ] },
                    { eventName: 'Ispica (RG) - KZN Rookie', date: '30/04/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Prefinale', position: 'P2' }, { session: 'Finale', position: 'P2' } ] },
                    { eventName: 'Minoa (AG) - KZN Rookie', date: '04/06/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Prefinale', position: 'P2' }, { session: 'Finale', position: 'P2' } ] },
                    { eventName: 'Villarosa (EN) - KZN Rookie', date: '02/07/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Prefinale', position: 'P2' }, { session: 'Finale', position: 'P2' } ] },
                    { eventName: 'Vittoria (RG) - KZN Rookie', date: '03/09/2023', results: [ { session: 'Qualifying Practice', position: 'P3' }, { session: 'Prefinale', position: 'P3' }, { session: 'Finale', position: 'P9' } ] },
                    { eventName: 'Melilli (SR) - KZN Rookie', date: '01/10/2023', results: [ { session: 'Qualifying Practice', position: 'P3' }, { session: 'Prefinale', position: 'P3' }, { session: 'Finale', position: 'P10' } ] },
                    { eventName: 'Triscina (TP) - KZN Rookie', date: '22/10/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Prefinale', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                ]
            },
            {
                championshipName: 'CAMPIONATO TROFEO NAZIONALE CIRCUITI CITTADINI 2023',
                categoryDetail: '8 Round KZN Rookie',
                events: [
                    { eventName: 'Custonaci (TP)', date: '15-16/04/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                    { eventName: 'Sciacca (AG)', date: '06-07/05/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P17' } ] },
                    { eventName: 'Montevago (AG)', date: '27-28/05/2023', results: [ { session: 'Qualifying Practice', position: 'P2' }, { session: 'Finale', position: 'P6' } ] },
                    { eventName: 'Trapani (TP)', date: '24-25/06/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P19' } ] },
                    { eventName: 'Bagheria (PA)', date: '16-17/09/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P10' } ] },
                    { eventName: 'Caltanissetta (CL)', date: '07-08/10/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P2' } ] },
                    { eventName: 'Roccalumera (ME)', date: '04-05/11/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                    { eventName: 'Marsala (TP)', date: '02-03/12/2023', results: [ { session: 'Qualifying Practice', position: 'P1' }, { session: 'Finale', position: 'P1' } ] },
                ]
            },
            {
                championshipName: 'FINAL CUP 2023 - CIRCUITO INTER. TRISCINA',
                categoryDetail: 'Prova unica KZN Rookie',
                events: [
                    { 
                        eventName: 'Evento Unico - Triscina', 
                        date: '17/12/2023',
                        results: [
                            { session: 'Qualifying Practice', position: 'P2' },
                            { session: 'Finale', position: 'P1' },
                        ]
                    },
                ]
            },
            {
                championshipName: 'CAMPIONATO ROK CUP ITALY',
                categoryDetail: '1 Round disputato (Categoria Shifter Rok)',
                events: [
                    { 
                        eventName: '8° Round - Cremona Karting Circuit (CR)', 
                        date: 'GG/MM/2023', 
                        results: [
                            { session: 'Official Practice', position: 'P18' },
                            { session: 'Qualifying Practice', position: 'P21' },
                            { session: 'Race 1', position: 'P21' },
                            { session: 'Race 2', position: 'P19' },
                        ]
                    },
                ]
            },
        ]
    },
    // BLOCCO 2022 (COMPLETO)
    {
        year: '2022',
        category: 'Inizi del Successo nel Karting',
        team: 'Karting Sicilia / Team Privato',
        engine: '125cc',
        summary: [
            { icon: <Trophy className="w-6 h-6" />, label: 'Vittorie', value: '1' }, 
            { icon: <Award className="w-6 h-6" />, label: 'Podi', value: '3' },
            { icon: <Clock className="w-6 h-6" />, label: 'Pole Position', value: '1' }, 
        ],
        championships: [
            {
                championshipName: 'Campionato Regionale Piste ACI 125 Interprovinciale',
                categoryDetail: 'Categoria 125 Interprovinciale',
                events: [
                    { 
                        eventName: 'Round 1 - Triscina (TP)', 
                        date: '17/07/2022',
                        results: [
                            { session: 'Qualifying Practice', position: 'P4' },
                            { session: 'Prefinale', position: 'P7' },
                            { session: 'Finale', position: 'P4' },
                        ]
                    },
                    { 
                        eventName: 'Round 2 - Triscina (TP)', 
                        date: '23/11/2022',
                        results: [
                            { session: 'Qualifying Practice', position: 'P3' },
                            { session: 'Prefinale', position: 'P4' },
                            { session: 'Finale', position: 'P2' },
                        ]
                    },
                ]
            },
            {
                championshipName: 'Campionato Italiano Circuiti Cittadini 125 NEW ENTRY',
                categoryDetail: 'Categoria 125 NEW ENTRY',
                events: [
                    { 
                        eventName: 'Round 1 - Cefalù (PA)', 
                        date: '13/11/2022',
                        results: [
                            { session: 'Qualifying Practice', position: 'P3' },
                            { session: 'Finale', position: 'P1' },
                        ]
                    },
                    { 
                        eventName: 'Round 2 - Marsala (TP)', 
                        date: '27/11/2022',
                        results: [
                            { session: 'Qualifying Practice', position: 'P5' },
                            { session: 'Finale', position: 'DNF' },
                        ]
                    },
                ]
            },
            {
                championshipName: 'Final Cup',
                categoryDetail: 'Categoria 125 Interprovinciale',
                events: [
                    { 
                        eventName: 'Evento Unico - Triscina', 
                        date: '18/12/2022',
                        results: [
                            { session: 'Qualifying Practice', position: 'P1' },
                            { session: 'Finale', position: 'P2' },
                        ]
                    },
                ]
            },
        ]
    },
];

const Carriera = () => {
    // Stato per espandere l'Anno (Livello 1)
    const [expandedYear, setExpandedYear] = useState('2024'); 
    // Stato per espandere il Campionato (Livello 2)
    const [expandedChampionship, setExpandedChampionship] = useState(null);
    // Stato per espandere l'Evento (Livello 3)
    const [expandedEvent, setExpandedEvent] = useState(null);

    const toggleYear = (year) => {
        if (expandedYear === year) {
            setExpandedYear(null);
        } else {
            setExpandedYear(year);
        }
        setExpandedChampionship(null);
        setExpandedEvent(null);
    };

    const toggleChampionship = (championshipName) => {
        if (expandedChampionship === championshipName) {
            setExpandedChampionship(null);
        } else {
            setExpandedChampionship(championshipName);
        }
        setExpandedEvent(null);
    };

    const toggleEvent = (eventName) => {
        setExpandedEvent(expandedEvent === eventName ? null : eventName);
    };

    return (
        <>
            <Header />
            <PageBanner 
                title="Carriera"
                subtitle="Risultati, vittorie e traguardi raggiunti in pista"
                imageUrl="/img/fotoimolavariantealtauscita.webp"
                path="Home / Carriera"
            />
<section className="py-20 bg-[#020202] text-zinc-100 relative overflow-hidden">
  {/* BACKGROUND GRADIENT COMPLESSO - Effetto Mesh più vibrante */}
  <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />
  <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-700/15 rounded-full blur-[140px] pointer-events-none" />
  <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

  <div className="max-w-6xl mx-auto px-4 relative z-10">
    
    {/* TITOLO SEZIONE - Più compatto */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
        Il Mio <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Palmarès</span>
      </h2>
      <div className="h-1 w-20 bg-rose-600 mx-auto mt-4 -skew-x-12 shadow-[0_0_15px_rgba(225,29,72,0.8)]"></div>
    </div>

    <div className="space-y-10">
      {careerData.map((data, index) => (
        <div 
          key={index} 
          className="group relative bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-500 hover:border-rose-500/40 overflow-hidden"
        >
          {/* Sottile bagliore interno al passaggio del mouse */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="p-6 md:p-8 relative z-10">
            {/* HEADER ANNO - Rimpicciolito */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
              <div className="flex items-center gap-5">
                <span className="text-6xl font-black italic tracking-tighter text-white/10 group-hover:text-rose-500/40 transition-colors duration-500 leading-none">
                  {data.year}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase italic text-white leading-tight">{data.category}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose-500 mt-1">
                    {data.team} <span className="mx-2 text-zinc-700">|</span> {data.engine}
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK STATS - Più piccole e compatte */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {data.summary.map((stat, statIndex) => (
                <div key={statIndex} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between group/stat hover:bg-white/10 transition-all">
                  <div>
                    <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mb-0.5">{stat.label}</p>
                    <p className="text-2xl font-black text-white italic leading-none">{stat.value}</p>
                  </div>
                  <div className="text-rose-500 opacity-60 group-hover/stat:opacity-100 transition-opacity transform scale-90 group-hover/stat:scale-100">
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTONE ACCORDION - Snello e moderno */}
            <button
              onClick={() => toggleYear(data.year)}
              className={`w-full flex justify-between items-center py-3.5 px-6 rounded-xl font-black uppercase italic text-xs tracking-[0.15em] transition-all duration-300 ${
                expandedYear === data.year 
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20" 
                : "bg-zinc-100 text-black hover:bg-rose-600 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                {expandedYear === data.year ? "Close Report" : "View Season Details"}
              </span>
              {expandedYear === data.year ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {/* CONTENUTO ESPANDIBILE */}
            {expandedYear === data.year && (
              <div className="mt-6 space-y-3 animate-in fade-in zoom-in-95 duration-500">
                {data.championships.map((champ, champIndex) => (
                  <div key={champIndex} className="bg-black/40 rounded-xl border border-white/5 overflow-hidden">
                    <button
                      onClick={() => toggleChampionship(champ.championshipName)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shadow-lg">
                          <Trophy size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-black uppercase italic text-white leading-tight">{champ.championshipName}</p>
                          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{champ.categoryDetail}</p>
                        </div>
                      </div>
                      {expandedChampionship === champ.championshipName ? <ChevronUp size={16} className="text-rose-500" /> : <ChevronDown size={16} className="text-zinc-600" />}
                    </button>

                    {expandedChampionship === champ.championshipName && (
                      <div className="p-3 pt-0 space-y-1.5">
                        {champ.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="bg-zinc-900/80 rounded-lg border border-white/5">
                            <button
                              onClick={() => toggleEvent(event.eventName)}
                              className="w-full flex justify-between items-center p-3 text-[11px] font-bold uppercase italic hover:text-rose-500 transition-colors"
                            >
                              <span className="flex items-center gap-2">
                                <Flag size={12} className="text-rose-600" />
                                {event.eventName}
                              </span>
                              {expandedEvent === event.eventName ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>

                            {expandedEvent === event.eventName && (
                              <div className="px-3 pb-3">
                                <table className="w-full text-left">
                                  <tbody className="divide-y divide-white/5">
                                    {event.results.map((result, resIndex) => (
                                      <tr key={resIndex} className="group/row">
                                        <td className="py-2 text-[11px] font-medium text-zinc-400 uppercase italic group-hover/row:text-white transition-colors">
                                          {result.session}
                                        </td>
                                        <td className="py-2 text-right">
                                          <span className="inline-block bg-white/5 text-rose-500 text-[10px] font-black px-2 py-0.5 -skew-x-12 group-hover/row:bg-rose-600 group-hover/row:text-white transition-all">
                                            {result.position}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* CTA FINALE - Più snella e concentrata */}
    <div className="mt-24 relative group max-w-4xl mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-zinc-900/80 border border-white/10 p-10 rounded-2xl text-center backdrop-blur-md">
        <h3 className="text-3xl font-black uppercase italic mb-4">Driving to the <span className="text-rose-600">Future</span></h3>
        <p className="text-zinc-400 text-sm font-light mb-8 leading-relaxed max-w-xl mx-auto">
          Il prossimo obiettivo è la <span className="text-white font-bold">Formula Regional</span>. 
          Unisciti al mio team come Partner Ufficiale.
        </p>
        <Link 
          to="/sponsor" 
          className="inline-block bg-white text-black font-bold uppercase italic py-4 px-10 rounded-full hover:bg-rose-600 hover:text-white transition-all transform hover:scale-105 text-sm tracking-[0.2em]"
        >
          Become a Partner
        </Link>
      </div>
    </div>
  </div>
</section>
        </>
    );
};

export default Carriera;