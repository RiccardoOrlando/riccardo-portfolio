
// ========================================
// 6. src/pages/Storia.jsx
// ========================================
import React from "react";
import Header from "../components/header";
import PageBanner from "../components/PageBanner";

export default function Storia() {
  return (
    <>
      <Header />
      <PageBanner 
        title="La Mia Storia"
        subtitle="Il percorso che mi ha portato a diventare pilota di Formula 4"
        imageUrl="/img/fotoimolaesultanza.jpg"
        path="Home / Storia"
      />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-black/70 border border-red-600 shadow-[0_0_30px_#FF0000] rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Gli Inizi</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            La mia passione per le corse è nata fin da bambino...
          </p>
        </div>
      </main>
    </>
  );
}