
// ========================================
// 7. src/pages/Carriera.jsx
// ========================================
import React from "react";
import Header from "../components/header";
import PageBanner from "../components/PageBanner";

export default function Carriera() {
  return (
    <>
      <Header />
      <PageBanner 
        title="Carriera"
        subtitle="Risultati, vittorie e traguardi raggiunti in pista"
        imageUrl="/img/fotoimolavariantealtauscita.jpg"
        path="Home / Carriera"
      />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-black/70 border border-red-600 shadow-[0_0_30px_#FF0000] rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Stagioni</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">2024 - Formula 4</h3>
              <p className="text-white/80">Vittorie e podi conquistati...</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}