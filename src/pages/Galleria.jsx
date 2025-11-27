
// ========================================
// 8. src/pages/Galleria.jsx
// ========================================
import React from "react";
import Header from "../components/header";
import PageBanner from "../components/PageBanner";

export default function Galleria() {
  return (
    <>
      <Header />
      <PageBanner 
        title="Galleria"
        subtitle="Le immagini più belle della mia carriera in pista"
        imageUrl="/img/fotoimolavariantealta.jpg"
        path="Home / Galleria"
      />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black/70 border border-red-600 shadow-[0_0_30px_#FF0000] rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img 
              src="/img/gallery1.jpg" 
              alt="Gara 1" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-white font-semibold">Vittoria Mugello 2024</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}