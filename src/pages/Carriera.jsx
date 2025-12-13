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
                imageUrl="/img/fotoimolavariantealtauscita.jpg"
                path="Home / Carriera"
            />

            <section className="py-24 bg-gray-950 text-gray-800"> {/* Sfondo molto scuro */}
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-extrabold text-center text-red-600 mb-16">
                        Il Mio Palmarès nel Motorsport
                    </h2>

                    <div className="space-y-16">
                        {careerData.map((data, index) => (
                            // BLOCCO ANNO (Livello 1) - Bianco/Chiaro con bordo Rosso
                            <div key={index} className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-red-600 transition-shadow duration-300 hover:shadow-red-500/50">
                                
                                {/* Dati Anno (Testo Scuro) */}
                                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
                                    <div>
                                        <h3 className="text-4xl font-extrabold text-gray-900">{data.year}</h3>
                                        <p className="text-xl text-red-600 font-semibold">{data.category}</p>
                                    </div>
                                    <div className="text-right text-sm">
                                        <p className="text-gray-600">**Team:** {data.team}</p>
                                        <p className="text-gray-600">**Motore:** {data.engine}</p>
                                    </div>
                                </div>

                                {/* Riepilogo Statistiche (Card con sfondo grigio chiaro) */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {data.summary.map((stat, statIndex) => (
                                        <div key={statIndex} className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 shadow-sm border border-gray-200">
                                            <div className="text-red-600">{stat.icon}</div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* 1. Bottone per espandere l'Anno (Livello 1 Accordion) */}
                                <button
                                    onClick={() => toggleYear(data.year)}
                                    className="w-full flex justify-between items-center bg-red-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-red-700 transition-colors mt-4 shadow-md"
                                >
                                    Risultati Completi ({data.championships.length} Campionati)
                                    {expandedYear === data.year ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>

                                {/* 2. Lista Campionati (Contenuto Livello 1 Accordion) */}
                                {expandedYear === data.year && (
                                    <div className="mt-6 space-y-4 bg-gray-900 p-4 rounded-lg border border-red-600"> {/* Sfondo scuro per il blocco campionati */}
                                        {data.championships.map((champ, champIndex) => (
                                            <div key={champIndex} className="bg-gray-800 rounded-lg shadow-md border border-gray-700">
                                                
                                                {/* 2a. Bottone Campionato (Livello 2 Accordion) */}
                                                <button
                                                    onClick={() => toggleChampionship(champ.championshipName)}
                                                    className="w-full flex justify-between items-center text-white py-3 px-4 font-bold hover:bg-gray-700 transition-colors rounded-lg border-b border-gray-700"
                                                >
                                                    <span className="flex items-center">
                                                        <Trophy className="w-5 h-5 text-yellow-400 mr-3" />
                                                        {champ.championshipName}
                                                        <span className="ml-4 text-sm font-normal text-gray-400">({champ.events.length} Eventi | {champ.categoryDetail})</span>
                                                    </span>
                                                    {expandedChampionship === champ.championshipName ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                                </button>

                                                {/* 3. Lista Eventi (Contenuto Livello 2 Accordion) */}
                                                {expandedChampionship === champ.championshipName && (
                                                    <div className="p-4 pt-2 space-y-3">
                                                        {champ.events.map((event, eventIndex) => (
                                                            // BLOCCO EVENTO (Livello 3) - Sfondo chiaro per leggibilità
                                                            <div key={eventIndex} className="bg-gray-100 rounded-lg shadow-inner border border-gray-300">
                                                                
                                                                {/* 3a. Bottone Evento (Livello 3 Accordion) */}
                                                                <button
                                                                    onClick={() => toggleEvent(event.eventName)}
                                                                    className="w-full flex justify-between items-center text-gray-900 py-3 px-4 font-semibold hover:bg-gray-200 transition-colors rounded-lg"
                                                                >
                                                                    <span className="flex items-center">
                                                                        <Flag className="w-5 h-5 text-red-500 mr-3" />
                                                                        {event.eventName}
                                                                        <span className="ml-4 text-sm font-normal text-gray-600">({event.date})</span>
                                                                    </span>
                                                                    {expandedEvent === event.eventName ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                                                </button>

                                                                {/* 3b. Tabella Risultati Dettagliati (Contenuto Livello 3 Accordion) */}
                                                                {expandedEvent === event.eventName && (
                                                                    <div className="p-4 pt-0 overflow-x-auto bg-white rounded-b-lg">
                                                                        <table className="min-w-full text-left text-gray-800 text-sm">
                                                                            <thead className="text-red-600 uppercase bg-gray-100 border-b border-gray-300">
                                                                                <tr>
                                                                                    <th scope="col" className="py-2 px-4">SESSIONE</th>
                                                                                    <th scope="col" className="py-2 px-4 text-center">POSIZIONE</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {event.results.map((result, resIndex) => (
                                                                                    <tr key={resIndex} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                                                                                        <td className="py-2 px-4 font-semibold">{result.session}</td>
                                                                                        <td className="py-2 px-4 text-center font-bold text-lg text-red-700">{result.position}</td>
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
                        ))}
                    </div>

                    {/* CTA Finale - Corretto e Completo */}
                    <div className="text-center mt-20 p-8 bg-gray-900 rounded-xl shadow-inner border border-red-800">
                        <p className="text-2xl font-semibold text-white mb-6">
                            Il futuro è adesso: sosteniamo il salto verso la **Formula Regional**.
                        </p>
                        <Link 
                            to="/sponsor" 
                            className="bg-red-600 text-white font-bold py-3 px-10 rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-600/50 inline-block text-lg"
                        >
                            Diventa un Partner Ufficiale
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Carriera;