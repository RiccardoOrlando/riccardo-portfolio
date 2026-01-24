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
        team: 'Technorace Competition / Gp Racing Karts',
        engine: 'TM Racing / Tatuus F4-T014',
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
        team: 'Gp Racing Karts',
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
        team: 'Gp Racing Karts',
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
        team: 'Karting Sicilia / Gp Racing Karts',
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
    const [expandedYear, setExpandedYear] = useState(null); 
    const [expandedChampionship, setExpandedChampionship] = useState(null);
    const [expandedEvent, setExpandedEvent] = useState(null);

    const toggleYear = (year) => {
        setExpandedYear(expandedYear === year ? null : year);
        setExpandedChampionship(null);
        setExpandedEvent(null);
    };

    return (
        <div className="overflow-x-hidden">
            <Header />
            <PageBanner 
                title="Carriera"
                subtitle="Risultati e traguardi in pista"
                imageUrl="/img/fotoimolavariantealtauscita.webp"
                path="Home / Carriera"
            />

            <section className="py-12 md:py-20 bg-[#020202] text-zinc-100 relative">
                {/* Background Blobs ridimensionati per non pesare sul rendering */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-600/10 blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-700/10 blur-[120px]" />
                </div>

                <div className="max-w-5xl mx-auto px-5 relative z-10">
                    
                    {/* TITOLO - Più contenuto */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                            Il Mio <span className="bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">Palmarès</span>
                        </h2>
                        <div className="h-1 w-16 bg-rose-600 mx-auto mt-3 -skew-x-12"></div>
                    </div>

                    <div className="space-y-6">
                        {careerData.map((data, index) => (
                            <div 
                                key={index} 
                                className="group bg-zinc-900/40 backdrop-blur-md rounded-xl border border-white/5 overflow-hidden transition-all hover:border-rose-500/30"
                            >
                                <div className="p-5 md:p-7">
                                    {/* HEADER ANNO - Layout corretto per mobile */}
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6">
                                        <span className="text-4xl md:text-5xl font-black italic text-white/10 leading-none group-hover:text-rose-500/20 transition-colors">
                                            {data.year}
                                        </span>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-black uppercase italic text-white leading-tight">
                                                {data.category}
                                            </h3>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500 mt-1 opacity-80">
                                                {data.team} <span className="mx-1 text-zinc-700">|</span> {data.engine}
                                            </p>
                                        </div>
                                    </div>

                                    {/* QUICK STATS - Griglia flessibile */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                                        {data.summary.map((stat, statIndex) => (
                                            <div key={statIndex} className="bg-white/5 p-3 rounded-lg flex items-center justify-between border border-white/5">
                                                <div>
                                                    <p className="text-[8px] text-zinc-500 uppercase font-black tracking-tighter">{stat.label}</p>
                                                    <p className="text-lg font-black text-white italic leading-none">{stat.value}</p>
                                                </div>
                                                <div className="text-rose-500/50 scale-75">{stat.icon}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* BOTTONE ACCORDION */}
                                    <button
                                        onClick={() => toggleYear(data.year)}
                                        className={`w-full flex justify-between items-center py-2.5 px-5 rounded-lg font-black uppercase italic text-[10px] tracking-widest transition-all ${
                                            expandedYear === data.year 
                                            ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20" 
                                            : "bg-zinc-100 text-black hover:bg-rose-600 hover:text-white"
                                        }`}
                                    >
                                        {expandedYear === data.year ? "Chiudi Stagione" : "Dettagli Stagione"}
                                        {expandedYear === data.year ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                    </button>

                                    {/* CONTENUTO ESPANDIBILE */}
                                    {expandedYear === data.year && (
                                        <div className="mt-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                            {data.championships.map((champ, champIndex) => (
                                                <div key={champIndex} className="bg-black/40 rounded-lg border border-white/5 overflow-hidden">
                                                    <button
                                                        onClick={() => toggleChampionship(champ.championshipName)}
                                                        className="w-full flex justify-between items-center p-3 text-left hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0">
                                                                <Trophy size={14} className="text-white" />
                                                            </div>
                                                            <div className="pr-4">
                                                                <p className="text-[11px] font-black uppercase italic text-white leading-tight">{champ.championshipName}</p>
                                                                <p className="text-[9px] text-zinc-500 uppercase mt-0.5">{champ.categoryDetail}</p>
                                                            </div>
                                                        </div>
                                                        {expandedChampionship === champ.championshipName ? <ChevronUp size={14} className="text-rose-500" /> : <ChevronDown size={14} className="text-zinc-600" />}
                                                    </button>

                                                    {expandedChampionship === champ.championshipName && (
                                                        <div className="p-2 pt-0 space-y-1">
                                                            {champ.events.map((event, eventIndex) => (
                                                                <div key={eventIndex} className="bg-zinc-900/60 rounded-md border border-white/5">
                                                                    <button
                                                                        onClick={() => setExpandedEvent(expandedEvent === event.eventName ? null : event.eventName)}
                                                                        className="w-full flex justify-between items-center p-2.5 text-[10px] font-bold uppercase italic text-zinc-300"
                                                                    >
                                                                        <span className="flex items-center gap-2">
                                                                            <Flag size={10} className="text-rose-600" />
                                                                            {event.eventName}
                                                                        </span>
                                                                        {expandedEvent === event.eventName ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                                                    </button>

                                                                    {expandedEvent === event.eventName && (
                                                                        <div className="px-2.5 pb-2.5 overflow-x-auto">
                                                                            <table className="w-full text-left min-w-[200px]">
                                                                                <tbody className="divide-y divide-white/5">
                                                                                    {event.results.map((result, resIndex) => (
                                                                                        <tr key={resIndex}>
                                                                                            <td className="py-1.5 text-[10px] text-zinc-500 uppercase italic">{result.session}</td>
                                                                                            <td className="py-1.5 text-right">
                                                                                                <span className="text-rose-500 text-[10px] font-black italic">{result.position}</span>
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

                    {/* CTA - Più snella */}
                    <div className="mt-16 text-center bg-zinc-900/50 border border-white/5 p-8 rounded-xl backdrop-blur-sm max-w-2xl mx-auto">
                        <h3 className="text-xl font-black uppercase italic mb-2 text-white">Verso la <span className="text-rose-600">Formula Regional</span></h3>
                        <p className="text-zinc-500 text-xs mb-6 max-w-sm mx-auto">Unisciti al mio team come Partner Ufficiale per la prossima stagione.</p>
                        <Link 
                            to="/sponsor" 
                            className="inline-block bg-white text-black font-bold uppercase italic py-3 px-8 rounded-full hover:bg-rose-600 hover:text-white transition-all text-[11px] tracking-widest"
                        >
                            Become a Partner
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Carriera;