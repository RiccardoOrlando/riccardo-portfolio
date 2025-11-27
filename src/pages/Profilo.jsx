
// ========================================
// 9. src/pages/Profilo.jsx
// ========================================
import React from "react";
import Header from "../components/header";
import PageBanner from "../components/PageBanner";

export default function Profilo() {
  return (
    <>
      <Header />
      <PageBanner 
        title="Profilo"
        subtitle="Chi sono, i miei dati e le mie caratteristiche"
        imageUrl="/img/fotoimolapitlane.jpg"
        path="Home / Profilo"
      />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-black/70 border border-red-600 shadow-[0_0_30px_#FF0000] rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Informazioni</h2>
              <ul className="space-y-3 text-white/80 text-lg">
                <li><span className="text-red-600 font-semibold">Nome:</span> Riccardo Orlando</li>
                <li><span className="text-red-600 font-semibold">Numero:</span> 15</li>
                <li><span className="text-red-600 font-semibold">Categoria:</span> Formula 4 FIA</li>
                <li><span className="text-red-600 font-semibold">Nazionalità:</span> Italiana</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}