// ========================================
// 2. src/App.jsx
// ========================================
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Storia from './pages/Storia';
import Carriera from './pages/Carriera';
import Galleria from './pages/Galleria';
import Profilo from './pages/Profilo';
import Sponsor from './pages/Sponsor';
import Contatti from './pages/Contatti';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/storia" element={<Storia />} />
      <Route path="/carriera" element={<Carriera />} />
      <Route path="/galleria" element={<Galleria />} />
      <Route path="/profilo" element={<Profilo />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
  );
}

export default App;