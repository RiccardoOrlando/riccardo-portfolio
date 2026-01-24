import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Aggiunto useLocation
import Home from './pages/Home';
import Storia from './pages/Storia';
import Carriera from './pages/Carriera';
import Galleria from './pages/Galleria';
import Profilo from './pages/Profilo';
import Sponsor from './pages/Sponsor';
import Contatti from './pages/Contatti';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // 1. Devi inizializzare l'hook useLocation per "sentire" il cambio di pagina
  const location = useLocation();

  useEffect(() => {
    // 2. I nomi qui devono essere UGUALI ai path che hai scritto nei <Route /> sotto
    const pageTitles = {
      "/": "Riccardo | Official Driver Website",
      "/storia": "La mia Storia | Riccardo",
      "/carriera": "Carriera e Risultati | Riccardo",
      "/galleria": "Galleria Foto | Riccardo",
      "/profilo": "Profilo Pilota | Riccardo",
      "/sponsor": "Partner & Sponsor | Riccardo",
      "/contatti": "Contattami | Riccardo"
    };

    // 3. Applichiamo il titolo
    document.title = pageTitles[location.pathname] || "Riccardo | Official Driver";
    
    // Log di controllo (puoi rimuoverlo dopo che vedi che funziona)
    console.log("Pagina attuale:", location.pathname);
    
  }, [location]); // Ora location è definito e l'effetto si attiva al cambio pagina

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/storia" element={<Storia />} />
      <Route path="/carriera" element={<Carriera />} />
      <Route path="/galleria" element={<Galleria />} />
      <Route path="/profilo" element={<Profilo />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
    </>
  );
}

export default App;